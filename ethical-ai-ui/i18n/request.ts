'use server';
import {getRequestConfig} from 'next-intl/server';
import {headers} from 'next/headers';
import {cookies} from 'next/headers'
import Negotiator from "negotiator";
import {i18nConfig} from "@/i18n/config";

export default getRequestConfig(async () => {

    let locale = i18nConfig.defaultLanguage;
    const headerLang = (await headers()).get('accept-language') || '';
    const cookieStore = await cookies();
    const cookieLang = cookieStore.get('locale');

    if (!cookieLang || !i18nConfig.acceptedLanguages.includes(cookieLang.value)) {
        const headers = { 'accept-language': headerLang}
        const languages = new Negotiator({ headers }).languages();
        locale = languages.find(lang => i18nConfig.acceptedLanguages.includes(lang)) || i18nConfig.defaultLanguage;
    }

    if (cookieLang && i18nConfig.acceptedLanguages.includes(cookieLang.value)) {
        locale = cookieLang.value;
    }


    return {
        locale,
        messages: (await import(`@/messages/${locale}.json`)).default
    };
});