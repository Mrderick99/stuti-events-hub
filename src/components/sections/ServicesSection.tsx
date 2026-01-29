import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, Building2, Cake, Baby, Diamond, Flower2 } from "lucide-react";

const services = [
  {
    icon: Heart,
    title: "Wedding Decor",
    description: "Create your dream wedding with our stunning floral arrangements, elegant drapery, and romantic lighting designs.",
  },
  {
    icon: Building2,
    title: "Corporate Events",
    description: "Professional and sophisticated setups for conferences, product launches, and corporate celebrations.",
  },
  {
    icon: Cake,
    title: "Birthday Parties",
    description: "Fun and vibrant decorations for all ages, from themed parties to elegant milestone celebrations.",
  },
  {
    icon: Baby,
    title: "Baby Showers",
    description: "Delicate and charming decorations to celebrate the arrival of your little one with style.",
  },
  {
    icon: Diamond,
    title: "Engagement Ceremonies",
    description: "Romantic and memorable setups to mark the beginning of your beautiful journey together.",
  },
  {
    icon: Flower2,
    title: "Floral Arrangements",
    description: "Exquisite flower designs for any occasion, from centerpieces to grand installations.",
  },
];

export const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding bg-secondary/30" ref={ref}>
      <div className="container-main">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12 md:mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-secondary rounded-full text-secondary-foreground text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What We <span className="text-gradient-gold">Offer</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From intimate gatherings to grand celebrations, we provide comprehensive decoration 
            services tailored to your unique vision.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group bg-card p-6 md:p-8 rounded-2xl shadow-card hover:shadow-elegant transition-all duration-300 border border-border/50"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-gold/20 transition-colors duration-300">
                <service.icon className="w-7 h-7 text-primary group-hover:text-gold transition-colors duration-300" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
