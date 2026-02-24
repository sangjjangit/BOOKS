import { Dimensions, useWindowDimensions } from "react-native";
import styled from "styled-components/native";

type WidthProps = {
    width?: string
}

type InputProps = {
  placeholder?: string,
  value: string,
  onChangeText: void,
  onSubmitEditing: void,
  onBlur: void,
}

const StyledInput = styled.TextInput.attrs(({theme}) => ({
    placeholderTextColor: theme.main,
}))<{$width: WidthProps}>`
  width: ${({$width}) => $width - 40}px;
  height: 60px;
  margin: 3px 0;
  padding: 15px 20px;
  border-radius: 10px;
  background-color: ${({theme}) => theme.itemBackground};
  font-size: 25px;
  color: ${({theme}) => theme.text};
`

const Input = ({placeholder, value, onChangeText, onSubmitEditing, onBlur}: InputProps) => {
  // const width = Dimensions.get('window').width
  const width = useWindowDimensions().width
  return (
    <StyledInput
      $width={width}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      onSubmitEditing={onSubmitEditing}
      onBlur={onBlur}
      maxLength={50}
      autoCapitalize="none"
      autoCorrect={false}
      returnKeyType="done"
      keyboardAppearance="dark"

    />
  )
}

// Input.propTypes = {
//   placeholder: PropTypes.string,
//   value: PropTypes.string.isRequired,
//   onChangeText: PropTypes.func.isRequired,
//   onSubmitEditing: PropTypes.func.isRequired,
// }

export default Input