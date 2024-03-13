export interface ListValueProps {
    value?: string | string[];
}

export const ListValue = ({ value }: ListValueProps) => {
    const valueIsArray = Array.isArray(value);
    if (!valueIsArray) {
        return <span className="ml-auto">{value}</span>;
    }
    if (valueIsArray) {
        return (
            <span className="flex flex-col ml-auto">
                {value.map((val) => (
                    <span className="text-right" key={val}>
                        {val}
                    </span>
                ))}
            </span>
        );
    }
    return null;
};
