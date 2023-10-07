"use client";

import ImageFallback from "@/helpers/ImageFallback";
import { markdownify } from "@/lib/utils/textConverter";
import { Carousel } from "@/types";
import "swiper/css";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface PageData {
  notFound?: boolean;
  frontmatter: {
    enable?: boolean;
    Carousels: Array<Carousel>;
  };
}

const Carousel = ({ data }: { data: PageData }) => {
  return (
    <>
      {data.frontmatter.enable && (
        <section className="section">
          <div className="container">
            <div className="row">
              <div className="mx-auto mb-12 text-center md:col-10 lg:col-8 xl:col-6">
              </div>
              <div className="col-12">
                <Swiper
                  
                  modules={[Autoplay, Pagination]}
                  pagination={{ clickable: true }}
                  loop={true}
                  loopedSlides={2}
                  centeredSlides={true}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  spaceBetween={10}
                  breakpoints={{
                    768: {
                      slidesPerView: 2,
                    },
                    992: {
                      slidesPerView: 3,
                    },
                  }}
                >
                  {data.frontmatter.Carousels.map(
                    (item: Carousel, index: number) => (
                      <SwiperSlide key={index}>
                        <div className="rounded-lg bg-theme-light px-7 py-10 dark:bg-darkmode-theme-light">
                          <div className="text-dark dark:text-white">
                            
                          </div><ImageFallback
                                height={100}
                                width={400}
                                className=" rounded-xl"
                                src={item.avatar}

                              />
                          
                          <div className="mt-11 flex items-center">
                            
                            <div className="ml-4">
                              
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    ),
                  )}
                </Swiper>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Carousel;
