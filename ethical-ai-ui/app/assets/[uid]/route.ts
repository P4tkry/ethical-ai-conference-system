import { NextResponse } from "next/server";

export async function GET(req: Request, { params }: { params: { uid: string } }) {
    const directusUrl = process.env.DIRECTUS_URL;

    if (!directusUrl) {
        return NextResponse.json(
            { error: "DIRECTUS_URL is not defined in environment variables" },
            { status: 500 }
        );
    }

    const { uid } = params;

    if (!uid) {
        return NextResponse.json({ error: "UID is required" }, { status: 400 });
    }

    const directusAssetUrl = `${directusUrl}/assets/${uid}`;

    try {
        const response = await fetch(directusAssetUrl);

        if (!response.ok) {
            return NextResponse.json(
                { error: `Failed to fetch asset: ${response.statusText}` },
                { status: response.status }
            );
        }

        const headers = new Headers(response.headers);
        headers.set("Cache-Control", "public, max-age=31536000, immutable");

        return new Response(response.body, {
            status: response.status,
            headers,
        });
    } catch {
        return NextResponse.json(
            { error: `Error fetching asset` },
            { status: 500 }
        );
    }
}