export type Ability = "reverse" | "skip" | "draw2" | "draw4" | null;

export interface CardAbility {
    value: Ability;
    color: string;
}