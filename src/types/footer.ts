export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
}

export interface FooterSectionProps {
  title?: string;
  contactInfo?: ContactInfo;
  socialLinks?: SocialLink[];
  onSubmit?: (formData: FormData) => Promise<void> | void;
}

export interface FormData {
  name: string;
  subject: string;
  email: string;
  message: string;
}

export interface FormErrors {
  name?: string;
  subject?: string;
  email?: string;
  message?: string;
}