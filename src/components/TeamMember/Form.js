import React, { Component } from 'react'
import { FormContainer, Input, FormHeading, FormValues, SubmitButton, GlobalStyle } from '../styled-components';

const Form = (props) => {
    const { onChange, onSubmit } = props;
    return (
            <FormContainer onSubmit={onSubmit} >
                 <GlobalStyle />
                 <FormHeading >
                     Hello! 👋 <br/> join the team 
                </FormHeading>     
                <FormValues>
                      First Name  <Input id="firstName" onChange={onChange}/> 
                </FormValues>
                <FormValues>
                      Last Name  <Input id="lastName"  onChange={onChange}/> 
                </FormValues>
                <FormValues>
                      Title  <Input id="title"  onChange={onChange} /> 
                </FormValues>
                <FormValues>
                      Story  <Input id="story"  onChange={onChange}/> 
                </FormValues>
                <FormValues>
                      Favorite color  <Input id="favoriteColor"  onChange={onChange}/> 
                </FormValues>
                <FormValues>
                      Photo url  <Input id="photoUrl"  onChange={onChange}/> 
                </FormValues><br/>
                <SubmitButton>Submit</SubmitButton>
            </FormContainer>
    )
}

export default Form;