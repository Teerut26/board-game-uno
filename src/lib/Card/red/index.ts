import Card from "..";
export default class CardRed extends Card {
    public typeCard: CardRed | undefined = undefined;
    constructor() {
        super();
        this.color = "R";
    }
}
