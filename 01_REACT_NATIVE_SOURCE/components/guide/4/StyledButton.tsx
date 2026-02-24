import styled from "styled-components/native";

const ButtonContainer = styled.TouchableOpacity<{ $titleProps: titleProps }>`
  background-color: ${props => props.$titleProps === 'Hanbit' ? props.theme.purple : props.theme.blue };
  border-radius: 15px;
  padding: 15px 40px;
  margin: 10px 0px;
  justify-content: center;
`

const Title = styled.Text`
  font-size: 20px;
  font-weight: 600;
  color: #fff;
`
type StyledButtonProps = {
  title?: string,
}
type titleProps = 'Hanbit' | 'StyledButton'

const StyledButton = ({title = 'StyledButton'}: StyledButtonProps) => {
  return (
    <ButtonContainer $titleProps={title as titleProps}>
      <Title>{title}</Title>
    </ButtonContainer>
  )
}

export default StyledButton