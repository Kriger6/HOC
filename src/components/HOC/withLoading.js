import React from 'react'
import {useState} from 'react'

const withLoading = (WrappedComponent) => {
    
    const Withloading = (props) => {
        const [state, setState] = useState(null)
        setTimeout(() => setState(true), 3000)

        if(state === null) {
            return <h1>Loading</h1>
        } else {
            return <WrappedComponent {...props}/> 
        }
    }

    return Withloading
}


export default withLoading