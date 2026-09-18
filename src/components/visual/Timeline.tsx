export type Milestone = {
  at: number;
  year: string;
  title: string;
  text?: string;

  own?: boolean;
};

type TimelineProps = {
  milestones: Milestone[];
  className?: string;
};

export function Timeline({ milestones, className = "" }: TimelineProps) {
  return (
    <div className={`timeline ${className}`}>
      <ol className="timeline-track">
        {milestones.map((milestone) => (
          <li
            key={milestone.year}
            className={`timeline-stop ${milestone.own ? "is-own" : ""}`}
            style={{ ["--at" as string]: milestone.at }}
          >
            <span aria-hidden className="timeline-dot" />
            <p className="timeline-year">{milestone.year}</p>
            <p className="timeline-title">{milestone.title}</p>
            {milestone.text ? (
              <p className="timeline-text">{milestone.text}</p>
            ) : null}
          </li>
        ))}
      </ol>
    </div>
  );
}
