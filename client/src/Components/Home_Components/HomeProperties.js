import styles from './HomeProperties.module.scss'
import PropertiesBlock from './PropertiesBlock';

const HomeProperties = () => {
    return ( 
        <section className={ styles.home_properties_container }>
            <h2>
                Move to what moves you
            </h2>
            <p>
                Check out our latest property listings 
            </p>
            <div className={ styles.properties_block_container }>
                <PropertiesBlock propertyname="Testing" propertyprice="Pricing" />
            </div>
        </section>
     );
}
 
export default HomeProperties;