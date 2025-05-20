// Type declarations for the app

// Testimonial type
export interface Testimonial {
  id: string;
  name: string;
  company: string;
  content: string;
  avatarUrl?: string;
}

// Pricing plan type
export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  description: string;
  features: string; // JSON string
  isPopular: boolean;
}

// Additional React types needed for components
declare global {
  namespace React {
    // Add any additional React type extensions here
  }
}

// For images and other static assets
declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}

declare module '*.png' {
  const content: string;
  export default content;
}

declare module '*.jpg' {
  const content: string;
  export default content;
} 