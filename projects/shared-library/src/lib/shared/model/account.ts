export class Account {
    enable?: boolean;
    lives?: number;
    lastLiveUpdate?: number;
    nextLiveUpdate?: number;
    leaderBoardStats?: { [key: number]: number };
    gamePlayed?: number;
    categories?: number;
    wins?: number;
    badges?: number;
    losses?: number;
    avgAnsTime?: number;
    contribution?: number;
    id?: string;
    bits?: number;
    bytes?: number;

    constructor() {
        this.leaderBoardStats = {};
    }
}

export class AccountAtomic {
    enable?: boolean;
    lives?: number;
    lastLiveUpdate?: number;
    nextLiveUpdate?: number;
    leaderBoardStats?: { [key: number]: any };
    gamePlayed?: any;
    categories?: number;
    wins?: any;
    badges?: number;
    losses?: any;
    avgAnsTime?: number;
    contribution?: any;
    id?: string;
    bits?: number;
    bytes?: number;

    constructor() {
        this.leaderBoardStats = {};
    }
}

