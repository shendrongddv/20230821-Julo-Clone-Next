// Contens
import { contentFastAndSecureProcess } from "@/content/content";
import Image from "next/image";

const WhyUsCard = () => {
  const items = contentFastAndSecureProcess;

  return (
    <div className="grid gap-8 md:grid-cols-3">
      {items?.map((item) => (
        <div
          key={item.id}
          className="flex flex-col items-start gap-4 overflow-hidden rounded-3xl border border-slate-50 bg-white p-8 shadow-lg transition duration-300 hover:shadow-2xl"
        >
          <Image
            src={`/icons/${item.media}`}
            alt={item.title}
            width={56}
            height={56}
            className="mb-2 h-14 w-auto"
          />
          <h3 className="h3 font-bold text-secondary-foreground">
            {item.title}
          </h3>
          <p>{item.body}</p>
        </div>
      ))}
    </div>
  );
};

export default WhyUsCard;
