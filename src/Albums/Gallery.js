import { useState, useEffect } from 'react';
import axios from "axios";
const baseURL = "https://jsonplaceholder.typicode.com/photos";

const Gallery = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get(baseURL).then((response) => {
            setData(response.data);
        });
    }, []);

    return <>
        <div className='container'>
            <div className='row'>
                {
                    data.map((item, index) => {
                        return (
                            <div className='col-4 mt-2 p-2 ' key={index}>
                                <div className="card" style={{ width: '22rem' }}>
                                    <img className="card-img-top" src={item.url} style={{height: '150px'}} alt="Card image cap" />
                                    <div className="card-body">
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </>
}

export default Gallery;