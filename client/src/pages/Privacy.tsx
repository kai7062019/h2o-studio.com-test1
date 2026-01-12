import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Privacy() {
  const { t, language } = useLanguage();

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  const privacyContent = {
    en: {
      title: "Privacy Policy",
      lastUpdated: "Last Updated: January 2025",
      sections: [
        {
          heading: "1. Introduction",
          content: "H2O Studio (\"we\", \"us\", \"our\") operates the H2O Studio website. This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data."
        },
        {
          heading: "2. Information Collection and Use",
          content: "We collect several different types of information for various purposes to provide and improve our Service to you."
        },
        {
          heading: "3. Types of Data Collected",
          items: [
            "Personal Data: Email address, name, phone number, address, cookies and usage data",
            "Usage Data: Browser type, IP address, pages visited, time and date of visit, time spent on pages"
          ]
        },
        {
          heading: "4. Use of Data",
          content: "H2O Studio uses the collected data for various purposes: to provide and maintain our Service, to notify you about changes to our Service, to allow you to participate in interactive features, to provide customer support, to gather analysis or valuable information, to monitor the usage of our Service, to detect, prevent and address technical issues."
        },
        {
          heading: "5. Security of Data",
          content: "The security of your data is important to us but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security."
        },
        {
          heading: "6. Changes to This Privacy Policy",
          content: "We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the \"Last Updated\" date at the top of this Privacy Policy."
        },
        {
          heading: "7. Contact Us",
          content: "If you have any questions about this Privacy Policy, please contact us at: privacy@h2ostudio.com"
        }
      ]
    },
    es: {
      title: "Política de Privacidad",
      lastUpdated: "Última actualización: Enero de 2025",
      sections: [
        {
          heading: "1. Introducción",
          content: "H2O Studio (\"nosotros\", \"nuestro\") opera el sitio web de H2O Studio. Esta página le informa sobre nuestras políticas con respecto a la recopilación, uso y divulgación de datos personales cuando utiliza nuestro Servicio."
        },
        {
          heading: "2. Recopilación y Uso de Información",
          content: "Recopilamos varios tipos diferentes de información para diversos propósitos con el fin de proporcionarle y mejorar nuestro Servicio."
        },
        {
          heading: "3. Tipos de Datos Recopilados",
          items: [
            "Datos Personales: Dirección de correo electrónico, nombre, número de teléfono, dirección, cookies y datos de uso",
            "Datos de Uso: Tipo de navegador, dirección IP, páginas visitadas, hora y fecha de visita, tiempo dedicado a las páginas"
          ]
        },
        {
          heading: "4. Uso de Datos",
          content: "H2O Studio utiliza los datos recopilados para varios propósitos: proporcionar y mantener nuestro Servicio, notificarle sobre cambios en nuestro Servicio, permitirle participar en características interactivas."
        },
        {
          heading: "5. Seguridad de Datos",
          content: "La seguridad de sus datos es importante para nosotros, pero recuerde que ningún método de transmisión por Internet o método de almacenamiento electrónico es 100% seguro."
        },
        {
          heading: "6. Cambios en esta Política de Privacidad",
          content: "Podemos actualizar nuestra Política de Privacidad de vez en cuando. Le notificaremos sobre cualquier cambio publicando la nueva Política de Privacidad en esta página."
        },
        {
          heading: "7. Contáctenos",
          content: "Si tiene alguna pregunta sobre esta Política de Privacidad, contáctenos en: privacy@h2ostudio.com"
        }
      ]
    },
    zh: {
      title: "隐私政策",
      lastUpdated: "最后更新：2025年1月",
      sections: [
        {
          heading: "1. 简介",
          content: "H2O Studio（\"我们\"、\"本公司\"）运营H2O Studio网站。本页面告知您我们关于个人数据的收集、使用和披露政策。"
        },
        {
          heading: "2. 信息收集和使用",
          content: "我们收集多种类型的信息，以便为您提供和改进我们的服务。"
        },
        {
          heading: "3. 收集的数据类型",
          items: [
            "个人数据：电子邮件地址、姓名、电话号码、地址、Cookie和使用数据",
            "使用数据：浏览器类型、IP地址、访问的页面、访问时间和日期、在页面上花费的时间"
          ]
        },
        {
          heading: "4. 数据使用",
          content: "H2O Studio使用收集的数据用于多种目的：提供和维护我们的服务、通知您我们服务的更改、允许您参与交互功能。"
        },
        {
          heading: "5. 数据安全",
          content: "您的数据安全对我们很重要，但请记住，互联网上没有100%安全的传输方法或电子存储方法。"
        },
        {
          heading: "6. 本隐私政策的更改",
          content: "我们可能会不时更新我们的隐私政策。我们将通过在此页面上发布新的隐私政策来通知您任何更改。"
        },
        {
          heading: "7. 联系我们",
          content: "如果您对本隐私政策有任何疑问，请通过以下方式与我们联系：privacy@h2ostudio.com"
        }
      ]
    }
  };

  const content = privacyContent[language as keyof typeof privacyContent] || privacyContent.en;

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
                {section.content && (
                  <p className="text-black/60 leading-relaxed mb-4">{section.content}</p>
                )}
                {section.items && (
                  <ul className="space-y-3">
                    {section.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-black mt-2 flex-shrink-0"></span>
                        <span className="text-black/60">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
