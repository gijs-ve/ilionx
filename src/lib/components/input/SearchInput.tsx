import { ComponentProps } from 'react';

export const SearchInput = ({ ...props }: ComponentProps<'input'>) => {
    return (
        <input
            type="text"
            placeholder="Search..."
            className="w-1/2 lg:w-1/4 p-2 my-4 rounded-md text-black"
            {...props}
        />
    );
};
