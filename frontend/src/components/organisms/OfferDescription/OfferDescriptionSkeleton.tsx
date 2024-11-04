import { Spinner } from "@/components/atoms/Spinner/Spinner";

export const OfferDescriotionSkeleton = () => {
  return (
    <div className="flex max-h-[700px] w-full max-w-[827px] items-center justify-center overflow-scroll rounded-3xl border-[1px] border-gray-400 bg-gray-300">
      <Spinner />;
    </div>
  );
};
