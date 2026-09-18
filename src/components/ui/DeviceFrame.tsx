import Image from "next/image";

type DeviceFrameProps = {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
};

export function DeviceFrame({
  src,
  alt,
  priority = false,
  className = "",
}: DeviceFrameProps) {
  return (
    <div className={`device ${className}`}>
      <div className="device-frame">
        <div className="device-screen">
          <Image
            src={src}
            alt={alt}
            width={780}
            height={1865}
            priority={priority}
            className="h-full w-full object-cover object-top"
            sizes="(max-width: 640px) 62vw, 260px"
          />

          <div aria-hidden className="device-status">
            <span className="device-time">9:41</span>
            <span className="device-icons">
              <svg
                viewBox="0 0 18 12"
                className="device-signal"
                fill="currentColor"
              >
                <rect x="0" y="8.5" width="3" height="3.5" rx="1" />
                <rect x="5" y="6" width="3" height="6" rx="1" />
                <rect x="10" y="3" width="3" height="9" rx="1" />
                <rect x="15" y="0" width="3" height="12" rx="1" />
              </svg>
              <svg
                viewBox="0 0 16 12"
                className="device-wifi"
                fill="currentColor"
              >
                <path d="M8 11.2 5.9 8.8a3.2 3.2 0 0 1 4.2 0L8 11.2Z" />
                <path d="M8 6.1c1.5 0 2.9.55 4 1.5l1.5-1.7A8.1 8.1 0 0 0 8 3.8a8.1 8.1 0 0 0-5.5 2.1L4 7.6a6 6 0 0 1 4-1.5Z" />
                <path d="M8 1.5c2.3 0 4.4.84 6 2.2l1.5-1.7A11 11 0 0 0 8 0 11 11 0 0 0 .5 2l1.5 1.7A9 9 0 0 1 8 1.5Z" />
              </svg>
              <span className="device-battery" />
            </span>
          </div>

          <span aria-hidden className="device-island" />
        </div>
      </div>
    </div>
  );
}
