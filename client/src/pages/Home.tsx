import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Droplets, ShieldCheck, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Home() {
  return (
    <Layout>
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 via-background to-background z-0" />
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-8">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="space-y-6"
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-4">
                <div className="h-[1px] w-12 bg-primary" />
                <span className="text-primary uppercase tracking-[0.3em] text-sm font-medium">Premium Men's Care</span>
              </motion.div>
              
              <motion.h1 variants={fadeInUp} className="font-display text-6xl md:text-8xl font-bold leading-[0.9] text-white tracking-tight">
                O PODER <br />
                DE SER <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-primary bg-[length:200%_auto] animate-gradient">EXCLUSIVO</span>
              </motion.h1>
              
              <motion.p variants={fadeInUp} className="text-muted-foreground text-lg md:text-xl max-w-lg leading-relaxed">
                Cosméticos de alta performance desenvolvidos para o homem que não aceita menos que a excelência. Ciência e natureza em perfeita sintonia.
              </motion.p>
              
              <motion.div variants={fadeInUp} className="flex flex-wrap gap-6 pt-4">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-8 rounded-none text-lg tracking-wide font-medium">
                  CONHEÇA A LINHA
                </Button>
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/5 h-14 px-8 rounded-none text-lg tracking-wide font-medium">
                  SOBRE A MARCA
                </Button>
              </motion.div>
            </motion.div>
          </div>
          
          <div className="lg:col-span-5 relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative aspect-[4/5] bg-gradient-to-b from-white/5 to-transparent border border-white/10 p-8 flex items-center justify-center"
            >
              {/* Placeholder for Product Image */}
              <div className="absolute inset-0 bg-[url('/images/hero-product.jpg')] bg-cover bg-center opacity-100 transition-all duration-700" />
              
              <div className="absolute bottom-8 left-8 right-8 bg-black/80 backdrop-blur-md border border-white/10 p-6">
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-primary text-xs uppercase tracking-widest mb-1">Best Seller</p>
                    <h3 className="text-white font-display text-2xl">Óleo de Barba</h3>
                  </div>
                  <span className="text-white font-mono text-lg">AKZ 4.500</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
        </motion.div>
      </section>

      {/* PHILOSOPHY SECTION */}
      <section id="filosofia" className="py-32 bg-background relative border-t border-white/5">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div className="order-2 md:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4 mt-12">
                  <div className="aspect-[3/4] bg-white/5 border border-white/10 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-[url('/images/philosophy-1.jpg')] bg-cover bg-center grayscale group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="aspect-square bg-white/5 border border-white/10 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-[url('/images/philosophy-2.jpg')] bg-cover bg-center grayscale group-hover:scale-105 transition-transform duration-700" />
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="aspect-square bg-white/5 border border-white/10 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-[url('/images/philosophy-3.jpg')] bg-cover bg-center grayscale group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="aspect-[3/4] bg-white/5 border border-white/10 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-[url('/images/philosophy-4.jpg')] bg-cover bg-center grayscale group-hover:scale-105 transition-transform duration-700" />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 md:order-2 space-y-8">
              <h2 className="font-display text-4xl md:text-5xl text-white leading-tight">
                MAIS QUE COSMÉTICOS, <br />
                <span className="text-primary italic">UM ESTILO DE VIDA.</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                A Ébano nasceu da necessidade real de cuidados masculinos de alta performance. Criada por Fredy Costa, nossa missão é oferecer produtos que respeitam a diversidade e elevam a autoestima do homem moderno.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8">
                <div className="space-y-3">
                  <ShieldCheck className="w-8 h-8 text-primary" />
                  <h4 className="text-white font-bold tracking-wide">Qualidade Premium</h4>
                  <p className="text-sm text-muted-foreground">Ingredientes ativos comprovados e fórmulas exclusivas.</p>
                </div>
                <div className="space-y-3">
                  <Sparkles className="w-8 h-8 text-primary" />
                  <h4 className="text-white font-bold tracking-wide">Fragrâncias Únicas</h4>
                  <p className="text-sm text-muted-foreground">Aromas marcantes que definem sua presença.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS SECTION */}
      <section id="produtos" className="py-32 bg-secondary/20 relative">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <span className="text-primary uppercase tracking-[0.2em] text-xs font-bold mb-2 block">Nossa Coleção</span>
              <h2 className="font-display text-4xl md:text-5xl text-white">ESSENCIAIS</h2>
            </div>
            <Button variant="link" className="text-white hover:text-primary p-0 h-auto text-lg group">
              Ver todos os produtos <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Cera Capilar Matte",
                price: "AKZ 5.000",
                desc: "Fixação forte com acabamento natural e seco.",
                image: "https://images.unsplash.com/photo-1620916297397-a4a5402a3c6c?q=80&w=1887&auto=format&fit=crop"
              },
              {
                name: "Tónico Fortalecedor",
                price: "AKZ 6.500",
                desc: "Com Minoxidil para crescimento e força.",
                image: "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?q=80&w=1780&auto=format&fit=crop"
              },
              {
                name: "Kit Barba Completa",
                price: "AKZ 12.000",
                desc: "Óleo, shampoo e balm para a barba perfeita.",
                image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=1887&auto=format&fit=crop"
              }
            ].map((product, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -10 }}
                className="group bg-background border border-white/5 hover:border-primary/30 transition-colors duration-300"
              >
                <div className="aspect-square overflow-hidden relative bg-white/5">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                    style={{ backgroundImage: `url(${product.image})` }}
                  />
                  <div className="absolute top-4 right-4 bg-black/80 backdrop-blur px-3 py-1 text-xs text-white font-mono border border-white/10">
                    {product.price}
                  </div>
                </div>
                <div className="p-8 space-y-4">
                  <h3 className="text-2xl font-display text-white group-hover:text-primary transition-colors">{product.name}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{product.desc}</p>
                  <Button variant="outline" className="w-full border-white/10 hover:bg-primary hover:text-primary-foreground hover:border-primary rounded-none mt-4">
                    ADICIONAR
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* INGREDIENTS / SCIENCE SECTION */}
      <section className="py-32 bg-background border-y border-white/5">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <h2 className="font-display text-4xl md:text-5xl text-white">
                CIÊNCIA <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">COMPROVADA</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-md">
                Nossas fórmulas combinam ingredientes naturais potentes com ativos clínicos para resultados visíveis e duradouros.
              </p>
              
              <div className="space-y-6 pt-8">
                {[
                  { title: "Minoxidil", desc: "Estimula o crescimento e fortalece os folículos." },
                  { title: "Aloe Vera", desc: "Hidratação profunda e ação calmante para a pele." },
                  { title: "Óleos Essenciais", desc: "Nutrição intensa sem deixar resíduos oleosos." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 items-start border-b border-white/5 pb-6 last:border-0">
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-primary shrink-0">
                      <Droplets className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg mb-1">{item.title}</h4>
                      <p className="text-muted-foreground text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative h-full min-h-[500px] bg-white/5 border border-white/10 p-8 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1532413992378-f169ac26fff0?q=80&w=1780&auto=format&fit=crop')] bg-cover bg-center opacity-40 grayscale" />
              <div className="relative z-10 text-center space-y-4 max-w-xs mx-auto">
                <Star className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-3xl font-display text-white">Resultados Reais</h3>
                <p className="text-white/80">
                  "Desde que comecei a usar a linha Ébano, minha barba nunca esteve tão saudável e alinhada. Recomendo a todos."
                </p>
                <div className="pt-4">
                  <p className="text-primary font-bold uppercase tracking-widest text-sm">Carlos Mendes</p>
                  <p className="text-xs text-muted-foreground">Cliente Verificado</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-40 relative overflow-hidden flex items-center justify-center text-center">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506202687253-52e1b29d3527?q=80&w=1780&auto=format&fit=crop')] bg-cover bg-center opacity-20 grayscale" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        
        <div className="container relative z-10 space-y-8">
          <h2 className="font-display text-5xl md:text-7xl text-white max-w-4xl mx-auto leading-tight">
            ELEVE SEU NÍVEL DE <br />
            <span className="text-primary">CUIDADO PESSOAL</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Junte-se a milhares de homens que escolheram a excelência.
          </p>
          <div className="pt-8">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 h-16 px-12 rounded-none text-xl tracking-wide font-medium">
              COMPRAR AGORA
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
