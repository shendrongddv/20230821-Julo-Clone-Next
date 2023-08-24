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
        width={1296}
        height={300}
        className="hidden h-auto w-full md:flex"
      />
      <Image
        src={`/banners/${mobile}`}
        alt="Image"
        width={1296}
        height={300}
        className="flex h-auto w-full md:hidden"
      />
    </div>
  );
};

export default BannerCard;
