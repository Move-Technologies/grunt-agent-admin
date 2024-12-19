import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Map, PenSquare, Plus, Settings, User, X } from "lucide-react";


export function Home() {
  return (
    <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-0">
      <div className="order-1 lg:w-3/5">
        <div className="flex items-center gap-5">
          <div className="rounded-lg w-7 h-7 shrink-0 border-black border font-semibold flex items-center justify-center bg-white">
            1
          </div>
          <Card className="">
            <span className="border rounded-lg px-3 py-1.5 text-[#7D7D7D] text-xs font-semibold flex items-center gap-2 w-fit mb-3">
              <Map width={15} height={15} />
              INSTRUCTIONS
            </span>
            <p className="text-[#A4A4A4] font-semibold mb-5">
              Call patients and educate them on their lab test results,
              providing clear explanations.
            </p>
            <Button
              className="w-full bg-transparent hover:bg-gray-50"
              variant={"outline"}
            >
              Edit Instructions <PenSquare width={15} height={15} />
            </Button>
          </Card>
        </div>
        <div className="border-dotted border-l w-[1px] h-16 border-black mx-auto"></div>
        <div className="flex items-center gap-5">
          <div className="rounded-lg w-7 h-7 shrink-0 border-black border font-semibold flex items-center justify-center bg-white">
            2
          </div>
          <Card className="">
            <span className=" text-[#7D7D7D] text-xs font-semibold flex items-center gap-2 w-fit mb-3">
              <User width={15} height={15} />
              VERIFY PATIENT
            </span>
            <p className="text-[#A4A4A4] font-semibold mb-5">
              Send the patient a 4-digit verification code via their email and
              phone number on file for verification.
            </p>
            <Button
              className="text-xs h-8 bg-transparent hover:bg-gray-50"
              variant={"outline"}
            >
              <Settings width={15} height={15} /> CONFIGURE
            </Button>
          </Card>
        </div>
        <div className="border-dotted border-l w-[1px] h-16 border-black mx-auto"></div>
        <div className="flex items-center gap-5">
          <div className="rounded-lg w-7 h-7 shrink-0 border-black border font-semibold flex items-center justify-center bg-white">
            3
          </div>
          <Card className="">
            <span className=" text-[#7D7D7D] text-xs font-semibold flex items-center gap-2 w-fit mb-3">
              <User width={15} height={15} />
              TEST RESULTS{" "}
            </span>
            <p className="text-[#A4A4A4] font-semibold mb-5">
              Provide the agent with the test results by securely uploading,
              sending via email, or connecting your EMR.
            </p>
            <div className="flex space-x-4">
              {/* EMR Connected Button */}
              <span className="border rounded-lg px-3 text-[#7D7D7D] text-xs font-semibold flex items-center gap-2 w-fit mb-3  h-8 ">
                <span className="bg-green-600 rounded-full w-3 h-3"></span>
                <span className="text-gray-700 font-medium text-xs">
                  EMR CONNECTED
                </span>
              </span>

              {/* Change Data Source Button */}
              <Button
                className="flex items-center space-x-2 transition  h-8"
                variant={"outline"}
              >
                <Settings className="text-gray-700" size={15} />
                <span className="text-gray-700 font-medium text-xs">
                  Change Data Source
                </span>
              </Button>
            </div>
          </Card>
        </div>
        <div className="border-dotted border-l w-[1px] h-16 border-black mx-auto"></div>
        <div className="flex items-center gap-5">
          <div className="rounded-lg w-7 h-7 border-black border font-semibold flex items-center justify-center bg-white opacity-0"></div>
          <Button
            className="w-full flex items-center text-[#A2A2A2]"
            variant={"outline"}
          >
            <span>Give More Instructions</span> <Plus size={15} />
          </Button>
        </div>
      </div>
      <div className="-order-1 lg:order-1 w-full lg:w-1/3">
        <Card>
          {/* Header */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-800">
              Agent Persona
            </h2>
            <button className="p-1 rounded-md hover:bg-gray-100">
              <X className="text-gray-400" size={20} />
            </button>
          </div>

          {/* Your Agent Section */}
          <div className="mb-6">
            <div className="flex items-center space-x-2 mb-2">
              <User className="text-gray-600" size={18} />
              <span className="text-gray-700 font-medium">Your Agent</span>
            </div>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="sara">🇺🇸 Sara (Female)</option>
              <option value="john">🇺🇸 John (Male)</option>
            </select>
          </div>

          {/* Agent Mode Section */}
          <div className="mb-6">
            <span className="text-gray-700 font-medium mb-2 block">
              Agent Mode
            </span>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="efficiency">Efficiency Mode</option>
              <option value="sales">Sales Mode</option>
            </select>
          </div>

          {/* Save Changes Button */}
          <div>
            <Button variant={"outline"} className="w-full">
              Save Changes
            </Button>
          </div>
        </Card>{" "}
      </div>
    </div>
  );
}

export default Home;
