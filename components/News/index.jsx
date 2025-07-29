import styles from "./index.module.css";
import Image from "next/image";
import worker from "../../public/images/1.jpeg";
import worker2 from "../../public/images/22.jpeg";
import worker3 from "../../public/images/3.jpeg";
const News = () => {
  return (
    <div className={styles.news}>
      <div className={styles.title}>
        <span>NEWS & BLOG</span>
        <h2>Our latest news post and articles?</h2>
      </div>
      <div className={styles.grid}>
        <div>
          <div className={styles.img}> 
            <Image
              src={worker}
              objectFit="cover"
              alt="card-image"
              layout="fill"
              quality={100}
              priority={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className={styles.capt}>
            <div className={styles.date}>
              <span>
                <i className="fa fa-calendar"></i>
                23 May, 2023
              </span>
              <span>
                <i className="fa fa-user"></i>
                Admin
              </span>
            </div>
            <p>We really appreciate content about the construction</p>
            <button>READ MORE</button>
          </div>
        </div>
        <div>
          <div className={styles.img}>
            <Image
              src={worker2}
              objectFit="cover"
              alt="card-image"
              layout="fill"
              quality={100}
              priority={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className={styles.capt}>
            <div className={styles.date}>
              <span>
                <i className="fa fa-calendar"></i>
                23 May, 2023
              </span>
              <span>
                <i className="fa fa-user"></i>
                Admin
              </span>
            </div>
            <p>We really appreciate content about the construction</p>
            <button>READ MORE</button>
          </div>
        </div>
        <div>
          <div className={styles.img}>
            <Image
              src={worker3}
              objectFit="cover"
              alt="card-image"
              layout="fill"
              quality={100}
              priority={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className={styles.capt}>
            <div className={styles.date}>
              <span>
                <i className="fa fa-calendar"></i>
                23 May, 2023
              </span>
              <span>
                <i className="fa fa-user"></i>
                Admin
              </span>
            </div>
            <p>We really appreciate content about the construction</p>
            <button>READ MORE</button>
          </div>
        </div>
      </div>

      <div className={styles.upcoming}>
        <div className={styles.title}>
          <span>اعمل معنا!</span>
          <h2>هل لديك مشروع قادم؟</h2>
          <p>
           نحن هنا لنساعدك في تحويل رؤيتك إلى واقع، من خلال خبراتنا في أعمال الأسفلت والمقاولات العامة
نُطبق استراتيجيات متطورة ونهجًا تعاونيًا لضمان تنفيذ المشاريع بأعلى جودة وفي الوقت المحدد
          </p>
          <button>GET STARTED</button>
        </div>
      </div>
    </div>
  );
};

export default News;
