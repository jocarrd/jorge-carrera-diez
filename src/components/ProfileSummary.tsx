import { RichText } from "@/components/RichText";
import { getCopy } from "@/content";
import type { Locale } from "@/i18n/config";

type ProfileSummaryProps = {
  locale: Locale;
  className?: string;
};

export function ProfileSummary({ locale, className = "" }: ProfileSummaryProps) {
  const copy = getCopy(locale);

  return (
    <p className={className}>
      <RichText segments={copy.profile.summary} />
    </p>
  );
}
