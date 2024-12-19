import goals from "@/assets/icons/goals.svg";
import documents from "@/assets/icons/documents.svg";
import { PanelRight } from "lucide-react";
export function Sidebar() {
  return (
    <aside className="w-80 fixed left-0 top-0 h-[calc(100vh-72px)] mt-[72px] bg-[#F8F7FC] py-5 overflow-auto">
      <PanelRight className="absolute right-5 top-7 w-5 h-5 opacity-50 cursor-pointer" />
      <div className="px-5 space-y-5 mb-5">
        <h2 className="text-[#676767] font-semibold text-2xl">
          About This Agent
        </h2>
        <p className="text-[#A6A6A6] leading-5">
          This agent will follow up with patients via calls or text messages and
          explain lab test results based on the results securely uploaded.
        </p>
      </div>
      <div className="card bg-white p-5 space-y-5 mb-2">
        <span className="border rounded-lg px-3 py-1.5 text-[#7D7D7D] text-xs font-semibold flex items-center gap-2 w-fit">
          <img src={goals} width={20} height={20} alt="goals icon" />
          GOALS
        </span>

        <p className="text-[#A6A6A6] leading-5 text-sm">
          Call or text patients depending on their follow up preference they opt
          in.
        </p>
        <p className="text-[#A3A3A3] font-semibold leading-5 text-sm">
          Validate it’s the correct patient by having them enter the code
          provided.
        </p>
        <p className="text-[#A5A5A5] font-semibold leading-5 text-sm">
          Provide a detailed explanation of the lab results and offer
          recommendations based on your guidelines.
        </p>
      </div>
      <div className="card bg-white p-5 space-y-5">
        <span className="border rounded-lg px-3 py-1.5 text-[#7D7D7D] text-xs font-semibold flex items-center gap-2 w-fit">
          <img src={documents} width={20} height={20} alt="goals icon" />
          LEARN ABOUT AGENT MODES
        </span>

        <p className="text-[#A6A6A6] leading-5 text-sm">
          Sales Mode - If your practice charges for follow-ups, encourage
          patients to schedule them promptly.
        </p>
        <p className="text-[#A6A6A6] leading-5 text-sm">
          Efficiency Mode - For practices with free follow-ups, focus on
          critical cases to reduce time on non-essential visits while ensuring
          patient-centred care.
        </p>
      </div>
    </aside>
  );
}

export default Sidebar;
