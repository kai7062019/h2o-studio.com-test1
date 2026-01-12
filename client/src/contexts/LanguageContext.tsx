import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "en" | "es" | "zh";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    "nav.about": "About",
    "nav.services": "Services",
    "nav.joinUs": "Join Us",
    "nav.getStarted": "Get Started",

    // Home
    "hero.tagline": "Your Long-term Partner for Brand Globalization",
    "hero.subtitle": "Every second, we help brands grow globally",
    "hero.description": "We help brands grow globally with content, creativity, data, and tech.",
    "hero.cta": "Get Started",
    "hero.explore": "Explore Services",

    // Services Section
    "services.label": "OUR SERVICES",
    "services.title": "Our Services",
    "services.subtitle": "Building Bridges Between Brands and Creators",
    "services.influencer": "Influencer Marketing",
    "services.influencerDesc": "Connect authentic creators with brands that resonate.",
    "services.livestream": "Live Streaming Commerce",
    "services.livestreamDesc": "Transform viewers into customers in real-time.",
    "services.brand": "Brand Integrated Marketing",
    "services.brandDesc": "Create markets, not just campaigns.",

    // CTA Section
    "cta.title": "Ready to Transform Your Brand?",
    "cta.description": "Join hundreds of brands that have partnered with H2O Studio for global growth",
    "cta.button": "Join Us Now",

    // Join Us Section
    "joinUs.title": "Join Us",
    "joinUs.creator": "For Creators",
    "joinUs.brand": "For Brands",
    "joinUs.creatorDesc": "Ready to scale your influence?",
    "joinUs.brandDesc": "Ready to grow your brand globally?",

    // About Page
    "about.title": "About H2O Studio",
    "about.mission": "Our Mission",
    "about.missionText": "We help brands grow globally with content, creativity, data, and tech.",
    "about.vision": "Our Vision",
    "about.visionText": "To help every Chinese brand build lasting global influence and sustainable growth.",
    "about.value": "Our Values",
    "about.professionalism": "Professionalism: Strategy Meets Execution",
    "about.professionalismDesc": "We don't just provide solutions; we partner with clients through implementation, execution, and review.",

    // Services Page
    "services.page.title": "Our Services",
    "services.page.subtitle": "Comprehensive Solutions for Global Brand Growth",
    "services.service1": "Brand Comprehensive Marketing Strategy",
    "services.service1Desc": "Develop data-driven, creative marketing strategies tailored to your brand's global expansion.",
    "services.service2": "Social Media Management",
    "services.service2Desc": "Manage and optimize your social media presence across multiple platforms and markets.",
    "services.service3": "Brand Live Streaming Operations",
    "services.service3Desc": "Execute engaging live streaming campaigns that drive real-time customer engagement and sales.",
    "services.service4": "Influencer Marketing & IP Incubation",
    "services.service4Desc": "Connect with authentic creators and develop IP that resonates with your target audience.",
    "services.service5": "Brand E-commerce Management",
    "services.service5Desc": "Optimize your e-commerce operations across global markets with data-driven strategies.",
    "services.service6": "Advertising Optimization",
    "services.service6Desc": "Maximize ROI through strategic ad placement and continuous optimization.",

    // Join Us Page
    "joinUs.page.title": "Join H2O Studio",
    "joinUs.page.subtitle": "Choose Your Path",
    "joinUs.creatorForm": "Creator Application",
    "joinUs.brandForm": "Brand Partnership",
    "joinUs.form.name": "Full Name",
    "joinUs.form.email": "Email Address",
    "joinUs.form.about": "Tell us more about you",
    "joinUs.form.placeholder": "Share your story, experience, or brand goals...",
    "joinUs.form.submit": "Submit Application",
    "joinUs.form.success": "Thank you! We'll be in touch soon.",

    // Footer
    "footer.rights": "All rights reserved",
    "footer.contact": "Contact us",
  },
  es: {
    // Navigation
    "nav.about": "Acerca de",
    "nav.services": "Servicios",
    "nav.joinUs": "Únete",
    "nav.getStarted": "Comenzar",

    // Home
    "hero.tagline": "Tu Socio a Largo Plazo para la Globalización de Marca",
    "hero.subtitle": "Cada segundo, ayudamos a las marcas a crecer globalmente",
    "hero.description": "Ayudamos a las marcas a crecer globalmente con contenido, creatividad, datos y tecnología.",
    "hero.cta": "Comenzar",
    "hero.explore": "Explorar Servicios",

    // Services Section
    "services.label": "NUESTROS SERVICIOS",
    "services.title": "Nuestros Servicios",
    "services.subtitle": "Construyendo Puentes Entre Marcas y Creadores",
    "services.influencer": "Marketing de Influencers",
    "services.influencerDesc": "Conecta creadores auténticos con marcas que resuenen.",
    "services.livestream": "Comercio en Vivo",
    "services.livestreamDesc": "Transforma espectadores en clientes en tiempo real.",
    "services.brand": "Marketing Integrado de Marca",
    "services.brandDesc": "Crea mercados, no solo campañas.",

    // CTA Section
    "cta.title": "¿Listo para Transformar Tu Marca?",
    "cta.description": "Únete a cientos de marcas que han se asociado con H2O Studio para el crecimiento global",
    "cta.button": "Únete Ahora",

    // Join Us Section
    "joinUs.title": "Únete",
    "joinUs.creator": "Para Creadores",
    "joinUs.brand": "Para Marcas",
    "joinUs.creatorDesc": "¿Listo para ampliar tu influencia?",
    "joinUs.brandDesc": "¿Listo para hacer crecer tu marca globalmente?",

    // About Page
    "about.title": "Acerca de H2O Studio",
    "about.mission": "Nuestra Misión",
    "about.missionText": "Ayudamos a las marcas a crecer globalmente con contenido, creatividad, datos y tecnología.",
    "about.vision": "Nuestra Visión",
    "about.visionText": "Ayudar a cada marca china a construir una influencia global duradera y un crecimiento sostenible.",
    "about.value": "Nuestros Valores",
    "about.professionalism": "Profesionalismo: La Estrategia se Encuentra con la Ejecución",
    "about.professionalismDesc": "No solo proporcionamos soluciones; nos asociamos con clientes en implementación, ejecución y revisión.",

    // Services Page
    "services.page.title": "Nuestros Servicios",
    "services.page.subtitle": "Soluciones Integrales para el Crecimiento Global de Marcas",
    "services.service1": "Estrategia Integral de Marketing de Marca",
    "services.service1Desc": "Desarrolla estrategias de marketing impulsadas por datos y creatividad adaptadas a la expansión global de tu marca.",
    "services.service2": "Gestión de Redes Sociales",
    "services.service2Desc": "Gestiona y optimiza tu presencia en redes sociales en múltiples plataformas y mercados.",
    "services.service3": "Operaciones de Transmisión en Vivo de Marca",
    "services.service3Desc": "Ejecuta campañas de transmisión en vivo atractivas que impulsen el compromiso del cliente en tiempo real y las ventas.",
    "services.service4": "Marketing de Influencers e Incubación de IP",
    "services.service4Desc": "Conecta con creadores auténticos y desarrolla IP que resuene con tu audiencia objetivo.",
    "services.service5": "Gestión de E-commerce de Marca",
    "services.service5Desc": "Optimiza tus operaciones de e-commerce en mercados globales con estrategias impulsadas por datos.",
    "services.service6": "Optimización de Publicidad",
    "services.service6Desc": "Maximiza el ROI mediante la colocación estratégica de anuncios y la optimización continua.",

    // Join Us Page
    "joinUs.page.title": "Únete a H2O Studio",
    "joinUs.page.subtitle": "Elige Tu Camino",
    "joinUs.creatorForm": "Solicitud de Creador",
    "joinUs.brandForm": "Asociación de Marca",
    "joinUs.form.name": "Nombre Completo",
    "joinUs.form.email": "Dirección de Correo Electrónico",
    "joinUs.form.about": "Cuéntanos más sobre ti",
    "joinUs.form.placeholder": "Comparte tu historia, experiencia u objetivos de marca...",
    "joinUs.form.submit": "Enviar Solicitud",
    "joinUs.form.success": "¡Gracias! Nos pondremos en contacto pronto.",

    // Footer
    "footer.rights": "Todos los derechos reservados",
    "footer.contact": "Contáctanos",
  },
  zh: {
    // Navigation
    "nav.about": "关于",
    "nav.services": "服务",
    "nav.joinUs": "加入我们",
    "nav.getStarted": "开始合作",

    // Home
    "hero.tagline": "您品牌出海的长期合作伙伴",
    "hero.subtitle": "每一秒，我们都在帮助品牌全球增长",
    "hero.description": "我们致力于帮助中国品牌实现全球增长，用内容和创意打开市场，用数据和技术放大价值。",
    "hero.cta": "开始合作",
    "hero.explore": "了解服务",

    // Services Section
    "services.label": "我们的服务",
    "services.title": "我们的服务",
    "services.subtitle": "在品牌与创作者之间建立无形的桥梁",
    "services.influencer": "红人营销",
    "services.influencerDesc": "连接真实的创作者与相关品牌。",
    "services.livestream": "直播带货",
    "services.livestreamDesc": "实时将观众转化为消费者。",
    "services.brand": "品牌整合营销",
    "services.brandDesc": "创造市场，而不仅仅是活动。",

    // CTA Section
    "cta.title": "准备好转变您的品牌了吗？",
    "cta.description": "加入数百个已与H2O Studio合作实现全球增长的品牌",
    "cta.button": "立即加入",

    // Join Us Section
    "joinUs.title": "加入我们",
    "joinUs.creator": "创作者入口",
    "joinUs.brand": "品牌入口",
    "joinUs.creatorDesc": "准备好扩大您的影响力了吗？",
    "joinUs.brandDesc": "准备好让您的品牌全球增长了吗？",

    // About Page
    "about.title": "关于H2O Studio",
    "about.mission": "我们的使命",
    "about.missionText": "我们致力于帮助中国品牌实现全球增长，用内容和创意打开市场，用数据和技术放大价值。",
    "about.vision": "我们的愿景",
    "about.visionText": "让每一个有潜力的中国品牌，都能在全球市场建立长期影响力与可持续增长能力。",
    "about.value": "我们的价值观",
    "about.professionalism": "专业性：策略与执行相结合",
    "about.professionalismDesc": "我们不仅提供方案，更陪客户一起推进、落地、复盘，不做选择型代理，而是实战型伙伴。",

    // Services Page
    "services.page.title": "我们的服务",
    "services.page.subtitle": "全面的全球品牌增长解决方案",
    "services.service1": "品牌全案营销策划",
    "services.service1Desc": "为您的品牌全球扩展制定数据驱动、创意十足的营销策略。",
    "services.service2": "社交媒体代运营",
    "services.service2Desc": "在多个平台和市场上管理和优化您的社交媒体存在。",
    "services.service3": "品牌直播运营",
    "services.service3Desc": "执行引人入胜的直播活动，推动实时客户参与和销售。",
    "services.service4": "红人营销及IP孵化",
    "services.service4Desc": "与真实的创作者合作，开发与目标受众产生共鸣的IP。",
    "services.service5": "品牌商城代运营",
    "services.service5Desc": "通过数据驱动的策略优化全球市场的电商运营。",
    "services.service6": "广告投放优化",
    "services.service6Desc": "通过战略性广告投放和持续优化最大化ROI。",

    // Join Us Page
    "joinUs.page.title": "加入H2O Studio",
    "joinUs.page.subtitle": "选择您的路径",
    "joinUs.creatorForm": "创作者申请",
    "joinUs.brandForm": "品牌合作",
    "joinUs.form.name": "全名",
    "joinUs.form.email": "邮箱地址",
    "joinUs.form.about": "告诉我们更多关于您的信息",
    "joinUs.form.placeholder": "分享您的故事、经验或品牌目标...",
    "joinUs.form.submit": "提交申请",
    "joinUs.form.success": "感谢您！我们很快会与您联系。",

    // Footer
    "footer.rights": "版权所有",
    "footer.contact": "联系我们",
  },
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");
  const [isLoaded, setIsLoaded] = useState(false);

  // Load language from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('h2o-language') as Language | null;
    if (savedLanguage && ['en', 'es', 'zh'].includes(savedLanguage)) {
      setLanguageState(savedLanguage);
    }
    setIsLoaded(true);
  }, []);

  // Save language to localStorage when it changes
  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage);
    localStorage.setItem('h2o-language', newLanguage);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
