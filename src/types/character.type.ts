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
    world_born?: World;
    guild_id?: number;
    guild?: Guild;
}

export type CharacterFields = Partial<Character>

export interface World {
    id?: number;
    name: string;
    description: string;
    image?: string;
    characters?: Character[];
}

export interface Guild {
    id?: number;
    name: string;
    description: string;
    membersId: number[];
    guild_logo?: string;
}

//tipar o input e não o database