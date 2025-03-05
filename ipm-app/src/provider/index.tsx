import { createContext } from 'react';
import { IContext, ContextProps } from './interface';
import { api } from '@/api';

// eslint-disable-next-line react-refresh/only-export-components
export const Context = createContext({} as IContext);

export const Provider = ({ children }: ContextProps) => {
  const get_user = async () => {
    const response = await api.get('user');
    console.log(response.data);
  };

  const get_listed_users = async (quantity: number) => {
    try {
      const response = await api.get(`list?quantity=${quantity}`);
      console.log(response);
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
