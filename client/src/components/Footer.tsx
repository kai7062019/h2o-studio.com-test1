import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-black/10 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-2xl font-bold tracking-tight inline-block mb-6">
              H2O<span className="font-light">Studio</span>
            </Link>
            <p className="text-sm text-black/60 max-w-md leading-relaxed">
              We create digital experiences that resonate with the next generation. Premium creative agency for modern influencers.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-6 text-black">Explore</h4>
            <ul className="space-y-3">
              {[
              { name: "About", href: "/about" },
              { name: "Services", href: "/services" },
              { name: "Creators", href: "/join-us?type=creator" },
              { name: "Join Us", href: "/join-us" }
            ].map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-sm text-black/60 hover:text-black transition-colors">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-6 text-black">Connect</h4>
            <ul className="space-y-3">
              {["Instagram", "TikTok", "YouTube", "Twitter"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-black/60 hover:text-black transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-black/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-black/40 uppercase tracking-widest">
            © 2025 H2O Studio. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="/privacy" className="text-xs text-black/40 hover:text-black uppercase tracking-widest">Privacy</a>
            <a href="/terms" className="text-xs text-black/40 hover:text-black uppercase tracking-widest">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
