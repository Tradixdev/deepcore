import { CopyButton } from "./copy-button";
import { cn } from "@/lib/utils";

export function CodeBlock({
  code,
  filename,
  language,
}: {
  code: string;
  filename?: string;
  language: string;
}) {
  return (
    <div className="bg-[#1E1E1E] p-4 rounded-lg relative">
      <div className="bg-[#f2f2f2] rounded-lg text-black mb-4 p-2 flex items-center justify-between">
        {filename && <div className="text-sm font-mono">{filename}</div>}
        <CopyButton text={code} className="" />
      </div>
      <div className=" rounded-lg p-2">
        <pre
          className={cn(
            "text-sm overflow-x-auto text-white font-mono",
            language
          )}
        >
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
}
