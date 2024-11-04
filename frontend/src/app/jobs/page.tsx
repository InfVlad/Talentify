import { ListOfFilters } from "@/components/molecules/ListOfFilters/ListOfFilters";
import { SearchBar } from "@/components/molecules/SearchBar/SearchBar";
import { ListOfCardOffer } from "@/components/organisms/ListOfCardsOffer/ListOfCardOffer";
import { OfferDescription } from "@/components/organisms/OfferDescription/OfferDescription";

const Jobs = () => {
  return (
    <div className="m-auto max-w-[1248px]">
      <SearchBar />
      <ListOfFilters />
      <div className="mt-9 flex justify-center">
        <ListOfCardOffer />
        <OfferDescription />
      </div>
    </div>
  );
};

export default Jobs;
