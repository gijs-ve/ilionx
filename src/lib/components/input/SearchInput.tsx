import classNames from 'classnames';
import { ComponentProps } from 'react';

export const SearchInput = ({
    className,
    ...props
}: ComponentProps<'input'>) => {
    return (
        <input
            type="text"
            placeholder="Search..."
            className={classNames(
                'w-1/2 lg:w-1/4 p-2 my-4 rounded-md text-black',
                className,
            )}
            {...props}
        />
    );
};
