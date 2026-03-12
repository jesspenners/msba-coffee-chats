import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const sections = [
  { id: "home", label: "Home" },
  { id: "what-is", label: "What Is a Coffee Chat?" },
  { id: "why", label: "Why Networking Matters" },
  { id: "work-experience", label: "I Have Experience" },
  { id: "finding", label: "Finding People" },
  { id: "messaging", label: "Writing Messages" },
  { id: "preparing", label: "Preparing" },
  { id: "questions", label: "Questions to Ask" },
  { id: "running", label: "Running the Chat" },
  { id: "ending", label: "Ending" },
  { id: "thankyou", label: "Thank You" },
  { id: "staying", label: "Staying in Touch" },
  { id: "tracking", label: "Tracking" },
  { id: "international", label: "International Students" },
  { id: "resources", label: "Resources" },
];

const Navigation = () => {
  const [active, setActive] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -75% 0px" }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <>
      {/* Desktop sidebar nav */}
      <nav className="hidden lg:flex fixed left-0 top-0 h-full w-56 flex-col border-r border-border bg-card/80 backdrop-blur-sm z-50 py-8 px-4 overflow-y-auto">
        <h3 className="text-sm font-display font-bold text-primary mb-6 px-2">Coffee Chat Guide</h3>
        <div className="flex flex-col gap-0.5">
          {sections.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={`text-left text-sm px-2 py-1.5 rounded-md transition-colors duration-200 ${
                active === id
                  ? "bg-primary text-primary-foreground font-medium"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </nav>

      {/* Mobile top bar */}
      <nav className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-sm border-b border-border">
        <div className="flex items-center justify-between px-4 py-3">
          <span className="font-display font-bold text-primary text-sm">Coffee Chat Guide</span>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="text-foreground">
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="px-4 pb-4 flex flex-col gap-0.5 max-h-[60vh] overflow-y-auto"
          >
            {sections.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className={`text-left text-sm px-2 py-1.5 rounded-md transition-colors ${
                  active === id
                    ? "bg-primary text-primary-foreground font-medium"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {label}
              </button>
            ))}
          </motion.div>
        )}
      </nav>
    </>
  );
};

export default Navigation;
