import { Building2, GraduationCap, BedDouble, MessageCircle, BadgeCheck, Star } from "lucide-react";
import { whatsappLink } from "@/lib/services-data";

const blocks = [
  {
    icon: Building2,
    title: "Mobiliario Corporativo",
    desc: "Higienización integral para oficinas, salas de juntas, recepciones y espacios de coworking.",
    items: ["Oficinas", "Salas de juntas", "Recepciones", "Coworkings"],
  },
  {
    icon: GraduationCap,
    title: "Mobiliario Institucional",
    desc: "Servicio especializado para entidades que requieren altos estándares de higiene.",
    items: ["Colegios", "Universidades", "Clínicas", "Consultorios", "Entidades"],
  },
];

export default function BusinessServices({ hideHeader = false }: { hideHeader?: boolean }) {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {!hideHeader && (
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">
              Servicios Empresariales
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-5 leading-tight">
              Soluciones premium para <span className="italic text-primary">tu negocio</span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg">
              Mantenemos tus espacios profesionales impecables con limpieza profunda y sanitización con vapor.
            </p>
          </div>
        )}

        {/* AIRBNB — Top featured block */}
        <a
          href={whatsappLink("Hola Lavatec, soy propietario/administrador de Airbnb y quiero información.")}
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-3xl bg-gradient-to-br from-primary to-cyan-accent p-8 md:p-12 text-primary-foreground premium-shadow relative overflow-hidden mb-10 hover:scale-[1.005] transition-transform"
        >
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "28px 28px" }} />
          <div className="relative grid md:grid-cols-[auto_1fr_auto] gap-6 items-center">
            <div className="w-16 h-16 rounded-2xl bg-background/15 backdrop-blur flex items-center justify-center shrink-0">
              <BedDouble size={30} className="text-primary-foreground" />
            </div>
            <div>
              <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-accent mb-2">
                <Star size={12} className="fill-accent" /> Servicio para Airbnb
              </span>
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-3 leading-tight">
                Mantén el estándar premium de tu Airbnb
              </h3>
              <p className="text-primary-foreground/90 leading-relaxed max-w-2xl">
                Ayudamos a propietarios y administradores de Airbnb a mejorar la experiencia
                de sus huéspedes, conseguir mejores calificaciones y mantener muebles,
                colchones, tapizados y textiles impecables entre cada reserva.
              </p>
            </div>
            <span className="hidden md:inline-flex items-center gap-2 bg-accent text-accent-foreground rounded-full px-6 py-3 text-sm font-semibold shadow-lg">
              <MessageCircle size={16} />
              WhatsApp
            </span>
          </div>
        </a>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {blocks.map((b) => (
            <a
              key={b.title}
              href={whatsappLink(`Hola Lavatec, quiero información sobre ${b.title}.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-3xl border border-border bg-card p-8 md:p-10 card-hover relative overflow-hidden block"
            >
              <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-primary/5" />
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-cyan-accent flex items-center justify-center mb-5 shadow-lg">
                  <b.icon size={26} className="text-primary-foreground" />
                </div>
                <h3 className="font-display text-2xl font-semibold text-foreground mb-3">{b.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-5">{b.desc}</p>
                <ul className="flex flex-wrap gap-2">
                  {b.items.map((i) => (
                    <li
                      key={i}
                      className="text-xs font-medium px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground"
                    >
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            </a>
          ))}
        </div>

        <div className="rounded-2xl border border-accent/40 bg-accent/5 px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-5 mb-8">
          <div className="flex items-center gap-3">
            <BadgeCheck size={22} className="text-accent shrink-0" />
            <p className="text-sm md:text-base text-foreground font-medium">
              Adaptamos el precio según el volumen y las necesidades de tu empresa.
            </p>
          </div>
        </div>

        <div className="text-center">
          <a
            href={whatsappLink("Hola Lavatec, quiero agendar un servicio empresarial.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground rounded-full px-8 py-4 text-sm font-semibold shadow-lg hover:shadow-xl hover:scale-[1.03] transition-all"
          >
            <MessageCircle size={16} />
            AGENDA TU SERVICIO POR WHATSAPP
          </a>
        </div>
      </div>
    </section>
  );
}
