import { Text } from "@/components/atoms/Text/Text";

export const ListOfCardOfferSkeleton = () => {
  return (
    <div className="mr-2 flex max-h-[700px] w-full max-w-[386px] flex-col overflow-scroll rounded-[26px] bg-gray-50">
      <Text variant="Subheadline-2/20" className="mt-4 p-4">
        Cargando...
      </Text>
      <div className="mx-auto my-2 flex h-[350px] w-[350px] flex-col rounded-3xl bg-gray-300"></div>
      <div className="mx-auto my-2 flex h-[350px] w-[350px] flex-col rounded-3xl bg-gray-300"></div>
      <div className="mx-auto my-2 flex h-[350px] w-[350px] flex-col rounded-3xl bg-gray-300"></div>
    </div>
  );
};
