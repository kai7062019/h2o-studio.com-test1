import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Terms() {
  const { t, language } = useLanguage();

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  const termsContent = {
    en: {
      title: "Terms of Service",
      lastUpdated: "Last Updated: January 2025",
      sections: [
        {
          heading: "1. Agreement to Terms",
          content: "By accessing and using the H2O Studio website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service."
        },
        {
          heading: "2. Use License",
          content: "Permission is granted to temporarily download one copy of the materials (information or software) on H2O Studio's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not: modify or copy the materials; use the materials for any commercial purpose or for any public display; attempt to decompile or reverse engineer any software contained on the website; remove any copyright or other proprietary notations from the materials."
        },
        {
          heading: "3. Disclaimer",
          content: "The materials on H2O Studio's website are provided on an 'as is' basis. H2O Studio makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights."
        },
        {
          heading: "4. Limitations",
          content: "In no event shall H2O Studio or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on the H2O Studio website."
        },
        {
          heading: "5. Accuracy of Materials",
          content: "The materials appearing on H2O Studio's website could include technical, typographical, or photographic errors. H2O Studio does not warrant that any of the materials on the website are accurate, complete, or current. H2O Studio may make changes to the materials contained on its website at any time without notice."
        },
        {
          heading: "6. Links",
          content: "H2O Studio has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by H2O Studio of the site. Use of any such linked website is at the user's own risk."
        },
        {
          heading: "7. Modifications",
          content: "H2O Studio may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service."
        },
        {
          heading: "8. Governing Law",
          content: "These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction in which H2O Studio operates, and you irrevocably submit to the exclusive jurisdiction of the courts in that location."
        }
      ]
    },
    es: {
      title: "Términos de Servicio",
      lastUpdated: "Última actualización: Enero de 2025",
      sections: [
        {
          heading: "1. Acuerdo de Términos",
          content: "Al acceder y utilizar el sitio web y los servicios de H2O Studio, usted acepta y se compromete a cumplir con los términos y disposiciones de este acuerdo."
        },
        {
          heading: "2. Licencia de Uso",
          content: "Se otorga permiso para descargar temporalmente una copia de los materiales en el sitio web de H2O Studio solo para visualización personal y no comercial."
        },
        {
          heading: "3. Descargo de Responsabilidad",
          content: "Los materiales en el sitio web de H2O Studio se proporcionan \"tal cual\". H2O Studio no otorga garantías, expresas o implícitas."
        },
        {
          heading: "4. Limitaciones",
          content: "En ningún caso H2O Studio o sus proveedores serán responsables de ningún daño que surja del uso o la imposibilidad de usar los materiales."
        },
        {
          heading: "5. Precisión de Materiales",
          content: "Los materiales en el sitio web de H2O Studio podrían incluir errores técnicos, tipográficos o fotográficos."
        },
        {
          heading: "6. Enlaces",
          content: "H2O Studio no ha revisado todos los sitios vinculados a su sitio web y no es responsable del contenido de ningún sitio vinculado."
        },
        {
          heading: "7. Modificaciones",
          content: "H2O Studio puede revisar estos términos de servicio en cualquier momento sin previo aviso."
        },
        {
          heading: "8. Ley Aplicable",
          content: "Estos términos y condiciones se rigen por las leyes de la jurisdicción en la que opera H2O Studio."
        }
      ]
    },
    zh: {
      title: "服务条款",
      lastUpdated: "最后更新：2025年1月",
      sections: [
        {
          heading: "1. 条款协议",
          content: "通过访问和使用H2O Studio网站和服务，您接受并同意受本协议的条款和规定的约束。"
        },
        {
          heading: "2. 使用许可",
          content: "允许您临时下载H2O Studio网站上的材料副本，仅供个人、非商业性的查看使用。"
        },
        {
          heading: "3. 免责声明",
          content: "H2O Studio网站上的材料按\"原样\"提供。H2O Studio不提供任何明示或暗示的保证。"
        },
        {
          heading: "4. 责任限制",
          content: "在任何情况下，H2O Studio或其供应商均不对因使用或无法使用材料而产生的任何损害负责。"
        },
        {
          heading: "5. 材料准确性",
          content: "H2O Studio网站上的材料可能包含技术、排版或摄影错误。"
        },
        {
          heading: "6. 链接",
          content: "H2O Studio未审查与其网站链接的所有网站，对任何链接网站的内容不负责。"
        },
        {
          heading: "7. 修改",
          content: "H2O Studio可随时修改其网站的这些服务条款，恕不另行通知。"
        },
        {
          heading: "8. 适用法律",
          content: "这些条款和条件受H2O Studio运营所在司法管辖区的法律管辖。"
        }
      ]
    }
  };

  const content = termsContent[language as keyof typeof termsContent] || termsContent.en;

  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <motion.div {...fadeIn}>
            <h1 className="text-6xl md:text-7xl font-bold leading-tight mb-6">
              {content.title}
            </h1>
            <p className="text-white/60">{content.lastUpdated}</p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            {content.sections.map((section, i) => (
              <motion.div key={i} {...fadeIn} className="mb-12">
                <h2 className="text-3xl font-bold mb-4 text-black">{section.heading}</h2>
                <p className="text-black/60 leading-relaxed">{section.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
