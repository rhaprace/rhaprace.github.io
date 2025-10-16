/**
 * Email service utility
 * Centralized logic for opening email clients and copying email addresses
 */

interface EmailOptions {
  email: string;
  subject: string;
}

export const emailService = {
  /**
   * Open Gmail compose window
   */
  openGmail: ({ email, subject }: EmailOptions) => {
    const url = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}`;
    window.open(url, "_blank");
  },

  /**
   * Open Outlook compose window
   */
  openOutlook: ({ email, subject }: EmailOptions) => {
    const url = `https://outlook.live.com/mail/0/deeplink/compose?to=${email}&subject=${encodeURIComponent(subject)}`;
    window.open(url, "_blank");
  },

  /**
   * Open default email client
   */
  openDefault: ({ email, subject }: EmailOptions) => {
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
  },

  /**
   * Copy email to clipboard
   */
  copyToClipboard: async (email: string) => {
    try {
      await navigator.clipboard.writeText(email);
      return { success: true };
    } catch (err) {
      return { success: false, error: err };
    }
  },
};

