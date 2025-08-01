import styles from "./index.module.css";
import logo from "../../public/images/logo.png";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";

const Header = () => {
  const [sidebar, setSideBar] = useState(false);
  const sideContent = useRef(null);
  const [sticky, setSticky] = useState("");
  const headerRef = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);

  const isSticky = () => {
    const scrollTop = window.scrollY;
    let number = headerRef.current.style.display === "" ? 120 : 175;
    const stickyClass = scrollTop >= number ? styles.isSticky : "";
    setSticky(stickyClass);
  };

  const show = () => {
    setSideBar(true);
    setTimeout(() => {
      sideContent.current.style.width = "100%";
      sideContent.current.style.visibility = "visible";
    }, 10);
  };

  const hide = () => {
    sideContent.current.style.width = "0%";
    sideContent.current.style.visibility = "hidden";
    setTimeout(() => {
      setSideBar(false);
    }, 400);
  };

  const more = useRef(null);
  const inner = useRef(null);
  const showMore = () => {
    const elemHeight = more.current.scrollHeight;
    const height = more.current.style.maxHeight;
    more.current.style.maxHeight = height === "" || height === "0px" ? `${elemHeight}px` : "0";
  };
  const innerAction = () => {
    const elemHeight = inner.current.scrollHeight;
    const height = inner.current.style.maxHeight;
    inner.current.style.maxHeight = height === "" || height === "0px" ? `${elemHeight}px` : "0";
  };

  return (
    <div className={styles.header}>
      {/* Contact Row */}
      <div ref={headerRef} style={{ display: "flex" }} className={styles.headerOne}>
        <div>
          <div><i className="fa fa-envelope"></i>  <a href="mailto:attaullah94@gmail.com" className="text-blue-600 underline" style={{ textDecoration: 'none', cursor: 'pointer' }}>
    <a href="mailto:attaullah94@gmail.com" className="text-blue-600 underline" style={{ textDecoration: 'none', cursor: 'pointer' }}>
    attaullah94@gmail.com
  </a>
  </a> &nbsp;&nbsp;|</div>
          <div style={{display:"flex"}}><i className="fa fa-phone"></i> <p><a href="tel:0596957440" className="text-blue-600 underline">
    0596957440
  </a> ,</p>
              <p><a href="tel:0596957440" className="text-blue-600 underline">
    0505215846
  </a> </p> &nbsp;&nbsp;|</div>
          <div><i className="fa fa-marker"></i> 31 New Street, Al-riyadh, Saudi Arabia &nbsp;&nbsp;|</div>
        </div>
        <div>
          <div>
            <i style={{ color: "#FFB703" }} className="fa fa-clock"></i> Mon-Fri: 9.00 am - 7.00 pm &nbsp;&nbsp;|
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-pinterest"></i>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className={`${styles.headerTwo} ${sticky}`}>
        <div>
          <Link href={`/`}>
            <Image
              src={logo}
              objectFit="cover"
              alt="Logo"
              layout="fill"
              quality={100}
              priority
            />
          </Link>
        </div>

        <div className={styles.links}>
           <ul>
              <li><Link href="/#services">خدماتنا</Link></li>
              <li><Link href="/contact">تواصل معنا</Link></li>
              <li><Link href="/#about">من نحن</Link></li>
              <li><Link href="/">الصفحة الرئيسية</Link></li>
            </ul>
        </div>

        <div className={styles.search}>
          {/* <div><i className="fa-solid fa-magnifying-glass"></i></div> */}
          <div className="lets-talk">دعنا نتحدث</div>
        </div>

        {/* Hamburger Icon */}
        <div className={styles.bars} onClick={show}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* Mobile Drawer Sidebar */}
      {sidebar && (
        <div className={styles.sidebar}>
          <div ref={sideContent} className={styles.sidecontent}>
            <div className={styles.close} onClick={hide}>&times;</div>
            <ul>              
              <li><Link href="/#services">خدماتنا</Link></li>
              <li><Link href="/contact">تواصل معنا</Link></li>
              <li><Link href="/#about">من نحن</Link></li>
              <li><Link href="/">الصفحة الرئيسية</Link></li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
