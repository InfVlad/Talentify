import { MapPin, Search } from "lucide-react";
import { Button } from "@/components/atoms/Button/Button";

export const SearchBar = () => {
  return (
    <div className="mx-auto mt-9 flex w-full max-w-[1248px] gap-4 rounded-[1.25rem] border border-grey-300 p-4 text-grey-700">
      <div className="flex w-full max-w-[1050px]">
        <div className="flex w-full max-w-[22.5rem] items-center gap-2 p-3 pr-4">
          <Search />
          <div>Empleo, cargo, palabras claves</div>
        </div>
        <div className="h-[inherit] w-[1px] border border-grey-300"></div>
        <div className="flex w-full max-w-[22.5rem] items-center gap-2 p-3 pr-4">
          <MapPin />
          <div>Ubicación</div>
        </div>
      </div>
      <Button className="min-w-max">Buscar empleo</Button>
    </div>
  );
};
