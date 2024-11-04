import { Ban, Flag, Share2 } from "lucide-react";
import { Button } from "@/components/atoms/Button/Button";

export const ShareSaveMenu = () => {
  return (
    <div className="absolute right-0 top-10 flex flex-col rounded-2xl border-[1px] border-gray-400 bg-white p-2">
      <Button variant="textWithIcon" size="medium" className="w-full">
        <Share2 className="mr-3 text-gray-900" />
        Compartir empleo
      </Button>
      <Button variant="textWithIcon" size="medium" className="w-full">
        <Ban className="mr-3 text-gray-900" />
        Bloquear empleo
      </Button>
      <Button variant="textWithIcon" size="medium" className="w-full">
        <Flag className="mr-3 text-gray-900" />
        Reportar empleo
      </Button>
    </div>
  );
};
