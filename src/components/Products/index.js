import React from 'react'
import {useEffect, useState} from 'react'
import axios from 'axios'


const url = 'https://the-mobile-store.herokuapp.com/api/phones/'

export default function Products() {
    const [dataRes, setData] = useState(null)


    useEffect(() => {
        axios.get(url).then(response => { setData(response.data) })
    }, [])
    
    

    return (
        <div>
            <h1>Products</h1>
            {dataRes != null && <h2>{dataRes[0].model}</h2>}
        </div>
    )
}
