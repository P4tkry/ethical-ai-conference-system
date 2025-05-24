"use server";
import Image from "next/image";
import {getLocale, getTranslations} from "next-intl/server";



interface Speaker {
    id: number;
    name: string;
    description: string;
    description_en: string;
    photo: string;
    tags: string[];
    link: string;

}

export default async function Speakers({speakers}: { speakers: Speaker[] }) {
    const t = await getTranslations('Speakers');
    const locale = await getLocale();
    return (
        <div className="margin mt-10">
            <h2 className="text-3xl font-bold text-center mb-6">{t('title')}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {speakers.map((speaker) => (
                    <a
                        href={speaker.link}
                        key={speaker.id}
                        className="rounded-lg p-[2px] coursor-pointer bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 hover:shadow-lg shadow-ai-red hover:-translate-y-3 transition-transform duration-300"
                    >
                        <div className="flex flex-col items-center bg-background rounded-lg h-full p-4">
                            <Image
                                src={speaker.photo}
                                alt={speaker.name}
                                width={150}
                                height={150}
                                className="rounded-full mb-4"
                            />
                            <h3 className="text-xl font-semibold mb-2">{speaker.name}</h3>
                            <p className="text-sm">{locale == 'pl' ? speaker.description : speaker.description_en}</p>
                            <div className={'w-full flex items-start mt-2'}>
                                {
                                    speaker.tags && (
                                        <div className="flex flex-wrap gap-2 mt-2">
                                            {speaker.tags.map((tag, index) => {
                                                const gradients = [
                                                    "bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500",
                                                    "bg-gradient-to-r from-green-400 to-blue-500",
                                                    "bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500",
                                                    "bg-gradient-to-r from-indigo-500 to-purple-500",
                                                    "bg-gradient-to-r from-teal-400 to-lime-500",
                                                    "bg-gradient-to-r from-red-400 to-yellow-500",
                                                    "bg-gradient-to-r from-blue-400 to-indigo-500",
                                                    "bg-gradient-to-r from-pink-400 to-orange-500",
                                                    "bg-gradient-to-r from-gray-400 to-gray-600",
                                                    "bg-gradient-to-r from-cyan-400 to-blue-500",
                                                ];
                                                const randomGradient = gradients[Math.floor(Math.random() * gradients.length)];

                                                return (
                                                    <span
                                                        key={index}
                                                        className={`${randomGradient} text-white text-xs font-semibold px-2 py-1 rounded-full`}
                                                    >
                        {tag}
                    </span>
                                                );
                                            })}
                                        </div>
                                    )
                                }
                            </div>


                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}