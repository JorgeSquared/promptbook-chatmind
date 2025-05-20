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
} from "../components/ui";
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
import { Testimonial, PricingPlan } from "~/types";

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
  const { data: testimonials = [] } = useQuery<Testimonial[]>(
    ["testimonials"],
    apiClient.getTestimonials
  );
  
  const { data: pricingPlans = [] } = useQuery<PricingPlan[]>(
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
              {/* Feature 1 */}
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
              
              {/* Feature 2 */}
              <motion.div 
                className="feature-card bg-card rounded-lg p-6 border"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">5-Minute Integration</h3>
                <p className="text-muted-foreground">
                  Add our chatbot to your website with just two lines of code. No complex setup or technical knowledge required.
                </p>
              </motion.div>
              
              {/* Feature 3 */}
              <motion.div 
                className="feature-card bg-card rounded-lg p-6 border"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">AI Personalization</h3>
                <p className="text-muted-foreground">
                  Our advanced AI learns from interactions to provide increasingly personalized responses that match your brand voice.
                </p>
              </motion.div>
              
              {/* Feature 4 */}
              <motion.div 
                className="feature-card bg-card rounded-lg p-6 border"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Seamless Customization</h3>
                <p className="text-muted-foreground">
                  Customize the appearance of your chatbot to match your website's design and branding with our intuitive visual editor.
                </p>
              </motion.div>
              
              {/* Feature 5 */}
              <motion.div 
                className="feature-card bg-card rounded-lg p-6 border"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <MessageSquare className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Multi-Channel Support</h3>
                <p className="text-muted-foreground">
                  Deploy your chatbot across your website, mobile app, and social media platforms with consistent performance.
                </p>
              </motion.div>
              
              {/* Feature 6 */}
              <motion.div 
                className="feature-card bg-card rounded-lg p-6 border"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Database className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Analytics Dashboard</h3>
                <p className="text-muted-foreground">
                  Gain insights into customer interactions, popular questions, and chatbot performance with our comprehensive analytics.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 bg-secondary/50">
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
                How It <span className="gradient-text">Works</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Get your personalized AI chatbot up and running in three simple steps.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <motion.div 
                className="bg-card rounded-lg p-6 border relative"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-4 mt-2">Upload Your Knowledge</h3>
                <p className="text-muted-foreground">
                  Upload your documents, FAQs, product information, and any other content you want your chatbot to know about.
                </p>
              </motion.div>
              
              {/* Step 2 */}
              <motion.div 
                className="bg-card rounded-lg p-6 border relative"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-4 mt-2">Customize Your Chatbot</h3>
                <p className="text-muted-foreground">
                  Personalize the appearance and behavior of your chatbot to match your brand and meet your specific needs.
                </p>
              </motion.div>
              
              {/* Step 3 */}
              <motion.div 
                className="bg-card rounded-lg p-6 border relative"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-4 mt-2">Integrate & Launch</h3>
                <p className="text-muted-foreground">
                  Add two simple lines of code to your website and your AI chatbot is ready to assist your visitors.
                </p>
              </motion.div>
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

        {/* Pricing Section */}
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
            
            <div className="grid md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <motion.div 
                  key={plan.id}
                  className={`pricing-card bg-card rounded-lg border relative ${
                    plan.isPopular ? "border-primary shadow-lg" : ""
                  }`}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeIn}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  {plan.isPopular && (
                    <Badge variant="default" className="popular-badge">
                      Most Popular
                    </Badge>
                  )}
                  
                  <CardHeader>
                    <CardTitle>{plan.name}</CardTitle>
                    <CardDescription>{plan.description}</CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="mb-4">
                      <span className="text-4xl font-bold">${plan.price}</span>
                      <span className="text-muted-foreground">/month</span>
                    </div>
                    
                    <Separator className="my-4" />
                    
                    <ul className="space-y-2">
                      {(JSON.parse(plan.features) as string[]).map((feature: string, i: number) => (
                        <li key={i} className="flex items-start">
                          <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  
                  <CardFooter>
                    <Button 
                      variant={plan.isPopular ? "default" : "outline"} 
                      className="w-full"
                    >
                      Get Started
                    </Button>
                  </CardFooter>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
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
            
            <div className="max-w-2xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle>Contact Us</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <form onSubmit={handleContactSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                        <Input
                          id="name"
                          name="name"
                          value={contactForm.name}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={contactForm.email}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                        <Textarea
                          id="message"
                          name="message"
                          rows={4}
                          value={contactForm.message}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full"
                      disabled={contactMutation.isLoading}
                    >
                      {contactMutation.isLoading ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center max-w-3xl mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your Customer Experience?
              </h2>
              <p className="text-lg mb-8 text-primary-foreground/90">
                Join thousands of businesses using ChatMind to provide instant, personalized support to their customers.
              </p>
              <Button 
                size="lg" 
                variant="secondary"
                className="text-primary font-bold"
              >
                Start Your Free Trial <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
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
            
            <div>
              <h3 className="font-bold text-lg mb-4">Product</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#features" className="text-muted-foreground hover:text-foreground">Features</a></li>
                <li><a href="#pricing" className="text-muted-foreground hover:text-foreground">Pricing</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Documentation</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">API</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">Company</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-muted-foreground hover:text-foreground">About</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Blog</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Careers</a></li>
                <li><a href="#contact" className="text-muted-foreground hover:text-foreground">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Privacy Policy</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Terms of Service</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} ChatMind. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 