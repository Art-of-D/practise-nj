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
      <ul>
        {meals.map((meal: MealType) => (
          <li key={meal.id}>
            <Meal {...meal} />
          </li>
        ))}
      </ul>
    </>
  );
}
