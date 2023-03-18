import styles from './HomeProperties.module.scss'
import PropertiesBlock from './PropertiesBlock';
import axios from 'axios'
import { useState, useEffect } from 'react'

const HomeProperties = () => {

    const [listings, setListings] = useState([])

    const fetchListings = async () => {
        try {
            const response = await axios.get('http://localhost:8000/Listings')
            console.log(response.data)
            setListings(response.data)
            console.log('listings in state.', listings)
        }
        catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchListings() // eslint-disable-next-line
    }, []); 

    return ( 
        <section className={ styles.home_properties_container }>
            <h2>
                Move to what moves you
            </h2>
            <p>
                Check out our latest property listings 
            </p>
            <div className={ styles.properties_block_container }>
                {listings.map(
                    listing => (
                    <PropertiesBlock
                        key={ listing.id }
                        image={ listing.image } 
                        propertyname={ listing.location } 
                        propertyprice={ listing.price } 
                        bedamount={ listing.bedcount }
                        showeramount={ listing.showercount }
                        garageamount={ listing.garagecount }
                    />
                ))}
            </div>
        </section>
     );
}
 
export default HomeProperties;