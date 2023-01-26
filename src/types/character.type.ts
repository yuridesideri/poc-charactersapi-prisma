export interface Character {
    id?: number;
    name: string;
    race: string;
    description: string;
    age: number;
    height: number;
    u_obj: string;
    sex: "male" | "female" | "other";
    image?: string;
    world_born_id: number;
}

export interface CharacterFields {
    id?: number;
    name?: string;
    race?: string;
    description?: string;
    age?: number;
    height?: number;
    u_obj?: string;
    sex?: "male" | "female" | "other";
    image?: string;
    world_born?: number;
}

export interface World {
    id?: number;
    name: string;
    description: string;
    habitants: number;
}