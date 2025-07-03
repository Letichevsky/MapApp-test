interface SidebarStateProps {
  type: "error" | "no-data";
  message: string;
}

const SidebarState = ({ type, message }: SidebarStateProps) => {
  const isError = type === "error";

  return (
    <div className="w-full sm:w-[40%] h-[40svh] sm:h-full bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 shadow-2xl border-r border-slate-200/50 backdrop-blur-sm">
      <div className="p-6">
        <div
          className={`text-center rounded-xl p-4 border ${
            isError
              ? "text-red-500 bg-red-50 border-red-200"
              : "text-slate-600 bg-slate-50 border-slate-200"
          }`}
        >
          <p className="font-medium">{message}</p>
        </div>
      </div>
    </div>
  );
};

export default SidebarState;
