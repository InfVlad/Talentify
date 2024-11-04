import { useSearchParams } from "next/navigation";
import { useOffersStore } from "@/store/offers.store";

export const useJobOffers = () => {
  const allJobOffersList = useOffersStore((state) => state.offers);
  const params = useSearchParams();
  const idFromParams = Number(params.get("id"));
  const jobOfferId = idFromParams || (allJobOffersList?.[0]?.id ?? 0);

  return {
    jobOfferId,
  };
};
