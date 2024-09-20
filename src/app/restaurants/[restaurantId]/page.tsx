export default function RestaurantPage({
  params,
}: {
  params: { restaurantId: string };
}) {
  const { restaurantId } = params || {};
  return <>Restaurant {restaurantId}</>;
}
