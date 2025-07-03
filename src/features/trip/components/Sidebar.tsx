const Sidebar = () => {
  return (
    <div className="w-[40%] h-full bg-gray-100 border-r border-gray-300">
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Планировщик поездок
        </h2>
        <div className="space-y-4">
          {/* Здесь будет содержимое сайдбара */}
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <p className="text-gray-600">Сайдбар пока пустой</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
