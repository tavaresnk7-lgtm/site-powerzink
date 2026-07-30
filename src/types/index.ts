export interface Product {
  id: string;
  code: string;
  name: string;
  shortName: string;
  category: string;
  description: string;
  features: string[];
  applications: string[];
  icon: string;
}

export interface Segment {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
  tags: string[];
  productIds: string[];
}

export interface ProductLine {
  id: string;
  title: string;
  description: string;
  icon: string;
  products: string[];
  image: string;
  tags: string[];
}

export interface QuizOption {
  id: string;
  label: string;
  icon: string;
}

export interface QuizStep {
  id: string;
  title: string;
  subtitle: string;
  options: QuizOption[];
}

export interface QuizAnswers {
  segment: string;
  surface: string;
  corrosion: string;
  environment: string;
  priority: string;
}

export interface Recommendation {
  primary: Product[];
  complementary: Product[];
  preparatory: Product | null;
}
