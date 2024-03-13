import Link from 'next/link';
interface NavItemProps {
    href: string;
    label: string;
}
export const NavItem = ({ href, label }: NavItemProps) => {
    return (
        <li>
            <Link href={href}>{label}</Link>
        </li>
    );
};
