"use client";

import { Text } from "@/components/atoms/Text/Text";
import { useGetAllOffers } from "@/services/offers/offersQuery";
import { CardJobOffer } from "../CardJobOffer/CardJobOffer";
import { ListOfCardOfferSkeleton } from "./ListOfCardOfferSkeleton";

export const ListOfCardOffer = () => {
  const { isPending, data: allOffersList, isError } = useGetAllOffers();

  if (isPending) return <ListOfCardOfferSkeleton />;

  if (isError) return <p>Error loading offers.</p>;

  return (
    <div className="mr-2 flex max-h-[700px] flex-col overflow-scroll rounded-[26px] bg-gray-50">
      <Text variant="Subheadline-2/20" className="mt-4 p-4">
        Resultados ({allOffersList?.length})
      </Text>
      {allOffersList &&
        allOffersList?.length > 0 &&
        allOffersList?.map((offer) => (
          <CardJobOffer key={offer.id} offer={offer} />
        ))}
    </div>
  );
};
