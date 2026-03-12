interface MessageExampleProps {
  type: "linkedin" | "email";
  subject?: string;
  body: string;
}

const MessageExample = ({ type, subject, body }: MessageExampleProps) => (
  <div className="rounded-xl border border-border bg-card overflow-hidden">
    <div className="px-4 py-2 bg-muted/60 border-b border-border">
      <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
        {type === "linkedin" ? "LinkedIn Message" : "Email"}
      </span>
    </div>
    {subject && (
      <div className="px-4 py-2 border-b border-border">
        <span className="text-xs text-muted-foreground">Subject: </span>
        <span className="text-sm font-medium text-foreground">{subject}</span>
      </div>
    )}
    <div className="p-4">
      <p className="text-sm text-foreground leading-relaxed whitespace-pre-line">{body}</p>
    </div>
  </div>
);

export default MessageExample;
