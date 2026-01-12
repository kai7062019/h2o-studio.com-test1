import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export default function About() {
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
              {t("about.title")}
            </p>
            <h1 className="text-6xl md:text-7xl font-bold leading-tight">
              {t("about.title")}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div {...fadeIn} className="max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-black">
              {t("about.mission")}
            </h2>
            <p className="text-lg text-black/60 leading-relaxed mb-12">
              {t("about.missionText")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-black/5">
        <div className="container mx-auto px-4">
          <motion.div {...fadeIn} className="max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-black">
              {t("about.vision")}
            </h2>
            <p className="text-lg text-black/60 leading-relaxed">
              {t("about.visionText")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div {...fadeIn} className="max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-black">
              {t("about.value")}
            </h2>
            
            <div className="space-y-12">
              <div className="border-l-4 border-black pl-8">
                <h3 className="text-2xl font-bold mb-4 text-black">
                  {t("about.professionalism")}
                </h3>
                <p className="text-lg text-black/60 leading-relaxed">
                  {t("about.professionalismDesc")}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
