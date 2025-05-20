// Mock database for frontend-only development

// Mock database client
export const db = {
  testimonial: {
    findMany: async (options?: { orderBy?: { createdAt: 'desc' | 'asc' } }) => {
      // Create a set of mock data
      const testimonials = [
        {
          id: "1",
          name: "Sarah Johnson",
          company: "TechSolutions Inc.",
          content: "ChatMind transformed our customer support. We integrated it in minutes and saw a 40% reduction in response time. The personalization options are incredible!",
          avatarUrl: "https://i.pravatar.cc/150?u=sarah",
          createdAt: new Date(2023, 10, 15) // Nov 15, 2023
        },
        {
          id: "2",
          name: "Michael Chen",
          company: "GrowthLabs",
          content: "The knowledge base integration is seamless. Our chatbot answers questions exactly like our team would. Setup was incredibly fast - under 5 minutes as promised.",
          avatarUrl: "https://i.pravatar.cc/150?u=michael",
          createdAt: new Date(2023, 11, 10) // Dec 10, 2023
        },
        {
          id: "3",
          name: "Jessica Williams",
          company: "Startup Foundry",
          content: "As a startup founder, I needed something quick and effective. ChatMind delivered beyond expectations. Our conversion rate increased by 25% in the first month.",
          avatarUrl: "https://i.pravatar.cc/150?u=jessica",
          createdAt: new Date(2024, 0, 5) // Jan 5, 2024
        }
      ];

      // Sort based on orderBy if provided
      if (options?.orderBy?.createdAt) {
        testimonials.sort((a, b) => {
          if (options.orderBy?.createdAt === 'desc') {
            return b.createdAt.getTime() - a.createdAt.getTime();
          } else {
            return a.createdAt.getTime() - b.createdAt.getTime();
          }
        });
      }

      return testimonials;
    },
    createMany: async ({ data }: { data: any[] }) => {
      console.log("Mock DB: Creating testimonials", data);
      return { count: data.length };
    }
  },
  pricingPlan: {
    findMany: async (options?: { orderBy?: { price: 'desc' | 'asc' } }) => {
      // Create a set of mock data
      const plans = [
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
          createdAt: new Date(2023, 0, 1)
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
          createdAt: new Date(2023, 0, 1)
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
          createdAt: new Date(2023, 0, 1)
        }
      ];

      // Sort based on orderBy if provided
      if (options?.orderBy?.price) {
        plans.sort((a, b) => {
          if (options.orderBy?.price === 'desc') {
            return b.price - a.price;
          } else {
            return a.price - b.price;
          }
        });
      }

      return plans;
    },
    createMany: async ({ data }: { data: any[] }) => {
      console.log("Mock DB: Creating pricing plans", data);
      return { count: data.length };
    }
  }
}; 