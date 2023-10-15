import Disqus from "@/components/Disqus";
import Share from "@/components/Share";
import config from "@/config/config.json";
import ImageFallback from "@/helpers/ImageFallback";
import MDXContent from "@/helpers/MDXContent";
import { getSinglePage } from "@/lib/contentParser";
import dateFormat from "@/lib/utils/dateFormat";
import similerItems from "@/lib/utils/similarItems";
import { humanize, markdownify, slugify } from "@/lib/utils/textConverter";
import SeoMeta from "@/partials/SeoMeta";
import { news } from "@/types";
import Link from "next/link";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import {
  FaRegClock,
  FaRegFolder,
  FaRegUserCircle,
} from "react-icons/fa/index.js";

const { blog_folder } = config.settings;

export const dynamicParams = false;


interface PageData {
  notFound?: boolean;
  content?: string;
  frontmatter: {
    enable?: boolean;
    title: string;
    description?: string;
    news: Array<news>;
  };
}
const Carousel = ({ data }: { data: PageData }) => {
  return (
    <>
      {data.frontmatter.enable && (
        <section className="section">
          <div className="container">
            <div className="row">
              <div className="mx-auto text-center md:col-10 lg:col-8 xl:col-6">
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
                  {data.frontmatter.news.map(
                    (item: news, index: number) => (
                      <SwiperSlide key={index}>
                        <div className="rounded-lg bg-theme-light px-7 pt-12 dark:bg-darkmode-theme-light">
                          <div className="text-dark dark:text-white">
                            
                          </div><ImageFallback
                                height={100}
                                width={400}
                                className=" rounded-xl"
                                src={item.image}

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
    </>)}
