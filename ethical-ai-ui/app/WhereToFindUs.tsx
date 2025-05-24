'use client'
import {FaMapMarkerAlt, FaEnvelope, FaTicketAlt, FaClipboardCheck, FaCalendarAlt} from "react-icons/fa";
import {AbstractShapeBg, AmbientLightBg, BlurDotBg, GridArrayBg} from "react-color4bg";

export default function WhereToFindUs() {
    return (
        <AmbientLightBg loop colors={['#0a0a0a', '#1e3a8a', '#065f46']} className="relative h-full w-full p-10 ">
            <div className="relative z-10 margin rounded-lg w-full p-6 bg-white text-background shadow-2xl shadow-ai-red">
                <h2 className="text-3xl font-bold mb-4 text-center">
                    Więcej informacji o wydarzeniu
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Map Section */}
                    <div className="rounded-lg overflow-hidden shadow-lg border border-gray-300">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d218.2989113436282!2d19.475534264983455!3d51.755524657021965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471a34c9408f7751%3A0x55d6dce3c9931127!2sFabryka%20Ludwika%20Grohmana%20%E2%80%94%20%C5%81%C3%B3dzka%20Specjalna%20Strefa%20Ekonomiczna%20SA!5e0!3m2!1spl!2spl!4v1748001314925!5m2!1spl!2spl"
                            className="w-full h-64 md:h-96"
                            style={{border: 0}}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>

                    {/* Contact Section */}
                    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">
                            Informacje kontaktowe
                        </h3>
                        <div className="flex items-start mb-4">
                            <FaEnvelope className="text-blue-500 text-lg mr-2 my-auto"/>
                            <a
                                href="mailto:contact@example.com"
                                className="text-gray-700 hover:underline"
                            >
                                contact@example.com
                            </a>
                        </div>
                        <hr className="my-4 border-gray-300"/>
                        <div className="flex items-start mb-4">
                            <FaMapMarkerAlt className="text-red-500 text-lg mr-2 my-auto"/>
                            <a
                                href="https://maps.app.goo.gl/dfM3WnFYwD8KZidB9"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-700 hover:underline"
                            >
                                Fabryka Ludwika Grohmana, Łódzka Specjalna Strefa Ekonomiczna
                            </a>
                        </div>
                        <hr className="my-4 border-gray-300"/>
                        <div className="flex items-start mb-4">
                            <FaCalendarAlt className="text-green-500 text-lg mr-2 my-auto"/>
                            <p className="text-gray-700">
                                Początek wydarzenia: 17 czerwca 2025, 9:00
                            </p>
                        </div>
                        <hr className="my-4 border-gray-300"/>
                        <div className="flex items-start mb-4">
                            <FaTicketAlt className="text-yellow-500 text-lg mr-2 my-auto"/>
                            <p className="text-gray-700">Wstęp wolny</p>
                        </div>
                        <hr className="my-4 border-gray-300"/>
                        <div className="flex items-start">
                            <FaClipboardCheck className="text-purple-500 text-lg mr-2 my-auto"/>
                            <a
                                href="/register"
                                className="text-gray-700 hover:underline"
                            >
                                Rejestracja obowiązkowa
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </AmbientLightBg>
    );
}