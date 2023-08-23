import SiteBrand from "../site-brand";
import { Button } from "../ui/button";
import { NavLinks } from "./nav-links";
import { Toggle } from "./toggle";

const Header = () => {
  return (
    <header className="sticky left-0 top-0 z-20 w-full border-b bg-white px-4">
      <div className="container">
        <div className="flex items-center justify-between py-4 md:h-20">
          {/* Brand */}
          <SiteBrand />

          {/* Nav */}
          <NavLinks />

          {/* CTA */}
          <div className="flex items-center justify-center gap-4">
            <Button variant="secondary" size="default" className="rounded-full">
              TKB90 100%
            </Button>
            <Button variant="outline" size="default" className="hidden md:flex">
              Download Aplikasi JULO
            </Button>
            <div className="flex md:hidden">
              <Toggle />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
