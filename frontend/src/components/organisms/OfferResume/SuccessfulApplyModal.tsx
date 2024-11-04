import { CircleCheck } from "lucide-react";
import { Text } from "@/components/atoms/Text/Text";

export const SuccessfulApplyModal = () => {
  return (
    <div className="flex flex-col items-center">
      <CircleCheck className="max-w-28 text-green-700" size="large" />
      <Text variant="Headline-1/32">Te postulaste exitosamente</Text>
      <Text variant="Paragraph-1/16">
        El reclutador ya puede acceder a tu información y considerarte para el
        empleo
      </Text>
    </div>
  );
};
