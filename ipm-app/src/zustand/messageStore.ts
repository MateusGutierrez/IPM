import { create } from 'zustand';

interface Message {
  name: string;
  email: string;
  message: string;
}

interface MessageState {
  messages: Message[];
  addMessage: (data: Message) => void;
}

const useMessageStore = create<MessageState>(set => ({
  messages: [],
  addMessage: data => set(state => ({ messages: [...state.messages, data] }))
}));

export default useMessageStore;
