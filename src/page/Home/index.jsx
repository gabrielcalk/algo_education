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
      threshold: 0.4,
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
            Achiever, relator, analytical, and highly focused on achieving
            extraordinary results through communications and hard work.
          </p>
          
          <p>
            At age 18, he co-founded a company where he worked in team
            management and found deep satisfaction in working with friends to
            achieve goals. During his participation as a manager, he generated
            with his team more than US$ 250,000 in revenue through digital
            launches, sales funnels, sales pages, and sales campaigns.
          </p>

          <p>
            Currently pursuing a software engineering career and focusing on
            Next.js, Machine learning, and security market certifications.
            Gabriel can stay focused on the project, take direction, move
            forward, and make the necessary corrections to stay on track.
          </p>
        </div>
      </section>
    </Container>
  );
}

export default RenderHomePage;
