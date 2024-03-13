import { navItems } from '@/lib/constants/navItems';
import { NavItem } from './NavItem';

export const Navbar = () => {
    return (
        <nav>
            <ul className="w-screen flex justify-center items-center font-outfit gap-4 py-4">
                {navItems.map((item) => (
                    <NavItem
                        key={item.label}
                        href={item.href}
                        label={item.label}
                    />
                ))}
            </ul>
        </nav>
    );
};
