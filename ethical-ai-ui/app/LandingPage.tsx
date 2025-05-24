'use client';
import { useLocale, useTranslations } from "use-intl";
import Image from "next/image";
import { BigBlobBg } from "react-color4bg";
import { useEffect, useState } from "react";
import { Button } from "@heroui/react";
import NextLink from "next/link";
import { FaArrowRight, FaCalendarAlt, FaGift, FaMapMarkerAlt } from "react-icons/fa";
import LogoLight from "@/assets/images/ethical-ai-logo-light.svg";
import LogoLightEn from "@/assets/images/ethical-ai-logo-light-en.svg";

function TimeToEvent() {
    const t = useTranslations("HomePage");
    const startDate = new Date('2025-06-17T00:00:00Z');
    const [restTime, setRestTime] = useState(startDate.getTime() - new Date().getTime());

    useEffect(() => {
        const interval = setInterval(() => {
            setRestTime(startDate.getTime() - new Date().getTime());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const days = Math.floor(restTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((restTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((restTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((restTime % (1000 * 60)) / 1000);

    return (
        <div className="w-full bg-background/30 shadow-gray-600 shadow-md rounded-lg p-4 md:p-6">
            <div className="text-center mb-5 text-lg sm:text-xl md:text-3xl font-medium">
                {t('timeToEvent')}
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
                {[{ label: t('days'), value: days }, { label: t('hours'), value: hours }, { label: t('minutes'), value: minutes }, { label: t('seconds'), value: seconds }].map((unit, index) => (
                    <div key={index} className="text-center flex flex-col justify-center gap-1 sm:gap-2">
                        <span className="text-xl sm:text-2xl md:text-4xl" suppressHydrationWarning>{unit.value}</span>
                        <span className="text-sm sm:text-base">{unit.label}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

function InfoBox({ content, icon, className }: { content: string; icon: React.ReactNode; className?: string }) {
    return (
        <div className={`flex items-center gap-2 justify-center rounded-full px-4 py-2 shadow ${className}`}>
            <div className="text-lg md:text-xl text-ai-red">
                {icon}
            </div>
            <div className="text-sm md:text-lg font-medium">
                {content}
            </div>
        </div>
    );
}

export default function LandingPage() {
    const t = useTranslations("HomePage");
    const locale = useLocale();

    return (
        <div className="relative w-full h-full overflow-hidden">
            <BigBlobBg
                className="absolute  h-full w-full opacity-40 "
                colors={['#0a0a0a', '#00cccc', '#cc00cc', '#cc3700', '#00cc66']}
                loop
            />
            <div className="w-full flex flex-col relative gap-10 p-2 pt-5 md:pt-20">
                <div className="flex gap-5 md:gap-10 flex-col items-center">
                    <Image
                        src={locale === 'pl' ? LogoLight : LogoLightEn}
                        alt="Ethical AI Logo"
                        className="h-20 md:h-40 w-auto"
                    />

                    <div className="flex flex-wrap gap-4 justify-center">
                        <InfoBox
                            content={t('freeEvent')}
                            icon={<FaGift className="text-yellow-300" />}
                            className="bg-gradient-to-r from-yellow-600 via-orange-500 to-red-500 text-white shadow-lg"
                        />
                        <InfoBox
                            content={t('eventDate')}
                            icon={<FaCalendarAlt className="text-blue-300" />}
                            className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white shadow-lg"
                        />
                        <InfoBox
                            content={t('eventLocation')}
                            icon={<FaMapMarkerAlt className="text-green-300" />}
                            className="bg-gradient-to-r from-green-500 via-teal-500 to-cyan-500 text-white shadow-lg"
                        />
                    </div>
                    <div className="text-center px-4">
                        <h1 className="text-lg md:text-2xl font-bold">
                            {t('joinMessage')}
                        </h1>
                    </div>
                    <Button
                        as={NextLink}
                        href="/register"
                        color="secondary"
                        className="px-4 md:px-8 py-6 md:py-8 mx-auto w-fit md:my-5 rounded-full text-lg md:text-2xl justify-center bg-gradient-to-r from-ai-red via-ai-purple to-ai-blue shadow-lg flex items-center gap-4 group"
                    >
                        {t('registerButton')}
                        <div className="w-8 md:w-10 h-8 md:h-10 flex items-center justify-center bg-white text-ai-blue rounded-full transition-transform group-hover:translate-x-2">
                            <FaArrowRight />
                        </div>
                    </Button>
                    <TimeToEvent />
                </div>
            </div>
        </div>
    );
}