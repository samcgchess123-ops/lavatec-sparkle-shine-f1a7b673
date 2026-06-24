import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Clock, MessageCircle } from "lucide-react";
import { posts } from "@/lib/blog-data";
import { whatsappLink } from "@/lib/services-data";

export const Route = createFileRoute("/blog/$slug")({
  head: ({ params }) => {
    const post = posts.find((p) => p.slug === params.slug);
    return {
      meta: post
        ? [
            { title: `${post.title} — LAVATEC` },
            { name: "description", content: post.excerpt },
            { property: "og:title", content: post.title },
            { property: "og:description", content: post.excerpt },
          ]
        : [{ title: "Artículo no encontrado — LAVATEC" }],
    };
  },
  loader: ({ params }) => {
    const post = posts.find((p) => p.slug === params.slug);
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
  component: BlogPost,
});

function BlogPost() {
  const params = Route.useParams();
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return null;
  return (
    <article className="pt-28 md:pt-32 pb-24 md:pb-32 bg-background">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-primary mb-8"
        >
          <ArrowLeft size={15} /> Volver al blog
        </Link>

        <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground mb-5">
          <span className="text-primary">{post.category}</span>
          <span>·</span>
          <span className="flex items-center gap-1"><Clock size={11} /> {post.readTime}</span>
          <span>·</span>
          <span>{post.date}</span>
        </div>

        <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground leading-tight mb-8">
          {post.title}
        </h1>

        <div className="rounded-3xl overflow-hidden mb-10 premium-shadow">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-auto object-cover"
            loading="eager"
          />
        </div>

        <p className="text-lg text-muted-foreground leading-relaxed mb-12 border-l-2 border-accent pl-5 italic">
          {post.excerpt}
        </p>

        <div className="space-y-10">
          {post.sections.map((s: { heading: string; body: string; bullets?: string[] }) => (
            <section key={s.heading}>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                {s.heading}
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-4">{s.body}</p>
              {s.bullets && (
                <ul className="space-y-2 pl-1">
                  {s.bullets.map((b: string) => (
                    <li key={b} className="flex gap-3 text-foreground/75 leading-relaxed">
                      <span className="text-accent font-bold">·</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        <div className="mt-14 rounded-3xl bg-gradient-to-br from-primary to-cyan-accent p-8 md:p-10 text-primary-foreground text-center">
          <h3 className="font-display text-2xl font-bold mb-3">
            ¿Listo para una limpieza profunda?
          </h3>
          <p className="text-primary-foreground/85 mb-6 max-w-lg mx-auto">
            Agenda tu servicio con vapor profesional y descubre la diferencia.
          </p>
          <a
            href={whatsappLink("Hola Lavatec, vengo del blog y me gustaría cotizar un servicio.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground rounded-full px-7 py-3.5 text-sm font-semibold shadow-xl hover:scale-[1.03] transition-all"
          >
            <MessageCircle size={16} /> CONTACTANOS
          </a>
        </div>
      </div>
    </article>
  );
}
