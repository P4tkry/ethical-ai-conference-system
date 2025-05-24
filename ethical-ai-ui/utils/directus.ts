import { createDirectus, rest } from '@directus/sdk';
export const directus = createDirectus(process.env.DIRECTUS_URL || 'http://localhost:8055').with(rest());

export function ensureFullUrl(data: string): string {
    const isFullUrl = /^(http|https):\/\//.test(data);

    if (isFullUrl) {
        return data;
    }


    return `/assets/${data}`;
}