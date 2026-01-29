import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import eventWedding from "@/assets/event-wedding.jpg";
import eventCorporate from "@/assets/event-corporate.jpg";
import eventBirthday from "@/assets/event-birthday.jpg";
import eventBabyshower from "@/assets/event-babyshower.jpg";
import eventEngagement from "@/assets/event-engagement.jpg";

const events = [
  {
    id: 1,
    title: "Traditional Wedding",
    category: "Wedding",
    image: eventWedding,
    description: "Elegant traditional wedding mandap with marigold decorations",
  },
  {
    id: 2,
    title: "Corporate Gala",
    category: "Corporate",
    image: eventCorporate,
    description: "Sophisticated corporate event with stunning stage design",
  },
  {
    id: 3,
    title: "Birthday Celebration",
    category: "Birthday",
    image: eventBirthday,
    description: "Colorful and joyful birthday party setup",
  },
  {
    id: 4,
    title: "Baby Shower",
    category: "Baby Shower",
    image: eventBabyshower,
    description: "Delicate pastel theme baby shower decoration",
  },
  {
    id: 5,
    title: "Engagement Party",
    category: "Engagement",
    image: eventEngagement,
    description: "Romantic engagement ceremony with fairy lights",
  },
];

const categories = ["All", "Wedding", "Corporate", "Birthday", "Baby Shower", "Engagement"];

export const EventsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredEvents = activeCategory === "All" 
    ? events 
    : events.filter(event => event.category === activeCategory);

  return (
    <section id="events" className="section-padding bg-background" ref={ref}>
      <div className="container-main">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-10"
        >
          <span className="inline-block px-4 py-1.5 bg-secondary rounded-full text-secondary-foreground text-sm font-medium mb-4">
            Our Events
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Featured <span className="text-gradient-gold">Celebrations</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Explore our portfolio of beautifully decorated events that showcase our expertise and creativity.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-primary/10"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group relative overflow-hidden rounded-2xl shadow-card hover:shadow-elegant transition-all duration-500"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <span className="inline-block px-3 py-1 bg-gold/90 text-primary text-xs font-medium rounded-full mb-2">
                  {event.category}
                </span>
                <h3 className="font-serif text-xl font-semibold text-primary-foreground mb-1">
                  {event.title}
                </h3>
                <p className="text-primary-foreground/80 text-sm">
                  {event.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
