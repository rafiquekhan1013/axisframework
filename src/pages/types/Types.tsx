import { NavLink } from "react-router-dom";
import { Types as typesList } from "../../types";

interface TypesProps {
  provider: string;
  state?: string;
}

export default function Types({ state, provider }: TypesProps) {
  const tolink =
    provider === "playcan" ? `/${state}` : state ? `/${provider}/${state}` : `/${provider}`;

  return (
    <div className="max-w-2xl mx-auto py-32">
      <div className="mb-12 text-center">
        <h1 className="text-3xl md:text-4xl font-light text-white mb-4">Choose an Option Below</h1>
        <div className="h-1 w-24 bg-cyan-400 rounded-full mx-auto mb-6" />
      </div>
      <div className="flex flex-wrap gap-3 justify-center">
        {typesList.map((type) => {
          return (
            <NavLink
              to={`${tolink}/${type.slug}`}
              key={type.slug}
              className="px-5 py-2.5 text-sm font-semibold tracking-wide rounded-xl text-charcoal bg-cyan-400 hover:bg-cyan-500 transition-all"
            >
              {type.label}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
}
