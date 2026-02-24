import { theme } from "@/constants/9/theme"
import { forwardRef, useState } from "react"
import styled from "styled-components/native"

const Container = styled.TouchableOpacity`
  background-color: ${({theme, isFilled}:any) => isFilled ? theme.buttonBackground : 'transparent'};
  align-items: center;
  border-radius: 4px;
  width: 100%;
  padding: 10px;
`

const Title = styled.Text`
  height: 30px;
  line-height: 30px;
  font-size: 16px;
  color: ${({theme, isFilled=false}:any) => (isFilled ? theme.buttonTitle : theme.buttonUnfilledTitle)};
`

const Button = ({
  containerStyle,
  title,
  onPress,
  isFilled,
  disabled,
  }:any) => {
  return (
    <Container style={containerStyle} onPress={onPress}
      isFilled={isFilled}
      disabled={disabled}
    >
      <Title isFilled={isFilled}>{title}</Title>
    </Container>
  )
}

export default Button