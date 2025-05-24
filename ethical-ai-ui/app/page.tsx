import LandingPage from "@/app/LandingPage";
import {directus, ensureFullUrl} from "@/utils/directus";
import {readItems} from "@directus/sdk";
import Partners from "@/app/Partners";
import Speakers from "@/app/Speakers";
import {getLocale, getTranslations} from "next-intl/server";
import Link from "next/link";
import WhereToFindUs from "@/app/WhereToFindUs";
export default async function Home() {
    const partners = (await directus.request<{ id: number; name: string; logo: string; link: string }[]>(
        readItems("partners")
    )).map((partner) => ({
        ...partner,
        logo: ensureFullUrl(partner.logo),
    }));

    const speakers = (await directus.request<{
        id: number;
        name: string;
        description: string,
        description_en: string,
        photo: string,
        tags: string[],
        link: string
    }[]>(readItems("speakers"))).map((speaker) => ({
        ...speaker,
        photo: ensureFullUrl(speaker.photo),
    }));

    const t = await getTranslations();


    return (
        <div>
            <div className={'margin'}>
                <LandingPage/>
            </div>
            <div className={'bg-white'}>
                <Partners partners={partners}/>
            </div>

            <div className="margin mt-10">
                <h2 className="text-3xl font-bold mb-4 sm:text-4xl lg:text-5xl">
                    {t('AboutEvent.title')}
                </h2>
                <p className="text-lg sm:text-xl lg:text-2xl">
                    {t('AboutEvent.content')}
                </p>
            </div>

            <Speakers speakers={speakers}/>

            <div className="mt-10 py-10 bg-gradient-to-r from-purple-500/40 via-pink-500/40 to-blue-500/40">
                <div className="margin">
                    <h2 className="text-3xl font-bold mb-4">{t("ForWhom.title")}</h2>
                    <p className="text-lg mb-6">{t("ForWhom.description")}</p>
                    <div className="flex flex-col sm:flex-row items-start gap-4">
                        <Link
                            href="/register"
                            className="inline-block bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold py-2 px-6 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-transform"
                        >
                            {t("ForWhom.registerButton")}
                        </Link>
                        <span className="text-sm text-white">{t("ForWhom.joinMessage")}</span>
                    </div>
                </div>
            </div>

            <WhereToFindUs/>

        </div>
    );
}