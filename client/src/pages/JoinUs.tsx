import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";
import { toast } from "sonner";

export default function JoinUs() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const searchParams = new URLSearchParams(window.location.search);
  const type = (searchParams.get("type") || "creator") as "creator" | "brand";

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast.error(t("joinUs.form.error.required") || "Please fill in all fields");
      return;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error(t("joinUs.form.error.email") || "Please enter a valid email");
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type,
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Failed to submit form');
      }

      const result = await response.json();
      toast.success(result.message || t("joinUs.form.success") || "Form submitted successfully");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Failed to submit form";
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <motion.div {...fadeIn}>
            <p className="text-xs font-bold uppercase tracking-widest text-white/50 mb-6">
              {t("joinUs.page.title")}
            </p>
            <h1 className="text-6xl md:text-7xl font-bold leading-tight">
              {t("joinUs.page.title")}
            </h1>
            <p className="text-xl text-white/60 mt-6">
              {t("joinUs.page.subtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            {/* Type Selector */}
            <motion.div {...fadeIn} className="flex gap-4 mb-12">
              <a href="/join-us?type=creator" className="flex-1">
                <button
                  className={`w-full py-4 px-6 font-bold text-lg transition-all ${
                    type === "creator"
                      ? "bg-black text-white"
                      : "bg-black/10 text-black hover:bg-black/20"
                  }`}
                >
                  {t("joinUs.creatorForm")}
                </button>
              </a>
              <a href="/join-us?type=brand" className="flex-1">
                <button
                  className={`w-full py-4 px-6 font-bold text-lg transition-all ${
                    type === "brand"
                      ? "bg-black text-white"
                      : "bg-black/10 text-black hover:bg-black/20"
                  }`}
                >
                  {t("joinUs.brandForm")}
                </button>
              </a>
            </motion.div>

            {/* Form */}
            <motion.form
              {...fadeIn}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {/* Name Field */}
              <div>
                <label className="block text-sm font-bold uppercase tracking-widest text-black/50 mb-3">
                  {t("joinUs.form.name")}
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                  className="w-full px-6 py-4 border border-black/20 focus:border-black outline-none transition-colors disabled:opacity-50"
                  placeholder="John Doe"
                />
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-sm font-bold uppercase tracking-widest text-black/50 mb-3">
                  {t("joinUs.form.email")}
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                  className="w-full px-6 py-4 border border-black/20 focus:border-black outline-none transition-colors disabled:opacity-50"
                  placeholder="john@example.com"
                />
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-sm font-bold uppercase tracking-widest text-black/50 mb-3">
                  {t("joinUs.form.about")}
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                  rows={6}
                  className="w-full px-6 py-4 border border-black/20 focus:border-black outline-none transition-colors resize-none disabled:opacity-50"
                  placeholder={t("joinUs.form.placeholder")}
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full h-14 bg-black text-white hover:bg-black/80 rounded-none text-sm font-bold uppercase tracking-widest disabled:opacity-50"
              >
                {isLoading ? "Submitting..." : t("joinUs.form.submit")}
              </Button>
            </motion.form>

            {/* Info Text */}
            <motion.p
              {...fadeIn}
              className="text-center text-black/60 text-sm mt-8"
            >
              {type === "creator"
                ? t("joinUs.creatorInfo") || "Join our network of talented creators and scale your influence globally."
                : t("joinUs.brandInfo") || "Partner with us to reach authentic audiences and drive meaningful growth."}
            </motion.p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
