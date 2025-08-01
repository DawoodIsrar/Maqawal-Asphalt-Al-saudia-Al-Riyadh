import styles from "./index.module.css";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useEffect, useRef, useState } from "react";
import testi from "../../public/images/testi1.jpeg";
import test2 from "../../public/images/testi2.jpeg";
import test3 from "../../public/images/tm2.jpeg";
import test4 from "../../public/images/tm3.jpeg";
import test5 from "../../public/images/tm4.jpeg";
import test6 from "../../public/images/tm5.jpeg";
import test7 from "../../public/images/tm6.jpeg";
import Image from "next/image";

const Reviews = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
  }); 
  const test = useRef(null);
  const slide2 = useRef(null);
  const main = useRef(null);
  const caption = useRef(null)
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const currentImage = slide2.current.children[index].getAttribute("data-src");
    const currentName =   slide2.current.children[index].getAttribute("data-name");
    main.current.style.backgroundImage = `url('/images/${currentImage}')`;
    caption.current.children[0].textContent = currentName.split(",")[0]
    caption.current.children[1].textContent = currentName.split(",")[1]
  
  }, [index]);

  const nextPrev = (type) => {
    const sliderr = test.current.nextSibling.nextSibling;
    const height = sliderr.clientWidth;
    if (type === "next") {
      sliderr.scrollBy(height, 0);
    } else if (type == "prev") {
      sliderr.scrollLeft -= height;
    }
  };
  const scrollAction = (type) => {
    const sliderr = slide2.current;
    const height = sliderr.children[0].clientHeight;
    const elem = sliderr.children[index === 4 ? 1:index+1]
    const prev = sliderr.children[index-1]
    if (type === "down") {
      if (index === 4) {
        // sliderr.scrollTop -= (height + 20) * 5;
        sliderr.scrollTo(0,-((height + 20) * 5))
        setIndex(0);
        return;
      }
      // sliderr.scrollTop += height + 20;
      // sliderr.scrollTo(0,height+20)
      elem.scrollIntoView({block:"nearest", inline:'start', behavior:"smooth"})
      console.log("scroll")
      setIndex((x) => x + 1);
    } else if (type == "up") {
      if (index === 0) {
        // sliderr.scrollTop += (height + 20) * 5;
        sliderr.scrollTo(0,(height + 20) * 5)
        setIndex(4);
        return;
      }
      // sliderr.scrollTop -= height + 20;
      prev.scrollIntoView({block:"nearest", inline:'start', behavior:"smooth"})
      console.log("scroll")
      setIndex((x) => x - 1);
      
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", animateIn);
    return () => {
      window.removeEventListener("scroll", animateIn);
    };
  }, []);

  const container = useRef(null);
  const grid = useRef(null);

  const animateIn = () => {
    let width = main.current;
    let height = window.innerHeight;
    let revealpoint = 120;
    let revealTop = width.getBoundingClientRect().top;
    if (revealTop < height - revealpoint) {
      width.classList.add(styles.addWidth);
    } else {
      width.classList.remove(styles.addWidth)
    }

    let width2 = slide2.current;
    if (width2.getBoundingClientRect().top < height - revealpoint) {
      width2.classList.add(styles.addWidth);
    } else {
      width2.classList.remove(styles.addWidth);
    }
  
  };

  return (
    <div className={styles.reviews}>
      <div className={styles.grid}>
        <div>
          <div className={styles.title}>
            <span>آراء العملاء</span>
            <h2 ref={test}>تقييمات عملائنا</h2>
            <div className={styles.buttons}>
              <div onClick={() => nextPrev("prev")}>&larr;</div>
              <div onClick={() => nextPrev("next")}>&rarr;</div>
            </div>
            <div ref={sliderRef} className={`${styles.slide} keen-slider`}>
              <div className="keen-slider__slide number-slide1">
                <span className="fa-solid fa-quote-left"></span>
                <p>
                  <i>
                    فريق العمل كان على درجة عالية من الاحترافية، وتم تنفيذ مشروع الأسفلت في الوقت المحدد وبجودة ممتازة. أنصح بالتعامل معهم بشدة
                  </i>
                </p>
                <div className={styles.profile}>
                  <Image
                    src={testi}
                    objectFit="cover"
                    alt="card-image"
                    layout="fill"
                    quality={100}
                    priority={true}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className={styles.capt}>
                  <strong>أحمد الزهراني – الرياض</strong>
                <div>CEO, Brick Consulting</div>
                  
                </div>
              </div>
              <div className="keen-slider__slide number-slide2">
                <span className="fa-solid fa-quote-left"></span>
                <p>
                  <i>
                   تعاملت معهم في مشروع بنية تحتية، وكان العمل منظمًا، والمعدات حديثة، والنتائج فاقت توقعاتي. شركة تستحق الثقة فعلًا
                  </i>
                </p>
                <div className={styles.profile}>
                  <Image
                    src={test2}
                    objectFit="cover"
                    alt="card-image"
                    layout="fill"
                    quality={100}
                    priority={true}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className={styles.capt}>
                  <strong>سارة القحطاني – الدمام</strong>
                  Guiness World record holder
                </div>
              </div>
              <div className="keen-slider__slide number-slide3">
                <span className="fa-solid fa-quote-left"></span>
                <p>
                  <i>
                    خدمة ممتازة واهتمام رائع بأدق التفاصيل. شركة موثوقة جدًا في مجال المقاولات، وتم تنفيذ أعمال الترميم بجودة عالية
                  </i>
                </p>
                <div className={styles.profile}>
                  <Image
                    src={testi}
                    objectFit="cover"
                    alt="card-image"
                    layout="fill"
                    quality={100}
                    priority={true}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className={styles.capt}>
                  <strong> عبدالله المطيري – جدة</strong>
                  Father, CEO AVREPM
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className={styles.title}>
            <span>أعضاء الفريق</span>
            <h2>فريق من الخبراء المتخصصين</h2>
            <div style={{ bottom: "21px" }} className={styles.buttons}>
              <div onClick={() => scrollAction("up")}>&larr;</div>
              <div onClick={() => scrollAction("down")}>&rarr;</div>
            </div>
            <div className={styles.slide2}>
              <div className={styles.carousel}>
                <div ref={main}></div>
                <div ref={slide2}>
                  <div data-name = 'فيكتور نوجيبيري,عامل إنشاءات' data-src="tm2.jpeg">
                    <Image
                      src={test3}
                      objectFit="cover"
                      alt="card-image"
                      layout="fill"
                      quality={100}
                      priority={true}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div data-name='إيكانا إيب,رئيس قسم الهندسة' data-src="tm3.jpeg">
                    <Image
                      src={test4}
                      objectFit="cover"
                      alt="card-image"
                      layout="fill"
                      quality={100}
                      priority={true}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div data-name='نوربرت أودياكا,مهندس مدني' data-src="tm4.jpeg">
                    <Image
                      src={test5}
                      objectFit="cover"
                      alt="card-image"
                      layout="fill"
                      quality={100}
                      priority={true}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div data-name='أوبينا أديفيهينتي,عامل بناء رئيسي' data-src="tm5.jpeg">
                    <Image
                      src={test6}
                      objectFit="cover"
                      alt="card-image"
                      layout="fill"
                      quality={100}
                      priority={true}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div data-name='إيميكا موسى,عامل موقع' data-src="tm6.jpeg">
                    <Image
                      src={test7}
                      objectFit="cover"
                      alt="card-image"
                      layout="fill"
                      quality={100}
                      priority={true}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.capt} ref={caption}>
                <strong>Victor Nwigberi</strong>
                <p>Construction worker</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
