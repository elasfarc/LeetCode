type BestHand = "Flush" | "Three of a Kind" | "Pair" | "High Card";
type RankOccurence = { [k: string]: number };
type CardsTable = {
  rankOccurance: RankOccurence;
  isFlush: boolean;
  isThreeOfKind: boolean;
  isTwoOfKind: boolean;
  lastSuit: string;
};

const CARDS_Number = 5;
const initCardsTable = {
  rankOccurance: {},
  isFlush: true,
  isThreeOfKind: false,
  isTwoOfKind: false,
  lastSuit: "",
};
function bestHand(ranks: number[], suits: string[]): BestHand {
  return compose(getBestHand, getCardsTable)(ranks, suits);
}

// ******************************************

function getBestHand({
  isFlush,
  isThreeOfKind,
  isTwoOfKind,
}: CardsTable): BestHand {
  return isFlush
    ? "Flush"
    : isThreeOfKind
    ? "Three of a Kind"
    : isTwoOfKind
    ? "Pair"
    : "High Card";
}

function getUpdatesRankOcc(
  rankOcc: RankOccurence,
  rank: number
): RankOccurence {
  return {
    ...rankOcc,
    [rank]: rankOcc[rank] ? rankOcc[rank] + 1 : 1,
  };
}

function getCardsTable(
  ranks: number[],
  suits: string[],
  cardsTable: CardsTable = initCardsTable,
  index = 0
): CardsTable {
  var {
    rankOccurance,
    isFlush,
    lastSuit,
    isThreeOfKind,
    isTwoOfKind,
  } = cardsTable;
  var suit = suits[index],
    rank = ranks[index],
    updatedRankOccurance: RankOccurence = getUpdatesRankOcc(
      rankOccurance,
      rank
    );

  return index >= CARDS_Number
    ? cardsTable
    : getCardsTable(
        ranks,
        suits,
        {
          rankOccurance: updatedRankOccurance,
          isFlush: isFlush ? (index == 0 ? true : suit == lastSuit) : false,
          isThreeOfKind: !isThreeOfKind
            ? gte3(updatedRankOccurance[rank])
            : true,
          isTwoOfKind: !isTwoOfKind ? gte2(updatedRankOccurance[rank]) : true,
          lastSuit: suit,
        },
        index + 1
      );
}

// ********************
function greaterThanorEql(againstBase: number): (n: number) => boolean {
  return (n) => n >= againstBase;
}
function gte3(n: number) {
  return greaterThanorEql(3)(n);
}
function gte2(n: number) {
  return greaterThanorEql(2)(n);
}

function compose<TArgs extends any[], R1, R2>(
  f2: (arg0: R1) => R2,
  f1: (...arg: TArgs) => R1
): (...init: TArgs) => R2 {
  return function composed(...init) {
    return f2(f1(...init));
  };
}
