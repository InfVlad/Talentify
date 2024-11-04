import Image from "next/image";

type PageLogoProps = {
  isRecruiter: boolean;
  isFull?: boolean;
};

export function PageLogo({ isRecruiter, isFull = true }: PageLogoProps) {
  return (
    <div className="flex items-center gap-2">
      <Image
        alt="Talentify"
        src="/talentify-logo.svg"
        width={35}
        height={40}
      ></Image>
      {isFull && (
        <Image
          alt="Talentify"
          src={
            isRecruiter
              ? "/talentify-name-recruiter-logo.svg"
              : "/talentify-name-logo.svg"
          }
          width={isRecruiter ? 118 : 143}
          height={isRecruiter ? 20 : 33}
        ></Image>
      )}
    </div>
  );
}
