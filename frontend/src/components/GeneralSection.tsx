import { useState } from "react";
import { Tab } from "./Tab";
import { GeneralComponent } from "./GeneralComponent";
import { SettingsComponent } from "./SettingsComponent";

export function GeneralSection() {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <div className="my-2 mx-[45px] bg-blue-100 p-1">
      {/* Tab Buttons */}
      <div className="flex space-x-1 border-b-2 border-blue-500">
        <Tab
          value="tab1"
          title="General"
          isActive={activeTab === "tab1"}
          onClick={() => {
            setActiveTab("tab1");
          }}
        />
        <Tab
          value="tab2"
          title="Settings"
          isActive={activeTab === "tab2"}
          onClick={() => {
            setActiveTab("tab2");
          }}
        />
      </div>

      {/* Tab Content */}
      <div className="mt-2">
        {activeTab === "tab1" && <GeneralComponent />}
        {activeTab === "tab2" && <SettingsComponent />}
      </div>
    </div>
  );
}







