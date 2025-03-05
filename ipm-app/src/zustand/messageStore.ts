import { create } from 'zustand';

export interface Message {
  id: string;
  name: string;
  email: string;
  message: string;
}

interface MessageState {
  messages: Message[];
  addMessage: (data: Message) => void;
  removeMessage: (id: string) => void;
}

const useMessageStore = create<MessageState>(set => ({
  messages: [],
  addMessage: data => set(state => ({ messages: [...state.messages, data] })),
  removeMessage: id =>
    set(state => ({
      messages: state.messages.filter(message => message.id !== id)
    }))
}));

export default useMessageStore;
