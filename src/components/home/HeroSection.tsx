import { ProfileVisual } from "@/components/home/ProfileVisual";
import { Badge, ButtonLink, Container } from "@/components/ui";
import { profile } from "@/content/profile";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <Container className="relative py-16 sm:py-24 lg:min-h-[calc(100vh-4rem)] lg:py-28">
        <div className="orbital-ring right-[-18rem] top-20 h-[34rem] w-[34rem]" />
        <div className="orbital-ring right-[-10rem] top-36 h-[22rem] w-[22rem]" />

        <div className="grid min-h-[70vh] items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
          <div>
            <Badge>{profile.positioning}</Badge>
            <h1 className="mt-8 max-w-4xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Jorge Carrera Diez
            </h1>
            <p className="mt-6 max-w-3xl text-xl leading-9 text-slate-200 sm:text-2xl">
              {profile.headline}
            </p>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400">
              {profile.summary}
            </p>
            <div className="mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:items-start">
              <ButtonLink href="/proyectos/snowy">Ver Snowy</ButtonLink>
              <ButtonLink href="/cv" variant="secondary">
                Ver CV
              </ButtonLink>
            </div>
            <div className="mt-10 lg:hidden">
              <ProfileVisual />
            </div>
          </div>

          <div className="hidden lg:block">
            <ProfileVisual />
          </div>
        </div>
      </Container>
    </section>
  );
}
