import UserContext, { UserConsumer } from "@/contexts/7/User"
import { useContext } from "react"
import styled from "styled-components/native"

const StyledText = styled.Text`
  font-size: 24px;
  margin: 10px;
`

const User = () => {
  const { user } = useContext(UserContext)
  return <StyledText>name: {user.name}</StyledText>
  // return (
  //   <UserConsumer>
  //     {({user}) => <StyledText>name: {user.name}</StyledText>}
  //   </UserConsumer>
  //   // <UserContext.Consumer>
  //   //   {value => <StyledText>name: {value.name}</StyledText>}
  //   // </UserContext.Consumer>
  // )
}

export default User