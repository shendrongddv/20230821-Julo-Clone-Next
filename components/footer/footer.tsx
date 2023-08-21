// Components
import FooterRowA from "./footer-row-a";
import FooterRowB from "./footer-row-b";
import FooterRowC from "./footer-row-c";
import FooterRowD from "./footer-row-d";

const Footer = () => {
  return (
    <footer>
      {/* Main */}
      <div className="bg-secondary-foreground px-4">
        <div className="container">
          <div className="flex flex-col divide-y divide-white/50">
            {/* Row A */}
            <div className="pb-12 pt-12 first:pt-16">
              <FooterRowA />
            </div>
            {/* Row B */}
            <div className="pb-12 pt-12 first:pt-16">
              <FooterRowB />
            </div>
            {/* Row C */}
            <div className="pb-12 pt-12 first:pt-16">
              <FooterRowC />
            </div>
            {/* Row D */}
            <div className="pb-12 pt-12 first:pt-16">
              <FooterRowD />
            </div>
          </div>
        </div>
      </div>
      {/* Bottom */}
      <div className="bg-[#00668f] px-4">
        <div className="container py-8">
          <span className="text-sm text-white">
            © 2023 JULO adalah merek milik PT. JULO Teknologi Finansial.
            Terdaftar pada Direktorat Jendral Kekayaan Intelektual Republik
            Indonesia.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
