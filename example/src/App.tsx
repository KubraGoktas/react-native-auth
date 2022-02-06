import axios from 'axios';
import * as React from 'react';

import { StyleSheet, View, Text, Button } from 'react-native';
import { setAuthToken, storageSetItem,storageGetItem } from 'react-native-auth';

export default function App() {
  const [result, setResult] = React.useState<number | undefined>();
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'

  React.useEffect(() => {
    console.log('token',setAuthToken(token))
    storageSetItem('deneme','12345')
    console.log(axios.options)
  })


  return (
    <View style={styles.container}>
      <Text>
        <Button title='storageden getir' onPress={()=>storageGetItem('deneme').then(res=>console.log(res))}/>
        <Button title='istek at' onPress={()=>axios.get('https://jsonplaceholder.typicode.com/todos/1').then(res=>console.log(res))}/>

      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
