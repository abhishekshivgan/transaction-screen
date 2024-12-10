interface TabProps {
    title: string;
    value: string;
    isActive: boolean;
    onClick: () => void;
}

export function Tab({ title, isActive, onClick }: TabProps) {
    return (
        <button
            className={`text-xs px-[4px] py-[2px] rounded-md ${
                isActive
                    ? "bg-blue-300 text-black"
                    : "bg-blue-100 text-gray-700 hover:bg-blue-200"
            }`}
            onClick={onClick}
        >
            {title}
        </button>
    );
}
