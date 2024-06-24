import { v4 } from 'uuid';

const ALL = {
	url: 'https://restcountries.com/v3.1/all',
	region: 'All',
	id: v4()
};

const EUROPE = {
	url: 'https://restcountries.com/v3.1/region/europe',
	region: 'Europe',
	id: v4()
};

const ASIA = {
	url: 'https://restcountries.com/v3.1/region/asia',
	region: 'Asia',
	id: v4()
};

const AFRICA = {
	url: 'https://restcountries.com/v3.1/region/africa',
	region: 'Africa',
	id: v4()
};

const AMERICA = {
	url: 'https://restcountries.com/v3.1/region/america',
	region: 'America',
	id: v4()
};

const OCEANIA = {
	url: 'https://restcountries.com/v3.1/region/oceania',
	region: 'Oceania',
	id: v4()
};

export const REGIONS = [ALL, EUROPE, ASIA, AFRICA, AMERICA, OCEANIA];
