"use client";

import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface Props {
  message: string;
}

export default function BotMessage({ message }: Props) {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 p-4">
      <div className="flex items-start gap-4">
        <img
          alt="AI Avatar"
          className="rounded-full"
          height={40}
          src="/bot.png"
          style={{
            aspectRatio: "40/40",
            objectFit: "cover",
          }}
          width={40}
        />
        <div className="flex-1">
          <p className="font-bold">AI Assistant</p>
          <div className="prose dark:prose-invert">
            <Markdown remarkPlugins={[remarkGfm]}>{message}</Markdown>
          </div>
        </div>
      </div>
    </div>
  );
}
