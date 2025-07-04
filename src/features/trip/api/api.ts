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

    return data;
  } catch (error) {
    console.error("Помилка при отриманні даних поїздки:", error);
    return null;
  }
}
