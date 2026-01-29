import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { X } from "lucide-react";

const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800",
    alt: "Wedding floral arrangement",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=800",
    alt: "Elegant table setting",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800",
    alt: "Outdoor wedding ceremony",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800",
    alt: "Birthday party decoration",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800",
    alt: "Event lighting",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800",
    alt: "Party balloons",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800",
    alt: "Wedding ceremony",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800",
    alt: "Event decoration",
  },
];

export const GallerySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="section-padding bg-secondary/30" ref={ref}>
      <div className="container-main">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="inline-block px-4 py-1.5 bg-secondary rounded-full text-secondary-foreground text-sm font-medium mb-4">
            Gallery
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-gradient-gold">Portfolio</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A glimpse into the magical moments we've created for our clients.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.05 * index }}
              className={`relative overflow-hidden rounded-xl cursor-pointer group ${
                index === 0 || index === 5 ? "md:col-span-2 md:row-span-2" : ""
              }`}
              onClick={() => setSelectedImage(image.src)}
            >
              <div className={`aspect-square overflow-hidden ${index === 0 || index === 5 ? "md:aspect-square" : ""}`}>
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/30 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-primary/90 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-primary-foreground p-2 hover:bg-primary-foreground/10 rounded-full transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={selectedImage}
            alt="Gallery image"
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
          />
        </motion.div>
      )}
    </section>
  );
};
