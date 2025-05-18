'use client';
import {Navbar, NavbarBrand, NavbarContent, NavbarItem} from "@heroui/navbar";
import NextLink from "next/link";

import LogoLight from "@/assets/images/ethical-ai-logo-light.svg";
import LogoDark from "@/assets/images/ethical-ai-logo-dark.svg";

import LogoLightEn from "@/assets/images/ethical-ai-logo-light-en.svg";
import LogoDarkEn from "@/assets/images/ethical-ai-logo-dark-en.svg";
import Image from "next/image";
import {NavbarMenuToggle, Link, Button, NavbarMenu, NavbarMenuItem} from "@heroui/react";
import {useTranslations, useLocale} from "use-intl";
import {getLocale} from "next-intl/server";
import {FaRegCalendarCheck} from "react-icons/fa";

export default function NavBar() {
    const t = useTranslations('navbar');
    const locale = useLocale();

    return (
        <Navbar height={90} maxWidth={'xl'}>
            <NavbarContent className="md:hidden" justify="start">
                <NavbarMenuToggle className={'cursor-pointer'}/>
            </NavbarContent>

            <NavbarContent >
                <NavbarBrand className={'w-full flex justify-end md:justify-start'} >
                    <NextLink href="/" className="text-xl font-bold">

                        <Image src={locale ==='pl'?LogoLight:LogoLightEn} alt={'Ethical AI Logo'}
                               className={"hidden dark:inline-block h-14 w-fit"}/>
                        <Image src={locale ==='pl'?LogoDark:LogoDarkEn} alt={'Ethical AI Logo'}
                               className={"inline-block dark:hidden h-14 w-fit"}/>

                    </NextLink>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className={"hidden md:flex gap-2 lg:gap-6"} justify="center">
                <NavbarItem>
                    <Link color="foreground" href="/agenda" isBlock className={'lg:text-base text-sm'}>
                        {t('aboutEvent')}
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="secondary" href="/team" isBlock className={'lg:text-base text-sm'}>
                        {t('team')}
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="/about-event" isBlock className={'lg:text-base text-sm'}>
                        {t('agenda')}
                    </Link>
                </NavbarItem>
            </NavbarContent>

            <NavbarContent className="hidden md:flex gap-4" justify="end">



                <Button
                    as={NextLink}
                    href="/register"
                    color="secondary"
                    variant="shadow"
                    className="px-3 lg:px-6 py-2 text-xs lg:text-sm font-semibold bg-gradient-to-l from-ai-blue via-ai-purple to-ai-red text-white"
                >
                    {t('register')}
                </Button>
            </NavbarContent>

            <NavbarMenu className={'space-y-4 py-6'}>
                <NavbarMenuItem >
                    <Link href="/agenda" color={'foreground'} className={'text-2xl font-semibold underline-animation'} >{t('agenda')}</Link>
                </NavbarMenuItem>
                <NavbarMenuItem>
                    <Link href="/team" color={'secondary'} className={'text-2xl font-semibold underline-animation'}>{t('team')}</Link>
                </NavbarMenuItem>
                <NavbarMenuItem>
                    <Link href="/about-event" color={'foreground'} className={'text-2xl font-semibold underline-animation'}>{t('aboutEvent')}</Link>
                </NavbarMenuItem>
                <NavbarMenuItem className={'mt-5'}>
                    <Button
                        as={NextLink}
                        href="/register"
                        color={'secondary'}
                        variant="shadow"
                        className="px-4 py-2 text-md w-full justify-center font-semibold text-white dark:text-black bg-gradient-to-r from-ai-red via-ai-purple to-ai-blue rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center gap-2"
                    >
                        <FaRegCalendarCheck />
                        {t('register')}
                    </Button>
                </NavbarMenuItem>
            </NavbarMenu>

        </Navbar>
    );
}