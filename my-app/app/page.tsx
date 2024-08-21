
import Form from "./Form";
import fs from "fs";
import path from "path";
export default function Home() {
    const data = fs.readFileSync(path.join(__dirname, "Save.json"), "utf-8");
    const pastData = JSON.parse(data);
    const highestBid = pastData.reduce((acc: number, item: Item) => {
        return item.Bid > acc ? item.Bid : acc;
      }, 0);
    
      console.log(highestBid);
  return (
    <div>
      <Form highestBid={highestBid}/>
    </div>
  );
}
