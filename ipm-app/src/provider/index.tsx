import { createContext } from 'react';
import { IContext, ContextProps } from './interface';
import { api } from '@/api';
import { useStore } from 'zustand';
import useUserStore from '@/zustand/userStore';

// eslint-disable-next-line react-refresh/only-export-components
export const Context = createContext({} as IContext);

export const Provider = ({ children }: ContextProps) => {
  const { setUsers } = useStore(useUserStore);

  const get_user = async () => {
    const response = await api.get('user');
    console.log(response.data);
  };

  const get_listed_users = async (quantity?: number): Promise<void> => {
    try {
      const response = await api.get(`list/?quantity=${quantity}`);
      setUsers(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Context.Provider value={{ get_user, get_listed_users }}>
      {children}
    </Context.Provider>
  );
};
