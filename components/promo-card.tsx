import Image from "next/image";

interface PromoCardProps {
  url?: string;
  desktop: string;
}

const PromoCard: React.FC<PromoCardProps> = ({ url, desktop }) => {
  return (
    <div className="flex items-center justify-center overflow-hidden rounded-3xl">
      <Image
        src={`/promotions/${desktop}`}
        alt="Image"
        width={1296}
        height={300}
        className="h-auto w-full"
      />
    </div>
  );
};

export default PromoCard;
