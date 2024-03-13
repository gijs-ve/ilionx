import classNames from 'classnames';

interface ListItemProps {
    children: React.ReactNode;
    className?: string;
}
export const ListItem = ({ children, className }: ListItemProps) => {
    return <li className={classNames(className)}>{children}</li>;
};
