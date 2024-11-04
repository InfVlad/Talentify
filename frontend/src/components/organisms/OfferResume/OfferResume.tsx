"useclient";

import { Button } from "@/components/atoms/Button/Button";
import { Text } from "@/components/atoms/Text/Text";
import { JobDetailsChips } from "@/components/molecules/JobDetailsChips/JobDetailsChips";
import { Modal } from "@/components/molecules/Modal/Modal";
import { OwnerOfferInfo } from "@/components/molecules/OwnerOfferInfo/OwnerOfferInfo";
import { useModalStore } from "@/store/modal.store";
import { type OfferDto } from "@/types/offers.types";
import { getFormattedDate } from "@/utils/offersUtils";
import { OfferApplyModal } from "./OfferApplyModal";
import { SuccessfulApplyModal } from "./SuccessfulApplyModal";

type OfferResumeProps = {
  offer: OfferDto;
};

export const OfferResume: React.FC<OfferResumeProps> = ({ offer }) => {
  const { isOpen, openModal, closeModal, showSuccessfulApply } =
    useModalStore();
  const formattedDate = getFormattedDate(offer.creationDate);

  return (
    <div className="w-full">
      <OwnerOfferInfo
        ownerFullName={offer?.owner.fullName}
        title={offer?.title}
        image={offer?.image}
      />
      <JobDetailsChips
        location={offer.location}
        workDay={offer.workDay}
        modality={offer.modality}
      />

      <Text variant="Paragraph-2/14" className="mt-2 w-full text-gray-700">
        {formattedDate}
      </Text>
      <Button
        variant="primary"
        size="medium"
        className="my-5 max-w-[159px]"
        onClick={openModal}
      >
        Postularse ahora
      </Button>
      <Modal isOpen={isOpen} onClose={closeModal}>
        {showSuccessfulApply ? <SuccessfulApplyModal /> : <OfferApplyModal />}
      </Modal>
    </div>
  );
};
