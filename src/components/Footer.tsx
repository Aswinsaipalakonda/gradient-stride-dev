import { Heart, ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="py-12 px-6 bg-card border-t border-border">
        <div className="container mx-auto">
          <div className="text-center space-y-6">
            {/* Logo/Name */}
            <div className="fade-in">
              <h3 className="text-2xl font-bold gradient-text">Srinivas Kanuri</h3>
              <p className="text-muted-foreground mt-2">
                Frontend Developer & UI/UX Designer
              </p>
            </div>

            {/* Quick Links */}
            <div className="fade-in">
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                {[
                  { name: "About", href: "#home" },
                  { name: "Skills", href: "#skills" },
                  { name: "Experience", href: "#experience" },
                  { name: "Projects", href: "#projects" },
                  { name: "Education", href: "#education" }
                ].map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors nav-link"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>

            {/* Copyright & Credits */}
            <div className="fade-in space-y-3">
              <p className="text-sm text-muted-foreground">
                © {currentYear} Srinivas Kanuri. All rights reserved.
              </p>
              
              <p className="text-xs text-muted-foreground flex items-center justify-center gap-1">
                Made with{" "}
                <Heart className="w-3 h-3 text-red-500 animate-pulse" />{" "}
                using React & Tailwind CSS
              </p>

              <div className="flex flex-wrap justify-center gap-4 text-xs text-muted-foreground">
                <span>Privacy Policy</span>
                <span>•</span>
                <span>Terms of Service</span>
                <span>•</span>
                <span>Sitemap</span>
              </div>
            </div>

            {/* Tech Stack Badge */}
            <div className="fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-background border border-border rounded-full text-xs">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-muted-foreground">
                  Built with React, TypeScript & Tailwind CSS
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`scroll-top ${showScrollTop ? 'visible' : ''}`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5 text-white" />
      </button>
    </>
  );
};

export default Footer;