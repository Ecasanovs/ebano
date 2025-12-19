import { Link } from "wouter";
import { Menu, X, ShoppingBag } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      {/* Navigation */}
      <header 
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
          isScrolled ? "bg-background/80 backdrop-blur-md border-white/10 py-4" : "bg-transparent py-6"
        )}
      >
        <div className="container flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <a className="font-display text-2xl font-bold tracking-tighter text-white hover:text-primary transition-colors">
              ÉBANO<span className="text-primary">.</span>
            </a>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {["Produtos", "Sobre", "Filosofia", "Contato"].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-sm uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" size="icon" className="text-white hover:text-primary hover:bg-white/5">
              <ShoppingBag className="w-5 h-5" />
            </Button>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none px-6 font-medium tracking-wide">
              LOJA
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background pt-24 px-6 md:hidden">
          <nav className="flex flex-col gap-8 text-center">
            {["Produtos", "Sobre", "Filosofia", "Contato"].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-2xl font-display font-bold text-white hover:text-primary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <Button className="w-full bg-primary text-primary-foreground mt-8 py-6 text-lg rounded-none">
              VISITAR LOJA
            </Button>
          </nav>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-grow pt-0">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-black border-t border-white/10 py-20">
        <div className="container grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-6">
            <h3 className="font-display text-2xl font-bold text-white">ÉBANO<span className="text-primary">.</span></h3>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Cosméticos masculinos premium desenvolvidos para o homem moderno que valoriza exclusividade e qualidade.
            </p>
          </div>
          
          <div>
            <h4 className="font-display text-lg text-white mb-6">Produtos</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Cabelo</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Barba</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Rosto</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Kits</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg text-white mb-6">Empresa</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Fredy Costa</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contato</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Termos</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg text-white mb-6">Newsletter</h4>
            <p className="text-muted-foreground text-sm mb-4">Receba novidades exclusivas.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Seu email" 
                className="bg-white/5 border border-white/10 px-4 py-2 text-sm text-white w-full focus:outline-none focus:border-primary transition-colors"
              />
              <Button className="bg-primary text-primary-foreground rounded-none hover:bg-primary/90">OK</Button>
            </div>
          </div>
        </div>
        <div className="container mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground">
          <p>&copy; 2025 Ébano Cosméticos. Todos os direitos reservados.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Instagram</a>
            <a href="#" className="hover:text-white">Facebook</a>
            <a href="#" className="hover:text-white">YouTube</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
