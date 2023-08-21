interface HomepageLayoutProps {
  children: React.ReactNode;
}

export default async function HomepageLayout({
  children,
}: HomepageLayoutProps) {
  return <>{children}</>;
}
