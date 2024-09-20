"use client";
import { trpc, TRPCProvider } from "@/trpc/client";
import css from "./CategoriesFilter.module.css";
import { useRouter, useSearchParams } from "next/navigation";
import classNames from "classnames";

type TCategoriesFilterProps = {
  value: string;
};

function CategoriesFilterComp({ value }: TCategoriesFilterProps) {
  const { data } = trpc.getCategories.useQuery();
  const router = useRouter();
  const searchParams = useSearchParams();
  const keywords = searchParams.get("keywords");

  const handleChange = (category: string) => () => {
    if (category === "all") {
      return router.push(`/${keywords ? `?keywords=${keywords}` : ""}`);
    }
    router.push(
      `/?${keywords ? `keywords=${keywords}&` : ""}category=${category}`
    );
  };

  return (
    <div className={css.root}>
      <div className={css.fitler}>
        {!data?.categories ? (
          <div>Loading...</div>
        ) : (
          <>
            <div
              className={classNames(css.category, {
                [css.selectedCategory]: value === "all",
              })}
              key={"all"}
              onClick={handleChange("all")}
            >
              전체
            </div>
            {data.categories.map((category) => (
              <div
                className={classNames(css.category, {
                  [css.selectedCategory]: category.name === value,
                })}
                key={category.name}
                onClick={handleChange(category.name)}
              >
                {category.description}
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}

export default function CategoriesFilter(props: TCategoriesFilterProps) {
  return (
    <TRPCProvider>
      <CategoriesFilterComp {...props} />
    </TRPCProvider>
  );
}
