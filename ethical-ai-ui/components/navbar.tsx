import {Navbar, NavbarBrand, NavbarMenu, NavbarItem} from "@heroui/navbar";
import Link from "next/link";

import LogoLight from "@/assets/images/ethical-ai-logo-light.svg";
import LogoDark from "@/assets/images/ethical-ai-logo-dark.svg";
import Image from "next/image";

export default function NavBar() {
    return (
        <Navbar height={90} maxWidth={'xl'}>
            <NavbarBrand>
                <Link href="/" className="text-xl font-bold">

                    <Image src={LogoLight} alt={'Ethical AI Logo'}
                           className={"hidden dark:inline-block h-14 w-fit"}/>
                    <Image src={LogoDark} alt={'Ethical AI Logo'}
                           className={"inline-block dark:hidden h-14 w-fit"}/>

                </Link>
            </NavbarBrand>

        </Navbar>
    );
}