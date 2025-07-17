import { useEffect } from "react"

const withLogging = (WrappedComponent) =>{
    const ComponentWithLogging = (props) => {

        useEffect(()=>{
            console.log(`${WrappedComponent.name} se montó! 🥳`)
        },[])

        return <WrappedComponent {...props}/>
    }

    return ComponentWithLogging
}

export default withLogging