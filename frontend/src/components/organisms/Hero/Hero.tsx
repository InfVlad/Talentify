import Image from "next/image";
import { MapPin, Search } from "lucide-react";
import { Text } from "@/components/atoms/Text/Text";

export function Hero() {
  return (
    <div className="max-w-8xl relative mx-auto w-full">
      <div className="mx-auto w-full max-w-7xl">
        <div className="max-w-[51.625rem] pt-[7.5rem]">
          <div className="mb-16 max-w-[42.125rem] space-y-8 text-black">
            <Text className="text-[2.5rem] font-bold leading-[3.1875rem]">
              Transforma tu talento en éxito
            </Text>
            <Text className="text-2xl font-medium">
              Conecta con oportunidades diseñadas para tu crecimiento. Encuentra
              tu camino en Talentify.
            </Text>
          </div>
          <div className="text-grey-700 border-grey-300 flex w-full gap-4 rounded-[1.25rem] border p-4">
            <div className="flex w-full max-w-[22.5rem] items-center gap-2 p-3 pr-4">
              <Search />
              <div>Empleo, cargo, palabras claves</div>
            </div>
            <div className="border-grey-300 h-[inherit] w-[1px] border"></div>
            <div className="flex w-full max-w-[22.5rem] items-center gap-2 p-3 pr-4">
              <MapPin />
              <div>Ubicación</div>
            </div>
            <button className="h-12 w-full max-w-[9rem] rounded-2xl bg-indigo-500 px-4 font-medium text-white">
              Le Button
            </button>
          </div>
        </div>
      </div>
      <Image
        src={"/images/hero-image.png"}
        alt="Encuentra tu proximo empleo"
        width={501}
        height={640}
        className="absolute -top-10 right-0 -z-10"
      ></Image>
    </div>
  );
}
