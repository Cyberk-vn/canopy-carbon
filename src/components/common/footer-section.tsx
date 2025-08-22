"use client";

import React, { useState } from "react";
import FooterMobile from "./footer-mobile";
import FooterDesktop from "./footer-desktop";

interface ContactFormData {
  name: string;
  subject: string;
  email: string;
  message: string;
}

const FooterSection = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    subject: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <>
      {/* Mobile Version */}
      <FooterMobile 
        formData={formData}
        onInputChange={handleInputChange}
        onSubmit={handleSubmit}
      />
      
      {/* Desktop Version */}
      <FooterDesktop 
        formData={formData}
        onInputChange={handleInputChange}
        onSubmit={handleSubmit}
      />
    </>
  );
};

export default FooterSection;
