import Link from "next/link";

import { Badge } from "../ui/badge";

// Contents
import { footerMenu } from "@/content/site";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";

const FooterRowA = () => {
  const footerLinks1 = footerMenu[0].links;
  const footerLinks2 = footerMenu[1].links;
  const footerLinks3 = footerMenu[2].links;

  return (
    <div className="grid gap-10 md:grid-cols-5">
      {/* Col */}
      <div className="space-y-10">
        <div className="space-y-4">
          <Title label="JULO Kredit Digital" />
          <ul className="grid grid-cols-2 gap-2 md:grid-cols-1">
            {footerLinks1?.map((item) => (
              <li key={item.id} className="flex items-center gap-2">
                <LinkItem label={item.label} url={item.url} />
                {item.accent ? (
                  <Badge
                    variant="destructive"
                    className="px-2 py-1 text-[10px] leading-none"
                  >
                    {item.accent}
                  </Badge>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Col */}
      <div className="space-y-10">
        <div className="space-y-4">
          <Title label="Produk & Layanan" />
          <ul className="grid grid-cols-2 gap-2 md:grid-cols-1">
            {footerLinks2?.map((item) => (
              <li key={item.id} className="flex items-center gap-2">
                <LinkItem label={item.label} url={item.url} />
                {item.accent ? (
                  <Badge
                    variant="destructive"
                    className="px-2 py-1 text-[10px] leading-none"
                  >
                    {item.accent}
                  </Badge>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-4">
          <Title label="Lainnya" />
          <ul className="grid grid-cols-2 gap-2 md:grid-cols-1">
            {footerLinks3?.map((item) => (
              <li key={item.id} className="flex items-center gap-2">
                <LinkItem label={item.label} url={item.url} />
                {item.accent ? (
                  <Badge
                    variant="destructive"
                    className="px-2 py-1 text-[10px] leading-none"
                  >
                    {item.accent}
                  </Badge>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Col */}
      <div className="space-y-10">
        <div className="space-y-4">
          <Title label="Media Sosial Kami" />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          ducimus consequatur blanditiis?
        </div>
      </div>
      {/* Col */}
      <div className="space-y-10">
        <div className="space-y-4">
          <Title label="Berizin dan Diawasi oleh" />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          ducimus consequatur blanditiis?
        </div>
        <div className="space-y-4">
          <Title label="Standar Keamanan" />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          ducimus consequatur blanditiis?
        </div>
      </div>
      {/* Col */}
      <div className="space-y-10">
        <div className="space-y-4">
          <Title label="Daftar Newsletter" />
          <p className="pb-2 text-white/90">
            Langganan dan dapatkan promo terbaru dari JULO
          </p>
          <Link
            href="/"
            aria-label="Langganan"
            className={cn(
              buttonVariants({
                variant: "secondary",
                size: "default",
                className: "font-bold",
              }),
            )}
          >
            Langganan
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FooterRowA;

// Title Components
interface TitleProps {
  label: string;
}
export const Title = ({ label }: TitleProps) => {
  return <h4 className="font-bold leading-none text-white">{label}</h4>;
};

// LinkItem Component
interface LinkItemProps {
  label: string;
  url: string;
}
export const LinkItem = ({ label, url }: LinkItemProps) => {
  return (
    <Link
      href={url}
      aria-label={label}
      className="text-white/90 hover:text-white hover:underline"
    >
      {label}
    </Link>
  );
};
