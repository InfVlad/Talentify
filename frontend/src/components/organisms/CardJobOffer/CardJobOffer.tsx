"use client";

// Ajusta la ruta según tu estructura de carpetas
import { useRouter } from "next/navigation";
import { Text } from "@/components/atoms/Text/Text";
import { JobDetailsChips } from "@/components/molecules/JobDetailsChips/JobDetailsChips";
import { OwnerOfferInfo } from "@/components/molecules/OwnerOfferInfo/OwnerOfferInfo";
import { type OfferDto } from "@/types/offers.types";
import { getFormattedDate } from "@/utils/offersUtils";

interface JobOfferProps {
  offer: OfferDto;
}

export const CardJobOffer: React.FC<JobOfferProps> = ({ offer }) => {
  const router = useRouter();

  const formattedDate = getFormattedDate(offer.creationDate);

  const handleClick = () => {
    router.push(`/jobs?id=${offer.id}`);
  };

  if (!offer) {
    return null;
  }

  return (
    <div
      className="m-2 flex w-full max-w-[365px] flex-col rounded-3xl border-[1px] border-gray-400 p-6 active:border-violet-700"
      onClick={handleClick}
    >
      <OwnerOfferInfo
        card
        title={offer.title}
        ownerFullName={offer.owner.fullName}
      />
      <JobDetailsChips
        workDay={offer?.workDay}
        location={offer?.location}
        modality={offer?.modality}
      />
      <Text variant="Paragraph-2/14" className="mt-2 w-full text-gray-700">
        {formattedDate}
      </Text>
    </div>
  );
};
