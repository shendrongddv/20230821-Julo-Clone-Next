import Image from "next/image";

// Contents
import { contentYourNeed } from "@/content/content";
import { ChevronRightCircle } from "lucide-react";

const YourNeedCard = () => {
  const items = contentYourNeed;

  return (
    <div className="grid grid-cols-3 gap-2 sm:grid-cols-3 md:grid-cols-5 md:gap-4">
      {items?.map((item) => (
        <div
          key={item.id}
          className="flex flex-col items-center gap-2 rounded-xl bg-white p-2 text-center transition duration-300 hover:shadow-md md:gap-4 md:p-6"
        >
          <div className="flex h-16 w-16 items-center justify-center md:h-20 md:w-20">
            <Image
              src={`/icons/${item.media}`}
              alt={item.title}
              width={112}
              height={112}
              className="h-full w-auto"
            />
          </div>
          <h4 className="h4 text-xs font-semibold text-secondary-foreground md:text-base md:font-bold">
            {item.title}
          </h4>
        </div>
      ))}

      {/* <div className="flex flex-col items-center justify-center gap-4 rounded-xl bg-white p-4 text-center">
        <div className="rounded-full bg-slate-100 p-4">
          <ChevronRightCircle className="h-8 w-auto md:h-20" />
        </div>
        <h4 className="h4 text-xs font-bold text-secondary-foreground md:text-base">
          Lihat Layanan Lainnya
        </h4>
      </div> */}
    </div>
  );
};

export default YourNeedCard;
