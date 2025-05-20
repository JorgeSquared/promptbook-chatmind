import { db } from "~/server/db";
import { requestMultimodalModel } from "~/server/actions";
import { z } from "zod";

// Seed testimonials
export async function _seedTestimonials() {
  const existingTestimonials = await db.testimonial.findMany();
  if (existingTestimonials.length > 0) return existingTestimonials;

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechSolutions Inc.",
      content:
        "ChatMind transformed our customer support. We integrated it in minutes and saw a 40% reduction in response time. The personalization options are incredible!",
      avatarUrl: await generateAvatar(
        "professional woman with short brown hair",
      ),
    },
    {
      name: "Michael Chen",
      company: "GrowthLabs",
      content:
        "The knowledge base integration is seamless. Our chatbot answers questions exactly like our team would. Setup was incredibly fast - under 5 minutes as promised.",
      avatarUrl: await generateAvatar("asian man with glasses, professional"),
    },
    {
      name: "Jessica Williams",
      company: "Startup Foundry",
      content:
        "As a startup founder, I needed something quick and effective. ChatMind delivered beyond expectations. Our conversion rate increased by 25% in the first month.",
      avatarUrl: await generateAvatar(
        "young professional woman with curly hair",
      ),
    },
  ];

  await db.testimonial.createMany({
    data: testimonials,
  });

  return testimonials;
}

// Seed pricing plans
export async function _seedPricingPlans() {
  const existingPlans = await db.pricingPlan.findMany();
  if (existingPlans.length > 0) return existingPlans;

  const plans = [
    {
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

  await db.pricingPlan.createMany({
    data: plans,
  });

  return plans;
}

// Helper function to generate avatar images
async function generateAvatar(prompt: string): Promise<string> {
  const result = await requestMultimodalModel({
    system:
      "You are a helpful assistant that generates professional avatar images.",
    messages: [
      {
        role: "user",
        content: `Generate a professional headshot avatar for ${prompt}. Make it look like a professional profile picture with a neutral background.`,
      },
    ],
    returnType: z.object({
      imageUrl: z.string(),
    }),
  });

  return result.imageUrl;
}

// Get testimonials
export async function getTestimonials() {
  return await db.testimonial.findMany({
    orderBy: { createdAt: "desc" },
  });
}

// Get pricing plans
export async function getPricingPlans() {
  return await db.pricingPlan.findMany({
    orderBy: { price: "asc" },
  });
}

// Submit contact form
export async function submitContactForm(input: {
  name: string;
  email: string;
  message: string;
}) {
  // In a real implementation, this would send an email or store the contact request
  // For now, we'll just return a success message
  return {
    success: true,
    message: "Thank you for your message. We'll get back to you soon!",
  };
} 