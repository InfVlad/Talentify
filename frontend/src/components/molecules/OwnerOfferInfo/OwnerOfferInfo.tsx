import { Avatar } from "@/components/atoms/Avatar/Avatar";
import { Text } from "@/components/atoms/Text/Text";

type OwnerOfferInfoProps = {
  card?: boolean;
  ownerFullName?: string;
  title: string;
  image?: string;
};

export const OwnerOfferInfo: React.FC<OwnerOfferInfoProps> = ({
  card,
  ownerFullName,
  title,
  image,
}) => {
  return (
    <div>
      <Text variant={card ? "Headline-3/20" : "Headline-1/32"}>{title}</Text>
      <div className="mb-5 mt-4 flex w-full items-center">
        <Avatar src={image} size={card ? "xsmall" : "small"}></Avatar>
        <Text
          className="ml-2"
          variant={card ? "Subheadline-4/16" : "Subheadline-2/20"}
        >
          {ownerFullName}
        </Text>
      </div>
    </div>
  );
};
