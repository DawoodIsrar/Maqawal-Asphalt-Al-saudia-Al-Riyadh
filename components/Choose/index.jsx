import styles from "./index.module.css";
import { useInView } from "react-intersection-observer";
import { useEffect, useRef, useState } from "react";

const Choose = () => {
  const { ref, inView } = useInView();
  const [wif,setWif] = useState(0)
  const interval = useRef()
  useEffect(()=> {
    if (wif === 95) {
      clearInterval(interval.current)
      interval.current = null
    }
  },[wif])
  const test = useRef(null);
  const changeWidth = amount => {
    test.current.style.width = `${amount}%`
  }
  useEffect(() => {
    const width = test.current;
    
    if (inView) {
      const time = setTimeout(() => {
        changeWidth(95)
        interval.current = setInterval(() => {
          setWif(x=> x+5)
        }, 80);
      }, 900);
      return ()=> clearTimeout(time)
    }

    if (!inView) {
      width.style.width = '0%'
      clearInterval(interval.current)
      interval.current = null
      setWif(0)
    }
  }, [inView]);
  return (
    <div className={styles.choose}>
      <div>
        <div></div>
      </div>
      <div>
        <span>لماذا تختارنا؟</span>
        <h2>{`لماذا يجب أن تختار منصة "مقاول الأسفلت السعودية الرياض"؟
`}</h2>
        <div>
          <p>
{`

نحن نُقدم حلول مقاولات شاملة تعتمد على الجودة، السلامة، والاستدامة — مدعومة بخبرة طويلة في تنفيذ مشاريع البناء والبنية التحتية في المملكة.`}
          </p>
        </div>
        <div className={styles.why}>
          <div>
            <span>1</span>
            <span>أفضل معايير الاستدامة</span>
          </div>
          <div>
            <span>2</span>
            <span>السلامة والصحة أولويتنا</span>
          </div>
          <div>
            <span>3</span>
            <span>أساليب حديثة في البناء</span>
          </div>
          <div ref={ref}>
            <span>4</span>
            <span>مهندسون معتمدون</span>
          </div>
        </div>
        <div className={styles.skill}>
          <div>المهارة في العمل</div>
          <div>
            <div ref={test}>
              <div>{wif}%</div>
            </div>
          </div>
        </div>
        <div className={styles.rating}>
          <div>تقييم العملاء</div>
          <div>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;
