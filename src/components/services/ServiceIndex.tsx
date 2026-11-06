import Image from "next/image";
import Link from "next/link";

type ServiceItem = {
  title: string;
  text: string;
  href?: string;
  image: { src: string; w: number; h: number };
};

export function ServiceIndex({
  items,
  linkLabel,
}: {
  items: ServiceItem[];
  linkLabel: string;
}) {
  return (
    <ul className="svc-index">
      {items.map((item) => (
        <li key={item.title} className="svc-row">
          <div className="svc-thumb">
            <Image
              src={item.image.src}
              alt=""
              width={item.image.w}
              height={item.image.h}
              sizes="96px"
            />
          </div>
          <div className="svc-copy">
            <h3 className="svc-title">
              {item.href ? (
                <Link href={item.href} className="svc-link">
                  <span className="svc-title-text">{item.title}</span>
                </Link>
              ) : (
                item.title
              )}
            </h3>
            <p className="svc-text">{item.text}</p>
            {item.href ? (
              <span aria-hidden className="area-link">
                {linkLabel}
                <span className="ml-1">&rsaquo;</span>
              </span>
            ) : null}
          </div>
        </li>
      ))}
    </ul>
  );
}
