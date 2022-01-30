# react-native-auth

react native authentication with jwt

## Installation

```sh
npm install react-native-auth
```
important!!

```sh
yarn add @react-native-community/async-storage
```

## Usage

```js
import { setAuthToken, storageSetItem,storageGetItem } from 'react-native-auth';

// ...
setAuthToken(token)
storageSetItem('deneme','12345')
storageGetItem('deneme').then(res=>console.log(res))
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
