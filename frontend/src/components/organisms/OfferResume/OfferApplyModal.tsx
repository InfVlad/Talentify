import { useState } from "react";
import { FileText } from "lucide-react";
import { Button } from "@/components/atoms/Button/Button";
import { Spinner } from "@/components/atoms/Spinner/Spinner";
import { Text } from "@/components/atoms/Text/Text";
import { InfoUser } from "@/components/molecules/InfoUser/InfoUser";
import { useUserStore } from "@/store/auth.store";
import { useModalStore } from "@/store/modal.store";

export const OfferApplyModal = () => {
  const user = useUserStore((state) => state.user);
  const showSuccessfulApply = useModalStore(
    (state) => state.setShowSuccessfulApply
  );
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      showSuccessfulApply();
    }, 1500);
  };

  return (
    <>
      <div>
        <Text variant="Headline-1/32">Postularse al empleo</Text>
        <Text variant="Paragraph-1/16" className="mb-5">
          El reclutador recibirá tu postulación y accederá a los siguientes
          datos:
        </Text>
      </div>
      <div className="flex flex-col items-center">
        <div className="mt-3 w-full max-w-[382px] items-center rounded-2xl border-[1px] border-gray-500 px-4 py-4">
          <Text variant="Headline-3/20">Tu perfil</Text>
          <div>
            <InfoUser />
          </div>
        </div>

        <div className="mt-3 w-full max-w-[382px] items-center rounded-2xl border-[1px] border-gray-500 px-4 py-4">
          <Text variant="Headline-3/20">CV</Text>
          <div className="flex items-start">
            <FileText
              size="large"
              className="max-h-12 max-w-11 text-violet-500"
            />
            <div>
              <Text variant="Subheadline-4/16">
                {user ? user.fullName : "documento"}-cv
              </Text>
              <Text variant="Paragraph-2/14">PDF</Text>
            </div>
          </div>
        </div>

        <div className="mt-3 w-full max-w-[382px] items-center rounded-2xl border-[1px] border-gray-500 px-4 py-4">
          <Text variant="Headline-3/20">Portfolio</Text>
          <div className="flex items-start">
            <FileText
              size="large"
              className="max-h-12 max-w-11 text-violet-500"
            />
            <div>
              <Text variant="Subheadline-4/16">
                {user ? user.fullName : "documento"}-portfolio
              </Text>
              <Text variant="Paragraph-2/14">PDF</Text>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 flex justify-end">
        <Button onClick={handleClick} variant="primary" size="large">
          {loading ? <Spinner /> : "Postularse ahora"}
        </Button>
      </div>
    </>
  );
};
