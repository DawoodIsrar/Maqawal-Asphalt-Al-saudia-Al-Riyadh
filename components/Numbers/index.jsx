import { useEffect, useRef, useState } from "react";
import styles from "./index.module.css";
import { useInView } from "react-intersection-observer";

const Numbers = () => {
  const { ref, inView } = useInView();
  const [numbers, setNumbers] = useState({
    completed: 0,
    happy: 0,
    qualified: 0,
    years: 0,
  });

  const interval = useRef();
  const happyInterval = useRef();
  const qualInterval = useRef();
  const yearInterval = useRef();

  const runNumbers = () => {
    interval.current = setInterval(() => {
      setNumbers((x) => {
        const newNum = {
          ...x,
          completed: x.completed + 1,
        };
        return newNum;
      });
    }, 100);
    happyInterval.current = setInterval(() => {
      setNumbers((x) => {
        const newNum = {
          ...x,
          happy: x.happy + 1,
        };
        return newNum;
      });
    }, 200);

    qualInterval.current = setInterval(() => {
      setNumbers((x) => {
        const newNum = {
          ...x,
          qualified: x.qualified + 1,
        };
        return newNum;
      });
    }, 150);

    yearInterval.current = setInterval(() => {
      setNumbers((x) => {
        const newNum = {
          ...x,
          years: x.years + 1,
        };
        return newNum;
      });
    }, 700);
    
  };

  useEffect(() => {
    if (numbers.completed === 45) {
      clearInterval(interval.current);
      interval.current = null;
    }
    if (numbers.happy === 40) {
      clearInterval(happyInterval.current);
      happyInterval.current = null;
    }
    if (numbers.qualified === 33) {
      clearInterval(qualInterval.current);
      qualInterval.current = null;
    }
    if (numbers.years === 10) {
      clearInterval(yearInterval.current);
      yearInterval.current = null;
    }
  }, [numbers]);
  useEffect(() => {
    if (inView) {
      if (numbers.completed === 45) return
      runNumbers()
    }

    // if (!inView) {
    //   if (numbers.completed === 45) clearInterval(interval.current);
    // }

    return () => {
      clearInterval(interval.current);
      clearInterval(qualInterval.current);
      clearInterval(yearInterval.current);
      clearInterval(happyInterval.current);
      interval.current = null;
      qualInterval.current = null;
      yearInterval.current = null;
      happyInterval.current = null;
    };
  }, [inView]);

  return (
    <div className={styles.numbers}>
      <div ref={ref} className={styles.test}>

      </div>
      <div className={styles.grid}>
        <div>
          <span>الأرقام تتحدث</span>
          <h2>
           نحن في شركة مقاولات الأسفلت والبناء بالرياض<br/>
           نُحول رؤيتك إلى واقع ملموس <br/>
           خبرتنا، مشاريعنا، ورضا عملائنا دليل على التزامنا بالجودة
          </h2>
          <p></p>
          <button onClick={() => {
    const section = document.getElementById("home-contact");
    section?.scrollIntoView({ behavior: "smooth" });
  }} style={{cursor:"pointer"}}>اتصل الآن</button>
        </div>
        <div>
          <div>
            <span>{numbers.completed}+</span>
            <span>مشروعًا مكتملًا</span>
          </div>
          <div>
            <span>{numbers.happy}+</span>
            <span> عميلًا راضيًا</span>
          </div>
          <div>
            <span>{numbers.qualified}+</span>
            <span>مهندسًا مؤهلًا</span>
          </div>
          <div>
            <span>{numbers.years}+</span>
            <span>سنوات من الخبرة</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Numbers;
