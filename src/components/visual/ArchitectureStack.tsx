export type Layer = { tag: string; name: string; role: string };

type ArchitectureStackProps = {
  layers: Layer[];
  stores: Layer[];
  servicesLabel: string;
  services: string[];
  servicesNote: string;
  className?: string;
};

// La seccion se llama "Como esta hecho" y lo contaba en siete cajas iguales.
// Una arquitectura desacoplada se entiende viendola: que el front y el engine
// van uno encima del otro, que la cache y la base cuelgan del engine, y que
// hay piezas que viven aparte porque su carga no se parece a la del resto.
export function ArchitectureStack({
  layers,
  stores,
  servicesLabel,
  services,
  servicesNote,
  className = "",
}: ArchitectureStackProps) {
  return (
    <div className={`arch ${className}`}>
      {layers.map((layer, index) => (
        <div key={layer.name}>
          <div className="arch-band">
            <span className="arch-tag">{layer.tag}</span>
            <span className="arch-name">{layer.name}</span>
            <span className="arch-role">{layer.role}</span>
          </div>
          {index < layers.length - 1 ? <span aria-hidden className="arch-link" /> : null}
        </div>
      ))}

      <span aria-hidden className="arch-split" />

      <div className="arch-stores">
        {stores.map((store) => (
          <div key={store.name} className="arch-band is-store">
            <span className="arch-tag">{store.tag}</span>
            <span className="arch-name">{store.name}</span>
            <span className="arch-role">{store.role}</span>
          </div>
        ))}
      </div>

      <div className="arch-aside">
        <p className="arch-tag">{servicesLabel}</p>
        <ul className="arch-services">
          {services.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
        <p className="arch-note">{servicesNote}</p>
      </div>
    </div>
  );
}
