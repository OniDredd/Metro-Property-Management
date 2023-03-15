import styles from './PropertiesBlock.module.scss'
import bedicon from '../../Assets/bedsmallicon.svg'
import showericon from '../../Assets/showersmallicon.svg'
import garageicon from '../../Assets/garagesmallicon.svg'

const AmountBlock = props => {
    return(
        <div className={ styles.amount_block }>
            <img src={ props.icon } alt="" />
            <p>{ props.amount }</p>
        </div>
    )
}

const PropertiesBlock = props => {
    return ( 
        <div className={ styles.properties_block }>
            <img className={ styles.property_image } src={ props.image } alt="" />
            <div className={ styles.property_toptext }>
                <p className={ styles.text }>{ props.propertyname }</p>
                <p className={ styles.pricing }>{ props.propertyprice }</p>
            </div>
            <div className={ styles.property_amount_container }>
                <AmountBlock icon={ bedicon } amount={ /* props.amount */ 1 } />
                <AmountBlock icon={ showericon } amount={ /* props.amount */ 1  } />
                <AmountBlock icon={ garageicon } amount={ /* props.amount */ 1 } />          
            </div>
            <button>View Listing</button>
        </div>
     );
}
 
export default PropertiesBlock;