import {useState, useEffect, useRef, useMemo} from 'react'
import RenderBannerHome from "../HomeBanner";
import { Container } from "./style";
import gabrielImg from '../../images/gabriel_image.jpg'
import pcCodeImg from '../../images/pc_code.jpg'

function RenderHomePage() {
    const targetRef = useRef(null)
    const targetRef2 = useRef(null)
    const [isVisible, setIsVisible] = useState(false);

    const options = useMemo(() => {
        return{
            root: null,
            rootMargin: '0px',
            threshold: 0.3
        }
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry =>{
                entry.target.classList.toggle("show", entry.isIntersecting)
            })

            setIsVisible(entries.isIntersection)

        }, options)
        const currentTarget = targetRef.current;
        const currentTarget2 = targetRef2.current;

        if(currentTarget) {
            observer.observe(currentTarget);
            observer.observe(currentTarget2);
        }

        return () =>{
            if(currentTarget) {
                observer.unobserve(currentTarget);
                observer.unobserve(currentTarget2);
            }
        }
    }, [targetRef, options]);


    return (
        <Container>
            <RenderBannerHome/>
            <section ref={targetRef2}>
                <div>
                    <h2>About the Project</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro optio, nulla a vero mollitia laudantium libero obcaecati fugit rerum odit sapiente suscipit dicta voluptas aut expedita. Optio eius quibusdam tenetur?</p>
                </div>
                <div>
                    <img src={pcCodeImg} alt="code"/>
                </div>
            </section>

            <section ref={targetRef}>
                <div>
                    <img src={gabrielImg} alt="author"/>
                </div>
                <div>
                    <h2>About the Author</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, porro ad fugiat doloribus minus sapiente et eos in vitae praesentium, pariatur facere. Qui harum ratione expedita cum et quod sint?</p>
                </div>
            </section>
        </Container>
    );
}

export default RenderHomePage;