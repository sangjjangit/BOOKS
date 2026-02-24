import {Image, Input, Button} from "@/components/guide/9/Index"
import { theme } from "@/constants/9/theme"
import { removeWhitespace, vaildateEmail } from "@/utils/common"
import { signup } from "@/utils/firebase"
import { images } from "@/utils/images"
import { useEffect, useRef, useState } from "react"
import { Alert, Text } from "react-native"
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view"
import styled from "styled-components/native"

const Container = styled.View`
  flex: 1;
  background-color: ${ theme.background };
  justify-content: center;
  align-items: center;
  padding: 0 20px;
`
const ErrorText = styled.Text`
  align-items: flex-start;
  width: 100%;
  height: 20px;
  margin-bottom: 10px;
  line-height: 20px;
  color: ${theme.errorText};
`

const Signup = ({ navigation }: any) => {
  const [photoUrl, setPhotoUrl] = useState(images.photo)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [disabled, setDisabled] = useState(true)

  const emailRef= useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const didMountRef = useRef();

  useEffect(() => {
    if(didMountRef.current) {
      let _errorMessage = '';
      if(!name) {
        _errorMessage = 'Please enter your name.'
      } else if (!vaildateEmail(email)) {
        _errorMessage = 'Please verify your email.'
      } else if (password.length < 6) {
        _errorMessage = 'The password must contain 6 characters at least.'
      } else if (password !== passwordConfirm) {
        _errorMessage = 'Passwords need to match.'
      }
      setErrorMessage(_errorMessage)
    } else {
      didMountRef.current = true
    }
  }, [name, email, password, passwordConfirm])

  useEffect(() => {
    setDisabled(!(name && email && password && passwordConfirm && !errorMessage))
  }, [name, email, password, passwordConfirm, errorMessage])

  const _headleSignupButtonPress = () => {
    try {
      const user = signup({email, password, name, photoUrl})
      Alert.alert('Signup Success', user.email)
    } catch(e) {
      Alert.alert('Signup Error', `${e}`)
    }
  }

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{ flex: 1}}
      extraScrollHeight={20}
    >
      <Container>
        <Text style={{fontSize: 30}}>Signup Screen</Text>
        <Image rounded url={photoUrl} showButton
          onChangeImage={url => setPhotoUrl(url)}
        />
        <Input
          label="Name"
          value={name}
          onChangeText={text => setName(text)}
          onSubmitEditing={() => {
            setName(name.trim())
            emailRef.current.focus();
          }}
          onBlur={() => setName(name.trim())}
          placeholder="Name"
          returnKeyType="next"
        />
        <Input
          ref={emailRef}
          label="Email"
          value={email}
          onChangeText={text => setEmail(removeWhitespace(text))}
          onSubmitEditing={() => {
            passwordRef.current.focus()
          }}
          onBlur={() => {}}
          placeholder="Email"
          returnKeyType="next"
        />
        <Input
          ref={passwordRef}
          label="Password"
          value={password}
          onChangeText={text => setPassword(removeWhitespace(text))}
          onSubmitEditing={() => {
            passwordConfirmRef.current.focus()
          }}
          onBlur={() => {}}
          placeholder="Password"
          returnKeyType="done"
          isPassword
        />
        <Input
          ref={passwordConfirmRef}
          label="Password Confirm"
          value={passwordConfirm}
          onChangeText={text => setPasswordConfirm(removeWhitespace(text))}
          onSubmitEditing={_headleSignupButtonPress}
          onBlur={() => {}}
          placeholder="Password"
          returnKeyType="done"
          isPassword
        />
        <ErrorText>{errorMessage}</ErrorText>
        <Button
          title="Signup"
          onPress={_headleSignupButtonPress}
          disabled={disabled}
        />
      </Container>
    </KeyboardAwareScrollView>
  )
}

export default Signup