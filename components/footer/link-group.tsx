import Link from "next/link";

interface LinkGroupProps {
  label: string;
  accent: string;
  url: string;
}

const LinkGroup = ({ label, accent, url }: LinkGroupProps) => {
  return (
    <ul className="">
      <li>
        <Link href={} />
      </li>
    </ul>
  );
};

export default LinkGroup;
