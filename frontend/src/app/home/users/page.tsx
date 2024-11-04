"use client";

import { ListOfFilters } from "@/components/molecules/ListOfFilters/ListOfFilters";
import { SearchBar } from "@/components/molecules/SearchBar/SearchBar";
import { ListOfCardOffer } from "@/components/organisms/ListOfCardsOffer/ListOfCardOffer";
import { OfferDescription } from "@/components/organisms/OfferDescription/OfferDescription";
import { useRedirectToHomeByRole } from "@/hooks/useRedirectToHomeByRole";

const Jobs = () => {
  useRedirectToHomeByRole();

  return (
    <main className="w-full">
      <div className="mx-auto w-[95%] max-w-[78rem]">
        <SearchBar />
        <ListOfFilters />
        <div className="mt-9 flex justify-center">
          <ListOfCardOffer />
          <OfferDescription />
        </div>
      </div>
    </main>
  );
};

export default Jobs;
