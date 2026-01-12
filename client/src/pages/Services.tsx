import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowRight } from "lucide-react";

export default function Services() {
  const { t } = useLanguage();

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  // Reordered: Influencer Marketing (4) -> Live Streaming (3) -> Brand Integration (1) -> Others (2,5,6)
  const services = [
    {
      titleKey: "services.service4",
      descKey: "services.service4Desc",
      link: "/services/4"
    },
    {
      titleKey: "services.service3",
      descKey: "services.service3Desc",
      link: "/services/3"
    },
    {
      titleKey: "services.service1",
      descKey: "services.service1Desc",
      link: "/services/1"
    },
    {
      titleKey: "services.service2",
      descKey: "services.service2Desc",
      link: "/services/2"
    },
    {
      titleKey: "services.service5",
      descKey: "services.service5Desc",
      link: "/services/5"
    },
    {
      titleKey: "services.service6",
      descKey: "services.service6Desc",
      link: "/services/6"
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <motion.div {...fadeIn}>
            <p className="text-xs font-bold uppercase tracking-widest text-white/50 mb-6">
              {t("services.page.title")}
            </p>
            <h1 className="text-6xl md:text-7xl font-bold leading-tight mb-6">
              {t("services.page.title")}
            </h1>
            <p className="text-xl text-white/60 max-w-2xl">
              {t("services.page.subtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <a key={i} href={service.link}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -10, boxShadow: "0 20px 60px rgba(0,0,0,0.1)" }}
                  className="p-8 border border-black/10 hover:border-black/30 transition-all cursor-pointer group rounded-lg"
                >
                  <motion.div 
                    className="w-12 h-12 bg-black/10 rounded-lg mb-6 group-hover:bg-black/20 transition-colors"
                    whileHover={{ rotate: 10, scale: 1.1 }}
                  ></motion.div>
                  <h3 className="text-2xl font-bold mb-4 text-black group-hover:text-black/80 transition-colors">
                    {t(service.titleKey)}
                  </h3>
                  <p className="text-black/60 leading-relaxed group-hover:text-black/70 transition-colors mb-6">
                    {t(service.descKey)}
                  </p>
                  <motion.div
                    className="flex items-center text-black/50 group-hover:text-black transition-colors"
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                  >
                    <span className="text-sm font-medium">Learn more</span>
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </motion.div>
                </motion.div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
