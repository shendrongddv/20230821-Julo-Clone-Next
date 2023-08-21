import Link from "next/link";
import Image from "next/image";

import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";

// Images
import imgBrand from "../../public/logo-white.svg";

// Contents
import { footerMenu } from "@/content/site";
import { Badge } from "../ui/badge";
import { SocialLinks } from "./footer-components";

const FooterWrapper = () => {
  const footerLinks1 = footerMenu[0].links;
  const footerLinks2 = footerMenu[1].links;
  const footerLinks3 = footerMenu[2].links;

  return (
    <footer>
      {/* Footer Main */}
      <div className="bg-secondary-foreground px-4 pt-16">
        <div className="container flex flex-col divide-y divide-white/50">
          {/* # */}
          <div className="grid gap-10 pb-12 md:grid-cols-5">
            {/* ## */}
            <div className="space-y-10">
              <div className="space-y-4">
                <h4 className="font-bold leading-none text-white">
                  JULO Kredit Digital
                </h4>
                <ul className="grid grid-cols-2 gap-2 md:grid-cols-1">
                  {footerLinks1?.map((item) => (
                    <li key={item.id} className="flex items-center gap-2">
                      <Link
                        href={item.url}
                        aria-label={item.label}
                        className="text-white/90 hover:text-white hover:underline"
                      >
                        {item.label}
                      </Link>
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
            {/* ## */}
            <div className="space-y-10">
              <div className="space-y-4">
                <h4 className="font-bold leading-none text-white">
                  Produk & Layanan
                </h4>
                <ul className="grid grid-cols-2 gap-2 md:grid-cols-1">
                  {footerLinks2?.map((item) => (
                    <li key={item.id} className="flex items-center gap-2">
                      <Link
                        href={item.url}
                        aria-label={item.label}
                        className="text-white/90 hover:text-white hover:underline"
                      >
                        {item.label}
                      </Link>
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
                <h4 className="font-bold leading-none text-white">Lainnya</h4>
                <ul className="grid grid-cols-2 gap-2 md:grid-cols-1">
                  {footerLinks3?.map((item) => (
                    <li key={item.id} className="flex items-center gap-2">
                      <Link
                        href={item.url}
                        aria-label={item.label}
                        className="text-white/90 hover:text-white hover:underline"
                      >
                        {item.label}
                      </Link>
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
            {/* ## */}
            <div className="space-y-10">
              <div className="space-y-4">
                <h4 className="font-bold leading-none text-white">
                  Media Sosial Kami
                </h4>
              </div>
            </div>
            {/* ## */}
            <div className="space-y-10">
              <div className="space-y-4">
                <h4 className="font-bold leading-none text-white">
                  Berizin dan Diawasi oleh
                </h4>
              </div>
              <div className="space-y-4">
                <h4 className="font-bold leading-none text-white">
                  Standar Keamanan
                </h4>
              </div>
            </div>
            {/* ## */}
            <div className="flex flex-col space-y-4">
              <h4 className="font-bold leading-none text-white">
                Daftar Newsletter
              </h4>
              <span className="text-sm text-white">
                Langganan dan dapatkan promo terbaru dari JULO
              </span>
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

          {/* # */}
          <div className="flex flex-col gap-8 py-12 md:flex-row md:items-center md:justify-between">
            {/* ## */}
            <Link href="/" aria-label="Julo">
              <Image
                src={imgBrand}
                alt="Julo"
                width={160}
                height={70}
                className="h-16 w-auto"
              />
            </Link>

            {/* ## */}
            <div className="flex flex-col text-xs leading-normal text-white">
              <span>PT. JULO Teknologi Finansial</span>
              <span>88@Kasablanka Tower A Lantai 5. Jl. Raya Casablanca</span>
              <span>Kav.88, Jakarta Selatan 12870</span>
              <span>cs@julo.co.id</span>
            </div>
          </div>

          {/* # */}
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-[#00668f] px-4">
        <div className="container py-4">
          <span className="text-sm text-white">
            © 2023 JULO adalah merek milik PT. JULO Teknologi Finansial.
            Terdaftar pada Direktorat Jendral Kekayaan Intelektual Republik
            Indonesia.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default FooterWrapper;
