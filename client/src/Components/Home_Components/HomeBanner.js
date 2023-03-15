import styles from './HomeBanner.module.scss'

const HomeBanner = () => {
    return (  
        <section className={ styles.home_banner_container}>
            <div className={ styles.banner_block }>
                <h1>
                    Your property journey
                    <br/>begins with us...
                </h1>
                <div className={ styles.banner_input }>
                   <p>Placeholder text</p>
                   <button>Search</button>
                </div>
            </div>
        </section>
    );
}
 
export default HomeBanner;