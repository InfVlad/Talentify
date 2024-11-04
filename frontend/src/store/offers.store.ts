import { create } from "zustand";
import { type OfferDto } from "@/types/offers.types";

interface OffersState {
  offers: OfferDto[] | [];
  setOffers: (offers: OfferDto[]) => void;
}

export const useOffersStore = create<OffersState>()((set) => ({
  offers: [],
  setOffers: (offers) => set({ offers: offers }),
}));
