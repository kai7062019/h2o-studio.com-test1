import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X, Globe } from "lucide-react";
import { useState } from "react";
import { useLanguage, type Language } from "@/contexts/LanguageContext";

export default function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [showLanguages, setShowLanguages] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { name: t("nav.about"), href: "/about" },
    { name: t("nav.services"), href: "/services" },
    { name: t("nav.joinUs"), href: "/join-us" },
  ];

  const languages: { code: Language; name: string }[] = [
    { code: "en", name: "English" },
    { code: "es", name: "Español" },
    { code: "zh", name: "中文" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-white/10">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="h-12 flex items-center">
          <img 
            src="/images/h2o-unlearn-logo.jpg" 
            alt="H2O Unlearn" 
            className="h-full object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-12">
          {navItems.map((item) => {
            const isActive = location === item.href;
            return (
              <a
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-medium tracking-wide transition-colors relative group",
                  isActive ? "text-white" : "text-white/70 hover:text-white"
                )}
              >
                {item.name}
                <span
                  className={cn(
                    "absolute -bottom-1 left-0 h-px transition-all",
                    isActive ? "w-full bg-white" : "w-0 bg-white group-hover:w-full"
                  )}
                />
              </a>
            );
          })}
        </div>

        {/* Right Section */}
        <div className="hidden md:flex items-center gap-4">
          {/* Language Switcher */}
          <div className="relative">
            <button
              onClick={() => setShowLanguages(!showLanguages)}
              className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-white/70 hover:text-white hover:bg-white/10 transition-colors rounded"
            >
              <Globe size={16} />
              {language.toUpperCase()}
            </button>
            {showLanguages && (
              <div className="absolute top-full right-0 mt-2 bg-black border border-white/20 rounded shadow-lg">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code);
                      setShowLanguages(false);
                    }}
                    className={cn(
                      "w-full text-left px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/10 transition-colors",
                      language === lang.code && "bg-white/20 text-white font-semibold"
                    )}
                  >
                    {lang.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          <Button className="bg-white text-black hover:bg-white/90 rounded-none border-0 text-sm font-medium tracking-wide px-6 py-2 h-auto">
            {t("nav.getStarted")}
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-white" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-black border-b border-white/10 p-6 flex flex-col gap-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-lg font-medium text-white/70 hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <div className="border-t border-white/10 pt-4">
            <p className="text-xs font-bold uppercase tracking-widest text-white/50 mb-3">Language</p>
            <div className="flex gap-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    setLanguage(lang.code);
                    setIsOpen(false);
                  }}
                  className={cn(
                    "px-3 py-2 text-sm font-medium border border-white/20 text-white/70 hover:text-white hover:bg-white/10 transition-colors",
                    language === lang.code && "bg-white text-black border-white"
                  )}
                >
                  {lang.code.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
          <Button className="w-full bg-white text-black rounded-none h-12 text-sm font-medium">
            {t("nav.getStarted")}
          </Button>
        </div>
      )}
    </nav>
  );
}
