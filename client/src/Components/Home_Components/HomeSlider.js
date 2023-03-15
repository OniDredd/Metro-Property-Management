import { useState } from "react";
import styles from './HomeSlider.module.scss'
import { BsFillArrowLeftSquareFill, BsFillArrowRightSquareFill } from 'react-icons/bs'

const HomeSlider = () => {

    const [ currentSlide, setCurrentSlide ] = useState()


    const  { Testimonial } = props => {
        return(
            <div className={ styles.testimonial_container }>
                <h2>{ props.name }</h2>
                <p>{ props.description }</p>
            </div>
        )
    }
    return ( 
        <section className={ styles.slider_container }>
            <BsFillArrowLeftSquareFill className={ styles.sliderarrow } /* onClick={ } *//>
            <h1>Testimonial</h1>
            <BsFillArrowRightSquareFill className={ styles.sliderarrow } /* onClick={} *//>
        </section>
     );
}
 
export default HomeSlider;