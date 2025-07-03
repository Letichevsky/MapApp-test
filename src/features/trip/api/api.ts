import type { ITripData } from "@/features/trip/utils/types";

// У реальному проекті я б використав Tanstack Query щоб зручно було кешувати дані та інше,
// але так як це тестове завдання, то я зробив простим fetch запитом.
export async function fetchTripData(): Promise<ITripData | null> {
  try {
    const response = await fetch("/mock-trip.json");

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: ITripData = await response.json();

    console.log("Данные поездки:", data);
    console.log("Название поездки:", data.trip_title);
    console.log("Количество дней:", data.days.length);

    data.days.forEach((day, index) => {
      console.log(`День ${index + 1}: ${day.title}`);
      console.log(`Количество активностей: ${day.activities.length}`);
      day.activities.forEach((activity) => {
        console.log(`  - ${activity.name}: ${activity.description}`);
      });
    });

    return data;
  } catch (error) {
    console.error("Ошибка при получении данных поездки:", error);
    return null;
  }
}
