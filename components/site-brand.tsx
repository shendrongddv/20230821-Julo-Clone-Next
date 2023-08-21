import Image from "next/image";
import Link from "next/link";
import imgBrandNav from "../public/logo.svg";

const SiteBrand = () => {
  return (
    <Link href="/">
      <Image
        src={imgBrandNav}
        alt="Julo"
        width={96}
        height={35}
        className=" h-9 w-auto"
      />
    </Link>
  );
};

export default SiteBrand;
