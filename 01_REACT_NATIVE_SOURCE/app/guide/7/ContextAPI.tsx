import Input from "@/components/guide/7/Input"
import User from "@/components/guide/7/User"
import { UserProvider } from "@/contexts/7/User"
import styled from "styled-components/native"

const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
  justify-content: center;
  align-items: center;
`

const ContextAPI = () => {
  return (
    <UserProvider>
       <Container>
         <User />
         <Input />
       </Container>
    </UserProvider>
    // <UserContext.Provider value={{ name: 'provider value'}}>
    //   <Container>
    //     <User />
    //   </Container>
    // </UserContext.Provider>
  )
}

export default ContextAPI