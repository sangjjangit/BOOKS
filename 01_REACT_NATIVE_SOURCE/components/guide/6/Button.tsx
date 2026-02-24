import styled from "styled-components/native"

const Container = styled.TouchableOpacity`
  background-color: #3498db;
  border-radius: 15px;
  pedding: 15px 30px;
  margin: 10px 0px;
  justify-content: center;
`
const Title = styled.Text`
  font-size: 24px;
  font-weight: 600;
  color: #ffffff;
`

type ButtonTypes = {
  title: string,
  onPress: void,
}

const Button = ({title, onPress}:ButtonTypes) => {
  return (
    <Container onPress={onPress}>
      <Title>{title}</Title>
    </Container>
  )
}

export default Button