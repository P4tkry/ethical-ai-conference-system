'use client';
import { Swiper, SwiperSlide,  } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

interface Partner {
    id: number;
    name: string;
    logo: string;
    link: string;
}

export default function Partners({ partners }: { partners: Partner[] }) {
    return (
        <div className="mt-10 py-10 text-background margin">
            <h2 className="text-center text-2xl font-semibold mb-6">Our Partners</h2>
            <Swiper
                spaceBetween={40}
                slidesPerView={2}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    640: { slidesPerView: 3 },
                    1024: { slidesPerView: 4 },
                }}
                modules={[Autoplay]}
                className="w-full max-w-4xl mx-auto"
            >
                {partners.map((partner) => (
                    <SwiperSlide key={partner.id}>
                        <div className="w-full flex items-center justify-center  p-4">
                            <a href={partner.link} className="cursor-pointer w-fit mx-auto">
                                <img
                                    src={partner.logo}
                                    alt={partner.name}
                                    className="h-10 object-contain"
                                />
                            </a>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}