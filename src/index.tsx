import Client from './Client';
import connectToState from './connectToState';
import CCF from './CreditCardInput';
import LiteCCF from './LiteCreditCardInput';
import CV from './CardView';

const CreditCardInput = connectToState(CCF);
const LiteCreditCardInput = connectToState(LiteCCF);
const CardView = CV;

export default {
  multiply(a: number, b: number) {
    return Promise.resolve(a * b);
  },
  Client,
  CreditCardInput,
  LiteCreditCardInput,
  CardView
};
