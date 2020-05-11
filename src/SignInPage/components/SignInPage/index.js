import React,{ Component } from 'react';
import {Wrapper, Input, Container, H2, SignInButton} from './styledComponents'
import {observer} from 'mobx-react';

@observer
class SignInPage extends Component{
    render(){
          const {                
          username,
          password,
          onChangeUserName,
          onChangePassword,
          onSubmit}=this.props;
        return <Wrapper>
            <Container >
            <H2>Sign in</H2>    
            <Input  onChange={onChangeUserName} type="text" placeholder='Username' value={username} ></Input>
            <Input onChange={onChangePassword} type="password" placeholder='Password' value={password}></Input>
            <SignInButton disabled={username===''||password===''} onClick={onSubmit} data-testid='sign-in-button' type="submit" value="Sign in"></SignInButton>
            </Container>
        </Wrapper>
    }
}

export {SignInPage}