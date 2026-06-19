import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Clock, AlertCircle, RefreshCw, ChevronRight, Calendar } from "lucide-react";
import { apiUrl, getImageUrl } from "../../lib/api";
import { fetchWithRetry } from "../../lib/fetchWithRetry";
import { cacheGetStale, cacheSet } from "../../lib/dataCache";
import { staticBlogs } from "../../lib/staticBlogs";

const CACHE_KEY = "blogs_list";

interface Blog {
  _id: string;
  slug: string;
  title: string;
  excerpt: string;
  categories: string;
  readTime: string;
  date: string;
  image: string;
  content: string;
  isStatic?: boolean;
}

const BlogPage = () => {
  const [blogs, setBlogs] = useState<Blog[]>(() => {
    try {
      const cachedList = cacheGetStale<Blog[]>(CACHE_KEY);
      if (cachedList && cachedList.length > 0) return cachedList;
      return staticBlogs.slice(0, 3) as any[];
    } catch {
      return staticBlogs.slice(0, 3) as any[];
    }
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isRefreshing, setIsRefreshing] = useState(true);
  const hasFetched = useRef(false);

  useEffect(() => {
    if (hasFetched.current) return;
    hasFetched.current = true;
    setIsRefreshing(true);

    fetchWithRetry(apiUrl("/api/blogs"), { cache: "no-store" })
      .then((res) => res.json())
      .then((data) => {
        if (data.success && Array.isArray(data.data)) {
          setBlogs(data.data);
          cacheSet(CACHE_KEY, data.data);
          setError("");
        }
      })
      .catch((err) => console.error("Error fetching fresh blogs:", err))
      .finally(() => setIsRefreshing(false));
  }, []);

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12 md:py-12">

        {/* Section Header */}
        <div className="flex flex-col items-center  mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f0f5ff] text-[#004093] text-sm font-bold tracking-wide uppercase shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#FE9900] animate-pulse"></span>
            News & Updates
          </div>
          <div className="flex items-center gap-4">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
              Latest from the <span className="text-[#FE9900]">Blog</span>
            </h2>
            {isRefreshing && (
              <RefreshCw size={24} className="text-[#FE9900] animate-spin opacity-80" />
            )}
          </div>
          <p className="mt-4 max-w-4xl mx-auto text-center text-lg leading-relaxed text-slate-600">
            Explore the latest renewable energy insights, solar industry updates, product announcements, and practical tips to help you maximize energy efficiency and savings.
          </p>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="rounded-3xl border border-slate-100 bg-white shadow-lg h-full flex flex-col overflow-hidden animate-pulse">
                <div className="h-64 w-full bg-slate-200" />
                <div className="p-8 flex flex-col grow gap-4">
                  <div className="flex justify-between items-center">
                    <div className="h-6 w-24 bg-slate-200 rounded-full" />
                    <div className="h-4 w-20 bg-slate-200 rounded" />
                  </div>
                  <div className="h-8 w-full bg-slate-200 rounded mt-2" />
                  <div className="h-8 w-3/4 bg-slate-200 rounded" />
                  <div className="h-4 w-full bg-slate-200 rounded mt-4" />
                  <div className="h-4 w-5/6 bg-slate-200 rounded" />
                </div>
              </div>
            ))}
          </div>
        ) : error && blogs.length === 0 ? (
          <div className="flex flex-col items-center justify-center min-h-[300px] gap-5 p-8 bg-red-50 rounded-3xl border border-red-100 text-center">
            <AlertCircle className="text-red-500" size={50} />
            <p className="text-red-700 font-semibold text-xl">{error}</p>
            <button
              onClick={() => {
                hasFetched.current = false;
                setError("");
                setLoading(true);
              }}
              className="mt-4 px-8 py-3 bg-[#FE9900] text-white rounded-full font-bold hover:bg-[#e88a00] hover:shadow-lg transition-all"
            >
              Try Again
            </button>
          </div>
        ) : blogs.length === 0 ? (
          <div className="text-center py-24 bg-slate-50 rounded-3xl border border-slate-100">
            <p className="text-2xl text-slate-500 font-medium">No articles published yet. Check back soon!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {blogs.map((post) => {
              const staticMatch = staticBlogs.find((sb) => sb.slug === post.slug);
              const displayImage = getImageUrl(post.image || (staticMatch ? staticMatch.image : ''));
              return (
                <Link
                  to={`/blog/${post.slug || post._id}`}
                  key={post._id}
                  className="group flex flex-col bg-white rounded-xl overflow-hidden border border-slate-100 shadow-2xl shadow-black/100 hover:shadow-black/80 transition-all duration-500 hover:-translate-y-2"
                >
                  <div className="relative h-56 overflow-hidden bg-slate-100">
                    <img
                      src={displayImage}
                      alt={post.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Floating Category Badge */}
                    <div className="absolute top-5 left-5">
                      <span className="backdrop-blur-md bg-white/90 text-[#004093] text-xs font-extrabold tracking-wide uppercase px-4 py-2 rounded-full shadow-lg">
                        {post.categories || "Solar Info"}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col grow p-5 relative bg-white">
                    {/* Meta info */}
                    <div className="flex items-center text-slate-400 text-sm font-medium gap-4 mb-4">
                      <div className="flex items-center gap-1.5">
                        <Calendar size={16} className="text-[#FE9900]" />
                        <span>{post.date || "Recent"}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock size={16} className="text-[#FE9900]" />
                        <span>{post.readTime || "5 min read"}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-slate-900 leading-snug mb-2 group-hover:text-[#004093] transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-slate-600 line-clamp-3 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>

                    {/* Read More button */}
                    <div className="mt-auto">
                      <div className="inline-flex items-center gap-3 text-[#FE9900] font-bold text-sm uppercase tracking-wider group-hover:text-[#e88a00] transition-colors">
                        Read Article
                        <span className="w-10 h-10 rounded-full bg-[#f0f5ff] text-[#004093] flex items-center justify-center group-hover:bg-[#FE9900] group-hover:text-white shadow-sm transition-all duration-300">
                          <ChevronRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default BlogPage;