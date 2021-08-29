import React, { Fragment } from 'react'

const MembreBis = (props) => {
    const name = props.nom;
    // props = parameters

    

    return (
        <Fragment>
            <h2>Membre de ma famille : {name.toUpperCase()} </h2>
            <h2>Membre de ma famille : {name} </h2>
        </Fragment>

    )
}

export default MembreBis