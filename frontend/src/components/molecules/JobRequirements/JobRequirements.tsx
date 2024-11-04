import { Text } from "@/components/atoms/Text/Text";
import { type OfferDto } from "@/types/offers.types";

interface JobRequirementsProps {
  offer: OfferDto;
}

export const JobRequirements: React.FC<JobRequirementsProps> = ({ offer }) => {
  let requirementsArray: string[] = [];

  try {
    const requirementsString =
      typeof offer?.requirements === "string" ? offer.requirements.trim() : "";

    if (requirementsString) {
      requirementsArray = JSON.parse(requirementsString);
    }
  } catch (error) {
    console.error("Error parsing requirements:", error);
  }

  return (
    <div>
      <Text variant="Headline-3/20" className="mt-2 py-4">
        Requerimientos
      </Text>
      <ul className="list-disc pl-5 text-grey-darkFont">
        {requirementsArray.map((requirement, index) => (
          <li key={index}>
            <Text variant="Paragraph-2/14">{requirement}</Text>
          </li>
        ))}
      </ul>
    </div>
  );
};
