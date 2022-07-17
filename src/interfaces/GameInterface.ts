// create interface Uno Game

import { CardRed, CardYellow, CardBlue, CardGreen } from "./Card";
import { Ability } from "./CardAbility";

export interface GameInterface {
    id: string;
    players: PlayerInterface[];
}

export interface PlayerInterface {
    id: string;
    name: string;
    hand: CardInterface[];
    score: number;
}

export interface CardInterface {
    value: string;
    ability: Ability;
    color: CardRed | CardYellow | CardBlue | CardGreen;
}
