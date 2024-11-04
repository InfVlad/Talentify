import { create } from "zustand";

type ModalStore = {
  isOpen: boolean;
  showSuccessfulApply: boolean;
  openModal: () => void;
  closeModal: () => void;
  setShowSuccessfulApply: () => void;
  setHideSuccessfulApply: () => void;
};

export const useModalStore = create<ModalStore>((set) => ({
  isOpen: false,
  openModal: () => set({ isOpen: true }),
  closeModal: () => set({ isOpen: false, showSuccessfulApply: false }),
  showSuccessfulApply: false,
  setShowSuccessfulApply: () => set({ showSuccessfulApply: true }),
  setHideSuccessfulApply: () => set({ showSuccessfulApply: false }),
}));
