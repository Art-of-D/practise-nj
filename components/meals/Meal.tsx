import Link from "next/link";
import Image from "next/image";
import { MealType } from "./MealsGrid";

export default function Meal({
  title,
  slug,
  image,
  summary,
  creator,
}: MealType) {
  return (
    <article className="flex flex-col justify-between h-max rounded-sm overflow-hidden shadow-[0 0 12px rgba(0, 0, 0, 0.3)] transition-all duration-300 ease-in-out text-[#ddd6cb] bg-[linear-gradient(90deg, #2c1e19, #25200f)]">
      <header>
        <div className="relative h-[15rem] object-cover">
          <Image src={`@/assets/${image}`} alt={title} fill />
        </div>
        <div className="pl-0.5 py-1 pr-0">
          <h2 className="m-0 text-2xl font-(--font-mono) m-0">{title}</h2>
          <p className="text-xs text-[#cfa69b] italic m-0">by {creator}</p>
        </div>
      </header>
      <div className="flex flex-col justify-between h-max">
        <p className="pl-1 py-1 pr-0">{summary}</p>
        <div className="p-1 text-right">
          <Link
            className="inline-block mt-1 px-0.5 py-1 rounded-lg text-white font-bold  bg-gradient-to-r from-(--color-orange) to-(--color-yellow) hover:bg-gradient-to-r hover:from-(--color-yellow) hover:to-(--color-orange)"
            href={`/meals/${slug}`}
          >
            View Details
          </Link>
        </div>
      </div>
    </article>
  );
}
