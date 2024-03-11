import { Character } from '@/lib/types/types';
import { getRequest } from '@/lib/util/fetch';

export default async function CharactersPage() {
    const response = await getRequest<{ count: number; results: Character[] }>(
        'https://swapi.py4e.com/api/people/',
    );
    return null;
}
