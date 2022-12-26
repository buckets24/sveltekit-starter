import { format } from 'date-fns';

export function formatDate(date: string) {
	const year = new Date(date).getFullYear();
	const month = new Date(date).getDate();
	const day = new Date(date).getDay();

	const formattedDate = format(new Date(year, day, month), 'MMM dd, yyyy');

	return formattedDate;
}
