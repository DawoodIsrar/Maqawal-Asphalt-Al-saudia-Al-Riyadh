import { useState } from "react";
import styles from "./index.module.css";
import icon1 from "../../public/images/1.png";
import icon2 from "../../public/images/2.png";
import icon3 from "../../public/images/3.png";
import Image from "next/image";

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
      setResponse(result.message || "Submitted successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        website: "",
        message: "",
      });
    } catch (err) {
      console.error(err);
      setResponse("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.contact} id="home-contact">
      <div className={styles.grid}>
        <div>
          <span>دعنا نتحدث</span>
          <h2>هل لديك مشروع قادم؟</h2>
          <form onSubmit={handleSubmit}>
            <div className={styles.formgroup}>
              <input
                type="text"
                placeholder="الاسم"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                placeholder="البريد الإلكتروني"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.formgroup}>
              <input
                type="text"
                placeholder="رقم الهاتف"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="موقعك الإلكتروني"
                name="website"
                value={formData.website}
                onChange={handleChange}
              />
            </div>
            <div className={styles.formgroup}>
              <textarea
                placeholder="رسالتك هنا"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="10"
              />
            </div>
            <div className={styles.submit}>
              <button type="submit" disabled={loading}>
                {loading ? "جارٍ الإرسال..." : "أرسل الآن"}
              </button>
              {response && <p style={{ marginTop: 10 }}>{response}</p>}
            </div>
          </form>
        </div>
        <div>
          <div>
            <div className={styles.icons}>
              <Image
                src={icon1}
                objectFit="cover"
                alt="card-image"
                layout="fill"
                quality={100}
                priority={true}
              />
            </div>
            <span>
              <strong>SAUDI ARABIA OFFICE</strong> <br /> <br />
              <p>55, Abakaliki road,</p>
              <p>Al riyadh, Saudi Arabia</p>
            </span>
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
              />
            </div>
            <span>
              <strong>راسلنا عبر البريد الإلكتروني</strong> <br /> <br />
              <p> <a href="mailto:attaullah94@gmail.com" className="text-blue-600 underline" style={{ textDecoration: 'none', cursor: 'pointer' }}>
    attaullah94@gmail.com
  </a></p>
              <p></p>
            </span>
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
              />
            </div>
            <span>
              <strong>اتصل بنا</strong> <br /> <br />
              <p><a href="tel:0596957440" className="text-blue-600 underline">
    0596957440
  </a> ,</p>
              <p><a href="tel:0596957440" className="text-blue-600 underline">
    0505215846
  </a> </p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
