
    export type RemoteKeys = 'mf_card_detail/CardDetail';
    type PackageType<T> = T extends 'mf_card_detail/CardDetail' ? typeof import('mf_card_detail/CardDetail') :any;