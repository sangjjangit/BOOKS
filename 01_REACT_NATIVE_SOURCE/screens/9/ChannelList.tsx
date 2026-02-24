import { theme } from "@/constants/9/theme";
import { DB } from "@/utils/firebase";
import { MaterialIcons } from "@expo/vector-icons";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Button, FlatList, Text } from "react-native";
import styled from "styled-components/native";
import moment from 'moment'

const Container = styled.View`
  flex: 1;
  background-color: ${theme.background};
`

const ItemContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  border-bottom-width: 1px;
  border-color: ${theme.listBorder};
  padding: 15px 20px;
`
const ItemTextContainer = styled.View`
  flex: 1;
  flex-direction: column;
`
const ItemTitle = styled.Text`
  font-size: 20px;
  font-weight: 600;
`

const ItemDescription = styled.Text`
  font-size: 16px;
  margin-top: 5px;
  color: ${theme.listTime};
`
const ItemTime = styled.Text`
  font-size: 12px;
  color: ${theme.listTime}
`

// const channels = [
//   {id: 1, title: 'title1', description: 'description1', createdAt: '1'},
//   {id: 1, title: 'title1', description: 'description1', createdAt: '1'},
//   {id: 1, title: 'title1', description: 'description1', createdAt: '1'},
// ]
// for(let idx = 0; idx < 1000; idx++) {
//   channels.push({
//     id: idx,
//     title: `title${idx}`,
//     description: `description${idx}`,
//     createdAt: `${idx}`})
// }

const getDateOrTime = (ts:any) => {
  const now = moment().startOf('day')
  const target = moment(ts).startOf('day')
  return moment(ts).format(now.diff(target, 'days')>0 ? 'MM/DD':'HH:mm')
}

const Item = React.memo(({ item: {id, title, description, createdAt}, onPress }:any) => {
  console.log(`item: ${id}`)

  return (
    <ItemContainer onPress={() => onPress({id, title})}>
      <ItemTextContainer>
        <ItemTitle>{title}</ItemTitle>
        <ItemDescription>{description}</ItemDescription>
      </ItemTextContainer>
      <ItemTime>{getDateOrTime(createdAt)}</ItemTime>
      <MaterialIcons
        name="keyboard-arrow-right"
        size={24}
        color={theme.listIcon}
      />
    </ItemContainer>
  )
})

const ChannelList = ({navigation}:any) => {

  const [channels, setChannels] = useState([])

  useEffect(() => {
    const q = query(collection(DB, 'channels'), orderBy('createdAt', 'desc'))
    const querySnapshot = getDocs(q).then(snapshot => {
      if(!snapshot.empty) {
        const list = []
        snapshot.forEach(doc => {
          list.push(doc.data())
        })
        setChannels(list)
      }
    })
  }, [])

  const _handleItemPress = (params:any) => {
    navigation.navigate('Channel', params)
  }

  return (
    <Container>
      <Text style={{ fontSize: 24 }}>Channel List</Text>
      <FlatList
        keyExtractor={item => item['id'].toString()}
        data={channels}
        renderItem={({item}:any) => (
          <Item item={item} onPress={_handleItemPress} />
        )}
        windowSize={3}
      />

      <Button title="Channel Creation" onPress={() => navigation.navigate('Channel Creation')} />
    </Container>
  )
}

export default ChannelList