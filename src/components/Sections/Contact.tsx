import React, { useState, type FormEvent } from "react";
import { Mail, MessageSquare, Send, ExternalLink } from "lucide-react";

const Contact: React.FC = () => {
  const [method, setMethod] = useState<"email" | "dm">("email");

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // EmailJS integration placeholder
    // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_PUBLIC_KEY')
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    }, 1500);
  };

  return (
    <section className="py-6 animate-fade-in max-w-2xl mx-auto">
      <h2
        className="flex items-center gap-2 font-bold mb-6 border-b pb-2
                     text-gray-700 border-gray-100
                     dark:text-dark-text dark:border-dark-border-soft"
      >
        <Mail size={18} className="text-mint-600" /> Contact_Me
      </h2>

      <div className="flex gap-2 mb-8 bg-gray-100 dark:bg-dark-surface-2 p-1 rounded-lg">
        <button
          onClick={() => setMethod("email")}
          className={`flex-1 py-2 text-sm font-medium rounded-md transition-all flex items-center justify-center gap-2
            ${method === "email"
              ? "bg-white dark:bg-dark-surface text-mint-600 shadow-sm"
              : "text-gray-500 dark:text-dark-text-muted hover:text-gray-700 dark:hover:text-dark-text"
            }`}
        >
          <Mail size={16} /> Send Email
        </button>
        <button
          onClick={() => setMethod("dm")}
          className={`flex-1 py-2 text-sm font-medium rounded-md transition-all flex items-center justify-center gap-2
            ${method === "dm"
              ? "bg-white dark:bg-dark-surface text-mint-600 shadow-sm"
              : "text-gray-500 dark:text-dark-text-muted hover:text-gray-700 dark:hover:text-dark-text"
            }`}
        >
          <MessageSquare size={16} /> Direct Message
        </button>
      </div>

      {method === "email" ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-semibold text-gray-600 dark:text-dark-text-muted">Name</label>
              <input
                required
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-3 py-2 text-sm border rounded-md focus:outline-none focus:ring-1 focus:ring-mint-500
                           bg-white border-gray-200 text-gray-800
                           dark:bg-dark-surface-2 dark:border-dark-border dark:text-dark-text"
                placeholder="John Doe"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-semibold text-gray-600 dark:text-dark-text-muted">Email</label>
              <input
                required
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-3 py-2 text-sm border rounded-md focus:outline-none focus:ring-1 focus:ring-mint-500
                           bg-white border-gray-200 text-gray-800
                           dark:bg-dark-surface-2 dark:border-dark-border dark:text-dark-text"
                placeholder="john@example.com"
              />
            </div>
          </div>
          <div className="space-y-1">
            <label className="text-xs font-semibold text-gray-600 dark:text-dark-text-muted">Message</label>
            <textarea
              required
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              className="w-full px-3 py-2 text-sm border rounded-md focus:outline-none focus:ring-1 focus:ring-mint-500 resize-none
                         bg-white border-gray-200 text-gray-800
                         dark:bg-dark-surface-2 dark:border-dark-border dark:text-dark-text"
              placeholder="Your message here..."
            />
          </div>
          <button
            disabled={status === "sending"}
            type="submit"
            className="w-full py-2.5 flex items-center justify-center gap-2 rounded-md font-medium text-sm transition-all
                       bg-mint-500 hover:bg-mint-600 text-white
                       disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {status === "sending" ? "Sending..." : "Send Message"}
            <Send size={16} />
          </button>
          
          {status === "success" && (
            <p className="text-sm text-mint-600 text-center mt-2 font-medium">Message sent successfully!</p>
          )}
        </form>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a
            href="https://t.me/yihune21" // Assuming telegram handle
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center p-8 border rounded-lg transition-all hover:-translate-y-1 hover:shadow-md
                       bg-white border-gray-200
                       dark:bg-dark-surface dark:border-dark-border-soft"
          >
            <MessageSquare size={32} className="text-[#0088cc] mb-3" />
            <h3 className="font-bold text-gray-800 dark:text-dark-text">Telegram</h3>
            <span className="text-xs text-gray-500 dark:text-dark-text-muted flex items-center gap-1 mt-1">
              @yihune21 <ExternalLink size={12} />
            </span>
          </a>
          <a
            href="https://www.linkedin.com/in/yihune-zewdie-23a766258/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center p-8 border rounded-lg transition-all hover:-translate-y-1 hover:shadow-md
                       bg-white border-gray-200
                       dark:bg-dark-surface dark:border-dark-border-soft"
          >
            {/* LinkedIn Logo */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={32}
              height={32}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-[#0a66c2] mb-3"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
            <h3 className="font-bold text-gray-800 dark:text-dark-text">LinkedIn</h3>
            <span className="text-xs text-gray-500 dark:text-dark-text-muted flex items-center gap-1 mt-1">
              Yihune Zewdie <ExternalLink size={12} />
            </span>
          </a>
        </div>
      )}
    </section>
  );
};

export default Contact;
