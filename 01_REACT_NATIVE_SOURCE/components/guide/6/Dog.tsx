import { useFetch } from "@/hooks/6/useFetch";
import styled from "styled-components/native";


const StyledImage = styled.Image`
  background-color: #7f8c8d;
  width: 300px;
  height: 300px;
`

const ErrorMessage = styled.Text`
  font-size: 18px;
  color: #e74c3c;
`

const LoadingMessage = styled.Text`
  font-size: 18px;
  color: #2ecc71;
`

const URL = 'https://dog.ceo/api/breeds/image/random'

const Dog = () => {
  const { data, error, inProgress } = useFetch(URL)
  return (
    <>
      { inProgress && (<LoadingMessage>The API request is in progress</LoadingMessage>)}
      <StyledImage source={data?.message} />
      <ErrorMessage>{error?.message}</ErrorMessage>
    </>
  )
}

export default Dog