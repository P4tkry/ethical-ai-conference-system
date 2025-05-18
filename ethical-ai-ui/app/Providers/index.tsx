import ServerProviders from "@/app/Providers/ServerProviders";
import ClientProviders from "@/app/Providers/ClientProviders";
import {ReactNode} from "react";

export default function Providers(props: { children: ReactNode }) {
    return (
        <ServerProviders>
            <ClientProviders>
                {props.children}
            </ClientProviders>
        </ServerProviders>

    )
}