import Image from "next/image";

interface BannerCardProps {
  url?: string;
  desktop: string;
  mobile: string;
}

const BannerCard: React.FC<BannerCardProps> = ({ url, desktop, mobile }) => {
  return (
    <div className="flex items-center justify-center overflow-hidden rounded-3xl max-md:mx-4">
      <Image
        src={`/banners/${desktop}`}
        alt="Image"
        width={1280}
        height={297}
        className="hidden h-auto w-full md:flex"
      />
      <Image
        src={`/banners/${mobile}`}
        alt="Image"
        width={480}
        height={620}
        className="flex h-auto w-full md:hidden"
      />
    </div>
  );
};

export default BannerCard;
