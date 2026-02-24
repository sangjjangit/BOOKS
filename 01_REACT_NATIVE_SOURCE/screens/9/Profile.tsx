import Button from "@/components/guide/9/Button";
import Image from "@/components/guide/9/Image";
import Input from "@/components/guide/9/Input";
import { theme } from "@/constants/9/theme";
import { ProgressContext, UserContext } from "@/contexts/9";
import { getCurrentUser, logout, updateUserPhoto } from "@/utils/firebase";
import { useContext, useState } from "react";
import { Text } from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  background-color: ${theme.background};
  justify-content: center;
  align-items: center;
  padding: 0 20px;
`

const Profile = ({navigation}) => {
  const { dispatch } = useContext(UserContext)
  const { spinner } = useContext(ProgressContext)

  const user = getCurrentUser();
  const [photoUrl, setPhotoUrl] = useState(user.photoUrl)

  const _handleLogoutButtonPress = () => {
    try {
      spinner.start();
      logout()
    } catch(e) {
      console.log('logout:', e)
    } finally {
      dispatch({})
      spinner.stop()
    }
  }

  const _handlePhotoChange = (url) => {
    try {
      spinner.start();
      const updateUser = updateUserPhoto(url)
      setPhotoUrl(updateUser.photoUrl)
    } catch(e) {
      console.log('logout:', e)
    } finally {
      spinner.stop()
    }
  }

  return (
    <Container>
      <Text style={{ fontSize: 24 }}>Profile</Text>
      <Image
        url={photoUrl}
        onChangeImage={_handlePhotoChange}
        showButton
        rounded
      />
      <Input label="Name" value={user.name} disabled />
      <Input label="Email" value={user.email} disabled />
      <Button title="logout" onPress={_handleLogoutButtonPress}
        containerStyle={{ marginTop: 30, backgroundColor: theme.buttonLogout }}
      />
    </Container>
  )
}

export default Profile