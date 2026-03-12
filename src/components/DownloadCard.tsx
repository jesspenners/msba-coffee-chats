import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DownloadCardProps {
  title: string;
  description?: string;
}

const DownloadCard = ({ title, description }: DownloadCardProps) => (
  <div className="flex items-center justify-between gap-4 p-4 rounded-lg bg-card border border-border">
    <div>
      <p className="font-body font-semibold text-foreground text-sm">{title}</p>
      {description && <p className="text-xs text-muted-foreground mt-0.5">{description}</p>}
    </div>
    <Button variant="download" size="sm" className="shrink-0 gap-1.5">
      <Download size={14} />
      PDF
    </Button>
  </div>
);

export default DownloadCard;
