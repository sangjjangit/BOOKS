import { TouchableOpacity } from "react-native"
import styled from "styled-components/native"

const Icon = styled.Image`
  tint-color: ${({theme}) => theme.text};
  width: 30px;
  height: 30px;
  margin: 10px;
`
type IconButtonTypes = {
  type: string,
  onPressOut?: void,
}

const IconButton = ({type, id, onPressOut}: IconButtonTypes) => {
  const _onPressOut = () => {
    onPressOut(id)
  }
  return (
    <TouchableOpacity onPressOut={_onPressOut}>
      <Icon source={type} />
    </TouchableOpacity>
  )
}

export default IconButton