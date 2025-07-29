import styles from "./index.module.css";
import Image from "next/image";
import worker from "../../public/images/servic-1.jpeg";
import worker2 from "../../public/images/servic-2.jpeg";
import worker3 from "../../public/images/servic-3.jpeg";
import worker4 from "../../public/images/servic-4.jpeg";
import worker5 from "../../public/images/servic-5.jpeg";
import worker6 from "../../public/images/servic-6.jpeg";
import icon from "../../public/images/service-icon1.png";
import { useEffect, useRef } from "react";

const Products = () => {
  const assets = [
    {
      img: worker,
      title: "المقاولات العامة",
      desc:"نُنفذ مشاريع بناء متكاملة تشمل الأسفلت، الهياكل الخرسانية، والمباني التجارية والسكنية"
    },
    {
      img: worker2,
      title: "الصيانة الدورية",
      desc:"نُقدم خدمات صيانة وقائية وتحديث للبنية التحتية لضمان استدامة المنشآت في الرياض والمناطق المجاورة"
    },
    {
      img: worker3,
      title: "إدارة المشاريع",
      desc:"نُشرف على مراحل المشروع بالكامل باستخدام أدوات احترافية لضمان الجودة والالتزام بالجدول الزمني"
    },
    {
      img: worker4,
      title: "التصميم والبناء الرقمي",
      desc:"نستخدم أحدث التقنيات في التصميم الثلاثي الأبعاد ونمذجة البناء لتقليل الأخطاء وتحسين الكفاءة"
    },
    {
      img: worker5,
      title: "خدمات ما قبل البناء",
      desc:"نقوم بتقييم وتحليل متطلبات المشروع قبل التنفيذ لضمان خطة فعالة ومُحكمة"
    },
    {
      img: worker6,
      title: "التصميم والتنفيذ",
      desc:"نوفر خدمات تصميم هندسي متكاملة مع تنفيذ مباشر وفق أعلى المعايير في المملكة"
    },
  ];

  useEffect(() => {
    window.addEventListener("scroll", animateIn);
    return () => {
      window.removeEventListener("scroll", animateIn);
    };
  }, []);

  const container = useRef(null);
  const grid = useRef(null);

  const animateIn = () => {
    let width = container.current;
    let height = window.innerHeight;
    let revealpoint = 120;
    let revealTop = width.getBoundingClientRect().top;
    if (revealTop < height - revealpoint) {
      width.classList.add(styles.addWidth);
    }

    let widths = grid.current.children;

    for (const child of widths) {
      let revealTop = child.getBoundingClientRect().top;
      let revealpoint = 120;

      if (revealTop < height - revealpoint) {
        child.classList.add(styles.addWidth);
      } else {
        child.classList.remove(styles.addWidth);
      }
    }
  
  };
  return (
    <div className={styles.products}>
      <div ref={container} className={styles.caption}>
        <b> ماذا نقدم؟</b>
        <h2>نُطور حلولاً شاملة لكل مشروع لضمان النجاح والجودة في كل مرحلة</h2>
      </div>
      <div ref={grid} className={styles.grid}>
        {assets.map((x, i) => (
          <div key={i}>
            <div className={styles.overlay}>
              <div>
                <div className={styles.icon2}>
                  <Image
                    src={icon}
                    objectFit="cover"
                    alt="card-image"
                    layout="fill"
                    quality={100}
                    priority={true}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </div>
              <div>
                <strong>{x.title}</strong>
              </div>
              <div className={styles.capt}>
               {x.desc}
              </div>
              <div></div>
            </div>
            <Image
              src={x.img}
              objectFit="cover"
              alt="card-image"
              layout="fill"
              quality={100}
              priority={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className={styles.tab}>
              <span>{x.title}</span>
              <div className={styles.icon}>
                <div>
                  <Image
                    src={icon}
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
