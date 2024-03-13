import {
    ListDetails,
    ListDetailsProps,
} from '@/lib/components/list/ListDetails';
import { Section } from '@/lib/components/section/Section';
import { swapiURL } from '@/lib/constants/url';
import { Character, Film } from '@/lib/types/types';
import { getRequest } from '@/lib/util/fetch';

export default async function CharactersDetailsPage({
    params: { id },
}: {
    params: { id: string };
}) {
    const character = await getRequest<Character | { detail: string }>(
        `${swapiURL}/people/${id}`,
    );
    if (!character || 'detail' in character) {
        return (
            <Section>
                <h1 className="text-2xl">404: Character not found</h1>
            </Section>
        );
    }
    const { name, gender, birth_year, films } = character;
    const filmsData = await Promise.all(
        films.map((film) => getRequest<Film>(film)),
    );
    const filmTitles = filmsData.map(
        (film) => `${film.title} (${film.release_date})`,
    );
    const characterList: ListDetailsProps = {
        heading: name,
        items: [
            {
                label: 'Gender',
                value: gender,
            },
            {
                label: 'Birth year',
                value: birth_year,
            },
            {
                label: 'Films',
                value: filmTitles,
            },
        ],
    };
    return (
        <Section>
            <ListDetails {...characterList} />
        </Section>
    );
}
