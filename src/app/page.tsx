import { trpc } from "@/trpc/server";
import Topbar from "@/components/Topbar/Topbar";
import RestaurantList from "@/components/Restaurant/RestaurantList";
import styles from "./page.module.css";
import CategoriesFilter from "@/components/CategoriesFilter/CategoriesFilter";

export default async function Home() {
  void trpc.getRestaurants.prefetch();
  void trpc.getCategories.prefetch();

  return (
    <div className={styles.page}>
      <header>
        <Topbar />
      </header>
      <main className={styles.main}>
        <CategoriesFilter />
        <RestaurantList />
      </main>
    </div>
  );
}
