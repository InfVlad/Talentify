import Image from "next/image";
import React from "react";
import { type VariantProps } from "class-variance-authority";
import { User } from "lucide-react";
import { cn } from "@/utils/cn";
import { avatarVariants } from "./Avatar.styles";

interface AvatarProps extends VariantProps<typeof avatarVariants> {
  className?: string;
  src?: string;
  alt?: string;
}

export const Avatar: React.FC<AvatarProps> = ({
  variant,
  className,
  size,
  src,
  alt = "",
  ...props
}) => {
  return (
    <div
      className={cn(avatarVariants({ variant, size }), className)}
      {...props}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          width="100"
          height="100"
          className="h-full w-full object-cover"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-violet-700 font-black text-violet-200">
          <User />
        </div>
      )}
    </div>
  );
};
