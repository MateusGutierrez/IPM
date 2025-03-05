export interface ContextProps {
  children: React.ReactNode;
}

export interface IContext {
  get_user: () => void;
  get_listed_users: (quantity?: number) => Promise<void>;
}
