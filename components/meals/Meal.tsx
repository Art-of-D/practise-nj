import Link from "next/link";
import Image from "next/image";
import { MealType } from "./Meals-grid";

export default function Meal({
  title,
  slug,
  image,
  summary,
  creator,
}: MealType) {
  return (
    <article className="">
      <header>
        <div className="">
          <Image src={image} alt={title} fill />
        </div>
        <div className="">
          <h2>{title}</h2>
          <p>by {creator}</p>
        </div>
      </header>
      <div className="">
        <p className="">{summary}</p>
        <div className="">
          <Link href={`/meals/${slug}`}>View Details</Link>
        </div>
      </div>
    </article>
  );
}
