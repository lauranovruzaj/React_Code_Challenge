import React from "react";

const PageContent = (props) => {

    const deleteFact = () => {
        props.deleteFact(props.index);
    }

    return (

        <li key={props.index}>{props.fact} <button onClick={deleteFact}>X</button></li>
    )

}

export default PageContent;