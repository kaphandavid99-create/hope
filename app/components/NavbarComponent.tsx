import Link from "next/link";


type NavLink = {
    name: string;
    href: string;
    desc?: string
};
export interface Person {
     name: string;
     age: number;
     email: string;
}
const NavbarComponent = () => {
    const navLinks = [
        { name: "Home", href: "/"},
        { name: "Contact", href: "/contact" },
    ]
   
    const userName: string = "Ash Ketchum";
    return (
        <nav className="bg-blue-500 text-white p-4 flex items-center">
            <div className="container mx-auto">
                <h1 className="text-xl font-bold">Pokemon App</h1>
            </div>
            <div className="flex gap-5">
            {navLinks.map((link) => (
                <Link key={link.name} href={link.href}
                className="px-3 py-1 rounded-md hover:bg-blue-600">{link.name}</Link>
            ))}
            </div>
        </nav>
    );
};

export default NavbarComponent