"use client";

import React, { useState } from "react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
        setErrorMsg(data.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error("Contact Form Submit Error:", err);
      setStatus("error");
      setErrorMsg("Failed to connect to the server. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-y-6 w-full max-w-[580px]">
      <div className="flex flex-col gap-y-1.5">
        <label htmlFor="form-name" className="font-mono text-xs text-secondary font-medium tracking-wide uppercase">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="form-name"
          required
          value={formData.name}
          onChange={handleChange}
          disabled={status === "submitting"}
          placeholder="Samarth Kolarkar"
          className="w-full bg-border-custom/10 border border-border-custom px-4 py-3 text-sm text-foreground placeholder-secondary/50 rounded-md focus:outline-none focus:border-foreground/50 focus:ring-1 focus:ring-foreground/40 transition-all duration-200 disabled:opacity-50"
        />
      </div>

      <div className="flex flex-col gap-y-1.5">
        <label htmlFor="form-email" className="font-mono text-xs text-secondary font-medium tracking-wide uppercase">
          Email Address
        </label>
        <input
          type="email"
          name="email"
          id="form-email"
          required
          value={formData.email}
          onChange={handleChange}
          disabled={status === "submitting"}
          placeholder="you@example.com"
          className="w-full bg-border-custom/10 border border-border-custom px-4 py-3 text-sm text-foreground placeholder-secondary/50 rounded-md focus:outline-none focus:border-foreground/50 focus:ring-1 focus:ring-foreground/40 transition-all duration-200 disabled:opacity-50"
        />
      </div>

      <div className="flex flex-col gap-y-1.5">
        <label htmlFor="form-message" className="font-mono text-xs text-secondary font-medium tracking-wide uppercase">
          Message
        </label>
        <textarea
          name="message"
          id="form-message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          disabled={status === "submitting"}
          placeholder="Let's build something interesting..."
          className="w-full bg-border-custom/10 border border-border-custom px-4 py-3 text-sm text-foreground placeholder-secondary/50 rounded-md focus:outline-none focus:border-foreground/50 focus:ring-1 focus:ring-foreground/40 transition-all duration-200 resize-y min-h-[120px] disabled:opacity-50"
        />
      </div>

      <div className="flex flex-col gap-y-4 pt-2">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-fit inline-flex items-center justify-center bg-foreground text-background font-mono text-xs font-semibold px-6 py-3 rounded-md hover:opacity-90 active:scale-[0.98] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/50 focus-visible:ring-offset-2 disabled:opacity-60 cursor-pointer"
        >
          {status === "submitting" ? (
            <span className="flex items-center gap-1.5">
              <svg className="animate-spin h-3.5 w-3.5 text-background" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </span>
          ) : (
            "Send Message"
          )}
        </button>

        {status === "success" && (
          <div className="text-emerald-500 text-xs font-mono animate-fade-in">
            ✓ Thank you! Your message has been sent successfully.
          </div>
        )}

        {status === "error" && (
          <div className="text-rose-500 text-xs font-mono animate-fade-in">
            ✗ {errorMsg}
          </div>
        )}
      </div>
    </form>
  );
}
