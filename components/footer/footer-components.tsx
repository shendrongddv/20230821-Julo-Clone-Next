import { IconType } from "react-icons";

// Contents
import { contentSocialLinks } from "@/content/site";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";

interface SocialLinksProps {
  label: string;
  icon: IconType;
  url: string;
}
[];

export const SocialLinks: React.FC<SocialLinksProps> = ({
  label,
  icon: Icon,
  url,
}) => {
  const items = contentSocialLinks;

  return (
    <ul className="flex gap-4">
      {items?.map((item) => (
        <li key={item.id}>
          <Link
            href={item.url}
            aria-label={item.label}
            className={cn(
              buttonVariants({
                variant: "secondary",
                size: "icon",
                className: "",
              }),
            )}
          >
            <Icon className="h-4 w-4" />
          </Link>
        </li>
      ))}
    </ul>
  );
};
