import Input from '@/components/guide/4/StyledInput'
import StyledButton from '@/components/guide/4/StyledButton'
import { Button, Switch } from 'react-native'
import styled, { css, ThemeProvider } from 'styled-components/native'
import { darkTheme, lightTheme, theme } from '@/constants/theme'
import { useState } from 'react'

const MyTextComponent = styled.Text`
  color: #fff;
`
const whiteText = css`
  color: #fff;
  font-size: 14px;
`

const MyBoldTextComponent = styled.Text`
  ${whiteText}
  font-weight: 600;
`

const MyLightTextComponent = styled.Text`
  ${whiteText}
  font-weight: 200;
`

const StyledText = styled.Text`
  color: #000;
  font-size: 20px;
  margin: 10px;
  padding: 10px;
`

const ErrorText = styled(StyledText)`
  font-weight: 600;
  color: red;
`

const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.background};
  align-items: center;
  justify-content: center;
`

const StyledComponents = () => {
  const [isDark, setIsDark] = useState(false)
  const _toggleSwitch = () => setIsDark(!isDark)

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <Container>
        <StyledButton title="styledButton" />
        <StyledButton title="Hanbit" />
        <Button title="react button" />
        <Input />
        <Input borderColor='#9b59b6' />
        <Switch value={isDark} onValueChange={_toggleSwitch} />
      </Container>
    </ThemeProvider>
  )
}

export default StyledComponents