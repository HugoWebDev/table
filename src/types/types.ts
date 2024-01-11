export namespace Types {
  export interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  }

  export interface Company {
    name: string;
    catchPhrase: string;
    bs: string;
  }

  export interface DataType {
    key: number;
    name: string;
    username: string;
    email: string;
    city: string;
    zipcode: string;
    website: string;
    company: Company;
  }
}
