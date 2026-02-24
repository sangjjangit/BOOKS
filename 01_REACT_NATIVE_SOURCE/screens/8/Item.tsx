import { MaterialCommunityIcons } from "@expo/vector-icons"
import { useLayoutEffect } from "react"
import styled from "styled-components/native"

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

const StyledText = styled.Text`
  font-size: 30px;
  margin-bottom: 10px;
`

const Item = ({ navigation, route }: any) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackButtonDisplayMode: 'default',
      headerTintColor: '#ffffff',
      headerLeft: ({ onPress, tintColor }) => {
        return (
          <MaterialCommunityIcons
            name="keyboard-backspace"
            size={30}
            style={{ marginLeft: 11 }}
            color={tintColor}
            onPress={onPress}
          />
        )
      },
      headerRight: ({ tintColor }) => {
        return (
          <MaterialCommunityIcons
            name="home-variant"
            size={30}
            style={{ marginLeft: 11 }}
            color={tintColor}
            onPress={() => navigation.popToTop()}
          />
        )
      },
    })
  }, [])
  return (
    <Container>
      <StyledText>Item</StyledText>
      <StyledText>id: {route.params._id}</StyledText>
      <StyledText>name: {route.params.name}</StyledText>
    </Container>
  )
}

export default Item