const isCompleted = (completedItems: string[], item: string) => {
  return completedItems.includes(item);
};

const getRow = (allItems: string[], item: string) => {
  const itemIndex = allItems.indexOf(item);
  return Math.floor(itemIndex / 5);
};

const getColumn = (allItems: string[], item: string) => {
  const itemIndex = allItems.indexOf(item);
  return itemIndex % 5;
};

const getIsDiagonal = (allItems: string[], item: string): boolean => {
  const itemIndex = allItems.indexOf(item);
  return itemIndex % 6 === 0 || (itemIndex - 4) % 4 === 0;
};

const getDiagonal = (
  allItems: string[],
  item: string
): "A" | "B" | "X" | null => {
  const itemIndex = allItems.indexOf(item);
  if (itemIndex === 12) {
    return "X";
  }
  if (itemIndex % 6 === 0) return "A";
  if ((itemIndex - 4) % 4 === 0) return "B";
  return null;
};

const hasRowBingo = (
  allItems: string[],
  compeltedItems: string[],
  specificItem: string
) => {
  const specificRow = getRow(allItems, specificItem);
  return allItems
    .filter((i) => getRow(allItems, i) === specificRow)
    .every((i) => isCompleted(compeltedItems, i));
};

const hasColumnBingo = (
  allItems: string[],
  compeltedItems: string[],
  specificItem: string
) => {
  const specificColumn = getColumn(allItems, specificItem);
  return allItems
    .filter((i) => getColumn(allItems, i) === specificColumn)
    .every((i) => isCompleted(compeltedItems, i));
};

const hasDiagonalBingo = (
  allItems: string[],
  compeltedItems: string[],
  specificItem: string
) => {
  const isSpecificDiagonal = getIsDiagonal(allItems, specificItem);
  if (!isSpecificDiagonal) return false;
  const specificDiagonal = getDiagonal(allItems, specificItem);
  return allItems
    .filter((i) => {
      const isDiagonal = getIsDiagonal(allItems, i);
      if (!isDiagonal) return false;
      if (specificDiagonal === "X") return true;
      const diagonal = getDiagonal(allItems, i);
      if (diagonal === specificDiagonal) return true;
      if (diagonal === "X") return true;
      return false;
    })
    .every((i) => isCompleted(compeltedItems, i));
};

const hasCenterBingo = (
  allItems: string[],
  compeltedItems: string[],
  specificItem: string
) => {
  const isCenter =
    allItems.indexOf(specificItem) === 12 &&
    isCompleted(compeltedItems, specificItem);
  if (!isCenter) return false;
  return (
    allItems
      .filter((i) => getDiagonal(allItems, i) === "A")
      .every((i) => isCompleted(compeltedItems, i)) ||
    allItems
      .filter((i) => getDiagonal(allItems, i) === "B")
      .every((i) => isCompleted(compeltedItems, i))
  );
};

export const hasBingo = (
  allItems: string[],
  compeltedItems: string[],
  specificItem: string
): boolean => {
  return (
    hasRowBingo(allItems, compeltedItems, specificItem) ||
    hasColumnBingo(allItems, compeltedItems, specificItem) ||
    hasDiagonalBingo(allItems, compeltedItems, specificItem) ||
    hasCenterBingo(allItems, compeltedItems, specificItem)
  );
};
