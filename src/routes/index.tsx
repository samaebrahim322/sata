import { createFileRoute } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpLeft, Facebook, Instagram } from "lucide-react";
import { Header } from "@/components/site/Header";
import { ContactForm } from "@/components/site/ContactForm";
import { EMAIL, img, nav, PHONE, services, steps, values, WA } from "@/components/site/content";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ساتا للاستشارات الهندسية | تصميم معماري وداخلي في الرياض" },
      { name: "description", content: "ساتا للاستشارات الهندسية: تصميم معماري وداخلي، إصدار التراخيص، مراجعة المخططات، الإشراف وتجهيز المساحات في الرياض." },
      { property: "og:title", content: "ساتا للاستشارات الهندسية" },
      { property: "og:description", content: "نصمم المساحات برؤية هندسية متكاملة — من التصميم وحتى الإشراف والتنفيذ." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const n2 = (i: number) => String(i + 1).padStart(2, "0");

function Label({ n, children }: { n?: string; children: React.ReactNode }) {
  return (
    <p className="flex items-center gap-3 text-xs tracking-wide text-muted-foreground">
      {n && <span className="text-accent">{n}</span>}
      {n && <span className="h-px w-8 bg-border" />}
      {children}
    </p>
  );
}

function Index() {
  return (
    <>
      <Header />
      <main>
        {/* HERO */}
        <section id="home" className="relative overflow-hidden border-b border-border">
          <div className="pointer-events-none absolute inset-0 grid-lines opacity-40" aria-hidden />
          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-14 md:px-10 lg:grid-cols-12 lg:py-24">
            <div className="rise lg:col-span-6">
              <Label>ساتا للاستشارات الهندسية</Label>
              <h1 className="mt-6 text-4xl font-medium leading-[1.3] text-foreground md:text-5xl lg:text-[3.4rem]">
                نصمم المساحات
                <br />
                برؤية هندسية <span className="text-accent">متكاملة</span>
              </h1>
              <p className="mt-6 max-w-lg text-base leading-8 text-muted-foreground md:text-lg">
                في ساتا للاستشارات الهندسية، نحول الأفكار إلى مساحات مدروسة تجمع بين الجمال، الوظيفة والدقة، من التصميم وحتى الإشراف والتنفيذ.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <a href="#projects" className="group inline-flex items-center gap-3 bg-ink px-7 py-4 text-sm text-ink-foreground transition-colors hover:bg-accent hover:text-accent-foreground">
                  استكشف مشاريعنا <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                </a>
                <a href="#contact" className="inline-flex items-center border border-foreground/30 px-7 py-4 text-sm text-foreground transition-colors hover:border-accent hover:text-accent">
                  اطلب استشارة
                </a>
              </div>
            </div>
            <div className="relative lg:col-span-6">
              <div className="absolute -inset-3 border border-border md:-inset-5" aria-hidden />
              <span className="absolute -top-8 left-0 hidden text-[10px] tracking-[0.3em] text-muted-foreground md:block" dir="ltr">SATA — 01</span>
              <div className="relative aspect-[4/3] overflow-hidden bg-secondary lg:aspect-[5/4]">
                <img src={img.i01} alt="صالة استقبال بتصميم داخلي فاخر من أعمال ساتا" width={1000} height={1200} fetchPriority="high" className="h-full w-full object-cover object-[50%_45%]" />
              </div>
              <span className="absolute -bottom-3 right-6 h-6 w-px bg-accent md:-bottom-5" aria-hidden />
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="bg-card">
          <div className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
            <Label n="01">عن ساتا</Label>
            <div className="mt-8 grid gap-12 lg:grid-cols-12">
              <h2 className="text-3xl font-medium leading-[1.45] md:text-4xl lg:col-span-5">التصميم الجيد يبدأ بفهم المكان والإنسان.</h2>
              <div className="grid gap-10 border-t border-border pt-10 sm:grid-cols-2 lg:col-span-7 lg:border-t-0 lg:border-r lg:pt-0 lg:pr-12">
                <div>
                  <h3 className="text-sm text-accent">رؤيتنا</h3>
                  <p className="mt-4 leading-8 text-foreground/85">أن نكون من المكاتب الهندسية الرائدة في تقديم حلول تصميمية متكاملة ومبتكرة، تساهم في الارتقاء بجودة المساحات وتثري تجربة الإنسان.</p>
                </div>
                <div>
                  <h3 className="text-sm text-accent">رسالتنا</h3>
                  <p className="mt-4 leading-8 text-foreground/85">تقديم خدمات هندسية وتصميمية تجمع بين الإبداع والدقة والوظيفة، من خلال فهم احتياجات عملائنا وتحويل تطلعاتهم إلى مساحات متكاملة ذات قيمة مستدامة.</p>
                </div>
                <div className="flex items-end gap-6 sm:col-span-2">
                  <img src={img.i12} alt="منظور علوي لطاولة طعام بتصميم ساتا" width={1000} height={1200} loading="lazy" className="h-40 w-32 shrink-0 object-cover md:h-48 md:w-40" />
                  <p className="text-sm leading-7 text-muted-foreground">نرافق عملاءنا منذ بداية الفكرة وحتى اكتمال المشروع وتسليم المفتاح، وفق أعلى معايير الجودة والاشتراطات النظامية.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="border-y border-border">
          <div className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
            <div className="grid gap-12 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <Label n="02">خدماتنا</Label>
                <h2 className="mt-6 text-3xl font-medium md:text-4xl">خدماتنا الهندسية</h2>
                <p className="mt-4 leading-8 text-muted-foreground">حلول هندسية متكاملة لكل مرحلة من مشروعك</p>
                <div className="mt-10 hidden aspect-[3/4] overflow-hidden lg:block">
                  <img src={img.i11} alt="غرفة طعام بخامات دافئة من أعمال ساتا" width={1000} height={1200} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
                </div>
              </div>
              <ol className="border-t border-foreground/80 lg:col-span-8">
                {services.map((s, i) => (
                  <li key={s.t} className="border-b border-border">
                    <details className="group">
                      <summary className="grid cursor-pointer list-none grid-cols-[3rem_minmax(0,1fr)_auto] items-start gap-4 px-2 py-7 transition-colors hover:bg-card md:grid-cols-[4rem_minmax(0,1fr)_auto] md:px-4 [&::-webkit-details-marker]:hidden">
                        <span className="pt-1 text-sm text-accent">{n2(i)}</span>
                        <span>
                          <h3 className="text-lg font-medium md:text-xl">{s.t}</h3>
                          <p className="mt-2 text-sm leading-7 text-muted-foreground">{s.d}</p>
                        </span>
                        <ArrowUpLeft className="mt-1 h-5 w-5 text-muted-foreground transition-transform group-open:-rotate-45 group-hover:text-accent" aria-hidden />
                      </summary>
                      <ul className="grid gap-2 pb-7 pr-[4rem] text-sm text-foreground/80 md:pr-[5rem]">
                        {s.p.map((p) => <li key={p} className="before:ml-2 before:text-accent before:content-['—']">{p}</li>)}
                      </ul>
                    </details>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="bg-card">
          <div className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <Label n="03">مشاريع مختارة</Label>
                <h2 className="mt-6 text-3xl font-medium md:text-4xl">مشاريع تعكس رؤيتنا</h2>
              </div>
              <p className="max-w-md text-sm leading-7 text-muted-foreground">نقدم مشاريع تجمع بين الإبداع والدقة، وتعبّر عن هوية أصحابها واحتياجاتهم بتوازن معماري مدروس.</p>
            </div>
            <div className="mt-14 grid gap-8 lg:grid-cols-12">
              <Project className="lg:col-span-7" ratio="aspect-[4/3] lg:aspect-[7/6]" src={img.i13} n="01" cat="تصميم معماري وداخلي متكامل" title="مشروع د. عبدالله السويلم" loc="الرياض، حي حطين" />
              <div className="grid gap-8 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
                <Project ratio="aspect-[4/3] lg:aspect-[16/9]" src={img.i15} n="02" cat="تصميم معماري وواجهات سكنية حديثة" title="مشروع فيلا 306 السكنية" loc="الرياض" />
                <Project ratio="aspect-[4/3] lg:aspect-[16/9]" src={img.i14} n="03" cat="تصميم داخلي وتأثيث فاخر" title="مشروع صالون الاستقبال والضيافة المعاصرة" loc="الرياض" />
              </div>
            </div>
            <p className="mt-8 text-xs text-muted-foreground">الصور المعروضة من أعمال ساتا في التصميم الداخلي.</p>
          </div>
        </section>

        {/* METHOD */}
        <section id="method" className="border-y border-border">
          <div className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
            <Label n="04">منهجيتنا</Label>
            <div className="mt-6 grid gap-6 lg:grid-cols-12">
              <h2 className="text-3xl font-medium md:text-4xl lg:col-span-6">من الفكرة إلى مساحة متكاملة</h2>
              <p className="leading-8 text-muted-foreground lg:col-span-6">نتعامل مع كل مشروع بوصفه تجربة فريدة لها احتياجاتها وتفاصيلها الخاصة. نرافقك من الفكرة الأولى وحتى تسليم المفتاح.</p>
            </div>
            <ol className="relative mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-0">
              <span className="absolute right-0 left-0 top-[7px] hidden h-px bg-border lg:block" aria-hidden />
              {steps.map((s, i) => (
                <li key={s.t} className="relative border-r border-border pr-6 lg:border-r-0 lg:pl-8 lg:pr-0">
                  <span className="relative z-10 hidden h-[15px] w-[15px] rotate-45 border border-accent bg-background lg:block" aria-hidden />
                  <p className="text-xs text-accent lg:mt-8">المرحلة {n2(i)}</p>
                  <h3 className="mt-3 text-lg font-medium">{s.t}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{s.d}</p>
                  <ul className="mt-5 space-y-2 border-t border-border pt-5 text-sm text-foreground/80">
                    {s.p.map((p) => <li key={p}>{p}</li>)}
                  </ul>
                </li>
              ))}
            </ol>
            <p className="mt-14 border-r-2 border-accent pr-4 text-sm text-muted-foreground">كل مرحلة من مراحل المنهجية تخضع لفحص التوافق الهندسي ومطابقة كود البناء السعودي.</p>
          </div>
        </section>

        {/* VALUES */}
        <section className="bg-card">
          <div className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-24">
            <div className="grid gap-12 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <Label n="05">قيمنا</Label>
                <h2 className="mt-6 text-3xl font-medium md:text-4xl">قيم نعمل بها</h2>
              </div>
              <dl className="lg:col-span-8">
                {values.map((v, i) => (
                  <div key={v.t} className="grid grid-cols-[3rem_minmax(0,1fr)] gap-4 border-b border-border py-6 first:border-t md:grid-cols-[3rem_10rem_minmax(0,1fr)]">
                    <span className="text-xs text-accent">{n2(i)}</span>
                    <dt className="text-xl font-medium">{v.t}</dt>
                    <dd className="col-start-2 text-muted-foreground md:col-start-3">{v.d}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* EXPERTISE */}
        <section className="border-y border-border">
          <div className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
            <Label n="06">خبرتنا</Label>
            <div className="mt-6 grid gap-12 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <h2 className="text-3xl font-medium md:text-4xl">خبرة هندسية تصنع الفارق</h2>
                <p className="mt-10 text-7xl font-light text-accent md:text-8xl">+10</p>
                <p className="mt-2 text-lg">أكثر من 10 سنوات من الخبرة</p>
                <p className="mt-4 max-w-sm text-sm leading-7 text-muted-foreground">يمتلك مؤسسو ساتا أكثر من 10 سنوات من الخبرة في مجال التصميم والاستشارات الهندسية، ويحملون عضوية بدرجة محترف في الهيئة السعودية للمهندسين.</p>
              </div>
              <div className="grid gap-px bg-border sm:grid-cols-2 lg:col-span-7">
                {[
                  { name: "م. عبدالعزيز السويلم", role: "شريك مؤسس — مهندس معماري واستشاري", d: "يقود الرؤية الهندسية وتطوير الحلول المعمارية والتراخيص، بخبرة تمتد لأكثر من عقد في إدارة المشاريع السكنية والتجارية الكبرى." },
                  { name: "م. منى إبراهيم", role: "شريك مؤسس — مديرة التصميم الداخلي", d: "تقود استوديو التصميم الداخلي وتجهيز المساحات، مع تركيز خاص على خلق فضاءات إنسانية مدروسة تمزج الحداثة بالأصالة." },
                ].map((f) => (
                  <article key={f.name} className="bg-background p-8">
                    <p className="text-xs text-accent">{f.role}</p>
                    <h3 className="mt-4 text-2xl font-medium">{f.name}</h3>
                    <p className="mt-2 text-xs text-muted-foreground">عضوية محترف — الهيئة السعودية للمهندسين</p>
                    <p className="mt-6 border-t border-border pt-6 text-sm leading-7 text-foreground/80">{f.d}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden bg-ink text-ink-foreground">
          <div className="pointer-events-none absolute inset-0 grid-lines opacity-[0.06]" aria-hidden />
          <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-10 px-5 py-20 md:flex-row md:items-end md:px-10 md:py-28">
            <div>
              <h2 className="text-4xl font-medium md:text-6xl">لنبدأ مشروعك</h2>
              <p className="mt-5 text-lg text-ink-foreground/70">دعنا نحول رؤيتك إلى مساحة مدروسة.</p>
            </div>
            <a href="#contact" className="group inline-flex items-center gap-3 bg-accent px-8 py-4 text-sm text-accent-foreground transition-colors hover:bg-ink-foreground">
              اطلب استشارة <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            </a>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:px-10 md:py-28 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <Label n="07">تواصل معنا</Label>
              <h2 className="mt-6 text-3xl font-medium md:text-4xl">اطلب استشارتك</h2>
              <p className="mt-4 leading-8 text-muted-foreground">يسعدنا التعرف على مشروعك والاستماع إلى أفكارك وتطلعاتك.</p>
              <dl className="mt-10 divide-y divide-border border-y border-border">
                <Info k="العنوان">طريق التخصصي، الرياض، المملكة العربية السعودية</Info>
                <Info k="الهاتف / واتساب"><a href={`https://wa.me/${WA}`} dir="ltr" className="hover:text-accent">{PHONE}</a></Info>
                <Info k="البريد الإلكتروني"><a href={`mailto:${EMAIL}`} className="hover:text-accent">{EMAIL}</a></Info>
                <Info k="أوقات العمل">الأحد – الخميس: 9:00 صباحاً – 6:00 مساءً</Info>
              </dl>
            </div>
            <div className="lg:col-span-8"><ContactForm /></div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-ink text-ink-foreground">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:px-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <img src={img.logo} alt="شعار ساتا للاستشارات الهندسية" width={600} height={295} loading="lazy" className="h-16 w-auto" />
            <p className="mt-6 max-w-sm text-sm leading-7 text-ink-foreground/65">مكتب استشارات هندسية يقدم حلولاً متكاملة في التصميم المعماري والداخلي، والتراخيص الهندسية، والإشراف وتجهيز المساحات.</p>
          </div>
          <nav aria-label="روابط التذييل" className="lg:col-span-3">
            <h2 className="text-xs text-accent">روابط</h2>
            <ul className="mt-5 grid grid-cols-2 gap-3 text-sm text-ink-foreground/75">
              {nav.map((n) => <li key={n.href}><a href={n.href} className="hover:text-accent">{n.label}</a></li>)}
            </ul>
          </nav>
          <div className="lg:col-span-4">
            <h2 className="text-xs text-accent">تواصل</h2>
            <ul className="mt-5 space-y-3 text-sm text-ink-foreground/75">
              <li>طريق التخصصي، الرياض</li>
              <li dir="ltr" className="text-right">{PHONE}</li>
              <li>{EMAIL}</li>
            </ul>
            <div className="mt-6 flex gap-3">
              <Social href="https://www.facebook.com/profile.php?id=61596177181930" label="فيسبوك"><Facebook className="h-4 w-4" /></Social>
              <Social href="https://www.instagram.com/sataofficesa/" label="إنستغرام"><Instagram className="h-4 w-4" /></Social>
              <Social href="https://x.com/SataOfficeSA" label="إكس"><span className="text-sm font-semibold">𝕏</span></Social>
            </div>
          </div>
        </div>
        <div className="border-t border-ink-foreground/10">
          <p className="mx-auto max-w-7xl px-5 py-6 text-xs text-ink-foreground/50 md:px-10">© {new Date().getFullYear()} ساتا للاستشارات الهندسية. جميع الحقوق محفوظة.</p>
        </div>
      </footer>
    </>
  );
}

function Project({ className = "", ratio, src, n, cat, title, loc }: { className?: string; ratio: string; src: string; n: string; cat: string; title: string; loc: string }) {
  return (
    <article className={`group ${className}`}>
      <div className={`overflow-hidden bg-secondary ${ratio}`}>
        <img src={src} alt={`صورة تصميم داخلي — ${title}`} width={1000} height={1200} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
      </div>
      <div className="mt-5 flex items-start justify-between gap-4 border-t border-border pt-4">
        <div className="min-w-0">
          <p className="text-xs text-accent">{cat}</p>
          <h3 className="mt-2 text-lg font-medium">{title}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{loc}</p>
        </div>
        <span className="shrink-0 text-xs text-muted-foreground">{n}</span>
      </div>
    </article>
  );
}

function Info({ k, children }: { k: string; children: React.ReactNode }) {
  return (
    <div className="py-5">
      <dt className="text-xs text-muted-foreground">{k}</dt>
      <dd className="mt-2">{children}</dd>
    </div>
  );
}

function Social({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="grid h-10 w-10 place-items-center border border-ink-foreground/20 text-ink-foreground/80 transition-colors hover:border-accent hover:text-accent">
      {children}
    </a>
  );
}
