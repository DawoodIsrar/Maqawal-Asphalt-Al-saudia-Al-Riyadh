import styles from "./index.module.css";
import Image from "next/image";
import man from "../../public/images/about.png";
import abzt from "../../public/images/abzt.jpeg";
import shape from "../../public/images/shape-1.png";
import one1 from "../../public/images/one1.png";
import one2 from "../../public/images/one2.png";
import one3 from "../../public/images/one3.png";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
const About = () => {
  const { ref, inView } = useInView();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      setVisible(true);
    }

    // if (!inView) {
    //   setVisible(false);
    // }
  }, [inView]);

  return (
    <div className={styles.about} id="about">
      <div ref={ref} className={styles.test}></div>
      <div className={styles.cards}>
        <div>
          <div style={{ width: "60px", height: "60px" }}>
            <Image
              src={one1}
              objectFit="cover"
              alt="card-image"
              layout="fill"
              quality={100}
              priority={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div>
            <strong> الأنظمة المستدامة</strong>
          </div>
          <div>
            <p>
              نُطبق أنظمة مستدامة وحلول حديثة في أعمال البناء والسفلتة
معتمدين على أطر عمل مرنة لضمان تنفيذ المشاريع في الرياض والمملكة العربية السعودية بكفاءة واستمرارية
            </p>
          </div>
        </div>

        <div>
          <div style={{ width: "60px", height: "60px" }}>
            <Image
              src={one2}
              objectFit="cover"
              alt="card-image"
              layout="fill"
              quality={100}
              priority={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div>
            <strong> خدمات عالية الجودة</strong>
          </div>
          <div>
            <p>
              نُقدم خدمات مقاولات ذات جودة عالية في جميع أنحاء الرياض،
من خلال نهج منهجي يضمن الإشراف الكامل وتنفيذ المشاريع بدقة وفقًا لمعايير المملكة.
            </p>
          </div>
        </div>

        <div>
          <div style={{ width: "60px", height: "60px" }}>
            <Image
              src={one3}
              objectFit="cover"
              alt="card-image"
              layout="fill"
              quality={100}
              priority={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div>
            <strong>خبراء الترميم والتطوير</strong>
          </div>
          <div>
            <p>
نتميز في ترميم وتطوير المواقع السكنية والتجارية،
باستخدام تقنيات متقدمة وخبرات سعودية لتنفيذ مشاريع الأسفلت والبناء في الرياض بكفاءة عالية.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.main}>
        <div
          className={visible ? `${styles.man} ${styles.animClass}` : styles.man}
        >
          <Image
            src={man}
            objectFit="cover"
            alt="card-image"
            layout="fill"
            quality={100}
            priority={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div
          className={
            visible ? `${styles.stuff} ${styles.animClass2}` : styles.stuff
          }
        >
          <div className={styles.img}>
            <div>
              <Image
                src={shape}
                objectFit="cover"
                alt="card-image"
                layout="fill"
                quality={100}
                priority={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
          <h4>&nbsp; &nbsp; &nbsp;من نحن؟</h4>
          <h2>حلول مقاولات مبتكرة وجاهزة لمستقبل البناء في السعودية</h2>
          <p>
            نحن شركة مقاولات أسفلت وبناء مقرها الرياض، نُقدم حلولاً متكاملة تُركز على الجودة والاستدامة.
نعتمد على أُطر عمل مرنة ونهج استراتيجي لتطوير المشاريع وتحقيق التعاون الفعّال بين الفرق التنفيذية، مما يُعزز من تمكين العملاء وتحقيق نتائج ملموسة.
          </p>
          <div className={styles.abzt}>
            <div>
              <Image
                src={abzt}
                objectFit="cover"
                alt="card-image"
                layout="fill"
                quality={100}
                priority={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div>
              <div className={styles.check}>
                <div>
                  <i className="fa-solid fa-circle-check"></i>
                  &nbsp; &nbsp;خدمات ما قبل البناء
                </div>
                <div>
                  <i className="fa-solid fa-circle-check"></i>
                  &nbsp;&nbsp;تصنيع صناعي وإنشائي
                </div>
                <div>
                  <i className="fa-solid fa-circle-check"></i>
                  &nbsp;&nbsp; أعمال البناء والتشييد&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </div>
              </div>
            </div>
            <div>

            <button onClick={() => {
    const section = document.getElementById("services");
    section?.scrollIntoView({ behavior: "smooth" });
  }}  style={{cursor:"pointer"}} >اعرف المزيد</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
