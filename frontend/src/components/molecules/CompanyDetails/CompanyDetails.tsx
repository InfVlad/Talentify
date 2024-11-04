import { Text } from "@/components/atoms/Text/Text";
import { type OfferDto } from "@/types/offers.types";

interface JobDescriptionProps {
  offer: OfferDto;
}

export const CompanyDetails: React.FC<JobDescriptionProps> = ({ offer }) => {
  return (
    <div>
      <Text variant="Headline-3/20" className="mt-2 py-4">
        Empresa
      </Text>
      <Text variant="Subheadline-4/16" className="mb-2 py-2">
        {offer?.companyName}
      </Text>
      <Text variant="Subheadline-4/16" className="mt-2 py-2">
        Descripcion de la Empresa
      </Text>
      <Text className="py-2" variant="Paragraph-2/14">
        {offer?.companyDescription}
      </Text>
    </div>
  );
};
