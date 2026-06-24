import { ImageIcon, PlayCircle } from "lucide-react";
import sofaBefore from "@/assets/sofa-before.jpg";
import sofaAfter from "@/assets/sofa-after.jpg";
import mattressBefore from "@/assets/mattress-before.jpg";
import mattressAfter from "@/assets/mattress-after.jpg";

// Items prepared to support real photos and videos.
// Future entries can include: { type: "video", src: "...", poster: "..." }
type GalleryItem =
  | { type: "before-after"; before: string; after: string; label: string }
  | { type: "video"; src: string; poster?: string; label: string }
  | { type: "placeholder"; label: string };

const items: GalleryItem[] = [
  { type: "before-after", before: sofaBefore, after: sofaAfter, label: "Limpieza profunda de sofá" },
  { type: "before-after", before: mattressBefore, after: mattressAfter, label: "Higienización de colchón" },
  { type: "placeholder", label: "Próximamente: alfombra residencial" },
  { type: "placeholder", label: "Próximamente: silla tapizada" },
  { type: "placeholder", label: "Próximamente: cama para mascota" },
  { type: "placeholder", label: "Próximamente: video del proceso" },
];

export default function Gallery() {
  return (
    <section className="py-24 md:py-32 section-gradient">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">
            Resultados Reales
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-5">
            Antes y <span className="italic text-gradient">después</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            Galería preparada para fotos y videos reales de nuestros trabajos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => {
            if (item.type === "before-after") {
              return (
                <div
                  key={i}
                  className="rounded-3xl overflow-hidden border border-border bg-card card-hover"
                >
                  <div className="grid grid-cols-2">
                    <div className="relative">
                      <img
                        src={item.before}
                        alt={`${item.label} - antes`}
                        loading="lazy"
                        width={340}
                        height={256}
                        className="w-full h-56 object-cover"
                      />
                      <span className="absolute top-3 left-3 bg-foreground/85 text-background text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                        Antes
                      </span>
                    </div>
                    <div className="relative">
                      <img
                        src={item.after}
                        alt={`${item.label} - después`}
                        loading="lazy"
                        width={340}
                        height={256}
                        className="w-full h-56 object-cover"
                      />
                      <span className="absolute top-3 right-3 bg-accent text-accent-foreground text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                        Después
                      </span>
                    </div>
                  </div>
                  <div className="p-5 text-center">
                    <p className="text-sm font-medium text-foreground">{item.label}</p>
                  </div>
                </div>
              );
            }
            if (item.type === "video") {
              return (
                <div
                  key={i}
                  className="rounded-3xl overflow-hidden border border-border bg-card card-hover relative"
                >
                  <video
                    src={item.src}
                    poster={item.poster}
                    controls
                    className="w-full h-56 object-cover"
                  />
                  <div className="p-5 text-center">
                    <p className="text-sm font-medium text-foreground">{item.label}</p>
                  </div>
                </div>
              );
            }
            // placeholder
            return (
              <div
                key={i}
                className="rounded-3xl border border-dashed border-border bg-card/60 flex flex-col items-center justify-center h-[300px] text-center p-6"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-3">
                  {item.label.includes("video") ? (
                    <PlayCircle size={26} className="text-primary" />
                  ) : (
                    <ImageIcon size={26} className="text-primary" />
                  )}
                </div>
                <p className="text-sm font-medium text-muted-foreground">{item.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
