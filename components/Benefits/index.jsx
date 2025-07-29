import styles from "./index.module.css";
import { useRef } from "react";

const Benefits = () => {
  const container = useRef(null);
  const img = useRef(null);
  const accordion = (e) => {
    const height = e.target.nextSibling.nextSibling.style.maxHeight;
    const elemHeight = e.target.nextSibling.nextSibling.scrollHeight + 80;
    const children = container.current.children;

    for (const child of children) {
      child.children[2].style.maxHeight = "0";
      child.children[2].style.padding = "0 40px";
      child.children[2].style.maxHeight = "0";
      child.children[0].style.background = "black";
      child.children[0].style.color = "white";
      child.children[1].style.background = 'transparent'
    }

    e.target.style.background =
      height === "" || height === "0px" ? "#ffb703" : "black";
    e.target.style.color =
      height === "" || height === "0px" ? "black" : "white";
    e.target.children[0].children[0].className =
      height === "" || height === "0px" ? "fas fa-minus" : "fas fa-plus";
    e.target.children[0].style.color =
      height === "" || height === "0px" ? "black" : "#ffb703";
    e.target.nextSibling.nextSibling.style.padding =
      height === "" || height === "0px" ? "5px 40px" : "0 40px";
    e.target.nextSibling.style.background =
      height === "" || height === "0px" ? "#F1F1F1" : "transparent";
    e.target.nextSibling.nextSibling.style.maxHeight =
      height === "" || height === "0px" ? `${elemHeight}px` : "0";
    img.current.style.transform =
      height === "" || height === "0px" ? "scale(1.22)" : "none";
  };
  return (
    <div className={styles.benefits}>
      <div>
        <div className={styles.caption}>
          <span>فائدتك معنا</span>
          <h2>نبني مستقبلًا أفضل من خلال تركيز مستمر على الجودة والاحترافية في التنفيذ</h2>
          <div ref={container} className={styles.accordion}>
            <div className={styles.first}>
              <div onClick={e => accordion(e)}>
                <span><i className="fas fa-plus"></i></span> &nbsp;&nbsp;&nbsp; نحن عائلة عالمية تُقدّر التنوع
              </div>
              <div></div>
              <div>
                في شركتنا، نؤمن بأن تنوع الخبرات والثقافات يُعزز من جودة العمل ويُساهم في تقديم حلول مبتكرة لمشاريع المقاولات والأسفلت
نعمل مع فريق متعدد الجنسيات يتمتع بخلفيات مهنية متنوعة، مما يُمكننا من فهم احتياجات العملاء وتقديم خدمات تلبي أعلى المعايير العالمية والمحلية
              </div>
            </div>
            <div className={styles.first}>
              <div onClick={e => accordion(e)}>
              <span><i className="fas fa-plus"></i></span> &nbsp;&nbsp;&nbsp; نحن نمتلك ونُشكل مستقبلنا
              </div>
              <div></div>
              <div>
               نحن في شركة مقاولات الأسفلت والبناء نؤمن بأن المبادرة والقيادة هما مفتاح النجاح المستدام
من خلال التخطيط الاستراتيجي والتنفيذ المحترف، نصنع مستقبلنا بأيدينا ونُحقق النمو في قطاع المقاولات داخل الرياض وجميع أنحاء المملكة
              </div>
            </div>
            <div className={styles.first}>
              <div onClick={e => accordion(e)}>
              <span><i className="fas fa-plus"></i></span> &nbsp;&nbsp;&nbsp;  نُحقق نموًا مستدامًا
              </div>
              <div></div>
              <div>
                نلتزم في شركتنا بتحقيق نمو مستدام من خلال تنفيذ مشاريع بناء وأسفلت تعتمد على الجودة، الابتكار، والحلول طويلة الأمد
نُركز على التطوير المستمر في أعمال المقاولات بما يواكب رؤية المملكة 2030، مع الحفاظ على البيئة وتعزيز البنية التحتية في الرياض ومختلف مناطق السعودية
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div ref={img}></div>
      </div>
    </div>
  );
};

export default Benefits;
