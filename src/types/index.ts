
export interface ProductItems {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
      rate: number;
      count: number;
    };
  }

export interface Logger {
    endpoint: string,
    url : string ,
    date : string,
}

export type JsonFile = Array<object> 