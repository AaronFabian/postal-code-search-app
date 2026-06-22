import { AddressDef } from '@/_interfaces/AddressDef';

export class Address {
  address1: string;
  address2: string;
  address3: string;
  kana1: string;
  kana2: string;
  kana3: string;
  prefcode: string;
  zipcode: string;
  constructor(def: AddressDef) {
    this.address1 = def.address1;
    this.address2 = def.address2;
    this.address3 = def.address3;
    this.kana1 = def.kana1;
    this.kana2 = def.kana2;
    this.kana3 = def.kana3;
    this.prefcode = def.prefcode;
    this.zipcode = def.zipcode;
  }
}
