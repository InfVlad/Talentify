import { Filter } from "@/components/atoms/Filter/Filter";

export const ListOfFilters = () => {
  return (
    <div className="mt-4">
      <Filter className="mr-4" variant="selected" selected>
        Remoto
      </Filter>
      <Filter className="mr-4" variant="default" filterMenu>
        Tipo de contrato
      </Filter>
      <Filter className="mr-4" variant="default" filterMenu>
        Jornada laboral
      </Filter>
    </div>
  );
};
