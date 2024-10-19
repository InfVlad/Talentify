import Image from "next/image";
import React from "react";
import { type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/cn";
import { avatarVariants } from "./Avatar.styles";

interface AvatarProps extends VariantProps<typeof avatarVariants> {
  className?: string;
  src?: string;
  alt?: string;
  fallBackText?: string;
}

export const Avatar: React.FC<AvatarProps> = ({
  variant,
  className,
  size,
  src,
  alt = "",
  fallBackText = "T",
  ...props
}) => {
  return (
    <div
      className={cn(avatarVariants({ variant, size }), className)}
      {...props}
    >
      {src ? (
        <Image src={src} alt={alt} className="h-full w-full object-cover" />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-gray-400 text-white">
          {fallBackText}
        </div>
      )}
    </div>
  );
};
