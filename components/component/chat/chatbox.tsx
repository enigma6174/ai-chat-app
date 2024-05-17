"use client";

import { useState } from "react";

import UserMessage from "@/components/component/chat/userMessage";
import { getAnswer } from "@/components/component/chat/actions";
import BotMessage from "@/components/component/chat/botMessage";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Spinner } from "@/components/component/spinner";
import { Input } from "@/components/ui/input";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { useConversationStore } from "@/app/store/conversationStore";
import { ChatContextMenu } from "@/components/component/chat/chatContextMenu";

export default function ChatbotComponent() {
  const { chain, addUserMessage, addBotMessage, clearChain } =
    useConversationStore();

  const [submitFlag, setSubmitFlag] = useState(false);
  const [userMessage, setUserMessage] = useState("");

  function handleInput(e: any) {
    setUserMessage(e.target.value);
  }

  async function handleFormSubmit(e: any) {
    e.preventDefault();
    setSubmitFlag(true);

    // create the payload for submitting user query
    const payload = { message: userMessage };

    // update the conversation chain with user message
    addUserMessage({ content: userMessage, role: "user" });

    // submit the user query and capture the response
    const response = await getAnswer(payload);

    // update the conversation chain with bot message
    addBotMessage({ content: response, role: "ai" });
    setSubmitFlag(false);
    setUserMessage("");
  }

  return (
    <div className="p-6 space-y-4">
      <ChatContextMenu>
        <ScrollArea className="flex flex-col gap-4 h-[80vh] rounded-md border border-s-2 p-4">
          {chain.map((message, index) => (
            <>
              {message.role === "ai" && (
                <BotMessage key={index} message={message.content} />
              )}
              {message.role === "user" && (
                <UserMessage key={index} message={message.content} />
              )}
            </>
          ))}
          {submitFlag && <Spinner />}
        </ScrollArea>
      </ChatContextMenu>

      <div className="flex flex-col gap-4 w-full">
        <form onSubmit={handleFormSubmit}>
          <Input
            className="w-full"
            placeholder="Type your message..."
            value={userMessage}
            onChange={handleInput}
            onKeyDownCapture={(keyPress) => {
              if (keyPress.key === "c") console.log(keyPress);
            }}
            disabled={submitFlag}
          />
        </form>
      </div>
    </div>
  );
}

// {chain.map((message, index) => (
//               <>
//                 {message.role === "ai" && (
//                   <BotMessage key={index} message={message.content} />
//                 )}
//                 {message.role === "user" && (
//                   <UserMessage key={index} message={message.content} />
//                 )}
//               </>
//             ))}
