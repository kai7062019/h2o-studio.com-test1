import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ServiceDetail2() {
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
              {t("services.service2")}
            </p>
            <h1 className="text-6xl md:text-7xl font-bold leading-tight mb-6">
              {t("services.service2")}
            </h1>
            <p className="text-xl text-white/60 max-w-2xl">
              {t("services.service2Desc")}
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
              alt="Social Media Management"
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
                Our Social Media Management service provides end-to-end management of your brand's social presence across all major platforms. We handle content creation, community management, and engagement strategies to build a loyal and engaged audience.
              </p>
              <p className="text-lg text-black/60 leading-relaxed">
                From Instagram and TikTok to LinkedIn and WeChat, we understand the nuances of each platform and create platform-specific content that resonates with your audience. Our team ensures consistent brand voice while adapting to local market preferences.
              </p>
            </motion.div>

            <motion.div {...fadeIn} className="mb-12">
              <h2 className="text-4xl font-bold mb-6 text-black">Key Benefits</h2>
              <ul className="space-y-4">
                {[
                  "Daily content creation and posting across multiple platforms",
                  "Community management and audience engagement",
                  "Trend monitoring and real-time response strategies",
                  "Influencer collaboration and partnership management",
                  "Analytics tracking and performance reporting",
                  "Crisis management and brand reputation protection"
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
                  { step: "01", title: "Audit & Strategy", desc: "We analyze your current social presence and develop a platform-specific content strategy." },
                  { step: "02", title: "Content Planning", desc: "Create a content calendar aligned with your brand goals and seasonal opportunities." },
                  { step: "03", title: "Content Creation", desc: "Produce high-quality, engaging content tailored to each platform's unique audience." },
                  { step: "04", title: "Community Management", desc: "Actively engage with your audience, respond to comments, and build community." },
                  { step: "05", title: "Analytics & Optimization", desc: "Monitor performance metrics and continuously optimize for better engagement and reach." }
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
              <h2 className="text-2xl font-bold mb-4 text-black">Build Your Social Presence</h2>
              <p className="text-black/60 mb-6">
                Let us manage your social media while you focus on growing your business.
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
