import { Button, StyleSheet, Text, View } from "react-native";

const Index = () => {
  const name = 'sang' // 2. 변수
  return (
    <View style={styles.container}>
      <Text>Open up app index.tsx to start working on app</Text>
      <Text style={styles.text}>
        {(() => {
          if(name === 'sang') return 'My name is sang'
          else if(name === 'woo') return 'My name is woo'
          else return 'My name is React'
        })()}
      </Text>
      <Text style={styles.text}>
        My name is {name === 'woo' ? 'sang' : 'React'}
      </Text>
      <br />
      <Button title="Back" onPress={() => history.back()} />
    </View>

    // 1. Fragment 단축 문법
    // <Fragment>
    //   <Text>Open up app index.tsx to start working on app</Text>
    //   <StatusBar style="auto" />
    // </Fragment>
    // <>
    //   <Text>Open up app index.tsx to start working on app</Text>
    //   <StatusBar style="auto" />
    // </>
  );
}
export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
  }
});