import { initializeApp } from 'firebase/app'
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth'
import { getDownloadURL, getStorage, ref, uploadBytes  } from 'firebase/storage'
import { getFirestore, collection, setDoc, getDoc, doc, addDoc, collectionGroup } from 'firebase/firestore'
import config from '@/firebase.json'

const app = initializeApp(config)
const auth = getAuth(app)
const storage = getStorage(app)

const uploadImage = async (uri:string) => {
  const blob = await new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.onload = function () {
      resolve(xhr.response)
    }
    xhr.onerror = function (e) {
      reject(new TypeError('Network request failed'))
    }
    xhr.responseType = 'blob'
    xhr.open('GET', uri, true)
    xhr.send(null)
  })

  const user = auth.currentUser
  const file = `/profile/${user.uid}/photo.png`
  const storageRef = ref(storage, file)
  uploadBytes(storageRef, file).then((snapshot) => {
    getDownloadURL(snapshot.ref).then((downloadURL) => {
      console.log('file available at', downloadURL)
    })
  })

}

export const login = async ({email, password}:any) => {
  const { user } = await signInWithEmailAndPassword(auth, email, password)
  console.log("user")
  console.log(user)
  return user
}

export const signup = async({email, password, name, photoUrl}:any) => {
  const { user } = await createUserWithEmailAndPassword(auth, email, password)
  const storageUrl = photoUrl.startsWith('https') ? photoUrl : await uploadImage(photoUrl)

  console.log("user")
  console.log(user)
  console.log("storageUrl")
  console.log(storageUrl)
  updateProfile(user, {displayName: name, photoURL: storageUrl})

  // await user.updateProfile({
  //   displayName: name,
  //   photoURL: storageUrl,
  // })
  return user
}

export const logout = async () => {
  console.log(auth)
  console.log(auth.currentUser)
  return await signOut(auth)
}

export const getCurrentUser = () => {
  const { uid, displayName, email, photoURL } = auth.currentUser
  return {uid, name: displayName, email, photoUrl: photoURL }
}

export const updateUserPhoto = async (photoUrl:any) => {
  const user = auth.currentUser
  const storageUrl = photoUrl.startsWith('https') ? photoUrl : await uploadImage(photoUrl)
  updateProfile(user, {displayName: name, photoURL: storageUrl})

  return {name: user?.displayName, email: user?.email, photoUrl: user?.photoURL }
}

// -------------------------------- firestore

export const DB = getFirestore(app);

export const createChannel = async ({title, description}) => {
  // const newChannelRef = DB.collection('channels').doc()
  // const newChannelRef = collection(DB, 'channels')
  const newChannelRef = doc(collection(DB, 'channels')) // 자동ID 생성
  const id = newChannelRef.id
  const newChannel = {
    id,
    title,
    description,
    createdAt: Date.now(),
  }
  console.log(newChannel)
  // await newChannelRef.set(newChannel)
  // await addDoc(newChannelRef, newChannel)
  // await setDoc(doc(DB, "channels", id), newChannel)
  await setDoc(newChannelRef, newChannel)
  return id
}

export const createMessage = async ({ channelId, message }:any) => {

  console.log(channelId)
  console.log(message)
  // return await addDoc(collection(DB, 'channels', channelId, 'messages'), { message, createdAt: Date.now() })

  const newMessagesRef = doc(collection(DB, 'channels', channelId, 'messages'))
  const id = newMessagesRef.id
  const newMessage = {
    id,
    ...message,
    createdAt: Date.now(),
  }
  console.log(newMessage)
  return await setDoc(newMessagesRef, newMessage)
  // return await addDoc(collection(DB, 'channels', channelId), { text, createdAt: Date.now() })
  // return await setDoc(doc(DB, "channels", channelId), { text, createdAt: Date.now() })
}