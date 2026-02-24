import { useMemo, useState } from "react"
import styled from "styled-components/native"
import Button from "./Button"

const StyledText = styled.Text`
  font-size: 24px;
`

const getLength = (text) => {
  console.log(`text: ${text}`)
  return text.length
}

const list = ['typescript','expo','react','react native']
let idx = 0

const Length = () => {
  const [text, setText] = useState(list[0])
  // const [length, setLength] = useState(list[0].length)

  const _onPress = () => {
    ++idx
    if(idx >= list.length) idx = 0

    setText(list[idx])
    // setLength(getLength(list[idx]))
  }
  const length = useMemo(() => getLength(text), [text])

  return (
    <>
      <StyledText>Text: {text}</StyledText>
      <StyledText>length: {length}</StyledText>
      <Button title="Get Length" onPress={_onPress} />
    </>
  )
}

export default Length