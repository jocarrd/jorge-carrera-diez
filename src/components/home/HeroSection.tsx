import { ProfileSummary } from "@/components/ProfileSummary";
import { ProfileVisual } from "@/components/home/ProfileVisual";
import { ButtonLink, Container } from "@/components/ui";
import { profile } from "@/content/profile";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <Container className="relative py-12 sm:py-20 lg:min-h-[calc(100vh-4rem)] lg:py-28">
        <div className="orbital-ring right-[-18rem] top-20 h-[34rem] w-[34rem]" />
        <div className="orbital-ring right-[-10rem] top-36 h-[22rem] w-[22rem]" />

        <div className="grid items-center gap-10 lg:min-h-[70vh] lg:grid-cols-[1.08fr_0.92fr]">
          <div>
            <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Jorge Carrera Diez
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-200 sm:mt-6 sm:text-2xl sm:leading-9">
              {profile.headline}
            </p>
            <ProfileSummary className="mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:mt-6 sm:leading-8" />
            <div className="mt-7 flex flex-col items-stretch gap-3 sm:mt-9 sm:flex-row sm:items-start">
              <ButtonLink href="/proyectos/snowy">Ver Snowy</ButtonLink>
              <ButtonLink href="/cv" variant="secondary">
                CV
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
