import styles from "./index.module.css";
import logo from "../../public/images/logo.png";
import Image from "next/image";
import icon1 from "../../public/images/1.png";
import icon2 from "../../public/images/2.png";
import icon3 from "../../public/images/3.png";
import Link from 'next/link'
import { useState } from "react";

const Footer = () => {
   const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");

    if (!email || !email.includes("@")) {
      setStatus("Please enter a valid email.");
      return;
    }

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      if (res.ok) {
        setStatus("Thanks for subscribing!");
        setEmail("");
      } else {
        setStatus(data.message || "Something went wrong.");
      }
    } catch (err) {
      console.error(err);
      setStatus("Failed to subscribe.");
    }
  };
  return (
    <div className={styles.footer}>
      <div className={styles.grid}>
        <div>
          <div className={styles.logo}>
            <Image
              src={logo}
              objectFit="cover"
              alt="card-image"
              layout="fill"
              quality={100}
              priority={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <p>
            نحن شركة مقاولات أسفلت رائدة في الرياض، المملكة العربية السعودية، نقدم خدمات احترافية في تنفيذ مشاريع الطرق، الأسفلت، والبنية التحتية بجودة عالية ووفق أعلى المعايير الهندسية.
          </p>
          <strong>ساعات العمل :</strong> من الإثنين إلى السبت: من 9 صباحاً حتى 6 مساءً

          <div className={styles.icons}>
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-pinterest"></i>
            <i className="fa-brands fa-instagram"></i>
          </div>
        </div>
        <div>
          <h2>معلومات التواصل</h2>
          <div>
            <div>
              <Image
                src={icon1}
                objectFit="cover"
                alt="card-image"
                layout="fill"
                quality={100}
                priority={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div>Ta-134/A, Gulshan Badda Link Rd, Saudi Arabia</div>
          </div>

          <div>
            <div>
              <Image
                src={icon2}
                objectFit="cover"
                alt="card-image"
                layout="fill"
                quality={100}
                priority={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div>(+234) 807 548 9362,  (+880) 155 69569 366</div>
          </div>
          <div>
            <div style={{width:'50px'}}>
              <Image
                src={icon3}
                objectFit="cover"
                alt="card-image"
                layout="fill"
                quality={100}
                priority={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div>dawoodisrar@gmail.com, engineerdawoodisrar@gmail.com</div>
          </div>
        </div>
        <div>
          <h2>خدماتنا</h2>
          <div>
            <i className="fa fa-angle-right"></i>
            مقاولات عامة
          </div>
          <div>
            <i className="fa fa-angle-right"></i>
            صيانة الممتلكات
          </div>
          <div>
            <i className="fa fa-angle-right"></i>
            إدارة المشاريع
          </div>
          <div>
            <i className="fa fa-angle-right"></i>
            التصميم والبناء الافتراضي
          </div>
          <div>
            <i className="fa fa-angle-right"></i>
            إعدادات ما قبل البناء
          </div>
          <div>
            <i className="fa fa-angle-right"></i>
           التصميم والتنفيذ الكامل
          </div>
        </div>
        <div>
          <h2>النشرة البريدية</h2>
          <form onSubmit={handleSubmit}>
        <p>
          اشترك الآن في نشرتنا البريدية للحصول على آخر العروض والخدمات في مجال مقاولات الأسفلت بالرياض والمملكة السعودية. أدخل بريدك الإلكتروني ليصلك كل جديد
        </p>
        <input
          placeholder="بريدك الإلكتروني"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit" style={{ cursor:"pointer" }}>اشترك الآن</button>
        {status && <p style={{ marginTop: "10px",cursor:"pointer" }}>{status}</p>}
      </form>
        </div>
      </div>

      <div className={styles.copyright}>
        <div>© 2023 مقاول أسفلت السعودية الرياض. تصميم داوود إصرار</div>
        <div>
            <ul>
               <li><Link href="/#services">خدماتنا</Link></li>
              <li><Link href="/contact">تواصل معنا</Link></li>
              <li><Link href="/#about">من نحن</Link></li>
              <li><Link href="/">الصفحة الرئيسية</Link></li>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
