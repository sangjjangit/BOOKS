import { Button } from "react-native"
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

const items = [
  { _id: 1, name: 'react native' },
  { _id: 2, name: 'react navigation' },
  { _id: 3, name: 'react' },
]

const List = ({ navigation }: any) => {
  const _onPress = (item:any) => {
    navigation.navigate('Detail', { _id: item._id, name: item.name })
  }
  return (
    <Container>
      <StyledText>List</StyledText>
      {items.map(item => (
        <Button
          key={item._id}
          title={item.name}
          onPress={() => _onPress(item)}
        />
      ))}
    </Container>
  )
}

export default List