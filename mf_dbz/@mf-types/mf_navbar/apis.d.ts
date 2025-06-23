
    export type RemoteKeys = 'mf_navbar/Navbar';
    type PackageType<T> = T extends 'mf_navbar/Navbar' ? typeof import('mf_navbar/Navbar') :any;