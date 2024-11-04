"use client";

import { Toaster as Sonner } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      theme={"light"}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast: "group toast",
          description: "",
          actionButton: "",
          cancelButton: "",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
