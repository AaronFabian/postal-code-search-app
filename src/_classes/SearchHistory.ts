import { Address } from '@/_classes/Address';

export class SearchHistory {
  constructor(
    public zipcode: string,
    public addresses: Address[]
  ) {}
}
