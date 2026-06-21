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
import ytSaw from "@/assets/yt-saw-welder.jpg";
import yt500sicz1 from "@/assets/yt-500sicz1.jpg";
import ytUniversal500 from "@/assets/yt-universal-500sic.jpg";
import ytNbc350 from "@/assets/yt-nbc-350sic.jpg";
import ytNbc500 from "@/assets/yt-nbc-500sic.jpg";
import ytWsm315 from "@/assets/yt-wsm-315sic.jpg";
import ytWsm400 from "@/assets/yt-wsm-400sic.jpg";
import ytWsm500 from "@/assets/yt-wsm-500sic.jpg";
import ytBuiltin80 from "@/assets/yt-builtin-80sic.jpg";
import ytBuiltin120 from "@/assets/yt-builtin-120sic.jpg";
import ytBuiltin160 from "@/assets/yt-builtin-160sic.jpg";
import ytSic1000 from "@/assets/yt-sic-1000.jpg";
import ytSic2500q from "@/assets/yt-sic-2500q.jpg";
import ytSic2500 from "@/assets/yt-sic-2500.jpg";
import ytSicManual1000 from "@/assets/yt-sic-manual-1000.jpg";
import ytRsn2500 from "@/assets/yt-rsn-2500.jpg";
import ytCut80 from "@/assets/yt-cut-80.jpg";
import ytTig400 from "@/assets/yt-tig-400.jpg";
import ytMma250t from "@/assets/yt-mma-250t.jpg";
import ytMma315 from "@/assets/yt-mma-315.jpg";
import ytMma315t from "@/assets/yt-mma-315t.jpg";

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
  { name: "500SICZ1", category: "SiC Silicon Carbide Series", image: yt500sicz1 },
  { name: "Universal 500SIC (Whole Network)", category: "SiC Silicon Carbide Series", image: ytUniversal500 },
  { name: "NBC-350SIC", category: "SiC Silicon Carbide Series", image: ytNbc350 },
  { name: "NBC-500SIC", category: "SiC Silicon Carbide Series", image: ytNbc500 },
  { name: "WSM-315SIC", category: "SiC Silicon Carbide Series", image: ytWsm315 },
  { name: "WSM-400SIC", category: "SiC Silicon Carbide Series", image: ytWsm400 },
  { name: "WSM-500SIC", category: "SiC Silicon Carbide Series", image: ytWsm500 },
  { name: "Built-in 80SIC", category: "SiC Silicon Carbide Series", image: ytBuiltin80 },
  { name: "Built-in 120SIC", category: "SiC Silicon Carbide Series", image: ytBuiltin120 },
  { name: "Built-in 160SIC", category: "SiC Silicon Carbide Series", image: ytBuiltin160 },
  { name: "Silicon Carbide 1000SIC", category: "SiC Silicon Carbide Series", image: ytSic1000 },
  { name: "Silicon Carbide 2500QSIC", category: "SiC Silicon Carbide Series", image: ytSic2500q },
  { name: "Silicon Carbide 2500SIC", category: "SiC Silicon Carbide Series", image: ytSic2500 },
  { name: "Silicon Carbide Manual Welding 1000SIC", category: "SiC Silicon Carbide Series", image: ytSicManual1000 },
  { name: "Plasma Cutter CUT-80", category: "Plasma Cutters", image: ytCut80 },
  { name: "TIG Welder TIG-400", category: "TIG Welders (GTAW)", image: ytTig400 },
  { name: "TIG Welder Pulse AC/DC", category: "TIG Welders Pulse AC/DC", image: ytTig400 },
  { name: "Arc Stud Welder RSN-2500", category: "Arc Stud Welders", image: ytRsn2500 },
  { name: "Stick Welder MMA-250T", category: "Stick Welders (SMAW)", image: ytMma250t },
  { name: "Stick Welder MMA-315", category: "Stick Welders (SMAW)", image: ytMma315 },
  { name: "Stick Welder MMA-315T", category: "Stick Welders (SMAW)", image: ytMma315t },
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
