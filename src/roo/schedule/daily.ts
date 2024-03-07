import { ScheduleTime } from '.';

export enum Daily {
	Arena,
	Yggdrasil,
	DesafioExtremo,
	ExpediçãoDoClã,
	BanqueteDoClã,
	ModaDeRune,
	LigaDosClãs,
	FestaTematica,
	AnomaliaEspaçoTempo,
	GuerraDoEmperium,
	BanqueteDoFimDeSemana,
}

export const getDailies = (date: Date): Daily[] => {
	const day = date.getDay() as Day;

	switch (day) {
		case 0:
			// sunday
			return [Daily.Yggdrasil, Daily.FestaTematica, Daily.ExpediçãoDoClã, Daily.GuerraDoEmperium];

		case 1:
			// monday
			return [Daily.DesafioExtremo, Daily.BanqueteDoClã];

		case 2:
			// tuesday
			return [Daily.BanqueteDoClã, Daily.AnomaliaEspaçoTempo, Daily.LigaDosClãs];

		case 3:
			// wednesday
			return [Daily.ModaDeRune, Daily.BanqueteDoClã, Daily.Arena];

		case 4:
			// thursday
			return [Daily.BanqueteDoClã, Daily.ExpediçãoDoClã, Daily.LigaDosClãs];

		case 5:
			// friday
			return [Daily.BanqueteDoClã];

		case 6:
			// saturday
			return [Daily.Yggdrasil, Daily.BanqueteDoFimDeSemana, Daily.AnomaliaEspaçoTempo, Daily.LigaDosClãs];
	}
};

export const getDailyDuration = (value: Daily): Duration => {
	switch (value) {
		case Daily.Arena:
			return { minutes: 35 };

		case Daily.Yggdrasil:
			return { hours: 14 };

		case Daily.ExpediçãoDoClã:
		case Daily.BanqueteDoClã:
		case Daily.BanqueteDoFimDeSemana:
			return { minutes: 20 };

		case Daily.DesafioExtremo:
		case Daily.ModaDeRune:
			return { hours: 19 };

		case Daily.LigaDosClãs:
			return { minutes: 25 };

		case Daily.FestaTematica:
			return { minutes: 30 };

		case Daily.AnomaliaEspaçoTempo:
			return { minutes: 13 };

		case Daily.GuerraDoEmperium:
			return { hours: 1, minutes: 10 };
	}
};

export const getDailyTime = (value: Daily): ScheduleTime => {
	switch (value) {
		case Daily.DesafioExtremo:
		case Daily.ModaDeRune:
			return { hours: 5, minutes: 0 };

		case Daily.Yggdrasil:
			return { hours: 10, minutes: 0 };

		case Daily.BanqueteDoClã:
		case Daily.FestaTematica:
		case Daily.BanqueteDoFimDeSemana:
			return { hours: 20, minutes: 0 };

		case Daily.Arena:
			return { hours: 20, minutes: 25 };

		case Daily.ExpediçãoDoClã:
		case Daily.AnomaliaEspaçoTempo:
			return { hours: 20, minutes: 30 };

		case Daily.LigaDosClãs:
			return { hours: 20, minutes: 55 };

		case Daily.GuerraDoEmperium:
			return { hours: 21, minutes: 20 };
	}
};
