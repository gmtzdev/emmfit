import heroImage from "@/assets/em.png";
import { Facebook, Instagram, Music2 } from "lucide-react";

const HeroSection = () => {
  const scrollToBooking = () => {
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  };

  const services = [
    { name: "EMMFIT FOUNDATION", price: "$40" },
    { name: "EMMFIT PERFORMANCE", price: "$35" },
    { name: "EMMFIT ELITE", price: "$30" },
  ];

  const socialLinks = [
    { label: "Instagram", href: "https://www.instagram.com/emmfit", icon: Instagram },
    { label: "TikTok", href: "https://www.tiktok.com/@emmfit", icon: Music2 },
    { label: "Facebook", href: "https://www.facebook.com/emmfit", icon: Facebook },
  ];

  return (
    <section className="relative min-h-screen flex flex-col bg-primary overflow-hidden">
      {/* Background Image — subject anchored bottom-left */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Premium barbershop haircut"
          className="w-full h-full object-cover opacity-60"
          style={{ objectPosition: "left bottom" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/30 to-primary/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-primary/30" />
      </div>

      {/* Title — spanning full width, right-aligned */}
      <div className="relative z-10 section-padding pt-32 md:pt-40">
        <div className="max-w-[1400px] mx-auto">
          <h1 className="font-display text-primary-foreground text-6xl sm:text-8xl md:text-[10rem] lg:text-[8rem] leading-[0.85] tracking-tight uppercase text-right">
            You don't need <br /> more motivation. <br /> You need a plan <br /> that works.
          </h1>
        </div>
      </div>

      {/* Price list — right-aligned in lower portion */}
      <div className="relative z-10 mt-auto section-padding pb-16 md:pb-24">
        <div className="max-w-[1400px] mx-auto flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="flex items-center gap-4" aria-label="Social media">
            <span className="font-body text-primary-foreground/50 text-xs uppercase tracking-widest">
              Follow us
            </span>
            <div className="flex items-center gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center border border-primary-foreground/30 text-primary-foreground/70 hover:border-accent hover:text-accent transition-colors"
                >
                  <Icon size={18} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          <div className="w-full max-w-md">
            {services.map((service) => (
              <div
                key={service.name}
                className="flex justify-between items-center py-3 border-b border-primary-foreground/20"
              >
                <span className="font-display text-primary-foreground text-xl md:text-2xl uppercase tracking-wide">
                  {service.name}
                </span>
                {service.price ? (
                  <span className="font-display text-primary-foreground text-xl md:text-2xl">
                    {service.price}
                  </span>
                ) : (
                  <button
                    onClick={scrollToBooking}
                    className="font-body text-accent font-semibold text-sm uppercase tracking-widest hover:opacity-80 transition-opacity"
                  >
                    Book →
                  </button>
                )}
              </div>
            ))}

            <button
              onClick={scrollToBooking}
              className="mt-8 w-full bg-accent text-accent-foreground font-body font-semibold text-sm uppercase tracking-widest py-4 hover:opacity-90 transition-opacity duration-200"
            >
              Book Now →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
