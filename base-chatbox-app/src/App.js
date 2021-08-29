import React, { Component, createRef } from 'react'
import './App.css'
import './animation.css'
import Formulaire from './components/Formulaire'
import Message from './components/Message'
import axios from 'axios'

// Animation
import {
  CSSTransition,
  TransitionGroup
} from 'react-transition-group'

class App extends Component {

  state = {
    messages: {},
    pseudo: this.props.match.params.pseudo 
  }

  messagesRef = createRef()

  componentDidMount () {
    axios.get("http://localhost:5000/messages/all").then(res => {
      console.log(res)
      this.setState({
        messages: res.data
      });
    });
  }

  componentDidUpdate() {
    const ref = this.messagesRef.current
    ref.scrollTop = ref.scrollHeight
  }

  addMessage = message => {
    const messages = { ...this.state.messages}
    messages[`message-${Date.now()}`] = message
    axios.put("http://localhost:5000/messages", message).then(res => {
      console.log(res)
      this.setState({ messages })
      console.log('state after PUT:')
      console.log(this.state.messages)
    }).then(
      Object
        .keys(messages)
        .slice(0, -10)
        .forEach(key => {
          axios.delete(`http://localhost:5000/messages/${messages[key]._id}`).then(res => {
            console.log(res)
            console.log('state after DELETE :')
            console.log(this.state.messages)
          })
        }))
  }

  isUser = pseudo => pseudo === this.state.pseudo

  render () {

    const messages = Object
      .keys(this.state.messages)
      .map(key => (
        <CSSTransition
          timeout={200}
          classNames='fade'
          key={key}>
          <Message
            isUser={this.isUser}
            message={this.state.messages[key].message}
            pseudo={this.state.messages[key].pseudo}>
          </Message>
        </CSSTransition>
      ))

    console.log(messages)  
    return (
      <div className='box'>
        <div>
          <div className='messages' ref={this.messagesRef}>
            <TransitionGroup className="message">
              { messages }
            </TransitionGroup>
          </div>
        </div>
        <Formulaire
          length={150}
          pseudo={this.state.pseudo}
          addMessage={this.addMessage} />
      </div>
    )
  }
}

export default App
