const SidebarSkeleton = () => {
  return (
    <div className="w-full sm:w-[40%] h-[40svh] sm:h-full bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 shadow-2xl border-r border-slate-200/50 backdrop-blur-sm">
      <div className="p-6">
        <div className="animate-pulse">
          <div className="h-8 bg-gradient-to-r from-slate-200 to-slate-300 rounded-xl mb-6"></div>
          <div className="space-y-4">
            <div className="h-4 bg-gradient-to-r from-slate-200 to-slate-300 rounded-lg"></div>
            <div className="h-4 bg-gradient-to-r from-slate-200 to-slate-300 rounded-lg w-3/4"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarSkeleton;
