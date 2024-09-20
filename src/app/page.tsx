import { trpc } from "@/trpc/server";
import RestaurantList from "@/components/Restaurant/RestaurantList";
import styles from "./page.module.css";

export default async function Home() {
  void trpc.getRestaurants.prefetch();

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <RestaurantList />
      </main>
    </div>
  );
}
