import React from "react";
import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Residential Solar Project",
    location: "Melbourne, Australia",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1200&auto=format&fit=crop",
    category: "Residential",
  },
  {
    id: 2,
    title: "Commercial Rooftop Solar",
    location: "Sydney, Australia",
    image:
      "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=1200&auto=format&fit=crop",
    category: "Commercial",
  },
  {
    id: 3,
    title: "Industrial Solar Installation",
    location: "Brisbane, Australia",
    image:
      "https://images.unsplash.com/photo-1559302995-f09f21503348?q=80&w=1200&auto=format&fit=crop",
    category: "Industrial",
  },
   {
    id: 4,
    title: "Residential Solar Project",
    location: "Melbourne, Australia",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1200&auto=format&fit=crop",
    category: "Residential",
  },
  {
    id: 5,
    title: "Commercial Rooftop Solar",
    location: "Sydney, Australia",
    image:
      "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=1200&auto=format&fit=crop",
    category: "Commercial",
  },
  {
    id: 6,
    title: "Industrial Solar Installation",
    location: "Brisbane, Australia",
    image:
      "https://images.unsplash.com/photo-1559302995-f09f21503348?q=80&w=1200&auto=format&fit=crop",
    category: "Industrial",
  },
];

const ProjectsSection: React.FC = () => {
  return (
    <section className="bg-white py-10 md:py-20">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#004093]">
            Our Projects
          </p>

          <h2 className="mt-4 text-3xl font-bold text-[#111827] md:text-5xl">
            Recent Solar
            <span className="block text-[#FE9900]">
              Installations
            </span>
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-gray-600">
            Explore some of our successful residential, commercial,
            and industrial solar projects.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                transition: {
                  duration: 0.2,
                },
              }}
              className="
                group
                overflow-hidden
                rounded-lg
                border
                border-gray-300
                bg-white
                shadow-[0_10px_40px_rgba(0,0,0,0.36)]
                hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)]
                transition-all
                duration-300
              "
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

                {/* Category */}
                <div className="absolute top-5 left-5 rounded-full bg-[#FE9900] px-4 py-2 text-xs font-bold text-black">
                  {project.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-7">

                {/* Location */}
                <div className="mb-4 flex items-center gap-2 text-sm font-medium text-gray-500">
                  <MapPin className="h-4 w-4 text-[#FE9900]" />
                  {project.location}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-[#111827] transition duration-300 group-hover:text-[#FE9900]">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="mt-4 leading-relaxed text-gray-600">
                  High-performance solar installation designed for
                  maximum efficiency and long-term energy savings.
                </p>

                {/* Button */}
                <button
                  className="
                    mt-6
                    inline-flex
                    items-center
                    gap-2
                    font-semibold
                    text-[#004093]
                    transition-all
                    duration-300
                    group-hover:gap-3
                  "
                >
                  View Project
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;