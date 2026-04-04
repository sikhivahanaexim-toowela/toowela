import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Globe, Wrench, Zap } from "lucide-react";
import Layout from "@/components/Layout";
import heroBanner from "@/assets/hero-banner.jpg";
import productPowerTools from "@/assets/product-power-tools.jpg";
import productWelding from "@/assets/product-welding-machine.jpg";
import productLaser from "@/assets/product-laser-welding.jpg";
import productConstruction from "@/assets/product-construction-tools.jpg";

const categories = [
  { title: "Power Tools", image: productPowerTools, desc: "Drills, grinders, saws and more" },
  { title: "Welding Machines", image: productWelding, desc: "MIG, TIG & arc welding equipment" },
  { title: "Laser Welding", image: productLaser, desc: "Precision fiber laser welders" },
  { title: "Construction Tools", image: productConstruction, desc: "Heavy duty construction equipment" },
];

const features = [
  { icon: Globe, title: "Global Supply Chain", desc: "Import & export across international markets" },
  { icon: Shield, title: "Quality Assured", desc: "Every product meets rigorous quality standards" },
  { icon: Wrench, title: "Expert Support", desc: "Technical guidance from industry professionals" },
  { icon: Zap, title: "Fast Delivery", desc: "Efficient logistics for timely deliveries" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[70vh] md:h-[85vh] flex items-center overflow-hidden">
        <img src={heroBanner} alt="TooWela power tools" className="absolute inset-0 w-full h-full object-cover" width={1920} height={800} />
        <div className="absolute inset-0 bg-hero-overlay/60" />
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight">
              Professional <span className="text-primary">Power Tools</span> & Equipment
            </h1>
            <p className="mt-4 text-lg text-primary-foreground/80 max-w-lg">
              TooWela — your trusted source for industrial-grade power tools, welding machines, and construction equipment.
            </p>
            <div className="mt-8 flex gap-4">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-primary-hover transition-colors"
              >
                View Products <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 border border-primary-foreground/30 text-primary-foreground font-semibold rounded-md hover:bg-primary-foreground/10 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold">Our Product Range</h2>
            <p className="mt-2 text-muted-foreground">Comprehensive solutions for every industrial need</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <Link
                  to="/products"
                  className="group block bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={cat.image}
                      alt={cat.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      width={800}
                      height={800}
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-heading text-lg font-semibold">{cat.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{cat.desc}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold">Why Choose TooWela?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-4">
                  <f.icon className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-lg font-semibold">{f.title}</h3>
                <p className="text-sm text-muted-foreground mt-2">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </Layout>
  );
};

export default Index;
