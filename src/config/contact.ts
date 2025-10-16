export const CONTACT_INFO = {
  email: "rhaprace@gmail.com",
  github: "https://github.com/rhaprace",
  linkedin: "https://www.linkedin.com/in/rhaprace",
  location: "Olongapo City, Philippines",
  subject: "Portfolio Contact",
} as const;

export type ContactKey = keyof typeof CONTACT_INFO;

