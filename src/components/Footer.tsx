import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, MapPin, Phone, Mail, Clock } from "lucide-react";
import logoAsset from "@/assets/lavatec-logo-transparent.png.asset.json";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-background/10">
          {/* Brand */}
          <div className="md:col-span-5 space-y-5">
            <div className="flex items-center gap-3">
              <img
                src={logoAsset.url}
                alt="LAVATEC"
                width={44}
                height={44}
                className="h-11 w-auto object-contain"
              />
              <p className="font-display text-2xl font-bold text-background">LAVATEC</p>
            </div>
            <p className="text-sm text-background/65 leading-relaxed max-w-md">
              Especialistas en higienización profunda con vapor profesional. Más de 12 años
              de experiencia cuidando hogares y familias en Barranquilla con resultados
              impecables y un compromiso real con tu bienestar.
            </p>
            <div className="flex items-center gap-3 pt-1">
              <a
                href="https://www.instagram.com/lavatec_lavaseco/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center text-background/80 hover:bg-accent hover:text-accent-foreground transition-all"
              >
                <Instagram size={17} />
              </a>
              <a
                href="https://www.facebook.com/Lavatec.lavaseco/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center text-background/80 hover:bg-accent hover:text-accent-foreground transition-all"
              >
                <Facebook size={17} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-background/80">
              Navegación
            </h4>
            <nav className="flex flex-col gap-2.5">
              {[
                { label: "Inicio", to: "/" as const },
                { label: "Servicios", to: "/servicios" as const },
                { label: "Proceso", to: "/proceso" as const },
                { label: "Nosotros", to: "/nosotros" as const },
                { label: "Agendar", to: "/agendar" as const },
              ].map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className="text-sm text-background/55 hover:text-accent transition-colors w-fit"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-background/80">
              Contacto
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href="tel:+573046571420"
                className="flex items-start gap-3 text-sm text-background/65 hover:text-accent transition-colors"
              >
                <Phone size={15} className="shrink-0 mt-0.5" />
                +57 304 657 1420
              </a>
              <a
                href="mailto:lavatecclean@gmail.com"
                className="flex items-start gap-3 text-sm text-background/65 hover:text-accent transition-colors"
              >
                <Mail size={15} className="shrink-0 mt-0.5" />
                lavatecclean@gmail.com
              </a>
              <div className="flex items-start gap-3 text-sm text-background/65">
                <MapPin size={15} className="shrink-0 mt-0.5" />
                Barranquilla, Colombia
              </div>
              <div className="flex items-start gap-3 text-sm text-background/65">
                <Clock size={15} className="shrink-0 mt-0.5" />
                Lun – Sáb · 8:00 a.m. – 6:00 p.m.
              </div>
            </div>
          </div>
        </div>

        <div className="pt-6 flex items-center justify-center">
          <p className="text-xs text-background/40">
            © {new Date().getFullYear()} LAVATEC — Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  );
}
