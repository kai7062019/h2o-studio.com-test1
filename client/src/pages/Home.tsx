import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, ShoppingCart, BarChart3, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect, useState } from "react";

export default function Home() {
  const { t } = useLanguage();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  const services = [
    {
      icon: Users,
      titleKey: "services.influencer",
      descKey: "services.influencerDesc",
      link: "/services/4"
    },
    {
      icon: ShoppingCart,
      titleKey: "services.livestream",
      descKey: "services.livestreamDesc",
      link: "/services/3"
    },
    {
      icon: BarChart3,
      titleKey: "services.brand",
      descKey: "services.brandDesc",
      link: "/services/1"
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-black selection:text-white">
      <Navbar />

      {/* HERO SECTION WITH ADVANCED DESIGN */}
      <section className="relative pt-32 min-h-screen flex items-center bg-black text-white overflow-hidden">
        {/* Parallax Background with Gradient */}
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y: scrollY * 0.5 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-black via-black/95 to-black/85"></div>
          
          {/* Animated gradient orbs */}
          <motion.div
            className="absolute top-1/4 right-1/4 w-96 h-96 bg-white/8 rounded-full blur-3xl"
            animate={{ y: [0, 50, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
          ></motion.div>
          <motion.div
            className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"
            animate={{ y: [0, -50, 0] }}
            transition={{ duration: 10, repeat: Infinity }}
          ></motion.div>
        </motion.div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Main Headline */}
              <motion.h1 
                className="text-5xl md:text-7xl font-bold leading-tight mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {t("hero.tagline")}
              </motion.h1>

              {/* Description */}
              <motion.p 
                className="text-lg text-white/70 mb-12 max-w-lg leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                {t("hero.description")}
              </motion.p>

              {/* CTA Buttons - Dual Entry Points */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <motion.a 
                  href="/join-us?type=creator"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button className="h-14 px-8 bg-white text-black hover:bg-white/90 rounded-none text-sm font-medium tracking-wide">
                    For Creators <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </motion.a>
                <motion.a 
                  href="/join-us?type=brand"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button variant="outline" className="h-14 px-8 border-white/30 text-white hover:bg-white/10 rounded-none text-sm font-medium tracking-wide">
                    For Brands <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </motion.a>
              </motion.div>
            </motion.div>
            
            {/* Right Side - Floating Image with Advanced Effects */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-96 md:h-full hidden lg:flex items-center justify-center"
            >
              <motion.div
                animate={{ 
                  y: [0, -30, 0],
                  rotateZ: [0, 2, -2, 0]
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="relative"
              >
                {/* Glow Effect */}
                <motion.div
                  className="absolute -inset-12 bg-gradient-to-r from-white/20 via-white/10 to-white/20 rounded-2xl blur-3xl"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity }}
                ></motion.div>

                {/* Image Container with Border */}
                <div className="relative bg-black p-6 rounded-2xl shadow-2xl overflow-hidden border border-white/20">
                  <motion.img
                    src="/images/hero-collage.jpg"
                    alt="H2O Studio"
                    className="w-80 h-96 object-cover rounded-lg"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none rounded-lg"></div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION - ENHANCED INTERACTIVITY */}
      <section id="services" className="py-24 bg-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-black/5 rounded-full blur-3xl -mr-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/5 rounded-full blur-3xl -ml-48"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div {...fadeIn} className="text-center mb-16">
            <p className="text-xs font-bold uppercase tracking-widest text-black/50 mb-4">
              {t("services.label")}
            </p>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-black">
              {t("services.title")}
            </h2>
            <p className="text-xl text-black/60 max-w-2xl mx-auto">
              {t("services.subtitle")}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.a
                  key={i}
                  href={service.link}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -15, boxShadow: "0 20px 60px rgba(0,0,0,0.15)" }}
                  className="group"
                >
                  <div className="p-8 border border-black/10 hover:border-black/30 transition-all rounded-lg bg-white relative overflow-hidden">
                    {/* Animated background */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    ></motion.div>

                    <div className="relative z-10">
                      <motion.div
                        className="w-16 h-16 bg-black/5 rounded-lg mb-6 flex items-center justify-center group-hover:bg-black/10 transition-colors"
                        whileHover={{ rotate: 10, scale: 1.1 }}
                      >
                        <Icon className="w-8 h-8 text-black" />
                      </motion.div>
                      <h3 className="text-2xl font-bold mb-4 text-black group-hover:text-black/80 transition-colors">
                        {t(service.titleKey)}
                      </h3>
                      <p className="text-black/60 leading-relaxed group-hover:text-black/70 transition-colors">
                        {t(service.descKey)}
                      </p>
                      <motion.div
                        className="mt-6 flex items-center text-black/50 group-hover:text-black transition-colors"
                        initial={{ x: 0 }}
                        whileHover={{ x: 5 }}
                      >
                        <span className="text-sm font-medium">Learn more</span>
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </motion.div>
                    </div>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA SECTION - UNIFIED MESSAGING */}
      <section className="py-24 bg-black text-white relative overflow-hidden">
        {/* Animated background */}
        <motion.div 
          className="absolute inset-0 z-0"
          animate={{ 
            backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"]
          }}
          transition={{ duration: 15, repeat: Infinity }}
          style={{
            backgroundImage: "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.05) 0%, transparent 50%)",
            backgroundSize: "200% 200%"
          }}
        ></motion.div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div {...fadeIn} className="text-center">
            <motion.div
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/10 rounded-full border border-white/20"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Ready to grow?</span>
            </motion.div>

            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              {t("cta.title")}
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto mb-12">
              {t("cta.description")}
            </p>

            {/* Dual CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <motion.a
                href="/join-us?type=creator"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="h-14 px-12 bg-white text-black hover:bg-white/90 rounded-none text-sm font-medium tracking-wide">
                  Join as Creator <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </motion.a>
              <motion.a
                href="/join-us?type=brand"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="outline" className="h-14 px-12 border-white/30 text-white hover:bg-white/10 rounded-none text-sm font-medium tracking-wide">
                  Join as Brand <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
