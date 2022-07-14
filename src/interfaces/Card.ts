export type CardRed =
    | "R0"
    | "R1"
    | "R2"
    | "R3"
    | "R4"
    | "R5"
    | "R6"
    | "R7"
    | "R8"
    | "R9"
    | "RSKIP"
    | "RREVERSE"
    | "R+2"
    | "RWILD"
    | "R+4";

export type CardYellow =
    | "Y0"
    | "Y1"
    | "Y2"
    | "Y3"
    | "Y4"
    | "Y5"
    | "Y6"
    | "Y7"
    | "Y8"
    | "Y9"
    | "YSKIP"
    | "YREVERSE"
    | "Y+2"
    | "YWILD"
    | "Y+4";

export type CardBlue =
    | "B0"
    | "B1"
    | "B2"
    | "B3"
    | "B4"
    | "B5"
    | "B6"
    | "B7"
    | "B8"
    | "B9"
    | "BSKIP"
    | "BREVERSE"
    | "B+2"
    | "BWILD"
    | "B+4";

export type CardGreen =
    | "G0"
    | "G1"
    | "G2"
    | "G3"
    | "G4"
    | "G5"
    | "G6"
    | "G7"
    | "G8"
    | "G9"
    | "GSKIP"
    | "GREVERSE"
    | "G+2"
    | "GWILD"
    | "G+4";

export type CardType = CardRed | CardYellow | CardBlue | CardGreen | "WILD" | "W+4";