import React, { Component } from 'react'
import { Button, Header, Image, Modal, Form, Checkbox } from 'semantic-ui-react'
import './login.css'
import image from './upachar_login.png';

const inlinesLoginModal = {
  loginButtonMargin:{
    margin:'10px'
  }
}

class Login extends Component {

    state = {
      passwordVisiblity:'password',
      open: true,
      emailOrMobile:'',
      password:''
    }

    close = () => this.props.history.push('/')

    handleInputChange = (e) => {
      this.setState({[e.target.id]:e.target.value})
      console.log(e.target.id,e.target.value )
    }

    handlepasswordVisiblity = () => this.setState( ({passwordVisiblity}) => ({
      passwordVisiblity: passwordVisiblity === 'text' ? 'password' : 'text'
    }))

    handlLoginFormSumbit = (event) =>{
      event.preventDefault()
      console.log(this.state)
    }
    render() {
        return (
            <Modal open={this.state.open} dimmer='blurring' centered={false}
            onClose={this.close}>
              <Modal.Content image>
                <Image size='medium' src={image} className='hide-on-small-and-down' />
                <div className='siginForm row'>
                  <form onSubmit={this.handlLoginFormSumbit} className='col s12'>
                    <h2>Login to your account</h2>
                    <div className="input-field col s8">
                        <label htmlFor="emailOrMobile">Email/Mobile</label>
                        <input type="text" name="emailOrMobile" onChange={this.handleInputChange} id="emailOrMobile"/>
                    </div> 
                    <div className="input-field col s8">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" onChange={this.handleInputChange}/>
                    </div> 
                    <div className="input-field col s8 center">
                      <button className='btn' style={inlinesLoginModal.loginButtonMargin} type="submit">Login</button>
                      <button className='btn' style={inlinesLoginModal.loginButtonMargin} type="submit">Signup</button>
                    </div>
                </form>
                </div>
              </Modal.Content>
            </Modal>
          )
    }
}

export default Login