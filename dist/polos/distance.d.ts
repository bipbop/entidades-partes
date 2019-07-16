import { TypeParte } from './partes';
import { Polo } from '.';
interface Distance {
    polo: Polo;
    parte: TypeParte;
    distance: number;
}
export declare function distance(str: string): Distance;
export {};
