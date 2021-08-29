import React, { Fragment } from 'react'

const Membre = ({nom, age, children, hideName, handleChange}) => {
    const name = nom;
    // children fait référence au contenu fils de la balise Membre 

    // state : stockage de statut associé à un component qui se partager à d'autres component

    return (
        <Fragment>
            <h2 style={{
                backgroundColor: age < 12 ? 'orange' : 'purple',
                color: age < 12 ? 'black' : 'white'}}>
                Membre de ma famille : {name.toUpperCase()} : {age} </h2>
            <h2>Membre de ma famille : {name} </h2>
            <input value={nom} onChange={handleChange}type='text'/>
            <button onClick={ hideName }>X</button>
            { children ? <p>{children}</p> : <Fragment />}
            
        </Fragment>
    )
}    

export default Membre
