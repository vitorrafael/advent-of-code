import fs from "fs";
import path from "path";

const NEWLINE_SPLIT = "\n";
const SPLIT_SPACE = "   ";

export function solve(list: string) {
  const leftList: number[] = [],
    rightList: number[] = [];

  list.split(NEWLINE_SPLIT).forEach((line) => {
    const [left, right] = line.trim().split(SPLIT_SPACE);
    leftList.push(Number(left));
    rightList.push(Number(right));
  });

  leftList.sort();
  rightList.sort();

  const distance = [];
  for (let index = 0; index < leftList.length; index++) {
    distance.push(Math.abs(rightList[index] - leftList[index]));
  }

  return distance.reduce((acc, value) => acc + value, 0);
}

const lists = fs.readFileSync(path.resolve(__dirname, "input.txt")).toString();

const result = solve(lists);

console.log(result);
