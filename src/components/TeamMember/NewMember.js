import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router';
import Form from './Form';

class NewMember extends Component{
    constructor(props){
        super(props)
        this.state = {
            firstName: '',
            lastName: '',
            title: '',
            story: '',
            favoriteColor: '',
            photoUrl: '',
            submitted: false,
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    sendData = async () => {
        await axios({
          method: 'post',
          url: '/add',
          data: this.state
        })
    }

    getData = async () => {
        const response = await axios.get('/team')
        const data = response.data.slice(-1)
        console.log(data)
        let value = data.map((d, i) => {
            return data[d]
        })
        this.setState({
            value,
            submitted: true
        })
    }

    handleSubmit = (e) => {
      e.preventDefault();
      this.sendData()
      this.getData()
    }

    render(){
        const { submitted } = this.state;

        if(submitted){
           return <Redirect to='/' />
        }
        return(
            <Form 
             onChange={this.handleChange}
             onSubmit={this.handleSubmit}
            />
        )
    }
}

export default NewMember