interface CharacterThumb {
    extension: string;
    path: string;
}

interface CharacterUrls {
    type: string;
    url: string;
}

export interface CharactersData {
    name: string;
    id: number;
    thumbnail: CharacterThumb;
    urls: CharacterUrls[];
    description: string;
}
