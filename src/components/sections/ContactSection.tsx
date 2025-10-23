import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MapPin, Clock, ExternalLink } from "lucide-react";
import { ContactLink } from "@/components/ContactLink";
import { CONTACT_INFO } from "@/config/contact";

export const ContactSection = () => {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <Card className="shadow-[var(--shadow-card)] border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Mail className="w-5 h-5" />
            Get in Touch
          </CardTitle>
          <CardDescription>
            Feel free to reach out through any of these channels
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <ContactLink
            href={`mailto:${CONTACT_INFO.email}`}
            icon={<Mail className="w-5 h-5" />}
            label={CONTACT_INFO.email}
            external={false}
          />
          <ContactLink
            href={CONTACT_INFO.github}
            icon={<ExternalLink className="w-5 h-5" />}
            label="github.com/rhaprace"
          />
          <ContactLink
            href={CONTACT_INFO.linkedin}
            icon={<ExternalLink className="w-5 h-5" />}
            label="linkedin.com/in/rhaprace"
          />
          <div className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border text-muted-foreground">
            <MapPin className="w-5 h-5" />
            <span>{CONTACT_INFO.location}</span>
          </div>
        </CardContent>
      </Card>
      <div className="space-y-6">
        <Card className="shadow-[var(--shadow-card)] border-border bg-primary/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Clock className="w-5 h-5" />
              Availability
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Currently available for freelance projects and consulting opportunities.
              Average response time: <span className="font-semibold text-foreground">24 hours</span>
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-[var(--shadow-card)] border-border">
          <CardHeader>
            <CardTitle className="text-lg">Let's Work Together</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              I'm passionate about creating innovative solutions and would love to hear about your project.
            </p>
            <div className="text-sm text-muted-foreground space-y-1">
              <p>• Full Stack Development</p>
              <p>• Mobile App Development</p>
              <p>• UI/UX Design</p>
              <p>• Technical Consulting</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
