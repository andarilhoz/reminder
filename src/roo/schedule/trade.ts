import { ScheduleTime } from '.';

export enum Trade {
	PrimeiraAtualizaçãoDaLoja,
	SegundaAtualizaçãoDaLoja,
	TerceiraAtualizaçãoDaLoja,
}

export const trades = [Trade.PrimeiraAtualizaçãoDaLoja, Trade.SegundaAtualizaçãoDaLoja, Trade.TerceiraAtualizaçãoDaLoja];

export const getTradeTime = (value: Trade): ScheduleTime => {
	switch (value) {
		case Trade.PrimeiraAtualizaçãoDaLoja:
			return { hours: 12, minutes: 0 };

		case Trade.SegundaAtualizaçãoDaLoja:
			return { hours: 16, minutes: 0 };

		// case Trade.AuctionStart:
		case Trade.TerceiraAtualizaçãoDaLoja:
			return { hours: 20, minutes: 0 };
	}
};
