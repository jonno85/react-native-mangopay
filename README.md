# react-native-mangopay

Mangopay React Native First JS Client library with card registration workflow and card form.
This project merge the content from other 2 projects:
- https://www.npmjs.com/package/react-native-credit-card-fullpage-form
- https://github.com/ignivalancy/mangopay-client-react

the project have been updated:
- to use Bearer token for MangoPay js client 
- recent react-native flow

## Installation

```sh
npm install react-native-mangopay
```

## Usage

```js
import Mangopay from "react-native-mangopay";

// ...

const MangoPayClient = Mangopay.Client.getInstance('your client id', 'oauth2 token', 'mango pay user id');
const preRegData = await Mangopay.Client.getCardRegisterationData(cardRegData);
const result = await Mangopay.Client.ButtonregisterCard(preRegData, cardData);

// Graphical component are available through

<Mangopay.CreditCardInput onChange={() => {}} />
<Mangopay.LiteCreditCardInput onChange={() => {}} />

```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
