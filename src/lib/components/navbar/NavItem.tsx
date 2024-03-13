import Link from 'next/link';

export const NavItem = ({ href, label }: { href: string; label: string }) => {
    return (
        <li>
            <Link href={href}>{label}</Link>
        </li>
    );
};
