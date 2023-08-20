import { create } from "zustand";

type Store = {
	isMenuOpen: boolean;
	setMenuOpen: (_isMenuOpen: boolean) => void;
};

export const useHandleMenu = create<Store>()((set) => ({
	isMenuOpen: true,
	setMenuOpen: (isMenuOpen) => set(() => ({ isMenuOpen })),
}));
