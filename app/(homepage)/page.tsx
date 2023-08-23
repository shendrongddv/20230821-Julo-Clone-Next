import Link from "next/link";
import Image from "next/image";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// Components
import WhyUsCard from "@/components/card-why-us";
import YourNeedCard from "@/components/card-your-need";

// Images
import imgHero from "../../public/img-1.png";
import imgQRCode from "../../public/qr-code.png";
import imgPlaystore from "../../public/playstore.svg";

// Icons
import { FaQuoteLeft } from "react-icons/fa";

// Contents
import {
  contentReviews,
  contentPartners,
  contentMedia,
  contentFastAndSecureProcess,
} from "@/content/content";

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
        <div className="container space-y-8 md:px-32">
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
          <div className="container space-y-8 rounded-3xl border px-1 py-1 md:border-4 md:border-slate-100 md:px-32 md:py-16">
            <div className="flex flex-col gap-4 md:gap-8">
              {/* # */}
              <div className="space-y-2 max-md:px-3 max-md:pt-5">
                <h2 className="h2 font-bold text-secondary-foreground">
                  Proses yang Cepat dan Aman
                </h2>
                <p className="subtitle">
                  Pengajuan finansial yang terintegrasi dalam satu tempat,
                  efisien dan terjamin aman.
                </p>
              </div>

              {/* # */}
              <div className="grid gap-1 md:grid-cols-3 md:gap-6">
                {contentFastAndSecureProcess?.map((item) => (
                  <div
                    key={item.id}
                    className="space-y-4 rounded-2xl p-4 transition duration-300 hover:bg-slate-100 md:border md:border-slate-100 md:p-6"
                  >
                    <div className="flex items-center gap-4 md:flex-col md:items-start">
                      <div className="flex h-8 w-8 justify-center md:h-12 md:w-12">
                        <Image
                          src={`/icons/${item.media}`}
                          alt={item.title}
                          width={54}
                          height={54}
                          className="h-full w-auto"
                        />
                      </div>
                      <h3 className="h3 w-3/4 font-display font-bold text-secondary-foreground">
                        {item.title}
                      </h3>
                    </div>
                    <p>{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* ./ Process */}

        {/* Services */}
        <section id="services" className="px-4 py-16">
          <div className="container space-y-8 md:px-32">
            <div className="flex flex-col gap-6 md:gap-8">
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
        <div className="container space-y-8 md:px-32">
          <div className="flex">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            ea veniam cumque.
          </div>
        </div>
      </section>
      {/* ./ Promotion */}

      {/* Registration */}
      <section id="registration" className="px-4 py-16">
        <div className="container space-y-8 md:px-32">
          <div className="flex">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            ea veniam cumque.
          </div>
        </div>
      </section>
      {/* ./ Registration */}

      {/* Reviews */}
      <section
        id="reviews"
        className="bg-gradient-to-b from-secondary-foreground from-60% to-transparent to-60% px-4 py-16"
      >
        <div className="container space-y-8 md:px-32">
          {/* Row */}
          <div className="md:w-1/2">
            <h2 className="h2 font-display font-bold text-secondary-foreground text-white">
              Apa Kata Mereka?
            </h2>
            <p className="mt-3 text-lg font-semibold text-white md:text-xl">
              Lihat apa kata mereka mengenai pengalaman menggunakan JULO.
            </p>
          </div>

          {/* Row */}
          <div className="grid gap-4 md:grid-cols-3">
            {contentReviews?.map((item) => (
              <div
                key={item.id}
                className="space-y-4 rounded-xl bg-white p-4 shadow-md md:rounded-3xl md:p-6"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full">
                    <Image
                      src={`/${item.avatar}`}
                      alt={item.name}
                      width={48}
                      height={48}
                      className="h-full w-auto"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h4 className="font-display font-bold text-secondary-foreground">
                      {item.name}, <span>{item.age}</span>
                    </h4>
                    <span className="text-sm">{item.job}</span>
                  </div>
                </div>
                <FaQuoteLeft className="h-4 w-4 text-secondary-foreground/50" />
                <p>{item.review}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ./ Reviews */}

      {/* Partners */}
      <section id="partners" className="px-4 py-16">
        <div className="container md:px-32">
          {/* Row */}
          <div className="md:w-1/2">
            <h2 className="h2 font-display font-bold text-secondary-foreground">
              Mitra Terbaik Kami
            </h2>
            <p className="mt-3 text-lg font-semibold md:text-xl">
              Mitra terbaik kami meliputi lembaga keuangan perbankan dan nonbank
              di Indonesia.
            </p>
          </div>

          {/* Row */}
          <div className="mt-6 grid grid-cols-3 gap-2 md:grid-cols-5 md:gap-6">
            {contentPartners?.map((item) => (
              <TooltipProvider key={item.id}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="flex items-center justify-center rounded-lg border border-slate-100 bg-white p-2 transition duration-300 hover:shadow-md md:rounded-3xl md:p-4">
                      <Image
                        src={`/partners/${item.media}`}
                        alt={item.label}
                        width={200}
                        height={100}
                        className="h-auto w-full"
                      />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{item.label}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </div>
        </div>
      </section>
      {/* ./ Partners */}

      {/* Media */}
      <section id="media" className="bg-slate-100 px-4 py-16">
        <div className="container md:px-32">
          {/* Row */}
          <div className="md:w-1/2">
            <h2 className="h2 font-display font-bold text-secondary-foreground">
              Publikasi Media
            </h2>
            <p className="mt-3 text-lg font-semibold md:text-xl">
              Publikasi JULO meliputi berbagai media terbaik di Indonesia dan
              mancanegara.
            </p>
          </div>

          {/* Row */}
          <div className="mt-6 grid grid-cols-3 gap-2 md:grid-cols-5 md:gap-6">
            {contentMedia?.map((item) => (
              <TooltipProvider key={item.id}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="flex items-center justify-center rounded-lg border border-slate-100 bg-white p-2 transition duration-300 hover:shadow-md md:rounded-3xl md:p-4">
                      <Image
                        src={`/media/${item.media}`}
                        alt={item.label}
                        width={200}
                        height={100}
                        className="h-auto w-full"
                      />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{item.label}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </div>
        </div>
      </section>
      {/* ./ Media */}

      {/* CTA */}
      <section
        id="cta"
        className="bg-gradient-to-b from-slate-100 from-50% to-white to-50% px-4 py-16"
      >
        <div className="container rounded-xl border bg-secondary-foreground px-4 py-8 md:border-spacing-1 md:rounded-3xl md:px-32 md:py-12">
          <div className="flex flex-col-reverse gap-12 md:flex-row md:items-center md:justify-between">
            {/* Col */}
            <div className="flex w-full flex-col gap-3 md:w-3/6">
              <h2 className="h2 font-display font-bold text-white">
                Ajukan Limit Kredit Digital JULO Sekarang
              </h2>
              <p className="text-xl font-semibold text-white">
                Dengan tenor fleksibel dan bunga rendah, nikmati kemudahan
                transaksi dari fitur lengkap kredit digital untuk seluruh
                layanan tanpa harus menggunakan kartu kredit!
              </p>
              <Link
                href="/"
                className={cn(
                  buttonVariants({
                    variant: "secondary",
                    size: "lg",
                    className: "mt-6 font-bold md:w-max",
                  }),
                )}
              >
                Download JULO Sekarang
              </Link>
            </div>

            {/* Col */}
            <div className="flex w-full items-center justify-center md:w-2/6">
              <Image
                src="/img-2.webp"
                alt="Image"
                width={400}
                height={500}
                className="h-auto w-3/5 md:w-full"
              />
            </div>
          </div>
        </div>
      </section>
      {/* ./ CTA */}
    </main>
  );
}
