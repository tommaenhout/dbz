
    export type RemoteKeys = 'mf_vue_cards/placeCards';
    type PackageType<T> = T extends 'mf_vue_cards/placeCards' ? typeof import('mf_vue_cards/placeCards') :any;