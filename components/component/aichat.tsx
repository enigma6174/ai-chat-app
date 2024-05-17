"use client";

import ChatbotComponent from "@/components/component/chat/chatbox";
import { ChatMenu } from "@/components/component/chat/chatMenu";
import { ReactNode, useState } from "react";

interface PropTypes {
  onSelect: Function;
}

export function AIChat({ onSelect }: PropTypes) {
  const [openChatWindow, setWindowState] = useState(false);

  return (
    <div className="py-3 space-y-4">
      <ChatMenu toggleChatWindow={setWindowState} onSelect={onSelect} />
      {openChatWindow && <ChatbotComponent />}
    </div>
  );
}
