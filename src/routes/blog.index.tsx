import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Clock, Calendar, Search, X } from "lucide-react";
import PageHero from "@/components/PageHero";
import FinalCTA from "@/components/FinalCTA";
import { posts, categories, searchPosts } from "@/lib/blog-data";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Blog — LAVATEC | Tips de limpieza e higienización" },
      {
        name: "description",
        content:
          "Guías y consejos profesionales sobre limpieza con vapor de colchones, muebles, alfombras, cortinas y camas para mascotas.",
      },
      { property: "og:title", content: "Blog LAVATEC — Tips de limpieza con vapor" },
      {
        property: "og:description",
        content:
          "Artículos sobre ácaros, olores, humedad, mascotas e higiene del hogar escritos por especialistas en textiles.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Todos");

  const results = useMemo(() => searchPosts(query, category), [query, category]);
  const isBrowsing = query.trim() === "" && category === "Todos";
  const featured = posts[0];
  const grid = isBrowsing ? posts.slice(1) : results;

  const tabs = ["Todos", ...categories];

  return (
    <>
      <PageHero
        eyebrow="Blog & Tips"
        title="Consejos para una"
        highlight="higiene profunda"
        description="Artículos profesionales sobre limpieza con vapor, cuidado de textiles y bienestar del hogar."
      />

      <section className="pb-20 md:pb-28 bg-background overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          {/* Buscador + filtros */}
          <div className="mb-12 md:mb-16 space-y-5">
            <div className="relative max-w-xl">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
              />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Buscar: ácaros, olores, humedad, mascotas…"
                aria-label="Buscar artículos"
                className="w-full h-12 rounded-full border border-border bg-card pl-11 pr-11 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  aria-label="Limpiar búsqueda"
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                >
                  <X size={15} />
                </button>
              )}
            </div>

            <div className="flex gap-2 overflow-x-auto pb-1 -mx-5 px-5 sm:mx-0 sm:px-0 sm:flex-wrap">
              {tabs.map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setCategory(c)}
                  className={`shrink-0 rounded-full px-4 py-2 text-xs font-semibold transition-colors border ${
                    category === c
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-card text-muted-foreground border-border hover:text-primary hover:border-primary/40"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {/* Destacado */}
          {isBrowsing && (
            <Link
              to="/blog/$slug"
              params={{ slug: featured.slug }}
              className="group grid md:grid-cols-2 gap-0 md:gap-10 rounded-2xl md:rounded-3xl bg-card border border-border overflow-hidden premium-shadow mb-14 md:mb-16 hover:shadow-2xl transition-all"
            >
              <div className="relative aspect-[3/2] md:aspect-auto md:min-h-[22rem] overflow-hidden">
                <img
                  src={featured.image}
                  alt={featured.title}
                  width={1200}
                  height={800}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <span className="absolute top-4 left-4 inline-flex items-center bg-accent text-accent-foreground rounded-full px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.15em]">
                  Destacado
                </span>
              </div>
              <div className="p-6 sm:p-8 md:p-10 flex flex-col justify-center">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground mb-4">
                  <span className="text-primary">{featured.category}</span>
                  <span className="flex items-center gap-1"><Clock size={11} /> {featured.readTime}</span>
                  <span className="flex items-center gap-1"><Calendar size={11} /> {featured.date}</span>
                </div>
                <h2 className="font-display text-xl sm:text-2xl md:text-4xl font-bold text-foreground leading-tight mb-4 group-hover:text-primary transition-colors">
                  {featured.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6 text-sm md:text-base">
                  {featured.excerpt}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all w-fit">
                  Leer artículo completo <ArrowRight size={16} />
                </span>
              </div>
            </Link>
          )}

          {/* Resultados */}
          {!isBrowsing && (
            <p className="text-sm text-muted-foreground mb-6">
              {grid.length === 0
                ? "Sin resultados"
                : `${grid.length} ${grid.length === 1 ? "artículo" : "artículos"}`}
            </p>
          )}

          {grid.length === 0 ? (
            <div className="rounded-3xl border border-dashed border-border bg-card px-6 py-16 text-center">
              <p className="font-display text-lg font-semibold text-foreground mb-2">
                No encontramos artículos relacionados con tu búsqueda.
              </p>
              <p className="text-sm text-muted-foreground mb-6">
                Prueba con otra palabra como “colchón”, “ácaros”, “sofá” o “mascotas”.
              </p>
              <button
                type="button"
                onClick={() => {
                  setQuery("");
                  setCategory("Todos");
                }}
                className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-semibold"
              >
                Ver todos los artículos
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {grid.map((p) => (
                <Link
                  key={p.slug}
                  to="/blog/$slug"
                  params={{ slug: p.slug }}
                  className="group rounded-2xl border border-border bg-card overflow-hidden card-hover flex flex-col h-full"
                >
                  <div className="aspect-[3/2] overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.title}
                      width={1200}
                      height={800}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground mb-3">
                      <span className="text-primary">{p.category}</span>
                      <span className="flex items-center gap-1">
                        <Clock size={11} /> {p.readTime}
                      </span>
                    </div>
                    <h2 className="font-display text-lg font-semibold text-foreground leading-snug mb-3 line-clamp-3 min-h-[4.5rem] group-hover:text-primary transition-colors">
                      {p.title}
                    </h2>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-5 line-clamp-3 min-h-[3.9rem]">
                      {p.excerpt}
                    </p>
                    <span className="mt-auto text-xs font-semibold text-primary inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                      Leer artículo <ArrowRight size={13} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
