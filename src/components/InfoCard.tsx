import { ReactNode } from "react";

interface InfoCardProps {
  icon?: ReactNode;
  title: string;
  items: ReactNode[];
  variant?: "default" | "muted";
}

const InfoCard = ({ icon, title, items, variant = "default" }: InfoCardProps) => (
  <div className={`rounded-xl p-6 ${variant === "muted" ? "bg-muted/50" : "bg-card border border-border"}`}>
    <div className="flex items-center gap-2 mb-4">
      {icon && <span className="text-primary">{icon}</span>}
      <h4 className="font-display font-semibold text-foreground text-lg">{title}</h4>
    </div>
    <ul className="space-y-2">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
          <span className="text-accent mt-1">•</span>
          {item}
        </li>
      ))}
    </ul>
  </div>
);

export default InfoCard;
