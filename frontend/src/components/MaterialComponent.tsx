export function MaterialComponent() {
    return <div className="h-[10.5rem] mt-4">
        <div className="flex text-xs">
            <label className="block font-semibold ml-5 mb-1 mr-[130px]">Material</label>

            <input
                type="text"
                name="materialInput"
                className="border px-2 py-[0.6rem] w-60 h-[4px] mr-10"
            />

            <input
                type="text"
                name="materialInput"
                className="border px-2 py-[0.6rem] w-60 h-[4px] border-slate-400 bg-transparent"
            />
        </div>

        <div className="flex text-xs mt-[7.5rem]">
            <label className="block font-semibold ml-5 mb-1 mr-[130px]">Equipment</label>

            <input
                type="text"
                name="materialInput"
                className="border px-2 py-[0.6rem] w-60 h-[4px] mr-10"
            />
        </div>
    </div>
}