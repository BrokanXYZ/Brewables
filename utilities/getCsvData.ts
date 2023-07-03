import useSWR from 'swr';
import { BrewProcess, Category, Continent } from './brewTypes';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const getBrewProcessData = () => {
    console.log("fetching brew process data...")
    const { data, error } = useSWR('/api/staticdata', fetcher);
    const brewProcesses: BrewProcess[] = [];

    if(data != null && error == null) {
        const brewProcessRows = data.split(/\r?\n/).slice(1);
        brewProcessRows.forEach((row: string) => {
            const fields = row.split(",");
            brewProcesses.push({
                name: fields[0],
                region: fields[1],
                continent:  <Continent>fields[2],
                category: <Category>fields[3]
            })
        });
    }

    return { brewProcesses, error };
}