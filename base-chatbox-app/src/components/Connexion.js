import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

class Connexion extends Component {

    state = {
        pseudo: '',
        goToChat: false
    }

    handleChange = event => {
        const pseudo = event.target.value
        this.setState({ pseudo })
    }

    handleSubmit = event => {
        event.preventDefault() //j'annule l'évenement par défaut quand on soumet le formulaire, et c'est moi qui le gère
        this.setState({ goToChat: true })
    }

    render () {

        if (this.state.goToChat) {
            // push sert à permettre de considèrer la page de redirection comme la page suivante, de sorte qu'on puisse revenir à la 
            // page précèdente avec un retour arrière
            return <Redirect push to={`/pseudo/${this.state.pseudo}`}/>
        }

        return (
            <div className='connexionBox'>
                <form className='connexion' onSubmit={this.handleSubmit}>
                    <input
                        value={this.state.pseudo}
                        onChange={this.handleChange} 
                        placeholder='Pseudo'
                        type="text"
                        required />
                    <button type='submit'>Go</button>
                </form>
            </div>
        )
    }
}

export default Connexion