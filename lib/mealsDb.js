import sql from "better-sqlite3";

export const db = sql("meals.db");

export function getMeals() {
  return db.prepare("SELECT * FROM meals").all();
}
