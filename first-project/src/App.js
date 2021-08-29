import './App.css';
import React, { Component, Fragment } from 'react';
import Membre from './components/Membre';
import MembreBis from './components/MembreBis';
import Button from './components/Button';
import { createPortal } from 'react-dom';

const famille = {
  membre1: {
    nom: 'Coco',
    age: 26
  },
  membre2: {
    nom: 'Cécile',
    age: 25
  },
  membre3: {
    nom: 'Samy',
    age: 10
  }
   
}

class App extends Component {
  state = {
    famille,
    isShow: false
  }

  handleClick = (num) => {
    const famille = { ...this.state.famille}
    famille.membre1.age += num 
    this.setState({famille})
  }

  handleChange = (event, id) => {
    const famille = { ...this.state.famille}
    const nom = event.target.value
    console.log(nom)
    famille[id].nom = nom
    this.setState({famille})
  }

  handleChangeAge = (event) => {
    const famille = { ...this.state.famille}
    const age = event.target.value
    console.log(age)
    famille.membre1.age = Number(age)
    this.setState({famille})
  }

  hideName = id => {
    const famille = { ...this.state.famille}
    famille[id].nom = 'X'
    this.setState({famille})
  }

  handleShowDescription = () => {
    const isShow = !this.state.isShow
    this.setState({isShow})
  }
  
  render () {
    const { titre } = this.props;
    const { famille, isShow } = this.state;

    // pour des conditions plus complexe
    let description = null
    if (isShow) {
      description = <strong>Je suis un chien</strong>
    }

    // pour créer un tableau de clé, map pour boucler sur les clés
    // "key" : Demander par React pour définir la clé unique de la liste
    const liste = Object.keys(famille)
      .map(membre => (
        <Membre
            key={membre}
            hideName={() => this.hideName(membre)}
            handleChange={event => this.handleChange(event, membre)}
            age={famille[membre].age} 
            nom={famille[membre].nom}/>
      ))
    console.log(liste)

    return (
      // JSX : HTML qui n'en ai pas
      // Fragment : pour encaspsuler sans mettre des div partout
      <Fragment>
        <div className="App">
          <h1>{titre}</h1>
          <input value={famille.membre1.age} onChange={this.handleChangeAge} type='text'/>
          { liste }
          
          {/*<Membre
            age={famille.membre3.age}  
            nom={famille.membre3.nom}>
            { description }
            <button onClick={this.handleShowDescription}>
              {
                isShow ? 'Cacher' : 'Montrer'
              } 
            </button>
            </Membre>*/}
          <Button 
            vieillir={() => this.handleClick(2)}/>    
        </div>
      </Fragment>
      // Transcription JS du JSX, après il est transformé en HTML
      //React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'ReactApp'))  
    )
  }
}

export default App;
