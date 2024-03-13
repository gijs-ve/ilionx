'use client';
import { SearchInput } from '@/lib/components/input/SearchInput';
import classNames from 'classnames';
import { useState } from 'react';
import { ListItem } from './ListItem';

export interface ListProps {
    className?: string;
    enableSearch?: boolean;
    heading?: string;
    headingClassName?: string;
    items: {
        id?: string | number;
        name?: string;
        label?: string;
        children?: React.ReactNode;
        itemClassName?: string;
        labelClassName?: string;
    }[];
}
export const List = ({
    heading,
    headingClassName,
    items,
    className,
    enableSearch,
}: ListProps) => {
    const [searchInput, setSearchInput] = useState('');
    const filteredItems = items.filter((value) => {
        if (!enableSearch || searchInput === '') return true;
        return value.name?.toLowerCase().includes(searchInput.toLowerCase());
    });
    return (
        <>
            {heading && (
                <h1 className={classNames('text-2xl my-4', headingClassName)}>
                    {heading}
                </h1>
            )}
            {enableSearch && (
                <SearchInput
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                />
            )}
            <ul className={className}>
                {filteredItems.map(
                    ({
                        children,
                        id,
                        itemClassName,
                        label,
                        labelClassName,
                    }) => {
                        return (
                            <ListItem key={id} className={itemClassName}>
                                {label && (
                                    <span className={labelClassName}>
                                        {label}
                                    </span>
                                )}
                                {children}
                            </ListItem>
                        );
                    },
                )}
            </ul>
        </>
    );
};
