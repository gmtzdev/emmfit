import { Clock, ArrowRight } from "lucide-react";
import gallery1 from "../assets/gallery-1.jpg";
import gallery2 from "../assets/gallery-2.jpg";
import gallery3 from "../assets/gallery-3.jpg";
import gallery4 from "../assets/gallery-4.jpg";
import gallery5 from "../assets/gallery-5.jpg";

const services = [
  {
    name: "EMMFIT FOUNDATION",
    price: "$40",
    duration: "45 min",
    image: gallery3,
    description: "Precision cut with consultation, shampoo, and styling. Tailored to your look.",
  },
  {
    name: "EMMFIT PERFORMANCE",
    price: "$35",
    duration: "30 min",
    image: gallery4,
    description: "Expert trimming, hot towel treatment, and beard oil finish for a clean shape.",
  },
  {
    name: "EMMFIT ELITE",
    price: "$75",
    duration: "75 min",
    image: gallery1,
    description: "Haircut, beard trim, hot towel shave, and facial treatment. The complete experience.",
  },
  // {
  //   name: "Hair Styling",
  //   price: "$50",
  //   duration: "40 min",
  //   image: gallery5,
  //   description: "Blow-dry and style with premium products. Perfect for events or a fresh new look.",
  // },
  // {
  //   name: "Hot Towel Shave",
  //   price: "$30",
  //   duration: "30 min",
  //   image: gallery2,
  //   description: "Traditional straight razor shave with hot towel prep and aftershave balm.",
  // },
  // {
  //   name: "Facial Treatment",
  //   price: "$45",
  //   duration: "35 min",
  //   image: gallery1,
  //   description: "Deep cleansing facial with exfoliation, mask, and moisturizer. Rejuvenate your skin.",
  // },
];

const ServicesSection = () => {
  const scrollToBooking = () => {
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="py-24 section-padding bg-secondary">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="font-display text-foreground text-5xl md:text-7xl uppercase tracking-tight">
          Our Services
        </h2>
        <p className="font-body text-muted-foreground mt-4 max-w-lg">
          Every service is delivered with precision and care by our expert team.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {services.map((service) => (
            <div
              key={service.name}
              className="bg-background border border-border overflow-hidden group hover:border-accent transition-colors duration-200"
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-7">
                <div className="flex justify-between items-start gap-4 mb-4">
                  <h3 className="font-display text-foreground text-2xl uppercase tracking-wide">
                    {service.name}
                  </h3>
                  <span className="font-display text-accent text-2xl shrink-0">{service.price}</span>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <Clock size={14} className="text-muted-foreground" />
                  <span className="font-body text-muted-foreground text-sm">{service.duration}</span>
                </div>
                <p className="font-body text-muted-foreground text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <button
                  onClick={scrollToBooking}
                  className="flex items-center gap-2 font-body text-sm font-medium text-foreground hover:text-accent transition-colors duration-200 uppercase tracking-wider"
                >
                  Book <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
