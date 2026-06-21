export type Category = {
  id: string;
  name: string;
  slug: string;
  description?: string;
  icon?: string;
  created_at: string;
  updated_at: string;
};

export type Template = {
  id: string;
  name: string;
  slug: string;
  description?: string;
  category_id: string;
  category?: Category;
  pdf_url?: string;
  image_url?: string;
  thumbnail_url?: string;
  downloads: number;
  views: number;
  featured: boolean;
  seo_title?: string;
  seo_description?: string;
  created_at: string;
  updated_at: string;
};

export type Download = {
  id: string;
  template_id: string;
  ip_address?: string;
  user_agent?: string;
  created_at: string;
};

export type PageView = {
  id: string;
  template_id?: string;
  page_path: string;
  ip_address?: string;
  user_agent?: string;
  referrer?: string;
  created_at: string;
};

export type Search = {
  id: string;
  query: string;
  results_count: number;
  user_id?: string;
  created_at: string;
};

export type Newsletter = {
  id: string;
  email: string;
  subscribed: boolean;
  created_at: string;
  updated_at: string;
};

export type User = {
  id: string;
  email: string;
  role: "admin" | "user";
  created_at: string;
  updated_at: string;
};
