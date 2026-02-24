import Button from "@/components/guide/9/Button"
import Image from "@/components/guide/9/Image"
import Input from "@/components/guide/9/Input"
import { theme } from "@/constants/9/theme"
import { ProgressContext, UserContext } from "@/contexts/9"
import { removeWhitespace, vaildateEmail } from "@/utils/common"
import { login } from "@/utils/firebase"
import { images } from "@/utils/images"
import { useContext, useEffect, useRef, useState } from "react"
import { Alert, Text } from "react-native"
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useSafeAreaInsets } from "react-native-safe-area-context"
import styled from "styled-components/native"

const Container = styled.View`
  flex: 1;
  background-color: ${ theme.background };
  justify-content: center;
  align-items: center;
  padding: 40px 20px;
  padding-top: ${({ insets: {top}}) => top}px;
  padding-bottom: ${({ insets: {bottom}}) => bottom}px;
`

const ErrorText = styled.Text`
  align-items: flex-start;
  width: 100%;
  height: 20px;
  margin-bottom: 10px;
  line-height: 20px;
  color: ${theme.errorText}
`

const Login = ({ navigation }: any) => {
  const { spinner } = useContext(ProgressContext)
  const { dispatch } = useContext(UserContext)

  const [email, setEmail] = useState('user@test.com')
  const [password, setPassword] = useState('1234567890')
  const passwordRef = useRef()

  const [errorMessage, setErrorMessage] = useState('')
  const [disabled, setDisabled] = useState(true)
  const insets = useSafeAreaInsets();

  useEffect(() => {
    setDisabled(!(email && password && !errorMessage))
  }, [email, password, errorMessage])

  const _handleEmailChange = (email:string) => {
    const changeEmail = removeWhitespace(email)
    setEmail(changeEmail)
    setErrorMessage(vaildateEmail(changeEmail) ? '' : 'Please verify your email')
  }

  const _handlePasswordChange = (password:string) => {
    setPassword(removeWhitespace(password))
  }

  const _handleLoginButtonPress = async () => {
    try {
      spinner.start()
      const user = await login({ email, password })
      console.log(user)
      dispatch(user)
      Alert.alert('Login success', `${user.email}`)
    } catch(e) {
      Alert.alert('Login Error', `${e}`)
      dispatch({})
    } finally {
      spinner.stop()
    }
  }

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{flex: 1}}
      extraScrollHeight={20}
    >
    {/* <TouchableWithoutFeedback onPress={Keyboard.dismiss}> */}
      <Container insets={insets}>
        <Text style={{fontSize: 30}}>Login Screen</Text>
        <Image url={images.logo} imageStyle={{ borderRadius: 8 }} />
        <Input label="Email"
          value={email}
          onChangeText={_handleEmailChange}
          onSubmitEditing={() => passwordRef.current.focus()}
          placeholder="Email"
          returnKeyType="next"
          onBlur={() => {}}
        />
        <Input label="Password"
          ref={passwordRef}
          value={password}
          onChangeText={_handlePasswordChange}
          onSubmitEditing={_handleLoginButtonPress}
          placeholder="Password"
          returnKeyType="done"
          onBlur={() => {}}
          isPassword
        />
        <ErrorText>{errorMessage}</ErrorText>
        <Button title="Login"
          onPress={_handleLoginButtonPress}
          disabled={disabled}
        />
        <Button title="Signup" onPress={() => navigation.navigate('Signup')} isFilled={false} />
      </Container>
    {/* </TouchableWithoutFeedback> */}
    </KeyboardAwareScrollView>
  )
}

export default Login