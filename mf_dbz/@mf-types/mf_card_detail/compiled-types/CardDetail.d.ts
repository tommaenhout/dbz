import "./index.css";
interface ICardDetail {
    id: string;
}
export interface Planet {
    id: number;
    name: string;
    isDestroyed: boolean;
    description: string;
    image: string;
    deletedAt: null | string;
}
export interface Transformation {
    id: number;
    name: string;
    image?: string;
    description?: string;
    ki?: string;
}
export interface Character {
    id: number;
    name: string;
    ki: string;
    maxKi: string;
    race: string;
    gender: string;
    description: string;
    image: string;
    affiliation: string;
    deletedAt: null | string;
    originPlanet: Planet;
    transformations: Transformation[];
}
declare const CardDetail: ({ id }: ICardDetail) => import("react/jsx-runtime").JSX.Element;
export default CardDetail;
