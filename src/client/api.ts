// Mock testimonials data
const mockTestimonials = [
  {
    id: "1",
    name: "Sarah Johnson",
    company: "TechSolutions Inc.",
    content:
      "ChatMind transformed our customer support. We integrated it in minutes and saw a 40% reduction in response time. The personalization options are incredible!",
    avatarUrl: "https://i.pravatar.cc/150?u=sarah",
  },
  {
    id: "2",
    name: "Michael Chen",
    company: "GrowthLabs",
    content:
      "The knowledge base integration is seamless. Our chatbot answers questions exactly like our team would. Setup was incredibly fast - under 5 minutes as promised.",
    avatarUrl: "https://i.pravatar.cc/150?u=michael",
  },
  {
    id: "3",
    name: "Jessica Williams",
    company: "Startup Foundry",
    content:
      "As a startup founder, I needed something quick and effective. ChatMind delivered beyond expectations. Our conversion rate increased by 25% in the first month.",
    avatarUrl: "https://i.pravatar.cc/150?u=jessica",
  },
];

// Mock pricing plans data
const mockPricingPlans = [
  {
    id: "1",
    name: "Starter",
    price: 29,
    description: "Perfect for small websites and personal projects",
    features: JSON.stringify([
      "1 Chatbot",
      "5,000 messages/month",
      "Basic knowledge base integration",
      "Email support",
      "Basic analytics",
    ]),
    isPopular: false,
  },
  {
    id: "2",
    name: "Professional",
    price: 79,
    description: "Ideal for growing businesses and e-commerce",
    features: JSON.stringify([
      "3 Chatbots",
      "25,000 messages/month",
      "Advanced knowledge base integration",
      "Priority support",
      "Detailed analytics",
      "Custom branding",
      "API access",
    ]),
    isPopular: true,
  },
  {
    id: "3",
    name: "Enterprise",
    price: 199,
    description: "For large organizations with complex needs",
    features: JSON.stringify([
      "Unlimited Chatbots",
      "100,000 messages/month",
      "Enterprise knowledge base integration",
      "24/7 dedicated support",
      "Advanced analytics & reporting",
      "Custom development",
      "Full API access",
      "SSO & advanced security",
    ]),
    isPopular: false,
  },
];

// API client object with methods
const apiClient = {
  // Get all testimonials
  getTestimonials: async () => {
    // In a real app, this would be a fetch call to your API
    return mockTestimonials;
  },

  // Get all pricing plans
  getPricingPlans: async () => {
    // In a real app, this would be a fetch call to your API
    return mockPricingPlans;
  },

  // Submit contact form
  submitContactForm: async (input: { name: string; email: string; message: string }) => {
    // In a real app, this would send the form data to your API
    console.log("Form submitted:", input);
    
    // Mock successful response
    return {
      success: true,
      message: "Thank you for your message. We'll get back to you soon!",
    };
  },
};

export { apiClient }; 