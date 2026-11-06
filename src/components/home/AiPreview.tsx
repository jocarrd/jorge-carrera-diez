import { ButtonLink, Reveal, Section, SectionHeader } from "@/components/ui";
import { getCopy } from "@/content";
import type { Locale } from "@/i18n/config";
import { blogPostPath } from "@/i18n/routes";

export function AiPreview({ locale }: { locale: Locale }) {
  const content = getCopy(locale);
  const copy = content.ai;

  return (
    <Section id="ia">
      <Reveal>
        <SectionHeader
          title={copy.title}
          accent={copy.titleAccent}
          text={copy.lead}
        />
      </Reveal>

      <Reveal delay={80} className="mt-10 sm:mt-14">
        <div className="crux-db">
          <div className="crux-db-tabs" aria-hidden>
            <span className="crux-db-tab is-on">{copy.trees.code}</span>
            <span className="crux-db-tab">{copy.trees.docs}</span>
          </div>
          <div className="crux-db-sheet">
            <table className="crux-db-table">
              <thead>
                <tr>
                  {copy.trees.columns.map((column) => (
                    <th key={column} scope="col">
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              {[
                { root: copy.trees.code, kind: copy.trees.kinds[0], items: copy.trees.codeItems, tone: "code" },
                { root: copy.trees.docs, kind: copy.trees.kinds[1], items: copy.trees.docsItems, tone: "docs" },
              ].map((group) => (
                <tbody key={group.root} data-tone={group.tone}>
                  <tr className="crux-db-group">
                    <th scope="rowgroup" colSpan={3}>
                      <span aria-hidden className="crux-db-dot" />
                      {group.root}
                    </th>
                  </tr>
                  {group.items.map(([name, note]) => (
                    <tr key={name}>
                      <td className="crux-db-path">{name}</td>
                      <td className="crux-db-note">{note}</td>
                      <td className="crux-db-kind">
                        <span>{group.kind}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              ))}
            </table>
          </div>
        </div>
      </Reveal>

      <ul className="crux-rows">
        {copy.rows.map(([title, text]) => (
          <li key={title}>
            <h3 className="crux-row-title">{title}</h3>
            <p className="crux-row-text">{text}</p>
          </li>
        ))}
      </ul>

      <div className="mt-8">
        <ButtonLink href={blogPostPath(locale, "crux")}>
          {content.pages.blog.readLabel}
        </ButtonLink>
      </div>
    </Section>
  );
}
