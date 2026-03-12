import { motion } from "framer-motion";
import { Coffee, Users, MessageSquare, Search, ClipboardList, HelpCircle, Play, HandshakeIcon, Heart, Send, Globe, BookOpen, CheckCircle, XCircle, Clock, ArrowRight, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Section from "@/components/Section";
import DownloadCard from "@/components/DownloadCard";
import InfoCard from "@/components/InfoCard";
import MessageExample from "@/components/MessageExample";
import WorkExperienceSection from "@/components/WorkExperienceSection";

const Index = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="lg:ml-56">
        <div className="max-w-3xl mx-auto px-6 md:px-8">

          {/* 1. HERO */}
          <section id="home" className="min-h-screen flex flex-col justify-center pt-16 lg:pt-0">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="flex items-center gap-2 mb-6">
                <Coffee className="text-primary" size={28} />
                <span className="text-sm font-body font-semibold text-primary tracking-wide uppercase">Networking Guide</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight mb-4">
                Coffee Chats &<br />Informational Networking
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground font-body leading-relaxed mb-8 max-w-xl">
                A step-by-step guide for MS Business Analytics students to build professional relationships and learn about careers in analytics.
              </p>
              <div className="flex flex-wrap gap-3 mb-16">
                <Button variant="hero" size="lg" onClick={() => scrollTo("what-is")}>
                  Start the Guide <ArrowRight size={16} />
                </Button>
                <Button variant="hero-outline" size="lg" onClick={() => scrollTo("resources")}>
                  Download Templates
                </Button>
              </div>

              {/* Why This Guide */}
              <div className="bg-card rounded-xl border border-border p-6 md:p-8 mb-8">
                <h3 className="font-display font-semibold text-foreground text-xl mb-3">Why This Guide Exists</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Networking can feel intimidating, especially if you are early in your career or new to U.S. professional culture. Coffee chats are one of the most effective ways to learn about roles, industries, and companies while building genuine professional relationships.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">This guide walks through:</p>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                  {["How to identify people to reach out to", "How to send a message", "How to prepare for a conversation", "How to follow up and stay connected"].map((t, i) => (
                    <li key={i} className="flex items-start gap-2"><span className="text-accent mt-0.5">→</span>{t}</li>
                  ))}
                </ul>
              </div>

              {/* Who & What */}
              <div className="grid md:grid-cols-2 gap-4">
                <InfoCard
                  icon={<Users size={20} />}
                  title="Who This Is For"
                  items={[
                    "MS Business Analytics students",
                    "International students navigating U.S. networking culture",
                    "Students exploring careers in data analytics, product analytics, and data science",
                  ]}
                />
                <InfoCard
                  icon={<BookOpen size={20} />}
                  title="What You Will Learn"
                  items={[
                    "What coffee chats are and why they matter",
                    "How to find professionals to connect with",
                    "How to write networking messages",
                    "How to run a 15–20 minute coffee chat",
                    "How to follow up professionally",
                  ]}
                />
              </div>
            </motion.div>
          </section>

          {/* 2. WHAT IS A COFFEE CHAT */}
          <Section id="what-is">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3">What Is a Coffee Chat?</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              A coffee chat (also called an informational interview) is a short conversation with a professional where the goal is to learn about their career, role, or company.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="bg-card rounded-xl border border-border p-6">
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle className="text-primary" size={20} />
                  <h4 className="font-display font-semibold text-foreground">What It Is</h4>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>A chance to learn about someone's career path</li>
                  <li>A way to understand industries and roles</li>
                  <li>An opportunity to build relationships</li>
                </ul>
              </div>
              <div className="bg-muted/40 rounded-xl border border-border p-6">
                <div className="flex items-center gap-2 mb-4">
                  <XCircle className="text-destructive" size={20} />
                  <h4 className="font-display font-semibold text-foreground">What It Is Not</h4>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>A job interview</li>
                  <li>A request for a job</li>
                  <li>A formal evaluation</li>
                </ul>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 rounded-lg bg-muted/50 border border-border mb-6">
              <Clock className="text-accent shrink-0" size={20} />
              <p className="text-sm text-muted-foreground">Most coffee chats are <strong className="text-foreground">15–30 minutes</strong>, virtual (Zoom or phone), or in person, and are casual conversations.</p>
            </div>

            <DownloadCard title="Coffee Chat Basics" description="Overview of what coffee chats are" />
          </Section>

          {/* 3. WHY NETWORKING MATTERS */}
          <Section id="why">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3">Why Networking Matters</h2>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <InfoCard
                icon={<Users size={20} />}
                title="Networking Helps You"
                items={[
                  "Learn about careers",
                  "Understand companies",
                  "Receive advice from experienced professionals",
                  "Build relationships that may lead to opportunities",
                ]}
              />
              <InfoCard
                icon={<Heart size={20} />}
                title="Why Professionals Say Yes"
                items={[
                  "They benefited from similar advice earlier in their careers",
                  "Alumni often want to support current students",
                  "Sharing their experience is rewarding",
                ]}
              />
            </div>

            <div className="bg-primary/5 rounded-xl p-6 border border-primary/10">
              <p className="text-sm text-foreground font-medium text-center">
                💡 A coffee chat is not about asking for a job. It is about learning and building connections.
              </p>
            </div>
          </Section>

          {/* 4. FINDING PEOPLE */}
          <Section id="finding">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3">Finding People to Reach Out To</h2>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <InfoCard
                icon={<Search size={20} />}
                title="Good People to Contact"
                items={[
                  "Alumni from your program",
                  "People working in roles you want",
                  "Employees at companies you are interested in",
                  "Professionals recommended by someone you spoke with",
                ]}
              />
              <InfoCard
                icon={<ClipboardList size={20} />}
                title="Examples of Relevant Roles"
                items={[
                  "Data Analyst",
                  "Business Intelligence Analyst",
                  "Product Analyst",
                  "Analytics Manager",
                  "Data Scientist",
                ]}
                variant="muted"
              />
            </div>

            <InfoCard
              title="Where to Find People"
              items={[
                "LinkedIn alumni search",
                "LinkedIn company pages",
                "University alumni directories",
                "Guest speakers and professors",
                "Internship coworkers",
              ]}
            />

            <div className="mt-6">
              <DownloadCard title="Finding Professionals to Contact" />
            </div>
          </Section>

          {/* 5. WRITING MESSAGES */}
          <Section id="messaging">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3">Writing Your First Message</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Keep it short. Mention a shared connection (school, company, role), ask for a short conversation, and thank them for their time.
            </p>

            <div className="space-y-4 mb-6">
              <MessageExample
                type="linkedin"
                body={`Hi Alex,\nI'm an MS Business Analytics student at USC and came across your profile while exploring analytics roles at Spotify. I'd love to learn more about your experience and would really appreciate 15 minutes if you're open to connecting.`}
              />
              <MessageExample
                type="email"
                subject="USC MSBA Student Interested in Your Experience"
                body={`Hi Alex,\n\nI'm currently an MS Business Analytics student at USC and found your profile while researching analytics roles at Spotify. Your background in product analytics caught my attention, and I would love to learn more about your experience if you might have 15 minutes for a quick conversation.\n\nThank you for your time.\n\nBest,\nJess`}
              />
            </div>

            <DownloadCard title="Networking Message Templates" />
          </Section>

          {/* 6. PREPARING */}
          <Section id="preparing">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3">Preparing for the Coffee Chat</h2>

            <InfoCard
              title="Before the Conversation, Research"
              items={[
                "The person's career path",
                "Their current role",
                "The company they work for",
                "Recent company news",
              ]}
            />

            <div className="bg-card rounded-xl border border-border p-6 mt-6 mb-6">
              <h4 className="font-display font-semibold text-foreground mb-3">Prepare a Short Introduction</h4>
              <div className="bg-muted/50 rounded-lg p-4">
                <p className="text-sm text-muted-foreground italic">
                  "Hi, I'm Jess. I'm currently an MS Business Analytics student at USC and previously worked in experiential marketing and analytics. I'm exploring analytics roles in tech and was excited to hear about your work at Netflix."
                </p>
              </div>
            </div>

            <p className="text-sm text-muted-foreground mb-4">Prepare 5–7 thoughtful questions to bring to the conversation.</p>
            <DownloadCard title="Coffee Chat Preparation Checklist" />
          </Section>

          {/* 7. QUESTIONS */}
          <Section id="questions">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3">Questions to Ask</h2>

            <div className="space-y-4 mb-6">
              {[
                { cat: "Career Path", qs: ["How did you transition into this role?", "What experiences helped you most early in your career?"] },
                { cat: "Day-to-Day Work", qs: ["What does a typical week look like in your role?"] },
                { cat: "Skills", qs: ["What technical skills are most important for someone entering this field?"] },
                { cat: "Industry Insights", qs: ["What trends are shaping analytics in your industry right now?"] },
                { cat: "Closing", qs: ["Is there anyone else you would recommend I speak with?"] },
              ].map(({ cat, qs }) => (
                <div key={cat} className="bg-card rounded-xl border border-border p-5">
                  <h4 className="font-display font-semibold text-foreground text-sm mb-2">{cat}</h4>
                  {qs.map((q, i) => (
                    <p key={i} className="text-sm text-muted-foreground mb-1">"{q}"</p>
                  ))}
                </div>
              ))}
            </div>

            <DownloadCard title="Coffee Chat Question List" />
          </Section>

          {/* 8. RUNNING */}
          <Section id="running">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3">Running the Coffee Chat</h2>

            <div className="bg-card rounded-xl border border-border p-6 mb-6">
              <h4 className="font-display font-semibold text-foreground mb-4">Suggested Structure</h4>
              <div className="space-y-3">
                {[
                  { time: "2 min", label: "Greeting and introduction" },
                  { time: "12–15 min", label: "Ask questions, listen, and take notes" },
                  { time: "2 min", label: "Ask for advice, thank them" },
                ].map(({ time, label }, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-md min-w-[70px] text-center">{time}</span>
                    <span className="text-sm text-muted-foreground">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </Section>

          {/* 9. ENDING */}
          <Section id="ending">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3">Ending the Conversation</h2>
            <div className="bg-muted/50 rounded-xl p-6 border border-border">
              <p className="text-sm text-muted-foreground italic">
                "Thank you for taking the time to speak today. I really appreciate hearing about your experience and your advice."
              </p>
            </div>
          </Section>

          {/* 10. THANK YOU */}
          <Section id="thankyou">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3">Sending a Thank You Message</h2>
            <p className="text-muted-foreground mb-6">Send within 24 hours.</p>

            <MessageExample
              type="email"
              body={`Hi Alex,\n\nThank you again for taking the time to speak today. I really enjoyed hearing about your experience in product analytics and appreciate the advice you shared.\n\nBest,\nJess`}
            />

            <div className="mt-6">
              <DownloadCard title="Thank You Message Templates" />
            </div>
          </Section>

          {/* 11. STAYING IN TOUCH */}
          <Section id="staying">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3">Staying in Touch</h2>
            <p className="text-muted-foreground mb-6">Networking works best when relationships continue over time.</p>
            <InfoCard
              title="Ways to Stay Connected"
              items={[
                "Send a brief update",
                "Share something relevant",
                "Congratulate them on a new role",
                "Reconnect during your job search",
              ]}
            />
          </Section>

          {/* 12. TRACKING */}
          <Section id="tracking">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3">Track Your Networking</h2>
            <p className="text-muted-foreground mb-6">Tracking conversations helps you stay organized.</p>

            <div className="bg-card rounded-xl border border-border overflow-hidden mb-6">
              <div className="grid grid-cols-3 md:grid-cols-6 gap-px bg-border">
                {["Name", "Company", "Role", "Date", "Notes", "Follow Up"].map((h) => (
                  <div key={h} className="bg-muted/60 px-3 py-2 text-xs font-semibold text-foreground">{h}</div>
                ))}
                {["Alex", "Spotify", "Product Analyst", "Mar 1", "Great tips on SQL", "Send article"].map((c) => (
                  <div key={c} className="bg-card px-3 py-2 text-xs text-muted-foreground">{c}</div>
                ))}
              </div>
            </div>

            <DownloadCard title="Networking Tracker Template" />
          </Section>

          {/* 13. INTERNATIONAL STUDENTS */}
          <Section id="international">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3">Tips for International Students</h2>
            <p className="text-muted-foreground mb-6">Networking culture in the U.S. may feel unfamiliar.</p>

            <InfoCard
              icon={<Globe size={20} />}
              title="Important Things to Know"
              items={[
                "Reaching out to professionals is normal",
                "Short messages are expected",
                "Many professionals are happy to help students",
                "Conversations are often informal",
              ]}
            />
          </Section>

          {/* 14. RESOURCES */}
          <Section id="resources" className="pb-24">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3">Resources</h2>
            <p className="text-muted-foreground mb-8">All downloadable materials in one place.</p>

            <div className="space-y-3">
              <DownloadCard title="Coffee Chat Basics" />
              <DownloadCard title="Networking Message Templates" />
              <DownloadCard title="Preparation Checklist" />
              <DownloadCard title="Coffee Chat Question List" />
              <DownloadCard title="Thank You Templates" />
              <DownloadCard title="Networking Tracker" />
            </div>
          </Section>

        </div>
      </div>
    </div>
  );
};

export default Index;
