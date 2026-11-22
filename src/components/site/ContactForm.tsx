import { useState, type FormEvent } from "react";
import { z } from "zod";
import { serviceOptions, WA } from "./content";

const schema = z.object({
  name: z.string().trim().min(2, "يرجى إدخال الاسم الكامل").max(100),
  phone: z.string().trim().regex(/^[+\d\s-]{8,20}$/, "يرجى إدخال رقم هاتف صحيح"),
  email: z.union([z.literal(""), z.string().trim().email("بريد إلكتروني غير صحيح").max(255)]),
  service: z.string().min(1, "يرجى اختيار نوع الخدمة"),
  details: z.string().trim().max(1500),
});

const field = "w-full border-0 border-b border-border bg-transparent px-0 py-3 text-foreground placeholder:text-muted-foreground/70 focus:border-accent focus:outline-none focus:ring-0";

export function ContactForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [opened, setOpened] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    const r = schema.safeParse(data);
    if (!r.success) {
      const errs: Record<string, string> = {};
      for (const i of r.error.issues) errs[String(i.path[0])] = i.message;
      setErrors(errs);
      return;
    }
    setErrors({});
    const v = r.data;
    const msg = `طلب استشارة — ساتا\nالاسم: ${v.name}\nالهاتف: ${v.phone}\nالبريد: ${v.email || "—"}\nالخدمة: ${v.service}\nالتفاصيل: ${v.details || "—"}`;
    window.open(`https://wa.me/${WA}?text=${encodeURIComponent(msg)}`, "_blank", "noopener");
    setOpened(true);
  }

  const err = (k: string) => errors[k] && <p className="mt-1 text-xs text-destructive">{errors[k]}</p>;

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-7 bg-card p-6 md:p-10">
      <div className="grid gap-7 md:grid-cols-2">
        <label className="block">
          <span className="text-xs text-muted-foreground">الاسم الكامل *</span>
          <input name="name" autoComplete="name" className={field} />
          {err("name")}
        </label>
        <label className="block">
          <span className="text-xs text-muted-foreground">رقم الهاتف / واتساب *</span>
          <input name="phone" type="tel" dir="ltr" autoComplete="tel" className={`${field} text-right`} />
          {err("phone")}
        </label>
      </div>
      <div className="grid gap-7 md:grid-cols-2">
        <label className="block">
          <span className="text-xs text-muted-foreground">البريد الإلكتروني</span>
          <input name="email" type="email" dir="ltr" autoComplete="email" className={`${field} text-right`} />
          {err("email")}
        </label>
        <label className="block">
          <span className="text-xs text-muted-foreground">نوع الخدمة المطلوبة *</span>
          <select name="service" defaultValue="" className={field}>
            <option value="" disabled>اختر الخدمة</option>
            {serviceOptions.map((s) => <option key={s}>{s}</option>)}
          </select>
          {err("service")}
        </label>
      </div>
      <label className="block">
        <span className="text-xs text-muted-foreground">تفاصيل المشروع ومساحة المكان التقريبية</span>
        <textarea name="details" rows={4} className={`${field} resize-none`} />
      </label>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button type="submit" className="bg-ink px-8 py-4 text-sm text-ink-foreground transition-colors hover:bg-accent hover:text-accent-foreground">
          إرسال طلب الاستشارة
        </button>
        <p className="text-xs text-muted-foreground">سيُفتح واتساب برسالة جاهزة لإرسال طلبك إلينا.</p>
      </div>
      {opened && (
        <p role="status" className="border-r-2 border-accent pr-3 text-sm text-muted-foreground">
          تم تجهيز رسالتك في واتساب — اضغط «إرسال» هناك لإتمام الطلب.
        </p>
      )}
    </form>
  );
}
