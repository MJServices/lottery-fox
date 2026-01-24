export type Page = 'home' | 'results' | 'lottery' | 'leaders' | 'affiliate' | 'faq' | 'deposit' | 'profile' | 'hallOfFame' | 'verify-results' | 'how-it-works' | 'awards' | 'privacy-policy';

export interface User {
  id: string;
  email?: string;
  phone?: string;
  name?: string;
  avatar?: string;
  balance?: number;
  isVerified?: boolean;
}

export interface LotteryGame {
  id: string;
  name: string;
  type: 'powerball' | 'mega' | 'euro' | 'custom';
  prizePool: number;
  nextDraw: Date;
  ticketPrice: number;
  maxNumbers: number;
  maxPowerball?: number;
  description?: string;
  isActive: boolean;
}

export interface LotteryTicket {
  id: string;
  gameId: string;
  userId: string;
  numbers: number[];
  powerball?: number;
  purchaseDate: Date;
  drawDate: Date;
  isWinner?: boolean;
  winAmount?: number;
}

export interface LotteryDraw {
  id: string;
  gameId: string;
  drawDate: Date;
  winningNumbers: number[];
  winningPowerball?: number;
  prizePool: number;
  winners: {
    tier: number;
    count: number;
    prizePerWinner: number;
  }[];
  status: 'pending' | 'completed' | 'cancelled';
}