import { create } from "zustand";
import { Message } from "@/components/component/chat/actions";

interface ConversationState {
  chain: Array<Message>;
  addUserMessage: (message: Message) => void;
  addBotMessage: (message: Message) => void;
  clearChain: () => void;
}

export const useConversationStore = create<ConversationState>((set) => ({
  chain: [],
  addUserMessage: (message: Message) => {
    set((state) => ({ chain: [...state.chain, message] }));
  },
  addBotMessage: (message: Message) => {
    set((state) => ({ chain: [...state.chain, message] }));
  },
  clearChain: () => {
    set({ chain: [] });
  },
}));
