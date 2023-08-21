import Image from "next/image";

// Images
import imgHero from "../../public/img-1.png";
import imgQRCode from "../../public/qr-code.png";
import imgPlaystore from "../../public/playstore.svg";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import WhyUsCard from "@/components/card-why-us";
import YourNeedCard from "@/components/card-your-need";

export default function Homepage() {
  return (
    <main className="flex flex-col">
      {/* Hero */}
      <section
        id="hero"
        className="bg-gradient-to-b from-[#82dcfe] to-white px-4 py-16"
      >
        <div className="container">
          <div className="grid gap-10 md:grid-cols-2">
            {/* Col */}
            <div className="flex h-full flex-col justify-end">
              <h1 className="text-3xl font-bold leading-snug text-[#404040] md:text-5xl">
                Hidupkan Hidupmu Bersama{" "}
                <span className="text-[#00acf0]">JULO</span> Kredit Online dan
                Pinjaman
              </h1>
              <p className="mt-4 text-xl md:text-2xl">
                Ajukan layanan kredit digital yang sesuai dengan kebutuhan kamu.
              </p>
            </div>

            {/* Col */}
            <div className="h-full md:row-span-2">
              <Image
                src={imgHero}
                priority
                alt="Image"
                width={600}
                height={600}
                className="h-auto w-full"
              />
            </div>

            {/* Col */}
            <div className="flex h-full flex-col">
              <div className="flex items-center gap-4 md:w-max md:rounded-xl md:bg-white md:p-4">
                {/* Col */}
                <div className="flex w-full flex-col gap-4 md:w-max">
                  <span className="hidden text-xs font-bold md:float-right">
                    Download Aplikasi JULO atau Scan QR
                  </span>
                  <Link
                    href="/"
                    className={cn(
                      buttonVariants({
                        variant: "secondary",
                        size: "lg",
                        className:
                          "w-full bg-secondary-foreground font-bold text-white hover:bg-secondary-foreground hover:text-white md:px-12",
                      }),
                    )}
                  >
                    Download Aplikasi JULO
                  </Link>
                  <div className="flex w-max items-center gap-4">
                    <span className="text-xs">Tersedia di Android</span>
                    <Image
                      src={imgPlaystore}
                      alt="Download on Playstore"
                      width={75}
                      height={24}
                      className="h-6 w-auto"
                    />
                  </div>
                </div>
                {/* Col */}
                <div className="hidden overflow-hidden rounded-lg border md:flex">
                  <Image
                    src={imgQRCode}
                    alt="QR Code"
                    width={100}
                    height={100}
                    className="aspect-1 h-28 w-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ./ Hero */}

      {/* Simulation */}
      <section id="simulation" className="px-4 py-16">
        <div className="container"></div>
      </section>
      {/* ./ Simulation */}

      {/* Banner */}
      <section id="ID" className="px-4 py-16">
        <div className="container">
          <div className="flex">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            ea veniam cumque.
          </div>
        </div>
      </section>
      {/* ./ Banner */}

      <div className="bg-gradient-to-b from-white from-60% to-[#82dcfe] to-100%">
        {/* Process */}
        <section id="process" className="px-4 py-16">
          <div className="container">
            <div className="flex flex-col gap-8">
              {/* # */}
              <div className="space-y-2">
                <h2 className="h2 font-bold text-secondary-foreground">
                  Proses yang Cepat dan Aman
                </h2>
                <p className="subtitle">
                  Pengajuan finansial yang terintegrasi dalam satu tempat,
                  efisien dan terjamin aman.
                </p>
              </div>

              {/* # */}
              <WhyUsCard />
            </div>
          </div>
        </section>
        {/* ./ Process */}

        {/* Services */}
        <section id="services" className="px-4 py-16">
          <div className="container">
            <div className="flex flex-col gap-4 md:gap-8">
              <h2 className="h2 font-bold text-secondary-foreground">
                Penuhi Segala Kebutuhan Finansialmu Bersama JULO
              </h2>

              {/* # */}
              <YourNeedCard />
            </div>
          </div>
        </section>
        {/* ./ Services */}
      </div>

      {/* Promotion */}
      <section id="promotion" className="px-4 py-16">
        <div className="container">
          <div className="flex">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            ea veniam cumque.
          </div>
        </div>
      </section>
      {/* ./ Promotion */}

      {/* Registration */}
      <section id="registration" className="px-4 py-16">
        <div className="container">
          <div className="flex">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            ea veniam cumque.
          </div>
        </div>
      </section>
      {/* ./ Registration */}

      {/* Reviews */}
      <section id="reviews" className="px-4 py-16">
        <div className="container">
          <div className="flex">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            ea veniam cumque.
          </div>
        </div>
      </section>
      {/* ./ Reviews */}

      {/* Partners */}
      <section id="partners" className="px-4 py-16">
        <div className="container">
          <div className="flex">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            ea veniam cumque.
          </div>
        </div>
      </section>
      {/* ./ Partners */}

      {/* Media */}
      <section id="media" className="px-4 py-16">
        <div className="container">
          <div className="flex">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            ea veniam cumque.
          </div>
        </div>
      </section>
      {/* ./ Media */}

      {/* CTA */}
      <section id="cta" className="px-4 py-16">
        <div className="container">
          <div className="flex">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            ea veniam cumque.
          </div>
        </div>
      </section>
      {/* ./ CTA */}
    </main>
  );
}
