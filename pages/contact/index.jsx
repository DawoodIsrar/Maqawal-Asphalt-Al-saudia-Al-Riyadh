import { useState } from "react";
import Link from "next/link";
import styles from "./index.module.css";
import icon1 from "../../public/images/1.png";
import icon2 from "../../public/images/2.png";
import icon3 from "../../public/images/3.png";
import Image from "next/image";
import ContactButtons from "../../components/Contactbuttons";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponse(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      setResponse(result.message || "تم الإرسال بنجاح!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        website: "",
        message: "",
      });
    } catch (err) {
      console.error(err);
      setResponse("حدث خطأ أثناء الإرسال.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.contact}>
      <div className={styles.hero}>
        <div className={styles.caption}>
          <div className={styles.line}></div>
          <div>
            <h2>تواصل معنا</h2>
          </div>
          <div>
            <p>
              نحن في مقاول أسفلت السعودية الرياض نقدم أفضل خدمات الأسفلت والإنشاءات العامة في جميع أنحاء الرياض. اتصل بنا الآن للحصول على استشارة مجانية أو لمناقشة مشروعك القادم مع فريقنا المتخصص ذو الخبرة العالية في تنفيذ المشاريع بأعلى جودة واحترافية
            </p>
          </div>
          <div className={styles.copyrights}>
            <div><Link href={`/`}>الرئيسية</Link></div>
            <div><i className="fas fa-circle"></i></div>
            <div><Link href={`/contact`}>تواصل معنا</Link></div>
          </div>
        </div>
      </div>

      <div className={styles.maps}>
        <div>
          <div className="google-map-code">
            <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3627.343374912782!2d46.711943975024816!3d24.611847455161293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f05840d15b241%3A0x13461b40195ad427!2s%D8%AD%D9%8A%2C%20RCCA2887%2C%202887%20Khaima%20Umm%20Muabad%2C%206798%2C%20Manfouhah%20Al%20Jadidah%2C%20Riyadh%2012653%2C%20Saudi%20Arabia!5e0!3m2!1sen!2sus!4v1754134115795!5m2!1sen!2sus"
  width="100%"
  height="550"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>
          </div>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <div className={styles.line}></div>
            <h1>تواصل معنا</h1>
            <div className={styles.formGroup}>
              <input
                placeholder="الاسم"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                placeholder="البريد الإلكتروني"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <input
                placeholder="رقم الهاتف"
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
              <input
                placeholder="موقعك الإلكتروني"
                type="text"
                name="website"
                value={formData.website}
                onChange={handleChange}
              />
            </div>
            <textarea
              placeholder="رسالتك هنا"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="6"
              required
            ></textarea>
            <button className={styles.btn} type="submit" disabled={loading}>
              {loading ? "جارٍ الإرسال..." : "أرسل الآن"}
            </button>
            {response && <p style={{ marginTop: 10 }}>{response}</p>}
          </form>
        </div>
        <div></div>
      </div>

      <div className={styles.cards}>
        <div>
          <div className={styles.icons}>
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
          <h2><strong>Office Address</strong></h2>
          <div>
            <p>2887-2939 Khaima umm Muabad, <br /> Manfouhah Al Jadidah, Riyadh 12653</p>
          </div>
        </div>
        <div>
          <div className={styles.icons}>
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
          <h2><strong>Email us</strong></h2>
          <div>
            <a href="mailto:attaullah94@gmail.com" className="text-blue-600 underline" style={{ textDecoration: 'none', cursor: 'pointer' }}>
    attaullah94@gmail.com
  </a>
          </div>
        </div>
        <div>
          <div className={styles.icons}>
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
          <h2><strong>Call us</strong></h2>
          <div>
            <p>  <a href="tel:0596957440" className="text-blue-600 underline">
    0596957440
  </a> <br />   <a href="tel:0596957440" className="text-blue-600 underline">
    0505215846
  </a></p>
          </div>
        </div>
      </div>
      <ContactButtons/>
    </div>
  );
};

export default Contact;
