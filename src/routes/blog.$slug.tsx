import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ChevronRight, Clock, Calendar, MessageCircle, ArrowRight } from "lucide-react";
import { posts, getPost, getRelated } from "@/lib/blog-data";
import { whatsappLink } from "@/lib/services-data";

export const Route = createFileRoute("/blog/$slug")({
  head: ({ params }) => {
    const post = getPost(params.slug);
    return {
      meta: post
        ? [
            { title: `${post.title} — LAVATEC` },
            { name: "description", content: post.excerpt },
            { property: "og:title", content: post.title },
            { property: "og:description", content: post.excerpt },
            { property: "og:type", content: "article" },
            { name: "twitter:card", content: "summary_large_image" },
          ]
        : [
            { title: "Artículo no encontrado — LAVATEC" },
            { name: "robots", content: "noindex" },
          ],
    };
  },
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post } as { post: (typeof posts)[number] };
  },
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <p className="text-muted-foreground mb-4">Artículo no encontrado.</p>
        <Link to="/blog" className="text-primary font-semibold">Volver al blog</Link>
      </div>
    </div>
  ),
  errorComponent: () => (
    <div className="min-h-screen flex items-center justify-center px-6">
      <p className="text-muted-foreground">Algo salió mal.</p>
    </div>
  ),
  component: BlogPostPage,
});

function BlogPostPage() {
  const params = Route.useParams();
  const post = getPost(params.slug);
  if (!post) return null;
  const related = getRelated(post);

  return (
    <article className="pt-28 md:pt-32 pb-20 md:pb-28 bg-background overflow-x-hidden">
      {/* Breadcrumb */}
      <div className="max-w-3xl mx-auto px-5 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-[11px] sm:text-xs font-medium text-muted-foreground mb-7">
          <Link to="/" className="hover:text-primary transition-colors">Inicio</Link>
          <ChevronRight size={12} className="shrink-0" />
          <Link to="/blog" className="hover:text-primary transition-colors">Blog</Link>
          <ChevronRight size={12} className="shrink-0" />
          <span className="text-foreground/70 line-clamp-1">{post.category}</span>
        </nav>

        <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.22em] text-primary mb-4">
          {post.category}
        </span>

        <h1 className="font-display text-[1.75rem] leading-[1.15] sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
          {post.title}
        </h1>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted-foreground mb-9 pb-8 border-b border-border">
          <span className="flex items-center gap-1.5"><Calendar size={13} /> {post.date}</span>
          <span className="flex items-center gap-1.5"><Clock size={13} /> {post.readTime} de lectura</span>
        </div>
      </div>

      {/* Imagen principal */}
      <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8 mb-10 md:mb-14">
        <div className="rounded-2xl md:rounded-3xl overflow-hidden premium-shadow aspect-[3/2]">
          <img
            src={post.image}
            alt={post.title}
            width={1200}
            height={800}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Contenido */}
      <div className="max-w-2xl mx-auto px-5 sm:px-6 lg:px-8">
        <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-12 font-medium">
          {post.intro}
        </p>

        <div className="space-y-11">
          {post.sections.map((s) => (
            <section key={s.heading}>
              <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-4 leading-snug">
                {s.heading}
              </h2>
              <p className="text-foreground/75 leading-[1.8] mb-4">{s.body}</p>
              {s.bullets && (
                <ul className="space-y-2.5 mt-5">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex gap-3 text-foreground/75 leading-relaxed">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        <div className="mt-12 rounded-2xl bg-muted/60 border border-border p-6 md:p-8">
          <h2 className="font-display text-lg md:text-xl font-semibold text-foreground mb-3">
            En resumen
          </h2>
          <p className="text-foreground/75 leading-[1.8]">{post.conclusion}</p>
        </div>

        {/* CTA */}
        <div className="mt-10 rounded-2xl md:rounded-3xl bg-primary p-7 md:p-10 text-primary-foreground">
          <h2 className="font-display text-xl md:text-2xl font-semibold mb-3 leading-snug">
            Cuando una limpieza profunda ya no puede esperar, podemos ayudarte.
          </h2>
          <p className="text-primary-foreground/80 mb-6 text-sm md:text-base leading-relaxed">
            Higienización profesional con vapor para muebles, colchones, alfombras, cortinas y
            camas para mascotas.
          </p>
          <a
            href={whatsappLink("Hola Lavatec, vengo del blog y me gustaría solicitar un servicio.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground rounded-full px-7 py-3.5 text-sm font-semibold shadow-lg hover:scale-[1.02] transition-transform"
          >
            <MessageCircle size={16} /> Solicitar servicio
          </a>
        </div>
      </div>

      {/* Relacionados */}
      {related.length > 0 && (
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 mt-20 md:mt-24">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8">
            También puede interesarte
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {related.map((r) => (
              <Link
                key={r.slug}
                to="/blog/$slug"
                params={{ slug: r.slug }}
                className="group flex flex-col rounded-2xl border border-border bg-card overflow-hidden card-hover h-full"
              >
                <div className="aspect-[3/2] overflow-hidden">
                  <img
                    src={r.image}
                    alt={r.title}
                    width={1200}
                    height={800}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-primary mb-2">
                    {r.category}
                  </span>
                  <h3 className="font-display text-base font-semibold text-foreground leading-snug mb-3 line-clamp-3 min-h-[3.9rem] group-hover:text-primary transition-colors">
                    {r.title}
                  </h3>
                  <span className="mt-auto text-xs font-semibold text-primary inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    Leer artículo <ArrowRight size={13} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </article>
  );
}
