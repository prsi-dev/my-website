import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "./styles.scss";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

function GallerySwiper({ gallery }) {
  console.log("swiper", gallery);
  return (
    <div>
      {gallery ? (
        <Swiper
          key={gallery.id}
          spaceBetween={5}
          slidesPerView={1}
          navigation={{ clickable: true }}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          mousewheel={true}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          loop={true}
          autoHeight={true}
          autoplay={false}
          effect={"fade"}
        >
          {gallery.items.map((item) => (
            <div>
              <SwiperSlide key={item.id}>
                <img
                  key={item.imageUrl}
                  src={item.imageUrl}
                  alt="Photography Item"
                />
                {/*  <p className="SwiperSlide__description">{item.imageTitle}</p> */}
              </SwiperSlide>
            </div>
          ))}
        </Swiper>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
export default GallerySwiper;
