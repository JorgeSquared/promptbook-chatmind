'use client';

import React, { useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { apiClient } from "~/client/api";
import { useToast } from "~/client/utils";
import { motion } from "framer-motion";
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Input,
  Textarea,
  Badge,
  Separator,
} from "../components/ui"; // We'll implement these component soon
import {
  Check,
  ChevronRight,
  Code,
  Database,
  ExternalLink,
  Menu,
  MessageSquare,
  Sparkles,
  X,
  Zap,
} from "lucide-react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { toast } = useToast();
  
  // Form state
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Fetch testimonials and pricing plans
  const { data: testimonials = [] } = useQuery(
    ["testimonials"],
    apiClient.getTestimonials
  );
  
  const { data: pricingPlans = [] } = useQuery(
    ["pricingPlans"],
    apiClient.getPricingPlans
  );

  // Contact form submission
  const contactMutation = useMutation(apiClient.submitContactForm, {
    onSuccess: (data) => {
      toast({
        title: "Success!",
        description: data.message,
      });
      setContactForm({
        name: "",
        email: "",
        message: "",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "There was a problem submitting your message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    contactMutation.mutate(contactForm);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setContactForm((prev) => ({ ...prev, [name]: value }));
  };

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold gradient-text">ChatMind</span>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:bg-secondary focus:outline-none"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
            
            {/* Desktop navigation */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-4">
                <a href="#features" className="text-foreground/80 hover:text-foreground px-3 py-2 rounded-md text-sm font-medium">
                  Features
                </a>
                <a href="#testimonials" className="text-foreground/80 hover:text-foreground px-3 py-2 rounded-md text-sm font-medium">
                  Testimonials
                </a>
                <a href="#pricing" className="text-foreground/80 hover:text-foreground px-3 py-2 rounded-md text-sm font-medium">
                  Pricing
                </a>
                <a href="#contact" className="text-foreground/80 hover:text-foreground px-3 py-2 rounded-md text-sm font-medium">
                  Contact
                </a>
                <Button size="sm">
                  Get Started <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-background border-b">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a 
                href="#features" 
                className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-secondary"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
              <a 
                href="#testimonials" 
                className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-secondary"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </a>
              <a 
                href="#pricing" 
                className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-secondary"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </a>
              <a 
                href="#contact" 
                className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-secondary"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <div className="pt-2">
                <Button className="w-full">
                  Get Started <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      <main>
        {/* Hero Section */}
        <section className="py-20 hero-gradient">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center">
              <motion.div 
                className="lg:w-1/2 mb-10 lg:mb-0"
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Personal AI Chatbots, <span className="gradient-text">Integrated in Minutes</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  Create highly personalized AI chatbots with your own knowledge base and integrate them into your website in under 5 minutes. No coding required.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg">
                    Start for Free <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button size="lg" variant="outline">
                    Watch Demo <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </motion.div>
              
              <motion.div 
                className="lg:w-1/2"
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="bg-card rounded-lg shadow-lg border p-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-destructive"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                    <div className="text-xs text-muted-foreground">ChatMind Integration</div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-muted p-3 rounded-md font-mono text-sm">
                      <div className="text-blue-500">// Add this to your website</div>
                      <div className="text-foreground">
                        &lt;script src="https://chatmind.ai/widget.js"&gt;&lt;/script&gt;
                      </div>
                      <div className="text-foreground">
                        &lt;div id="chatmind-widget" data-api-key="YOUR_API_KEY"&gt;&lt;/div&gt;
                      </div>
                    </div>
                    
                    <div className="bg-secondary p-4 rounded-md">
                      <div className="flex items-center mb-2">
                        <MessageSquare className="h-5 w-5 text-primary mr-2" />
                        <span className="font-medium">ChatMind Assistant</span>
                      </div>
                      <p className="text-sm">
                        Hello! I'm your personal AI assistant. I've been trained on your knowledge base and can help answer any questions about your products or services.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Powerful Features, <span className="gradient-text">Simple Integration</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Everything you need to create intelligent, personalized chatbots that understand your business and delight your customers.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature cards would be mapped here - simplified for brevity */}
              <motion.div 
                className="feature-card bg-card rounded-lg p-6 border"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Database className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Custom Knowledge Base</h3>
                <p className="text-muted-foreground">
                  Upload your documents, FAQs, and product information to create a personalized knowledge base that your chatbot can reference.
                </p>
              </motion.div>
              
              {/* Additional feature cards would go here */}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                What Our <span className="gradient-text">Customers Say</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Businesses of all sizes are transforming their customer experience with ChatMind.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div 
                  key={testimonial.id}
                  className="testimonial-card bg-card rounded-lg p-6 border"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeIn}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <div className="flex items-center mb-4">
                    {testimonial.avatarUrl ? (
                      <img 
                        src={testimonial.avatarUrl} 
                        alt={testimonial.name} 
                        className="w-12 h-12 rounded-full mr-4 object-cover"
                      />
                    ) : (
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                        <span className="text-primary font-bold">
                          {testimonial.name.charAt(0)}
                        </span>
                      </div>
                    )}
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground italic">"{testimonial.content}"</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section (simplified) */}
        <section id="pricing" className="py-20 bg-secondary/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Simple, <span className="gradient-text">Transparent Pricing</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Choose the plan that works best for your business. All plans include a 14-day free trial.
              </p>
            </motion.div>
            
            {/* Pricing cards would go here */}
          </div>
        </section>

        {/* Contact Form Section (simplified) */}
        <section id="contact" className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Get in <span className="gradient-text">Touch</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Have questions or need help? Our team is here to assist you.
              </p>
            </motion.div>
            
            {/* Contact form would go here */}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-background border-t py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">ChatMind</h3>
              <p className="text-sm text-muted-foreground">
                Personal AI chatbots, integrated in minutes.
              </p>
            </div>
            
            {/* Footer links would go here */}
          </div>
          
          <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} ChatMind. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 