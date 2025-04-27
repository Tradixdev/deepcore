"use client";
import { Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function CopyButton({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <Button
      onClick={handleCopy}
      variant="ghost"
      size="sm"
      className={className}
    >
      <Copy className="w-4 h-4 mr-1" />
      {copied ? "Copied!" : "Copy"}
    </Button>
  );
}
