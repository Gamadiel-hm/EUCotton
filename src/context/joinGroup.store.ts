import { create } from 'zustand';

interface storeJoinGroup {
  joinGroup: string;
  setJoinGroup: (newGroup: string) => void;
}

export const useJoinGroup = create<storeJoinGroup>()((set) => ({
  joinGroup: '',
  setJoinGroup: (newGroup) => set({ joinGroup: newGroup })
}));
