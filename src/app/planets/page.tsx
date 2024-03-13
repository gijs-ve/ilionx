import { List, ListProps } from '@/lib/components/list/List';
import { Section } from '@/lib/components/section/Section';
import { swapiURL } from '@/lib/constants/url';
import { Planet } from '@/lib/types/types';
import { getRequest, getRequests } from '@/lib/util/fetch';
type PlanetResponse = { count: number; results: Planet[] };
export default async function PlanetsPage() {
    const response = await getRequest<PlanetResponse>(`${swapiURL}/planets/`);
    const planetData = await getRequests<PlanetResponse>({
        count: response.count / 10,
        endpoint: `${swapiURL}/planets/?page=`,
    });
    const planetItems: ListProps['items'] = planetData
        .flatMap((data) =>
            data.results.map((planet) => {
                const id = planet.url.split('/').slice(-2, -1)[0];
                return {
                    id,
                    name: planet.name,
                    itemClassName:
                        'text-white p-4 bg-slate-800 w-full rounded-md',
                    children: <>{planet.name}</>,
                };
            }),
        )
        .sort((a, b) => a.name.localeCompare(b.name));
    return (
        <Section>
            <List
                heading="Planets"
                items={planetItems}
                className="flex flex-col gap-4"
                enableSearch={true}
            />
        </Section>
    );
}
