import { Briefcase, Users, Search, Building, HelpCircle } from "lucide-react";
import Section from "./Section";

const subsections = [
  {
    icon: <Users size={20} />,
    title: "Many Jobs Are Filled Through Connections",
    paragraphs: [
      "A large number of roles are filled through referrals or internal networks rather than cold applications. When someone on a team knows you or has spoken with you, they are more likely to recommend you when a role opens.",
      "Building relationships through coffee chats increases the chances that someone may think of you when opportunities arise.",
    ],
  },
  {
    icon: <Search size={20} />,
    title: "Learn What the Interview Process Is Really Like",
    paragraphs: ["Coffee chats can give insight into what to expect before you apply.", "You can often learn:"],
    items: [
      "How many interview rounds the team runs",
      "What technical interviews look like",
      "What skills are tested most heavily",
      "What interviewers are looking for",
    ],
    footer: "This helps you prepare more effectively.",
  },
  {
    icon: <Building size={20} />,
    title: "Understand What the Team Actually Values",
    paragraphs: ["Job descriptions rarely capture what teams prioritize day to day.", "Through a conversation, you may learn:"],
    items: [
      "Which tools the team uses most often",
      "What skills matter most in the role",
      "What makes candidates stand out during hiring",
    ],
  },
  {
    icon: <Briefcase size={20} />,
    title: "Roles Vary Widely Between Companies",
    paragraphs: [
      "Titles like Data Analyst, Business Analyst, and Data Scientist can mean very different things depending on the company.",
      "For example:",
    ],
    items: [
      "Some Data Analyst roles focus mostly on Excel and dashboards",
      "Some Business Analyst roles rely heavily on Python or SQL",
      "Some Data Scientist roles involve analytics and experimentation rather than machine learning",
    ],
    footer: "Two jobs with the same title may have completely different expectations.",
  },
  {
    icon: <HelpCircle size={20} />,
    title: "You Don't Know What You Don't Know",
    paragraphs: [
      "Coffee chats often surface insights that are hard to find elsewhere, such as how teams work together, what challenges they face, and which skills are becoming more important.",
      "These insights can make you far more prepared than someone who only applies online.",
    ],
  },
];

const WorkExperienceSection = () => (
  <Section id="work-experience">
    <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3">
      I Have Work Experience. Why Do a Coffee Chat?
    </h2>
    <p className="text-muted-foreground mb-8 leading-relaxed">
      Many MS Business Analytics students already have internships or full-time experience and may wonder if networking conversations are still necessary. Coffee chats are not just for students with no experience. They help you understand how roles, teams, and hiring processes actually work, which is often not clear from job descriptions.
    </p>

    <div className="space-y-4">
      {subsections.map(({ icon, title, paragraphs, items, footer }) => (
        <div key={title} className="bg-card rounded-xl border border-border p-6">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-primary">{icon}</span>
            <h4 className="font-display font-semibold text-foreground">{title}</h4>
          </div>
          {paragraphs.map((p, i) => (
            <p key={i} className="text-sm text-muted-foreground leading-relaxed mb-2">{p}</p>
          ))}
          {items && (
            <ul className="space-y-1.5 mt-2 mb-2">
              {items.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="text-accent mt-0.5">→</span>{item}
                </li>
              ))}
            </ul>
          )}
          {footer && <p className="text-sm text-muted-foreground leading-relaxed mt-2">{footer}</p>}
        </div>
      ))}
    </div>
  </Section>
);

export default WorkExperienceSection;
