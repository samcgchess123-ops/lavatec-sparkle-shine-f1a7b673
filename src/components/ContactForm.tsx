import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Send, CheckCircle2, Phone, MessageCircle, MapPin, Clock, Loader2 } from "lucide-react";

const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSeX2m8qLEUUW_OOM-cmZgIx5nfLOnI9DD99CysS65QjJ345KQ/formResponse";

const ENTRIES = {
  nombre: "entry.49450774",
  telefono: "entry.594994153",
  servicio: "entry.1463253366",
  direccion: "entry.1720829793",
  mensaje: "entry.2085334526",
} as const;

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    nombre: "",
    telefono: "",
    servicio: "",
    direccion: "",
    mensaje: "",
  });

  const set = (k: keyof typeof form) => (v: string) =>
    setForm((f) => ({ ...f, [k]: v.slice(0, 1000) }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (sending) return;

    const nombre = form.nombre.trim();
    const telefono = form.telefono.trim();
    const direccion = form.direccion.trim();

    if (!nombre || !telefono || !form.servicio || !direccion) {
      setError("Por favor completa todos los campos obligatorios.");
      return;
    }

    setError("");
    setSending(true);

    const body = new URLSearchParams();
    body.append(ENTRIES.nombre, nombre);
    body.append(ENTRIES.telefono, telefono);
    body.append(ENTRIES.servicio, form.servicio);
    body.append(ENTRIES.direccion, direccion);
    body.append(ENTRIES.mensaje, form.mensaje.trim());

    try {
      await fetch(GOOGLE_FORM_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });
      setSent(true);
    } catch {
      setError(
        "No pudimos enviar tu solicitud. Revisa tu conexión o escríbenos por WhatsApp."
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="py-20 md:py-32 bg-background overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-6 lg:gap-10">
          {/* Form */}
          <div className="lg:col-span-3 bg-card border border-border rounded-3xl p-6 sm:p-8 md:p-10 premium-shadow">
            {sent ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-leaf/20 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 size={32} className="text-leaf" />
                </div>
                <h3 className="font-display text-2xl font-semibold text-foreground mb-2">
                  ¡Solicitud enviada!
                </h3>
                <p className="text-muted-foreground">
                  Te contactaremos en menos de 1 hora.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <Label htmlFor="nombre" className="mb-1.5 block">Nombre</Label>
                    <Input
                      id="nombre"
                      name="nombre"
                      autoComplete="name"
                      maxLength={100}
                      placeholder="Tu nombre completo"
                      value={form.nombre}
                      onChange={(e) => set("nombre")(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="telefono" className="mb-1.5 block">Teléfono</Label>
                    <Input
                      id="telefono"
                      name="telefono"
                      type="tel"
                      inputMode="tel"
                      autoComplete="tel"
                      maxLength={30}
                      placeholder="+57 300 123 4567"
                      value={form.telefono}
                      onChange={(e) => set("telefono")(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="servicio" className="mb-1.5 block">Servicio de interés</Label>
                  <select
                    id="servicio"
                    name="servicio"
                    required
                    value={form.servicio}
                    onChange={(e) => set("servicio")(e.target.value)}
                    className="w-full h-11 rounded-md border border-input bg-background px-3 py-2 text-base sm:text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option value="" disabled>Selecciona un servicio</option>
                    <option>Limpieza de Muebles</option>
                    <option>Higienización de Colchones</option>
                    <option>Detallado de Vehículos</option>
                    <option>Alfombras y Cortinas</option>
                    <option>Lavado en Seco</option>
                    <option>Sanitización Premium</option>
                  </select>
                </div>
                <div>
                  <Label htmlFor="direccion" className="mb-1.5 block">Dirección</Label>
                  <Input
                    id="direccion"
                    name="direccion"
                    autoComplete="street-address"
                    maxLength={200}
                    placeholder="Tu dirección"
                    value={form.direccion}
                    onChange={(e) => set("direccion")(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="mensaje" className="mb-1.5 block">Mensaje (opcional)</Label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    rows={3}
                    maxLength={1000}
                    placeholder="Cuéntanos más sobre lo que necesitas"
                    value={form.mensaje}
                    onChange={(e) => set("mensaje")(e.target.value)}
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-base sm:text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                  />
                </div>
                {error && (
                  <p className="text-sm text-destructive" role="alert">{error}</p>
                )}
                <Button
                  variant="cta"
                  size="lg"
                  type="submit"
                  disabled={sending}
                  className="w-full rounded-full"
                >
                  {sending ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
                  {sending ? "Enviando…" : "Enviar Solicitud"}
                </Button>
                <p className="text-[11px] text-center text-muted-foreground">
                  Te contactamos en menos de 1 hora en horario laboral.
                </p>
              </form>
            )}
          </div>

          {/* Info side */}
          <div className="lg:col-span-2 space-y-4">
            <a
              href="https://wa.me/573046571420?text=Hola%20Lavatec%2C%20quiero%20agendar%20un%20servicio"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 rounded-2xl bg-gradient-to-br from-leaf to-mint text-leaf-foreground card-hover"
            >
              <MessageCircle size={26} className="mb-3" />
              <p className="font-display text-lg font-semibold mb-1">Escríbenos por WhatsApp</p>
              <p className="text-sm opacity-80">Respuesta inmediata en horario laboral.</p>
            </a>
            <a
              href="tel:+573046571420"
              className="block p-6 rounded-2xl bg-card border border-border card-hover"
            >
              <Phone size={24} className="mb-3 text-primary" />
              <p className="font-display text-lg font-semibold text-foreground mb-1">Llámanos</p>
              <p className="text-sm text-muted-foreground">+57 304 657 1420</p>
            </a>
            <div className="p-6 rounded-2xl bg-card border border-border">
              <MapPin size={24} className="mb-3 text-primary" />
              <p className="font-display text-lg font-semibold text-foreground mb-1">Cobertura</p>
              <p className="text-sm text-muted-foreground">
                Barranquilla y área metropolitana — sin costo adicional.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-card border border-border">
              <Clock size={24} className="mb-3 text-primary" />
              <p className="font-display text-lg font-semibold text-foreground mb-1">Horario</p>
              <p className="text-sm text-muted-foreground">Lun – Sáb: 8:00 a.m. – 6:00 p.m.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
