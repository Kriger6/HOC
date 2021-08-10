import React from 'react'
import {useState} from 'react'

const withLoading = (WrappedComponent) => {
    
    const Withloading = (props) => {
        const [state, setState] = useState(null)
        setTimeout(() => setState(true), 1000)

        if(state === null) {
            return (
            <div className="loading">
                <div>
                    <h1>Loading</h1>
                </div>
            </div>
            )
        } else {
            return <WrappedComponent {...props}/> 
        }
    }

    return Withloading
}


export default withLoading