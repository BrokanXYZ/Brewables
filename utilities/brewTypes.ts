export type BrewProcess = {
    name: string,
    region: string,
    continent: Continent,
    category: Category
}

export type Category = "coffee" | "tea";

export type Continent = "Asia" | "Australia" | "North America" | "South America" | "Europe" | "Africa";