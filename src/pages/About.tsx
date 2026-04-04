import { motion } from "framer-motion";
import { Target, Eye, Users } from "lucide-react";
import Layout from "@/components/Layout";
import aboutBanner from "@/assets/about-us-banner.jpg";

const About = () => {
  return (
    <Layout>
      {/* Banner */}
      <section className="relative h-[40vh] md:h-[50vh] flex items-center overflow-hidden">
        <img src={aboutBanner} alt="About TooWela" className="absolute inset-0 w-full h-full object-cover" loading="lazy" width={1920} height={600} />
        <div className="absolute inset-0 bg-hero-overlay/60" />
        <div className="container relative z-10 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground">
            About TooWela
          </h1>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 md:py-24">
        <div className="container max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h2 className="font-heading text-3xl font-bold mb-6">Who We Are</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              TooWela is a leading importer and exporter of professional-grade power tools, welding machines, laser welding equipment, and construction tools. Operating under the parent company <strong className="text-foreground">sikhivahanaexim</strong>, we bridge the gap between world-class manufacturers and businesses that demand reliability, performance, and value.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              With a deep understanding of industrial requirements and a commitment to quality, we curate products that empower professionals across construction, manufacturing, fabrication, and maintenance sectors.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our extensive network of global suppliers ensures that every product in our catalogue meets international quality standards while remaining competitively priced for the markets we serve.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="py-16 bg-secondary">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Target, title: "Our Mission", text: "To provide high-quality, affordable industrial tools and equipment to businesses worldwide through reliable import/export partnerships." },
              { icon: Eye, title: "Our Vision", text: "To become the most trusted name in industrial tool distribution, recognized for quality, integrity, and customer-first service." },
              { icon: Users, title: "Our Values", text: "Quality without compromise, transparent business practices, long-term partnerships, and continuous innovation in sourcing and delivery." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="bg-card p-8 rounded-lg text-center"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-4">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
