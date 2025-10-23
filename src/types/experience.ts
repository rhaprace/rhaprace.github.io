export interface Experience {
  type: "work" | "education";
  title: string;
  company?: string;
  location: string;
  period: string;
  current?: boolean;
  description: string | string[];
  technologies?: string[];
  appLink?: string;
  websiteLink?: string;
}

