import Link from "next/link";
import { Suspense } from "react";
import MealsGrid from "@/components/meals/MealsGrid";
import { getMeals } from "../../lib/mealsDb";

export default async function Meals() {
  const meals = await getMeals();
  return (
    <>
      <main className="">
        <div className="">
          <h1>
            Delicious meals, created <span className="">by you</span>
          </h1>
          <p>
            Choose your favorite recipe and cook it yourself. It is easy and
            fun!
          </p>
          <p className="">
            <Link href="/meals/share">Share Your Favorite Recipe</Link>
          </p>
        </div>
        <Suspense fallback={<p className="">Fetching meals...</p>}>
          <MealsGrid meals={meals} />
        </Suspense>
      </main>
    </>
  );
}
