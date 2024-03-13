import { List, ListProps } from '@/lib/components/list/List';
import { Section } from '@/lib/components/section/Section';
import { swapiURL } from '@/lib/constants/url';
import { Character } from '@/lib/types/types';
import { getRequest, getRequests } from '@/lib/util/fetch';
import Link from 'next/link';

type CharacterResponse = { count: number; results: Character[] };
export default async function CharactersPage() {
    const response = await getRequest<CharacterResponse>(`${swapiURL}/people/`);
    const charactersData = await getRequests<CharacterResponse>({
        count: response.count / 10,
        endpoint: `${swapiURL}/people/?page=`,
    });
    const characterItems: ListProps['items'] = charactersData
        .flatMap((data) => data.results)
        .map((character) => {
            const { name, url } = character;
            const id = url.split('/').slice(-2, -1)[0];
            return {
                id,
                name,
                itemClassName: 'flex',
                children: (
                    <Link
                        href={`/characters/${id}`}
                        className="text-white p-4 bg-slate-800 hover:bg-slate-700 w-full rounded-md"
                    >
                        {character.name}
                    </Link>
                ),
            };
        })
        .sort((a, b) => a.name.localeCompare(b.name));
    return (
        <Section>
            <List
                heading="Characters"
                items={characterItems}
                className="flex flex-col gap-4"
            />
        </Section>
    );
}
