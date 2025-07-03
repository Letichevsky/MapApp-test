import type { IActivity } from "@/features/trip/utils/types";

interface ActivityCardProps {
  activity: IActivity;
}

const ActivityCard = ({ activity }: ActivityCardProps) => {
  return (
    <div className="bg-white/30 rounded-lg shadow-sm border border-gray-200 hover:shadow-md hover:scale-103 transition-all duration-300 overflow-hidden cursor-pointer">
      <div className="flex items-start space-x-3">
        <div className="flex-shrink-0">
          <img
            src={activity.photo_url}
            alt={activity.name}
            className="w-64 h-40 object-cover hover:scale-105 hover:ml-[-2.5%] transition-all duration-300"
            loading="lazy"
          />
        </div>

        <div className="flex-1 min-w-0 py-4 px-2">
          <h4 className="text-sm font-medium text-gray-900 mb-1">
            {activity.name}
          </h4>
          <p className="text-xs text-gray-600 leading-relaxed">
            {activity.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;
