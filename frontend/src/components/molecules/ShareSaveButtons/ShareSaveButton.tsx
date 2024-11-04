"use client";

import { Bookmark, EllipsisVertical } from "lucide-react";
import { useShareSaveMenuStore } from "@/store/shareSaveMenu.store";
import { ShareSaveMenu } from "../ShareSaveMenu/ShareSaveMenu";

export const ShareSaveButton = () => {
  const showMenu = useShareSaveMenuStore((state) => state.showMenu);
  const toggleMenu = useShareSaveMenuStore((state) => state.toggleShowMenu);

  return (
    <div className="flex max-w-[104px] justify-around pt-2">
      <button className="mr-7">
        <Bookmark className="text-gray-900 hover:cursor-pointer hover:text-gray-600" />
      </button>
      <button onClick={toggleMenu}>
        <EllipsisVertical className="text-gray-900 hover:cursor-pointer hover:text-gray-600" />
      </button>
      {showMenu && <ShareSaveMenu />}
    </div>
  );
};
