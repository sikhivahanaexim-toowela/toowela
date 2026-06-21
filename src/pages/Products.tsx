import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import productPowerTools from "@/assets/product-power-tools.jpg";
import productWelding from "@/assets/product-welding-machine.jpg";
import productLaser from "@/assets/product-laser-welding.jpg";
import productConstruction from "@/assets/product-construction-tools.jpg";
import ytSicZx7 from "@/assets/yt-sic-zx7.jpg";
import ytCut80 from "@/assets/yt-cut-80.jpg";
import ytRsn2500 from "@/assets/yt-rsn-2500.jpg";
import ytMma250 from "@/assets/yt-mma-250.jpg";
import ytTig400 from "@/assets/yt-tig-400.jpg";
import ytMig from "@/assets/yt-mig-270.jpg";
import ytMz1250 from "@/assets/yt-mz-1250.jpg";

const products = [
  { name: "Cordless Drill & Impact Wrench Set", category: "Power Tools", image: productPowerTools },
  { name: "MIG Welding Machine", category: "Welding Machines", image: productWelding },
  { name: "Fiber Laser Welding Machine", category: "Laser Welding", image: productLaser },
  { name: "Construction Equipment Set", category: "Construction Tools", image: productConstruction },
  { name: "500SICZ1", category: "SiC Silicon Carbide Series", image: ytSicZx7 },
  { name: "Plasma Cutter CUT-80", category: "Plasma Cutters", image: ytCut80 },
  { name: "TIG Welder TIG-400", category: "TIG Welders (GTAW)", image: ytTig400 },
  { name: "Arc Stud Welder RSN-2500", category: "Arc Stud Welders", image: ytRsn2500 },
  { name: "Stick Welder MMA-250T", category: "Stick Welders (SMAW)", image: ytMma250 },
  { name: "MIG-270F", category: "MIG/MAG Welders (GMAW)", image: ytMig },
  { name: "Submerged Arc Welder MZ-1250", category: "Submerged Arc Welders", image: ytMz1250 },
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
