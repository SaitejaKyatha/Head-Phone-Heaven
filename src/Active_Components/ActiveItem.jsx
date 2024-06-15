import React,{useState} from 'react'

function ActiveItem(initialactive) {
    const [active, setactive] = useState(initialactive)

    const handleactive = (i) =>{
        setactive(i)
    }

    const activeclass  = (i) => {
        return active === i ? 'active' : "";

    }

    return (
        {active, handleactive, activeclass}
    )
}

export default ActiveItem
