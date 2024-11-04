import { useQuery, type UseQueryResult } from "@tanstack/react-query";
import { useOffersStore } from "@/store/offers.store";
import { type OfferDto } from "@/types/offers.types";
import { getAllOffers, getOfferById } from "./offersApi";

export const useGetAllOffers = (): UseQueryResult<OfferDto[]> => {
  const setJobOffers = useOffersStore((state) => state.setOffers);

  return useQuery({
    queryKey: ["offers"],
    queryFn: () => getAllOffers({ setJobOffers }),
  });
};

export const useGetOfferById = (
  id: number
): UseQueryResult<OfferDto | null> => {
  return useQuery<OfferDto | null>({
    queryKey: ["offer", id],
    queryFn: () => getOfferById(id),
    enabled: id !== 0,
  });
};
