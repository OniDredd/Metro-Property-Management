import styles from './HomeSlider.module.scss'
import Slider from "react-slick";
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";

const HomeSlider = () => {


    const  Testimonials = [
        {
          id: 1,
          name: "Vanessa J.",
          text: "Everything was very smooth and efficient, which I really appreciated and I will be recommending them to others looking for a home."
        },
        {
          id: 2,
          name: "Vanessa J.",
          text: "Everything was very smooth and efficient, which I really appreciated and I will be recommending them to others looking for a home."
        },
        {
          id: 3,
          name: "Vanessa J.",
          text: "Everything was very smooth and efficient, which I really appreciated and I will be recommending them to others looking for a home."
        }
      ]

      const settings = {
        dots: false,
        arrows: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
    
    return ( 
        <section className={ styles.slider_container }>
            <Slider className={ styles.sliderbox }{...settings}>
                {Testimonials.map( item => (
                    <div key={item.id}>
                        <h3>{item.name}</h3>
                        <p>{item.text}</p>
                    </div>
            ))}
            </Slider>
        </section>
        )
}
 
export default HomeSlider;