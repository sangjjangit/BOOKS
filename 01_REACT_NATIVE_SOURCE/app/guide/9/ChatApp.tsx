import { theme } from "@/constants/9/theme"
import { Image, StatusBar } from "react-native"
import { ThemeProvider } from "styled-components/native"
import { Asset } from 'expo-asset'
import * as Font from 'expo-font'
import { useEffect, useState } from "react"
import { SplashScreen } from "expo-router"
import Navigation from "@/navigations/9"
import { images } from "@/utils/images"
import { ProgressProvider, UserProvider } from "@/contexts/9"

const cacheImages = (images:any) => {
  return images.map(image => {
    console.log(image)
    if(typeof image === 'string') {
      return Image.prefetch(image)
    } else {
      // return Asset.fromMetadata(image).downloadAsync()
      return Asset.fromModule(image).downloadAsync()
    }
  })
}

const cacheFonts = (fonts:any) => {
  return fonts.map(font => Font.loadAsync(font))
}

SplashScreen.preventAutoHideAsync();

const ChatApp = () => {
  const [isReady, setIsReady] = useState(false)

  const _loadAssets = async () => {
    const imageAssets = cacheImages([require('../../../assets/images/icon.png'), ...Object.values(images)])
    const fontAssets = cacheFonts([])

    console.log(`imageAssets: ${imageAssets}, fontAssets: ${fontAssets}`)

    await Promise.all([...imageAssets, ...fontAssets])
  }

  useEffect(() => {
    const prepare = async () => {
      try {
        await _loadAssets()
      } catch(e) {
        console.warn(e)
      } finally {
        setIsReady(true)
        await SplashScreen.hideAsync()
      }
    }
    prepare()
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <UserProvider>
        <ProgressProvider>
          <StatusBar barStyle="dark-content" />
          <Navigation />
        </ProgressProvider>
      </UserProvider>
    </ThemeProvider>
  )
}

export default ChatApp