import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  designation: z.string().trim().min(1, "Designation is required").max(100, "Designation must be less than 100 characters"),
  companyName: z.string().trim().min(1, "Company name is required").max(150, "Company name must be less than 150 characters"),
  industry: z.string().min(1, "Please select an industry"),
  contactNumber: z.string().trim().min(1, "Contact number is required").max(20, "Contact number must be less than 20 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  interestedIn: z.string().min(1, "Please select your interest"),
  comments: z.string().trim().min(1, "Comments are required").max(1000, "Comments must be less than 1000 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      designation: "",
      companyName: "",
      industry: "",
      contactNumber: "",
      email: "",
      interestedIn: "",
      comments: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    try {
      const { error } = await supabase.functions.invoke("send-contact-email", {
        body: data,
      });

      if (error) throw error;

      toast({
        title: "Message sent!",
        description: "Thank you for contacting us. We'll get back to you soon.",
      });

      form.reset();
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-background to-background/95 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent mb-4">
              LET'S MAKE SOMETHING TOGETHER
            </h2>
            <h3 className="text-2xl md:text-3xl font-semibold text-foreground/80 mb-12">
              BOOK AN APPOINTMENT
            </h3>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm border border-primary/20 hover:border-primary/30 rounded-2xl p-8 md:p-12 shadow-[0_0_20px_rgba(var(--primary-rgb),0.15)] hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.25)] ai-glow transition-all duration-500">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input 
                            placeholder="Name*" 
                            className="bg-background/60 border-border/50 h-14 text-lg placeholder:text-muted-foreground/70"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="designation"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input 
                            placeholder="Designation*" 
                            className="bg-background/60 border-border/50 h-14 text-lg placeholder:text-muted-foreground/70"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="companyName"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input 
                            placeholder="Company Name*" 
                            className="bg-background/60 border-border/50 h-14 text-lg placeholder:text-muted-foreground/70"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="industry"
                    render={({ field }) => (
                      <FormItem>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-background/60 border-border/50 h-14 text-lg">
                              <SelectValue placeholder="Select Your Industry*" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="accountants">Accountants</SelectItem>
                            <SelectItem value="insurance">Insurance</SelectItem>
                            <SelectItem value="automotive">Automotive</SelectItem>
                            <SelectItem value="digital-marketing">Digital Marketing Companies</SelectItem>
                            <SelectItem value="traditional-marketing">Traditional Marketing Companies</SelectItem>
                            <SelectItem value="real-estate">Real Estate</SelectItem>
                            <SelectItem value="software">Software Companies</SelectItem>
                            <SelectItem value="healthcare">Healthcare</SelectItem>
                            <SelectItem value="retail">Retail</SelectItem>
                            <SelectItem value="travel">Travel & Tourism</SelectItem>
                            <SelectItem value="others">Others</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="contactNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input 
                            type="tel"
                            placeholder="Contact Number*" 
                            className="bg-background/60 border-border/50 h-14 text-lg placeholder:text-muted-foreground/70"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input 
                            type="email" 
                            placeholder="Email*" 
                            className="bg-background/60 border-border/50 h-14 text-lg placeholder:text-muted-foreground/70"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="interestedIn"
                  render={({ field }) => (
                    <FormItem>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-background/60 border-border/50 h-14 text-lg">
                            <SelectValue placeholder="Interested In*" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="ai-automation">AI Automation</SelectItem>
                          <SelectItem value="dedicated-resource">Hiring a Dedicated Resource</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="comments"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea 
                          placeholder="Comments*" 
                          rows={6}
                          className="bg-background/60 border-border/50 text-lg placeholder:text-muted-foreground/70 resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="bg-muted/30 rounded-lg p-4 border border-border/50">
                  <p className="text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">Note:</span> This form is protected against spam. 
                    By submitting, you agree to be contacted by our team.
                  </p>
                </div>
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full h-16 text-xl font-bold bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 rounded-lg"
                >
                  {isSubmitting ? "SENDING..." : "SEND"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;