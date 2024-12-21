import { Card } from "@/components/ui/card";
import { ArrowDown, Map, Settings } from "lucide-react";
import { useEffect, useState } from "react";

export function Home() {
  const [agents, setAgents] = useState([]);
  useEffect(() => {
    const agents = JSON.parse(localStorage.getItem("agents") || "[]");
    setAgents(agents);
  }, []);
  return (
    <div className="flex flex-col justify-between gap-10">
      {agents.map((agent, index) => (
        <Card className="w-full">
          <span className="border rounded-lg px-3 py-1.5 text-[#7D7D7D] text-xs font-semibold flex items-center gap-2 w-fit mb-3">
            <Map width={15} height={15} />
            {agent.value}
          </span>
          <h3 className="text-lg">Integration Twilio</h3>
          <div className="flex items-center gap-2 text-slate-400">
            <span className="flex items-center gap-0.5">
              <Settings width={15} height={15} />
              31
            </span>
            <span className="flex items-center gap-0.5">
              <ArrowDown width={15} height={15} />
              16.7KB
            </span>
          </div>
        </Card>
      ))}
    </div>
  );
}

export default Home;
