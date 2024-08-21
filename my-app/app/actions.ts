"use server";
import fs from "fs";
import path from "path";
import { json } from "stream/consumers";

interface Item {
  name: string;
  Bid: number;
}

export async function AddToFile(name: string, Bid: number) {
  const data = await fs.readFileSync(path.join(__dirname, "Save.json"), "utf-8");
  const pastData = JSON.parse(data);
  const item = { name, Bid: Bid };
  if (heighestCheck(pastData, Bid)) {
    pastData.push(item);
   await fs.writeFileSync(path.join(__dirname, "Save.json"), JSON.stringify(pastData, null, 2));
    return true;
  }
  return false;
}

function heighestCheck(pastData: Item[], Bid: number) {
  const highestBid = pastData.reduce((acc: number, item: Item) => {
    return item.Bid > acc ? item.Bid : acc;
  }, 0);
  console.log(typeof highestBid, typeof Bid);
  if (parseInt(Bid) <= parseInt(highestBid)) {
    return false;
  } else return true;
}
