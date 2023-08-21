import Image from "next/image";
import Link from "next/link";

// Images
import imgBrand from "../../public/logo-white.svg";

const FooterRowB = () => {
  return (
    <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
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
      <div className="flex flex-col">
        <span className="font-bold text-white">
          PT. JULO Teknologi Finansial
        </span>
        <span className="text-sm text-white/80">
          88@Kasablanka Tower A Lantai 5. Jl. Raya Casablanca
        </span>
        <span className="text-sm text-white/80">
          Kav.88, Jakarta Selatan 12870
        </span>
        <span className="text-sm text-white/80">cs@julo.co.id</span>
      </div>
    </div>
  );
};

export default FooterRowB;
