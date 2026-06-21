import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import productPowerTools from "@/assets/product-power-tools.jpg";
import productWelding from "@/assets/product-welding-machine.jpg";
import productLaser from "@/assets/product-laser-welding.jpg";
import productConstruction from "@/assets/product-construction-tools.jpg";
import productAngleGrinder from "@/assets/product-angle-grinder.jpg";
import productCircularSaw from "@/assets/product-circular-saw.jpg";
import productDemolitionHammer from "@/assets/product-demolition-hammer.jpg";
import ytMig from "@/assets/yt-mig-welder.jpg";
import ytSic from "@/assets/yt-sic-module.jpg";
import ytPlasma from "@/assets/yt-plasma-cutter.jpg";
import ytTig from "@/assets/yt-tig-welder.jpg";
import ytStud from "@/assets/yt-stud-welder.jpg";
import ytMma from "@/assets/yt-mma-welder.jpg";
import ytSaw from "@/assets/yt-saw-welder.jpg";

const products = [
  { name: "Cordless Drill & Impact Wrench Set", category: "Power Tools", image: productPowerTools },
  { name: "MIG Welding Machine", category: "Welding Machines", image: productWelding },
  { name: "Fiber Laser Welding Machine", category: "Laser Welding", image: productLaser },
  { name: "Construction Equipment Set", category: "Construction Tools", image: productConstruction },
  { name: "Angle Grinder", category: "Power Tools", image: productAngleGrinder },
  { name: "Circular Saw", category: "Power Tools", image: productCircularSaw },
  { name: "Demolition Hammer", category: "Construction Tools", image: productDemolitionHammer },
  { name: "MIG/MAG Welder 500A", category: "MIG/MAG Welders (GMAW)", image: ytMig },
  { name: "MIG/MAG Welder Double Pulse 350A", category: "MIG/MAG Double Pulse", image: ytMig },
  { name: "Silicon Carbide Inverter Module 1000SIC", category: "SiC Silicon Carbide Series", image: ytSic },
  { name: "Silicon Carbide Module 2500SIC", category: "SiC Silicon Carbide Series", image: ytSic },
  { name: "Built-in Silicon Carbide 160SIC", category: "SiC Silicon Carbide Series", image: ytSic },
  { name: "Plasma Cutter CUT-80", category: "Plasma Cutters", image: ytPlasma },
  { name: "TIG Welder 400A", category: "TIG Welders (GTAW)", image: ytTig },
  { name: "TIG Welder Pulse AC/DC", category: "TIG Welders Pulse AC/DC", image: ytTig },
  { name: "Arc Stud Welder RSN-2500", category: "Arc Stud Welders", image: ytStud },
  { name: "Stick Welder MMA-250T", category: "Stick Welders (SMAW)", image: ytMma },
  { name: "Stick Welder MMA-315", category: "Stick Welders (SMAW)", image: ytMma },
  { name: "Submerged Arc Welder", category: "Submerged Arc Welders", image: ytSaw },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
};

const Products = () => {
  return (
    <Layout>
      {/* Page Header */}
      <section className="bg-surface-dark text-surface-dark-foreground py-16 md:py-24">
        <div className="container text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold">
            Our <span className="text-primary">Products</span>
          </h1>
          <p className="mt-3 text-surface-dark-foreground/70 max-w-xl mx-auto">
            Explore our comprehensive range of professional power tools, welding machines, and construction equipment.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, i) => (
              <motion.div
                key={product.name}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="group bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-border"
              >
                <div className="aspect-square overflow-hidden bg-secondary">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    width={800}
                    height={800}
                  />
                </div>
                <div className="p-5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                    {product.category}
                  </span>
                  <h3 className="font-heading text-lg font-semibold mt-1">{product.name}</h3>
                  <a
                    href="https://wa.me/919840407050"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 mt-3 text-sm font-medium text-primary hover:text-primary-hover transition-colors"
                  >
                    Enquire Now →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
