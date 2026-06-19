/* ── Blog type (matches MongoDB model) ──────────────────── */

export interface Blog {
    _id?: string;
    slug?: string;
    title: string;
    excerpt: string;
    categories: string;
    readTime: string;
    date: string;
    image: string;
    content: string;
    meta?: {
        title?: string;
        description?: string;
        keywords?: string;
        canonical?: string;
        longContent?: string;
        schema?: string;
    };
}
