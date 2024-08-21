"use client"
import { useState } from "react";
import { AddToFile } from "./actions";
import { useRouter } from "next/navigation";

export default function Form({highestBid}) {
    const router = useRouter();
    const [name, setName] = useState<string>("");

    const [HighestBid, setBid] = useState<number>(0);
    const handelSubmit = async (e) => {
      e.preventDefault();
  
      const result = await AddToFile(name, HighestBid);
      console.log(result);
      if(result){
        router.refresh();
      }
      else{
        alert("Bid to low");
      }
    };

    return (
    <form onSubmit={handelSubmit}>
      <label>Highest bid</label>
      <br />
      <label>{highestBid}</label>
      <br />
      <label>Bidder</label>
      <input
        id="BidderName"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <label>Value</label>
      <input
        id="BidValue"
        type="number"
        value={HighestBid}
        onChange={(e) => setBid(parseInt(e.target.value))}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
