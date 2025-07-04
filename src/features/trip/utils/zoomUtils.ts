import type { IActivity } from "@/features/trip/utils/types";

interface ZoomAnimationOptions {
  map: google.maps.Map;
  activity: IActivity;
  defaultZoom?: number;
  targetZoom?: number;
  zoomOutDelay?: number;
  panDelay?: number;
  zoomInDelay?: number;
}

export const smoothZoomToActivity = ({
  map,
  activity,
  defaultZoom = 13,
  targetZoom = 16,
  zoomOutDelay = 200,
  panDelay = 200,
  zoomInDelay = 600,
}: ZoomAnimationOptions) => {
  const currentZoom = map.getZoom() || defaultZoom;

  // Якщо зум більше дефолтного, то віддаляємося
  const shouldZoomOut = currentZoom > defaultZoom;

  if (shouldZoomOut) {
    // 1. Віддаляємося тільки на 1 рівень
    const zoomOutLevel = Math.min(currentZoom - defaultZoom, 1);
    map.setZoom(currentZoom - zoomOutLevel);

    // 2. Переміщуємося до нового місця
    setTimeout(() => {
      map.panTo(activity.coords);
    }, panDelay);

    // 3. Наближаємося
    setTimeout(() => {
      map.setZoom(targetZoom);
    }, zoomInDelay);
  } else {
    // Якщо вже на дефолтному зумі, просто переміщуємося і наближаємося
    map.panTo(activity.coords);
    setTimeout(() => {
      map.setZoom(targetZoom);
    }, zoomOutDelay);
  }
};

export const resetZoom = (
  map: google.maps.Map,
  defaultCenter: { lat: number; lng: number },
  defaultZoom = 13
) => {
  map.panTo(defaultCenter);
  map.setZoom(defaultZoom);
};
