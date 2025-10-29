import Meal from "./Meal";

type MealsGridProps = {
  meals: MealType[];
};

export type MealType = {
  id: string;
  title: string;
  slug: string;
  image: string;
  summary: string;
  creator: string;
};

export default function MealsGrid({ meals }: MealsGridProps) {
  return (
    <>
      <ul className="w-5/6 max-w-6xl grid gap-5 grid-cols-auto-20r my-auto mx-2 list-none p-0">
        {meals.map((meal: MealType) => (
          <li key={meal.id}>
            <Meal {...meal} />
          </li>
        ))}
      </ul>
    </>
  );
}
