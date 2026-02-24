import styled from "styled-components/native";

// const StyledInput = styled.TextInput`
//   width: 200px;
//   height: 60px;
//   margin: 5px;
//   padding: 10px;
//   border-radius: 10px;
//   border: 2px;
//   border-color: #3498db;
//   font-size: 24px;
// `

type StyledProps = { borderColor?: string }

const StyledInput = styled.TextInput.attrs((props: StyledProps) => ({
  placeholder: 'Enter a text...',
  placeholderTextColor: props.borderColor,
}))<StyledProps>`
  width: 200px;
  height: 60px;
  margin: 5px;
  padding: 10px;
  border-radius: 10px;
  border: 2px;
  border-color: #3498db;
  font-size: 24px;
`

const Input = ({ borderColor } : StyledProps) => {
  return <StyledInput borderColor={borderColor} />
}

export default Input