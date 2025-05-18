import {NextIntlClientProvider} from "next-intl";
import {ReactNode} from "react";


export default function ServerProviders(props: { children: ReactNode }) {
    return (
        <NextIntlClientProvider>

            {props.children}
        </NextIntlClientProvider>
    )
}