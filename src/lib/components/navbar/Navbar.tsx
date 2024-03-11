import { navItems } from '@/lib/constants/navItems';
import Link from 'next/link';

export const Navbar = () => {
    return (
        <nav>
            <ul className="w-screen flex justify-center items-center font-outfit gap-4 py-4">
                {navItems.map((item) => (
                    <li key={item.href}>
                        <Link href={item.href}>{item.label}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
