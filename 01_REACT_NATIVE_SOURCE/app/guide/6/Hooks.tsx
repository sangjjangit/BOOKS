import Counter from "@/components/guide/6/Counter"
import Dog from "@/components/guide/6/Dog"
import Form from "@/components/guide/6/Form"
import Length from "@/components/guide/6/Length"
import styled from "styled-components/native"

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  justify-content: center;
  align-items: center;
`

const Hooks = () => {
  return (
    <Container>
      <Counter />
      <Form />
      <Length />
      <Dog />
    </Container>
  )
}

export default Hooks