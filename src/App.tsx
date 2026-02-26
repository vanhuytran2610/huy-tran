import { useState, useEffect } from "react";
import { Button } from "antd";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import { Hero } from "./components/Hero";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { label: "Home", href: "#home", id: "home" },
    { label: "Skills", href: "#skills", id: "skills" },
    { label: "Experience", href: "#experience", id: "experience" },
    { label: "Projects", href: "#projects", id: "projects" },
    { label: "Contact", href: "#contact", id: "contact" },
  ];

  // Highlight active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.4, rootMargin: "-80px 0px -40% 0px" },
    );

    navItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/40">
        <div className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white">
            <div className="flex justify-between items-center h-16">
              {/* Logo / Name */}
              <div className="shrink-0 mt-2">
                <h3 className="text-xl font-semibold tracking-tight">
                  Tran Van Huy
                </h3>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-1">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={closeMobileMenu}
                    className={`
                    relative px-4 py-2 text-sm font-medium transition-colors rounded-md
                    ${
                      activeSection === item.id
                        ? "text-foreground bg-accent/10"
                        : "text-muted-foreground hover:text-foreground hover:bg-accent/5"
                    }
                  `}
                  >
                    {item.label}
                    {activeSection === item.id && (
                      <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-primary rounded-full" />
                    )}
                  </a>
                ))}
              </div>

              {/* Mobile Hamburger Button */}
              <div className="md:hidden">
                <Button
                  type="text"
                  icon={
                    mobileMenuOpen ? (
                      <CloseOutlined className="text-xl transition-transform duration-300" />
                    ) : (
                      <MenuOutlined className="text-xl transition-transform duration-300" />
                    )
                  }
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="text-foreground hover:bg-accent/10"
                />
              </div>
            </div>
          </div>

          {/* Mobile Menu - Slide down */}
          <div
            className={`
            md:hidden overflow-hidden transition-all duration-300 ease-in-out
            ${mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
          `}
          >
            <div className="bg-white border-t border-border/40 px-4 py-5 space-y-2 shadow-lg">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className={`
                  block px-4 py-3 rounded-lg text-base font-medium transition-colors
                  ${
                    activeSection === item.id
                      ? "bg-accent text-foreground"
                      : "text-muted-foreground hover:bg-accent/5 hover:text-foreground"
                  }
                `}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content - add pt-20 or more if your hero has little top padding */}
      <main className="pt-20 bg-gray-50">
        <div id="home" className="scroll-mt-20">
          <Hero />
        </div>
        <div id="skills" className="scroll-mt-10">
          <Skills />
        </div>
        <div id="experience" className="scroll-mt-10">
          <Experience />
        </div>
        <div id="projects" className="scroll-mt-10">
          <Projects />
        </div>
        <div id="contact" className="scroll-mt-10">
          <Contact />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-secondary/10 py-12 px-4 mt-16">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="mb-4 text-xl font-semibold">Tran Van Huy</h3>
          <p className="text-muted-foreground mb-6">
            AI Engineer | Full-Stack Developer
          </p>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Tran Van Huy. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
