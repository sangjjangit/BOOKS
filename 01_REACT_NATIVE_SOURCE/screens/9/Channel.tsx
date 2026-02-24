import { theme } from "@/constants/9/theme";
import { createMessage, DB, getCurrentUser } from "@/utils/firebase";
import { MaterialIcons } from "@expo/vector-icons";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { useEffect, useLayoutEffect, useState } from "react";
import { Alert, Text } from "react-native";
import { GiftedChat, Send } from "react-native-gifted-chat";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  background-color: ${theme.background};
`

const SendButton = (props:any) => {
  return (
    <Send
      {...props}
      disabled={!props.text}
      containerStyle={{
        width: 44,
        height: 44,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 4,
      }}
    >
      <MaterialIcons
        name="send" size={24}
        color={props.text ? theme.sendButtonActivate:theme.sendButtonInactivate}
      />
    </Send>
  )
}

const Channel = ({navigation, route: { params }}:any) => {
  const { uid, name, photoUrl } = getCurrentUser()

  const [messages, setMessages] = useState([])
  const [text, setText] = useState([])

  useEffect(() => {

    const q = query(collection(DB, 'channels', params.id, 'messages'), orderBy('createdAt', 'desc'))
    const querySnapshot = getDocs(q).then(snapshot => {
      if(!snapshot.empty) {
        const list = []
        snapshot.forEach(doc => {
          // list.push(doc.data())
          list.push({_id: doc.id,...doc.data()})
        })
        setMessages(list)
      }
    })
  }, [])

  useLayoutEffect(() => {
    navigation.setOptions({ headerTitle: params.title || 'Channel'})
  }, [])

  const _handleMessageSend = (messageList:any) => {
    const newMessage = messageList[0]
    try {
      createMessage({ channelId: params.id, message: newMessage })
    } catch(e) {
      Alert.alert('Send Message Error', `${e}`)
    }
  }

  return (
    <Container>
      <Text style={{ fontSize: 24 }}>Channel</Text>
      <GiftedChat
        listViewProps={{
          style: { backgroundColor: theme.background }
        }}
        placeholder="Enter a message"
        messages={messages}
        user={{ _id: uid, name, avatar: photoUrl }}
        onSend={_handleMessageSend}
        alwaysShowSend={true}
        textInputProps={{
          autoCapitalize: 'none',
          autoCorrect: false,
          textContentType: 'none',
          underlineColorAndroid: 'transparent',
        }}
        multiline={false}
        renderUsernameOnMessage={true}
        scrollToBottom={true}
        renderSend={(props) => <SendButton {...props} />}
      />
      {/* <FlatList
        keyExtractor={item => item['id']}
        data={messages}
        renderItem={({item}) => (
          <Text style={{ fontSize: 24 }}>{item.text}</Text>
        )}
        inverted={true}
      />
      <Input
        value={text}
        onChangeText={text => setText(text)}
        onSubmitEditing={() => createMessage({ channelId: params.id, text})}
        onBlur={() => {}}
      /> */}
    </Container>
  )
}

export default Channel