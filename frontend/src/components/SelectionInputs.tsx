import { useState } from "react";
import { SelectComponent } from "./SelectComponent";

export function SelectionInputs() {

    const [selectedOption, setSelectedOption] = useState("");

    const options = ["Goods Receipt",
        "cancellation",
        "Display",
        "Transfer Posting",
        "Goods Issue",
        "Return Delivery",
        "change",
        "Remove from Storage",
        "Place in Storage",
        "Release GR Blocked Stock",
        "Subsequent Adjustment",
        "Subsequent Delivery"
    ];

    const options2 = ["Option 1",
        "Option 2",
        "Option 3",
        "Option 4",
        "Option 5"
    ]

    return <div className="mt-1 flex">
        <div className=" py-1 mx-3 text-xs w-[fit-content] h-[fit-content]">
            <SelectComponent
                options={options}
                value={selectedOption}
                onChange={setSelectedOption}
                placeholder="Goods Receipt"
            />
        </div>

        <div className="py-1 mr-3 text-xs w-[fit-content] h-[fit-content]">
            <SelectComponent
                options={options2}
                value={selectedOption}
                onChange={setSelectedOption}
                placeholder="Other"
            />
        </div>

        <div className="ml-[25rem] text-xs flex">
            <label className="mr-5 " htmlFor="Receipt w/o PO">Receipt w/o PO</label>
            <div className="text-xs w-[fit-content] h-[fit-content] bg-gray-50 p-[2px] border-[1px] border-black ml-3">501</div>
            <input type="text" className="text-xs w-10 h-5 bg-gray-50 p-[2px] border-[1px] border-black"/>
        </div>
    </div>
}