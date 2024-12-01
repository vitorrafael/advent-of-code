import fs from "fs";
import path from "path";

const NEWLINE_SPLIT = "\n";
const SPLIT_SPACE = "   ";

export function solve(list: string) {
  const rightList: number[] = [];
  const leftListCounter: { [key: number]: number } = {};

  list.split(NEWLINE_SPLIT).forEach((line) => {
    const [left, right] = line.trim().split(SPLIT_SPACE);
    leftListCounter[Number(left)] = 0;
    rightList.push(Number(right));
  });

  rightList.forEach((value) => {
    if (leftListCounter[value] >= 0) {
      leftListCounter[value] += 1;
    }
  });

  return Object.keys(leftListCounter).reduce(
    (acc, value) => acc + Number(value) * leftListCounter[Number(value)],
    0
  );
}

const lists = fs.readFileSync(path.resolve(__dirname, "input.txt")).toString();

const result = solve(lists);

console.log(result);
