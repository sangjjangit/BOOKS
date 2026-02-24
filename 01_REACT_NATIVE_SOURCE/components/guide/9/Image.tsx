import { theme } from "@/constants/9/theme"
import { MaterialIcons } from "@expo/vector-icons"
import { useEffect } from "react"
import { Alert, Platform } from "react-native"
import styled from "styled-components/native"
import * as ImagePicker from 'expo-image-picker'
import * as Permissions from 'expo-permissions'

const Container = styled.View`
  align-self: center;
  margin-bottom: 30px;
`

const StyledImage = styled.Image`
  background-color: ${theme.imageBackground};
  width: 100px;
  height: 100px;
  border-radius: ${({rounded}) => (rounded ? 50:0)}px;
`
const ButtonContainer = styled.TouchableOpacity`
  background-color: ${theme.imageButtonBackground};
  position: absolute;
  bottom: 0;
  right:0;
  width: 30px;
  height: 30px;
  border-radius: 15px;
  justify-content: center;
  align-items: center;
`
const ButtonIcon = styled(MaterialIcons).attrs({
  name: 'photo-camera',
  size: 22,
})`
  color: ${theme.imageButtonIcon}
`
const PhotoButton = ({onPress}:any) => {
  return (
    <ButtonContainer onPress={onPress}>
      <ButtonIcon name="photo-camera" />
    </ButtonContainer>
  )
}

const Image = ({url, imageStyle, rounded, showButton, onChangeImage}:any) => {
  useEffect(() => {
    (async () => {
      try {
        if(Platform.OS === 'ios') {
          const { status } = await Permissions.askAsync(Permissions.CAMERA)
          if(status !== 'granted') {
            Alert.alert(
              'Photo Permission',
              'Please turn on the camera permission'
            )
          }
        }

      } catch(e) {
        Alert.alert('Photo Permission Error', e.message)
      }
    })()
  }, [])

  const _handleEditButton = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: 'images',
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      })

      console.log(result)
      console.log(result.assets[0].uri)

      if(!result.canceled) {
        // onChangeImage(result.uri);
        onChangeImage(result.assets[0].uri);
      }
    } catch(e) {
      Alert.alert('Photo Error', e.message)
    }
  }
  return (
    <Container>
      <StyledImage source={{ uri: url }} style={imageStyle} rounded={rounded} />
      {showButton && <PhotoButton onPress={_handleEditButton} />}
    </Container>
  )
}

export default Image