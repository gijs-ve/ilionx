import { List, ListProps } from './List';
import { ListValue } from './ListValue';

export interface ListDetailsProps {
    items: {
        label?: string;
        value?: string | string[];
    }[];
    heading?: string;
}
export const ListDetails = ({ items, heading }: ListDetailsProps) => {
    const listProps: ListProps = {
        heading,
        items: items.map((item, index) => {
            const { value } = item;
            return {
                ...item,
                id: index,
                labelClassName: 'mr-auto',
                itemClassName: 'flex w-full px-10 sm:px-20 md:px-0',
                children: <ListValue value={value} />,
            };
        }),
    };
    return (
        <>
            <List
                className="p-8 w-full md:w-5/6 lg:w-1/2 xl:w-1/3 justify-center items-center flex flex-col bg-slate-800 rounded-md"
                {...listProps}
            />
        </>
    );
};
