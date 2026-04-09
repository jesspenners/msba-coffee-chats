import { motion } from "framer-motion";
import { Coffee, Users, Search, ClipboardList, HelpCircle, Heart, Globe, BookOpen, CheckCircle, XCircle, Clock, ArrowRight, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Section from "@/components/Section";
import DownloadCard from "@/components/DownloadCard";
import InfoCard from "@/components/InfoCard";
import MessageExample from "@/components/MessageExample";
import WorkExperienceSection from "@/components/WorkExperienceSection";

const pdfs = {
  emailSubjects: "/pdfs/Email_Subject_Lines_That_Get_Results.pdf",
  researchResources: "/pdfs/Informational_Interviews_Research_Resources.pdf",
  questions: "/pdfs/Networking_and_Informational_Interview_Questions.pdf",
  strategy: "/pdfs/Networking_Strategy_2023.pdf",
  netiquette: "/pdfs/Recruiting_Netiquette_Guide.pdf",
};

const Index = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="lg:ml-56">
        <div className="max-w-3xl mx-auto px-6 md:px-8">

          {/* HERO */}
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

              <div className="grid md:grid-cols-2 gap-4">
                <InfoCard
                  icon={<Users size={20} />}
                  title="Who This Is For"
                  items={[
                    "MS Business Analytics students",
                    "International students navigating U.S. networking culture",
                    "Students exploring analytics, product, and data science careers",
                  ]}
                />
                <InfoCard
                  icon={<BookOpen size={20} />}
                  title="What You Will Learn"
                  items={[
                    "What coffee chats are and why they matter",
                    "How to find and message professionals",
                    "How to prepare for and run a coffee chat",
                    "How to follow up professionally",
                  ]}
                />
              </div>
            </motion.div>
          </section>

          {/* WHAT IS A COFFEE CHAT */}
          <Section id="what-is">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3">What Is a Coffee Chat?</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              A coffee chat (also called an informational interview) is a short, casual conversation with a professional where the goal is to learn about their career, role, or company.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-card rounded-xl border border-border p-6">
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle className="text-primary" size={18} />
                  <h4 className="font-display font-semibold text-foreground text-sm">What It Is</h4>
                </div>
                <ul className="space-y-1.5 text-sm text-muted-foreground">
                  <li>A chance to learn about someone's career path</li>
                  <li>A way to understand industries and roles</li>
                  <li>An opportunity to build relationships</li>
                </ul>
              </div>
              <div className="bg-muted/40 rounded-xl border border-border p-6">
                <div className="flex items-center gap-2 mb-3">
                  <XCircle className="text-destructive" size={18} />
                  <h4 className="font-display font-semibold text-foreground text-sm">What It Is Not</h4>
                </div>
                <ul className="space-y-1.5 text-sm text-muted-foreground">
                  <li>A job interview or request for a job</li>
                  <li>A formal evaluation</li>
                </ul>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 rounded-lg bg-muted/50 border border-border">
              <Clock className="text-accent shrink-0" size={20} />
              <p className="text-sm text-muted-foreground">Most coffee chats are <strong className="text-foreground">15–30 minutes</strong> — virtual (Zoom/phone) or in person.</p>
            </div>
          </Section>

          {/* WHY NETWORKING MATTERS */}
          <Section id="why">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3">Why Networking Matters</h2>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <InfoCard
                icon={<Users size={20} />}
                title="Networking Helps You"
                items={[
                  "Learn about careers and companies",
                  "Get advice from experienced professionals",
                  "Build relationships that may lead to opportunities",
                ]}
              />
              <InfoCard
                icon={<Heart size={20} />}
                title="Why Professionals Say Yes"
                items={[
                  "They benefited from similar advice earlier in their careers",
                  "Alumni want to support current students",
                  "Sharing experience is rewarding",
                ]}
              />
            </div>

            <div className="bg-primary/5 rounded-xl p-5 border border-primary/10">
              <p className="text-sm text-foreground font-medium text-center">
                💡 A coffee chat is not about asking for a job — it is about learning and building connections.
              </p>
            </div>
          </Section>

          {/* I HAVE WORK EXPERIENCE */}
          <WorkExperienceSection />

          {/* FINDING PEOPLE */}
          <Section id="finding">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3">Finding People to Reach Out To</h2>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <InfoCard
                icon={<Search size={20} />}
                title="Good People to Contact"
                items={[
                  "Alumni from your program",
                  "People in roles you want",
                  "Employees at target companies",
                  "Professionals recommended by others",
                ]}
              />
              <InfoCard
                icon={<ClipboardList size={20} />}
                title="Where to Find Them"
                items={[
                  "LinkedIn alumni & company search",
                  <><a href="https://usc.peoplegrove.com/" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary/80">Trojan Network</a> (USC alumni directory)</>,
                  "Guest speakers and professors",
                  "Relationships through professors",
                ]}
                variant="muted"
              />
            </div>

            <DownloadCard title="Research Resources for Informational Interviews" href={pdfs.researchResources} />
          </Section>

          {/* WRITING MESSAGES */}
          <Section id="messaging">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3">Writing Your First Message</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Keep it short. Mention a shared connection, ask for a brief conversation, and thank them.
            </p>

            <div className="space-y-4 mb-6">
              <MessageExample
                type="linkedin"
                body={`Hi Alex,\n\nCongratulations on your promotion! / Congrats on two years at Spotify! / Hope your week is going well!\n\nI'm currently an MSBA student at USC and would love to learn about your experience at Spotify!\n\nWould you be available for a brief 15-minute call next week? Happy to work around your schedule.\n\nFight On!\nTommy`}
              />
              <MessageExample
                type="email"
                subject="USC MSBA Student — Interested in Product Analytics at Spotify"
                body={`Hi Alex,\n\nI'm a USC MS Business Analytics student exploring product analytics roles at Spotify, and I'd love to know more about your experience on the Growth Analytics team.\n\nA bit about me: I'm currently interning at Deloitte, where I work on building dashboards and running A/B test analyses — similar to the experimentation work your team does.\n\nWould you be open to a 15-minute chat sometime in the next few weeks? Happy to work around your schedule!\n\nBest,\nTommy`}
              />
            </div>

            <DownloadCard title="Email Subject Lines That Get Results" href={pdfs.emailSubjects} />
          </Section>

          {/* PREPARING */}
          <Section id="preparing">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3">Preparing for the Coffee Chat</h2>

            <InfoCard
              title="Before the Conversation, Research"
              items={[
                "The person's career path and current role",
                "The company and any recent news",
              ]}
            />

            <div className="bg-card rounded-xl border border-border p-6 mt-6 mb-6">
              <h4 className="font-display font-semibold text-foreground mb-3">Prepare a Short Introduction</h4>
              <p className="text-sm text-muted-foreground mb-3">
                This is not your interview pitch. Keep it short, digestible, and easy for them to translate. End on a note of gratitude.
              </p>
              <div className="bg-muted/50 rounded-lg p-4">
                <p className="text-sm text-muted-foreground italic">
                  "I'm currently completing my MS in Business Analytics at USC Marshall, where I'm leaning into Product Management / Data Science / Data Analytics. Previously, I've worked in X industry and have experience doing Y. I'm excited to connect today and learn more about your experience transitioning into this space, and any advice you have for someone early in their career. I'd love to turn it over to you and hear more about your journey!"
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 rounded-lg bg-destructive/10 border border-destructive/20 mb-6">
              <AlertTriangle className="text-destructive shrink-0" size={20} />
              <p className="text-sm text-muted-foreground"><strong className="text-foreground">Important:</strong> Do not ask anything you could find with a Google search, e.g., "What positions are you hiring for?" or "Where did you work before?"</p>
            </div>

            <p className="text-sm text-muted-foreground mb-4">Prepare 5–7 thoughtful questions.</p>
            <DownloadCard title="Networking Strategy Guide" description="Comprehensive preparation strategies" href={pdfs.strategy} />
          </Section>

          {/* QUESTIONS */}
          <Section id="questions">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3">Questions to Ask</h2>

            <div className="space-y-3 mb-6">
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

            <DownloadCard title="Networking & Informational Interview Questions" href={pdfs.questions} />
          </Section>

          {/* RUNNING THE CHAT */}
          <Section id="running">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3">Running the Coffee Chat</h2>

            <div className="bg-card rounded-xl border border-border p-6 mb-6">
              <div className="space-y-3">
                {[
                  { time: "2 min", label: "Greeting and introduction" },
                  { time: "12–25 min", label: "Ask questions, listen, and take notes" },
                  { time: "2 min", label: "Ask for advice, thank them" },
                ].map(({ time, label }, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-md min-w-[70px] text-center">{time}</span>
                    <span className="text-sm text-muted-foreground">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            <DownloadCard title="Recruiting Netiquette Guide" description="Best practices for virtual and in-person meetings" href={pdfs.netiquette} />
          </Section>

          {/* ENDING */}
          <Section id="ending">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3">Ending the Conversation</h2>
            <div className="bg-muted/50 rounded-xl p-6 border border-border">
              <p className="text-sm text-muted-foreground italic">
                "Thank you for taking the time to speak today. I really appreciate hearing about your experience and your advice."
              </p>
            </div>
          </Section>

          {/* THANK YOU */}
          <Section id="thankyou">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3">Sending a Thank You Message</h2>
            <p className="text-muted-foreground mb-6">Send within 24 hours.</p>

            <MessageExample
              type="email"
              body={`Hi Alex,\n\nThank you again for taking the time to speak today. I really enjoyed hearing about your experience in product analytics and appreciate the advice you shared about preparing for technical interviews.\n\nYour suggestion to focus on SQL case studies was especially helpful, and I plan to start working through some this week. I also appreciated learning more about the team culture at Spotify.\n\nI hope to stay in touch, and I will be sure to keep you updated on how things go.\n\nBest,\nJess`}
            />
          </Section>

          {/* STAYING IN TOUCH */}
          <Section id="staying">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3">Staying in Touch</h2>
            <p className="text-muted-foreground mb-6">Networking works best when relationships continue over time.</p>
            <InfoCard
              title="Ways to Stay Connected"
              items={[
                "Send a brief update on your progress",
                "Share something relevant to their work",
                "Congratulate them on a new role or milestone",
                "Reconnect during your job search",
              ]}
            />
          </Section>

          {/* TRACKING */}
          <Section id="tracking">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3">Track Your Networking</h2>
            <p className="text-muted-foreground mb-6">Tracking conversations helps you stay organized. I use <strong className="text-foreground">Monday.com</strong> (free), but many students use Excel or Notion.</p>

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
          </Section>

          {/* INTERNATIONAL STUDENTS */}
          <Section id="international">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3">Tips for International Students</h2>
            <p className="text-muted-foreground mb-6">Networking culture in the U.S. may feel unfamiliar.</p>

            <InfoCard
              icon={<Globe size={20} />}
              title="Important Things to Know"
              items={[
                "Reaching out to professionals is normal and expected",
                "Short, direct messages are the standard",
                "Many professionals are happy to help students",
              ]}
            />
          </Section>

          {/* RESOURCES */}
          <Section id="resources" className="pb-24">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3">Resources</h2>
            <p className="text-muted-foreground mb-8">All downloadable materials in one place.</p>

            <div className="space-y-3">
              <DownloadCard title="Email Subject Lines That Get Results" href={pdfs.emailSubjects} />
              <DownloadCard title="Research Resources for Informational Interviews" href={pdfs.researchResources} />
              <DownloadCard title="Networking & Informational Interview Questions" href={pdfs.questions} />
              <DownloadCard title="Networking Strategy Guide" href={pdfs.strategy} />
              <DownloadCard title="Recruiting Netiquette Guide" href={pdfs.netiquette} />
            </div>
          </Section>

        </div>
      </div>
    </div>
  );
};

export default Index;
