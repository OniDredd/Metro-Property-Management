import styles from './HomeIntro.module.scss'
import logo1 from '../../Assets/westpaclogo.svg'
import logo2 from '../../Assets/northhamptonlogo.svg'
import houseicon from '../../Assets/houseicon.svg'
import housesicon from '../../Assets/housesicon.svg'
import wrenchicon from '../../Assets/wrenchicon.svg'
import awardicon from '../../Assets/awardicon.svg'

const HomeIntro = () => {

    const WhatWeDoBlock = props => {
        return(
            <div className={ styles.whatwedo_block }>
                <img className={ styles.whatwedo_icon } src={ props.image } alt=""/>
                <p>{ props.name }</p>
                <button>{ props.buttonword }</button>
            </div>
        )
    }

    return ( 
        <section className={ styles.home_intro_container }>
            <div className={ styles.intro_top_container }>
                <h2>
                    We are Auckland's top property 
                    <br/>
                    management company.
                </h2>
                <img src={ logo1 } alt="" />
                <img src={ logo2 } alt="" />
            </div>
            <div className={ styles.intro_bottom_container }>
                <div className={ styles.intro_whatwedo_container }>
                    <div className={ styles.whatwedo_left_content }>                    
                        <h2>
                            What we do 
                        </h2>
                        <p>
                            Metro NZ is one of the top Auckland Property Management companies. 
                            All of our staff are property investors who have expert knowledge of the property 
                            market and your best interest in mind at all times. Check out our tailored services 
                            we offer as an Auckland property management company.
                        </p>
                    </div>
                    <div className={ styles.whatwedo_right_content }>
                        <button type="">Contact Us</button>
                    </div>
                </div>
                <div className={ styles.whatwedo_block_container }>
                    <WhatWeDoBlock image={houseicon} name="Property appraisal" buttonword="Arrange Appraisal" />
                    <WhatWeDoBlock image={housesicon} name="Property listings" buttonword="See Listings" />
                    <WhatWeDoBlock image={wrenchicon} name="Tailored Services" buttonword="Read More" />
                    <WhatWeDoBlock image={awardicon} name="Switch to Us" buttonword="Find out why" />
                </div>
            </div>
        </section>
     );
}
 
export default HomeIntro;