import styles from './ImageUploader.module.scss'
import { useState } from 'react';
import axios from 'axios';

const ImageUploader = () => {

    const [image, setImage] = useState("");

    const coverToBase64 = (e) => {
        console.log(e)
        const reader = new FileReader()
        reader.readAsDataURL(e.target.files[0])
        reader.onload = () => {
            console.log(reader.result) //base64encoded string
            setImage(reader.result)
        }
        reader.onerror = error => {
            console.log("Error: ", error)
        }
    }

    // const uploadImage = () => {
    //     fetch('http://localhost:8000/Listings/upload-image', {
    //     method: 'POST',
    //     crossdomain: true,
    //     headers: {
    //         'Content-Type': 'application/json',
    //         Accept: 'application/json',
    //         'Access-Control-Allow-Origin': '*',
    //     },
    //     body: JSON.stringify({
    //         base64: image
    //     })
    //     }).then((res) => res.json()).then((data) => console.log(data))
    // }

    const uploadImage = async () => {
        try {
          const response = await axios.post('http://localhost:8000/Listings/upload-image', {
            base64: image
          }, {
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json',
              'Access-Control-Allow-Origin': '*'
            }
          });
          console.log(response.data);
        } catch (error) {
          console.error(error);
        }
      }
    
    return ( 
        <div className={ styles.uploadcontainer }>
            <div>
                <input accept="image/*" type="file" onChange={coverToBase64}/>
            </div>
            { image===""|| image===null?"": <img width={100} height={100} src={ image } alt="" /> }
        <button onClick={uploadImage}>Upload</button>
        </div>
     );
}
 
export default ImageUploader;