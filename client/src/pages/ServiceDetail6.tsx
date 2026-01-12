import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ServiceDetail6() {
  const { t } = useLanguage();

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <motion.div {...fadeIn}>
            <p className="text-xs font-bold uppercase tracking-widest text-white/50 mb-6">
              {t("services.service6")}
            </p>
            <h1 className="text-6xl md:text-7xl font-bold leading-tight mb-6">
              {t("services.service6")}
            </h1>
            <p className="text-xl text-white/60 max-w-2xl">
              {t("services.service6Desc")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src="/images/service-monetization.jpg"
              alt="Advertising Optimization"
              className="w-full h-96 md:h-[500px] object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <motion.div {...fadeIn} className="mb-12">
              <h2 className="text-4xl font-bold mb-6 text-black">What We Do</h2>
              <p className="text-lg text-black/60 leading-relaxed mb-6">
                Our Advertising Optimization service maximizes the ROI of your paid advertising campaigns across all major platforms. We combine data science, creative excellence, and continuous testing to ensure every advertising dollar delivers maximum impact.
              </p>
              <p className="text-lg text-black/60 leading-relaxed">
                From Google Ads and Facebook to Douyin and Kuaishou, we manage campaigns with precision. Our team continuously monitors performance, tests variations, and optimizes targeting to improve conversion rates and reduce customer acquisition costs.
              </p>
            </motion.div>

            <motion.div {...fadeIn} className="mb-12">
              <h2 className="text-4xl font-bold mb-6 text-black">Key Benefits</h2>
              <ul className="space-y-4">
                {[
                  "Multi-platform advertising campaign management",
                  "Advanced audience targeting and segmentation",
                  "A/B testing and creative optimization",
                  "Real-time bid management and budget optimization",
                  "Conversion tracking and attribution analysis",
                  "Continuous performance monitoring and reporting"
                ].map((benefit, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <span className="w-2 h-2 bg-black mt-3 flex-shrink-0"></span>
                    <span className="text-lg text-black/60">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div {...fadeIn} className="mb-12">
              <h2 className="text-4xl font-bold mb-6 text-black">Our Process</h2>
              <div className="space-y-6">
                {[
                  { step: "01", title: "Campaign Audit", desc: "Analyze your current advertising performance and identify optimization opportunities." },
                  { step: "02", title: "Strategy Development", desc: "Create a data-driven advertising strategy aligned with your business goals." },
                  { step: "03", title: "Campaign Setup", desc: "Launch optimized campaigns with proper tracking and audience targeting." },
                  { step: "04", title: "Continuous Optimization", desc: "Monitor performance daily and make real-time adjustments for better results." },
                  { step: "05", title: "Reporting & Insights", desc: "Provide detailed performance reports and actionable insights for improvement." }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="border-l-4 border-black pl-6"
                  >
                    <p className="text-sm font-bold text-black/50 mb-2">{item.step}</p>
                    <h3 className="text-2xl font-bold mb-2 text-black">{item.title}</h3>
                    <p className="text-black/60">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div {...fadeIn} className="bg-black/5 p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4 text-black">Maximize Your Advertising ROI</h2>
              <p className="text-black/60 mb-6">
                Let our experts optimize your ad spend for maximum returns.
              </p>
              <a href="/join-us?type=brand">
                <Button className="bg-black text-white hover:bg-black/80 rounded-none text-sm font-medium tracking-wide">
                  Get Started <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
