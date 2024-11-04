import { type OfferDto } from "@/types/offers.types";
import { reverseArray } from "@/utils/arrayUtils";
import { apiClient } from "../api-client";

interface getAllOffersArgs {
  setJobOffers: (offers: OfferDto[]) => void;
}

export const getAllOffers = async ({
  setJobOffers,
}: getAllOffersArgs): Promise<OfferDto[]> => {
  const response = await apiClient.get<OfferDto[]>("/offers");
  const reversedResponse = reverseArray<OfferDto>(response.data);
  setJobOffers(reversedResponse);
  return reversedResponse;
};

export const getOfferById = async (id: number): Promise<OfferDto> => {
  const response = await apiClient.get<OfferDto>(`offers/${id}`);
  return response.data;
};
