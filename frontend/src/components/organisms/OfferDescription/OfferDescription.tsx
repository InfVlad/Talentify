"use client";

import { CompanyDetails } from "@/components/molecules/CompanyDetails/CompanyDetails";
import { JobDescription } from "@/components/molecules/JobDescription/JobDescription";
import { ShareSaveButton } from "@/components/molecules/ShareSaveButtons/ShareSaveButton";
import { useJobOffers } from "@/hooks/useJobOffers";
import { useGetOfferById } from "@/services/offers/offersQuery";
import { JobRequirements } from "../../molecules/JobRequirements/JobRequirements";
import { OfferResume } from "../OfferResume/OfferResume";
import { OfferDescriotionSkeleton } from "./OfferDescriptionSkeleton";

export const OfferDescription = () => {
  const { jobOfferId } = useJobOffers();

  const { isPending, isError, data: jobOffer } = useGetOfferById(jobOfferId);

  if (isError) return null;

  if (isPending) return <OfferDescriotionSkeleton />;

  return (
    <div className="flex max-h-[700px] w-full max-w-[827px] flex-col overflow-scroll rounded-3xl border-[1px] border-gray-400 p-6">
      <div className="relative flex w-full items-start justify-between">
        <OfferResume offer={jobOffer} />
        <ShareSaveButton />
      </div>
      <hr />
      <div className="mt-8">
        <JobDescription offer={jobOffer} />
        <JobRequirements offer={jobOffer} />
        <CompanyDetails offer={jobOffer} />
      </div>
    </div>
  );
};
