import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, ShoppingCart, Users, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

type ServiceType = "all" | "influencer" | "livestream" | "brand";

export default function CaseStudies() {
  const [activeFilter, setActiveFilter] = useState<ServiceType>("all");

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  const caseStudies = [
    {
      type: "influencer",
      title: "Fashion Brand X - Creator Collaboration",
      subtitle: "Building Authentic Community Through Creator Partnerships",
      brand: "Fashion Brand X",
      creator: "@StyleInfluencer",
      metrics: {
        reach: "2.5M",
        engagement: "8.2%",
        conversion: "4.5%",
        roi: "320%"
      },
      description: "Partnered with a leading fashion influencer to launch a seasonal collection. Through authentic storytelling and community engagement, we achieved unprecedented conversion rates.",
      challenge: "Low brand awareness among Gen Z audience",
      solution: "Identified micro and macro influencers with authentic brand alignment and co-created content that resonated with their communities",
      results: [
        "2.5M+ impressions across platforms",
        "8.2% engagement rate (3x industry average)",
        "4.5% conversion rate from influencer links",
        "320% ROI on influencer investment"
      ],
      image: "/images/hero-collage.jpg"
    },
    {
      type: "livestream",
      title: "Beauty Brand Y - Live Commerce Event",
      subtitle: "Real-time Sales Through Interactive Live Streaming",
      brand: "Beauty Brand Y",
      platform: "TikTok Shop",
      metrics: {
        viewers: "150K",
        sales: "$500K",
        conversionRate: "12.5%",
        roi: "450%"
      },
      description: "Executed a 2-hour live shopping event featuring product launches and exclusive deals. Real-time engagement and influencer hosting drove record-breaking sales.",
      challenge: "First-time live commerce campaign with high expectations",
      solution: "Curated experienced hosts, created compelling product narratives, and implemented real-time engagement strategies",
      results: [
        "150K+ concurrent viewers",
        "$500K in sales within 2 hours",
        "12.5% conversion rate",
        "450% ROI",
        "10K+ new followers acquired"
      ],
      image: "/images/service-production.jpg"
    },
    {
      type: "brand",
      title: "Tech Company Z - Integrated Marketing Campaign",
      subtitle: "Multi-channel Brand Positioning and Market Creation",
      brand: "Tech Company Z",
      campaign: "Product Launch Campaign",
      metrics: {
        reach: "5M+",
        engagement: "6.8%",
        brandLift: "45%",
        roi: "380%"
      },
      description: "Developed a comprehensive brand integrated marketing campaign across social media, influencer partnerships, and live commerce channels.",
      challenge: "Establishing market presence for a new product category",
      solution: "Created integrated narrative across multiple touchpoints, leveraging influencers, content creators, and commerce channels",
      results: [
        "5M+ total reach across channels",
        "6.8% average engagement rate",
        "45% brand lift in target demographic",
        "380% ROI on total marketing spend",
        "Market leadership position established"
      ],
      image: "/images/service-monetization.jpg"
    },
    {
      type: "influencer",
      title: "Lifestyle Brand A - Long-term Creator Program",
      subtitle: "Sustainable Creator Partnerships for Brand Advocacy",
      brand: "Lifestyle Brand A",
      creator: "@LifestyleCreator",
      metrics: {
        reach: "1.8M",
        engagement: "7.5%",
        retention: "95%",
        roi: "280%"
      },
      description: "Established a year-long creator partnership program with consistent content creation, exclusive access, and community building.",
      challenge: "Building long-term brand loyalty through creator advocacy",
      solution: "Developed structured partnership with content calendar, exclusive benefits, and community engagement initiatives",
      results: [
        "1.8M+ monthly impressions",
        "7.5% consistent engagement rate",
        "95% content retention rate",
        "280% annual ROI",
        "Strong brand advocacy established"
      ],
      image: "/images/hero-collage.jpg"
    },
    {
      type: "livestream",
      title: "E-commerce Platform B - Weekly Live Shopping Series",
      subtitle: "Recurring Revenue Through Consistent Live Commerce",
      brand: "E-commerce Platform B",
      platform: "Multiple Platforms",
      metrics: {
        weeklySales: "$200K",
        viewers: "80K",
        conversionRate: "10.2%",
        retention: "78%"
      },
      description: "Launched a weekly live shopping series with rotating hosts and product categories, creating predictable revenue stream.",
      challenge: "Maintaining viewer engagement for recurring events",
      solution: "Developed content themes, trained diverse hosts, and implemented loyalty programs for repeat viewers",
      results: [
        "$200K+ weekly sales average",
        "80K+ average concurrent viewers",
        "10.2% conversion rate",
        "78% viewer retention week-over-week",
        "Predictable revenue model established"
      ],
      image: "/images/service-growth.jpg"
    },
    {
      type: "brand",
      title: "Luxury Brand C - Premium Positioning Campaign",
      subtitle: "Elevating Brand Perception Through Strategic Integration",
      brand: "Luxury Brand C",
      campaign: "Premium Tier Launch",
      metrics: {
        reach: "3.2M",
        engagement: "9.1%",
        premiumSales: "35%",
        roi: "420%"
      },
      description: "Executed premium brand positioning campaign targeting high-value consumers through curated influencers and exclusive experiences.",
      challenge: "Positioning luxury product in competitive market",
      solution: "Partnered with premium-aligned creators, created exclusive content, and implemented VIP commerce experiences",
      results: [
        "3.2M+ reach in target demographic",
        "9.1% engagement rate (premium audience)",
        "35% of sales from premium tier",
        "420% ROI on premium positioning",
        "Luxury market leadership established"
      ],
      image: "/images/service-monetization.jpg"
    }
  ];

  const filteredCaseStudies = activeFilter === "all" 
    ? caseStudies 
    : caseStudies.filter(cs => cs.type === activeFilter);

  const getServiceIcon = (type: string) => {
    switch(type) {
      case "influencer":
        return Users;
      case "livestream":
        return ShoppingCart;
      case "brand":
        return BarChart3;
      default:
        return TrendingUp;
    }
  };

  const getServiceLabel = (type: string) => {
    switch(type) {
      case "influencer":
        return "Influencer Marketing";
      case "livestream":
        return "Live Streaming Commerce";
      case "brand":
        return "Brand Integrated Marketing";
      default:
        return "All Services";
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-black selection:text-white">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs font-bold uppercase tracking-widest text-white/50 mb-6">Success Stories</p>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
              Case Studies
            </h1>
            <p className="text-xl text-white/60 max-w-2xl">
              Discover how we've helped brands create markets and creators build empires through strategic partnerships and innovative campaigns.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FILTER SECTION */}
      <section className="py-12 bg-white border-b border-black/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4">
            {[
              { label: "All Services", value: "all" },
              { label: "Influencer Marketing", value: "influencer" },
              { label: "Live Commerce", value: "livestream" },
              { label: "Brand Marketing", value: "brand" }
            ].map((filter) => (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value as ServiceType)}
                className={`px-6 py-3 text-sm font-medium uppercase tracking-wide transition-all ${
                  activeFilter === filter.value
                    ? "bg-black text-white"
                    : "bg-black/5 text-black hover:bg-black/10"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDIES GRID */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {filteredCaseStudies.map((caseStudy, index) => {
              const Icon = getServiceIcon(caseStudy.type);
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                >
                  {/* Content */}
                  <div className={isEven ? "order-1" : "order-2"}>
                    <div className="flex items-center gap-3 mb-6">
                      <Icon className="w-6 h-6 text-black" />
                      <span className="text-xs font-bold uppercase tracking-widest text-black/60">
                        {getServiceLabel(caseStudy.type)}
                      </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-3">
                      {caseStudy.title}
                    </h2>
                    <p className="text-lg text-black/60 mb-8">
                      {caseStudy.subtitle}
                    </p>

                    {/* Challenge & Solution */}
                    <div className="space-y-6 mb-8">
                      <div>
                        <h4 className="text-sm font-bold uppercase tracking-widest text-black/50 mb-2">Challenge</h4>
                        <p className="text-black/70">{caseStudy.challenge}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-bold uppercase tracking-widest text-black/50 mb-2">Solution</h4>
                        <p className="text-black/70">{caseStudy.solution}</p>
                      </div>
                    </div>

                    {/* Results */}
                    <div className="mb-8">
                      <h4 className="text-sm font-bold uppercase tracking-widest text-black/50 mb-4">Results</h4>
                      <ul className="space-y-2">
                        {caseStudy.results.map((result, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 bg-black mt-2 flex-shrink-0"></div>
                            <span className="text-black/70">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button className="bg-black text-white hover:bg-black/80 rounded-none text-sm font-medium tracking-wide">
                      View Full Case Study <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>

                  {/* Image */}
                  <div className={isEven ? "order-2" : "order-1"}>
                    <div className="relative h-96 bg-black/5 overflow-hidden">
                      <img
                        src={caseStudy.image}
                        alt={caseStudy.title}
                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                      />
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className={`${isEven ? "order-3" : "order-4"} lg:col-span-2`}>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-black/10">
                      {Object.entries(caseStudy.metrics).map(([key, value]) => (
                        <div key={key}>
                          <p className="text-3xl font-bold mb-2">{value}</p>
                          <p className="text-xs font-bold uppercase tracking-widest text-black/50">
                            {key.replace(/([A-Z])/g, " $1").trim()}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-32 bg-black text-white border-t border-black/10">
        <div className="container mx-auto px-4 text-center">
          <motion.div {...fadeIn}>
            <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-8">
              Ready to create your success story?
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto mb-12">
              Let's discuss how H2O Studio can help your brand or creator journey reach new heights.
            </p>
            <Button className="bg-white text-black hover:bg-white/90 rounded-none text-sm font-medium tracking-wide px-8 py-3 h-auto">
              Get In Touch <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
