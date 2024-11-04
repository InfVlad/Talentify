import { Text } from "@/components/atoms/Text/Text";
import { type OfferDto } from "@/types/offers.types";

interface JobDescriptionProps {
  offer: OfferDto;
}

export const JobDescription: React.FC<JobDescriptionProps> = ({ offer }) => {
  return (
    <div>
      <Text variant="Headline-3/20">Descripción del empleo</Text>
      <Text className="py-2" variant="Paragraph-2/14">
        {offer?.description}
      </Text>
      <Text variant="Subheadline-4/16" className="mt-2 py-4">
        Sueldo
      </Text>
      <Text variant="Paragraph-2/14">{offer?.salary}</Text>
    </div>
  );
};
