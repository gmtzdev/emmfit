import { Facebook, Instagram, Music2 } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary section-padding py-12">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <span className="font-display text-primary-foreground text-xl tracking-wider uppercase">
          TrimSync
        </span>
        <p className="font-body text-primary-foreground/40 text-sm">
          © {new Date().getFullYear()} TrimSync. All rights reserved.
        </p>
        <div className="flex items-center gap-3" aria-label="Social media">
          <a
            href="https://www.instagram.com/emmfit"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="text-primary-foreground/50 hover:text-accent transition-colors"
          >
            <Instagram size={20} strokeWidth={1.5} />
          </a>
          <a
            href="https://www.tiktok.com/@emmfit"
            target="_blank"
            rel="noreferrer"
            aria-label="TikTok"
            className="text-primary-foreground/50 hover:text-accent transition-colors"
          >
            <Music2 size={20} strokeWidth={1.5} />
          </a>
          <a
            href="https://www.facebook.com/emmfit"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
            className="text-primary-foreground/50 hover:text-accent transition-colors"
          >
            <Facebook size={20} strokeWidth={1.5} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
