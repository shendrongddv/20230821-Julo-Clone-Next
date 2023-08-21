import SiteBrand from "../site-brand";

const Header = () => {
  return (
    <header className="sticky left-0 top-0 z-20 w-full border-b bg-white px-4">
      <div className="container">
        <div className="flex items-center justify-between py-4 md:h-20">
          {/* Brand */}
          <SiteBrand />
        </div>
      </div>
    </header>
  );
};

export default Header;
