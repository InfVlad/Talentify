import React, { type ReactNode } from "react";
import { Button } from "@/components/atoms/Button/Button";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit?: (file: File | null) => void;
  children: ReactNode;
};

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="*: fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative rounded-2xl bg-white p-8 shadow-lg">
        <Button
          variant="textWithIconDisabled"
          onClick={onClose}
          className="absolute right-2 top-2"
        >
          X
        </Button>
        {children}
      </div>
    </div>
  );
};
