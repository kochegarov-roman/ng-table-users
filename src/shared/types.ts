export interface OptionsFilter{
  [key: string]: OptionFilter;
}


export interface OptionFilter{
  name: string;
  value: string;
  ownFilter?: (element: any) => boolean;
}


export interface AddressInterface{
  city: string;
  street: string;
}

export interface UserInterface {
  address: AddressInterface;
  age: number;
  department: string;
  gender: 'male' | 'female';
  id: string;
  name: string;
}

export type OwnOptionsFilterType = {[key: string]: (el: any) => boolean};

export type OptionsInsertedCounterType = {[key: string]: (el: any) => string};


export type HeadersParamsType<Data>  = {
  [key in keyof Omit<Data, 'id'>]: {
    withPipe: boolean;
    visibility?: boolean;
    hideColumnSm?: boolean;
    pipeFunc?: (value: any) => string;
  };
};

export type SortedParamType<Data> = {
  [key in keyof Omit<Data, 'id'>]?: undefined | 'ask' | 'desk';
};


// Array<keyof HeadersParams>
export type FieldsSortType<Data> = {
  [key in keyof Data]: null | boolean;
};
