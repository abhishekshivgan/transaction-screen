import { useState } from "react";
import { Tab } from "./Tab";
import { MaterialComponent } from "./MaterialComponent";
import { QuantityComponent } from "./QuantityComponent";
import { WhereComponent } from "./WhereComponent";

export function MaterialSection() {
    const [activeTab, setActiveTab] = useState("tab1");
    return <div className="my-8 mx-[45px] bg-blue-100 p-1">
        <div className="flex space-x-1 border-b-2 border-blue-500">
            <Tab value="tab1" title="Material" isActive={activeTab === "tab1"}
                onClick={() => {
                    setActiveTab("tab1");
                }} />

            <Tab value="tab2" title="Quantity" isActive={activeTab === "tab2"}
                onClick={() => {
                    setActiveTab("tab2");
                }} />

            <Tab value="tab3" title="Where" isActive={activeTab === "tab3"}
                onClick={() => {
                    setActiveTab("tab3");
                }} />

        </div>

        {/* Tab Content */}
        <div className="mt-2">
            {activeTab === "tab1" && <MaterialComponent />}
            {activeTab === "tab2" && <QuantityComponent />}
            {activeTab === "tab3" && <WhereComponent />}
        </div>


    </div>
}