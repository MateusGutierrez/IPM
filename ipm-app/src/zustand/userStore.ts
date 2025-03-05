import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export interface User {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  location: {
    street: {
      number: number;
      name: string;
    };
    city: string;
    state: string;
    country: string;
    postcode: string | number;
    coordinates: {
      latitude: string;
      longitude: string;
    };
    timezone: {
      offset: string;
      description: string;
    };
  };
  email: string;
  phone: string;
  cell: string;
  id: {
    name: string;
    value: string | null;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  nat: string;
}

interface UserState {
  users: User[];
  setUsers: (users: User[]) => void;
}

const useUserStore = create<UserState>()(
  persist(
    set => ({
      users: [],
      setUsers: users => set(() => ({ users }))
    }),
    {
      name: 'user-storage',
      storage: createJSONStorage(() => sessionStorage)
    }
  )
);

export default useUserStore;
