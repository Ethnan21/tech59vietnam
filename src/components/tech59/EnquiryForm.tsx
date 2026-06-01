import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Loader2, Send } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(8, "Phone number must be at least 8 digits"),
  enquiry_type: z.enum(["Sponsor", "Partner", "Attendee", "Speaker", "Booth", "Other"]),
  message: z.string().min(10, "Message must be at least 10 characters").max(2000),
});

type FormValues = z.infer<typeof formSchema>;

export const EnquiryForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      enquiry_type: "Attendee",
      message: "",
    },
  });

  const onSubmit = async (values: FormValues) => {
    setIsSubmitting(true);
    try {
      // 1. Save to DB
      const { error: dbError } = await supabase
        .from("enquiries")
        .insert([values]);

      if (dbError) throw dbError;

      // 2. Trigger Email via Edge Function
      const { error: fnError } = await supabase.functions.invoke("submit-enquiry", {
        body: values,
      });

      if (fnError) {
        console.error("Email notification failed:", fnError);
        // We still consider the submission a success if it saved to DB
      }

      toast.success("Enquiry sent! We'll get back to you soon.");
      form.reset();
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="glass-strong rounded-3xl p-6 sm:p-10 border border-primary/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 relative z-10">
          <div className="grid sm:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xs uppercase tracking-widest text-foreground/70">Full Name</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Your name" 
                      className="bg-background/50 border-primary/20 focus:border-primary/50 transition-colors h-12" 
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
                  <FormLabel className="text-xs uppercase tracking-widest text-foreground/70">Email Address</FormLabel>
                  <FormControl>
                    <Input 
                      type="email" 
                      placeholder="name@company.com" 
                      className="bg-background/50 border-primary/20 focus:border-primary/50 transition-colors h-12" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xs uppercase tracking-widest text-foreground/70">Phone Number</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="+84 ..." 
                      className="bg-background/50 border-primary/20 focus:border-primary/50 transition-colors h-12" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="enquiry_type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xs uppercase tracking-widest text-foreground/70">Enquiry Type</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="bg-background/50 border-primary/20 focus:border-primary/50 transition-colors h-12">
                        <SelectValue placeholder="Select interest" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="glass-strong border-primary/20">
                      <SelectItem value="Sponsor">Sponsor</SelectItem>
                      <SelectItem value="Partner">Partner</SelectItem>
                      <SelectItem value="Attendee">Attendee</SelectItem>
                      <SelectItem value="Speaker">Speaker</SelectItem>
                      <SelectItem value="Booth">Exhibition Booth</SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs uppercase tracking-widest text-foreground/70">Your Message</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Tell us more about your inquiry..." 
                    className="bg-background/50 border-primary/20 focus:border-primary/50 transition-colors min-h-[120px] resize-none" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button 
            type="submit" 
            disabled={isSubmitting} 
            variant="hero" 
            className="w-full h-14 text-lg group overflow-hidden relative"
          >
            {isSubmitting ? (
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            ) : (
              <>
                <span className="relative z-10 flex items-center gap-2">
                  Send Enquiry <Send className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </span>
              </>
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
};