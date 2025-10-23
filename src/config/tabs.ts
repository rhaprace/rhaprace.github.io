export interface TabConfig {
  value: string;
  label: string;
}

export const TABS: TabConfig[] = [
  { value: "about", label: "About" },
  { value: "projects", label: "Projects" },
  { value: "experience", label: "Experience" },
  { value: "contact", label: "Contact" },
];

export const TAB_TRIGGER_CLASS =
  "data-[state=active]:bg-primary data-[state=active]:text-primary-foreground";

