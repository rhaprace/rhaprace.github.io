import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

export const ContactSection = () => {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {/* Contact Form */}
      <Card className="shadow-[var(--shadow-card)] border-border">
        <CardHeader>
          <CardTitle>Send a Message</CardTitle>
          <CardDescription>
            Have a project in mind? Let's work together!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Your name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="your.email@example.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea 
                id="message" 
                placeholder="Tell me about your project..." 
                rows={5}
              />
            </div>
            <Button className="w-full bg-primary hover:bg-primary/90">
              Send Message
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Contact Info */}
      <div className="space-y-6">
        <Card className="shadow-[var(--shadow-card)] border-border">
          <CardHeader>
            <CardTitle>Get in Touch</CardTitle>
            <CardDescription>
              Feel free to reach out through any of these channels
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
              <Mail className="w-5 h-5" />
              <span>john.doe@example.com</span>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
              <Github className="w-5 h-5" />
              <a href="https://github.com" className="hover:underline">
                github.com/johndoe
              </a>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
              <Linkedin className="w-5 h-5" />
              <a href="https://linkedin.com" className="hover:underline">
                linkedin.com/in/johndoe
              </a>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
              <Twitter className="w-5 h-5" />
              <a href="https://twitter.com" className="hover:underline">
                twitter.com/johndoe
              </a>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-[var(--shadow-card)] border-border bg-primary/5">
          <CardHeader>
            <CardTitle className="text-lg">Availability</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Currently available for freelance projects and consulting opportunities. 
              Average response time: <span className="font-semibold text-foreground">24 hours</span>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
