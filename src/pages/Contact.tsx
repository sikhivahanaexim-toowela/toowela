import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import Layout from "@/components/Layout";
import contactImg from "@/assets/contact-machinery.jpg";

const Contact = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="bg-surface-dark text-surface-dark-foreground py-16 md:py-24">
        <div className="container text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold">
            Contact <span className="text-primary">Us</span>
          </h1>
          <p className="mt-3 text-surface-dark-foreground/70 max-w-xl mx-auto">
            Have questions? Reach out and our team will respond within 24 hours.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              <h2 className="font-heading text-2xl font-bold mb-6">Get In Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">Email</h4>
                    <p className="text-muted-foreground text-sm">info@toowela.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">Phone</h4>
                    <p className="text-muted-foreground text-sm">+91 9840407050</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">Address</h4>
                    <p className="text-muted-foreground text-sm">India</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Machinery Image */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              <img
                src={contactImg}
                alt="Industrial welding and power tool equipment"
                className="w-full h-full object-cover rounded-lg"
                loading="lazy"
                width={1024}
                height={768}
              />
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
