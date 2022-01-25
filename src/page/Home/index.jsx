import { useState, useEffect, useRef, useMemo } from "react";
import RenderBannerHome from "../../components/HomeBanner";
import { Container } from "./style";
import gabrielImg from "../../images/gabriel_image.jpg";
import pcCodeImg from "../../images/pc_code.jpg";

function RenderHomePage() {
  const targetRef = useRef(null);
  const targetRef2 = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const options = useMemo(() => {
    return {
      root: null,
      rootMargin: "0px",
      threshold: 0.3,
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle("show", entry.isIntersecting);
      });

      setIsVisible(entries.isIntersection);
    }, options);
    const currentTarget = targetRef.current;
    const currentTarget2 = targetRef2.current;

    if (currentTarget) {
      observer.observe(currentTarget);
      observer.observe(currentTarget2);
    }

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget);
        observer.unobserve(currentTarget2);
      }
    };
  }, [targetRef, options]);

  return (
    <Container>
      <RenderBannerHome />
      <section ref={targetRef2}>
        <div>
          <h2>About the Project</h2>
          <p>
            Algo Education is an educational program that allows developers to
            learn visually and with simple and clear explanations some of the
            algorithms that exist in the programming world.
          </p>
        </div>
        <div>
          <img src={pcCodeImg} alt="code" />
        </div>
      </section>

      <section ref={targetRef}>
        <div>
          <img src={gabrielImg} alt="author" />
        </div>
        <div>
          <h2 className="about_author">About the Author</h2>
          <p>
            I'm a front-end developer with experience in: HTML, CSS, JavaScript,
            Node.JS, MYSQL, MongoDB, GraphQL, React, Next.js and Azure. I
            co-founded my first company when I was 18 years. During my
            participation as a co-founder, I worked as a head of marketing,
            financial manager, and managing a team of 5 people where we
            delivered: sales funnels, launches, landing pages, and platforms
            with investment content and achieved more than $250k in revenue.
          </p>
        </div>
      </section>
    </Container>
  );
}

export default RenderHomePage;
