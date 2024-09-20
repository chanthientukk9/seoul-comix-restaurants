import { trpc } from "@/trpc/server";
import css from "./CategoriesFilter.module.css";

export default async function CategoriesFilter() {
  const { categories } = await trpc.getCategories();

  return (
    <div className={css.root}>
      <div className={css.fitler}>
        {categories.map((category) => (
          <div className={css.category} key={category.name}>
            {category.description}
          </div>
        ))}
      </div>
    </div>
  );
}
