'use client';

import { FormEvent } from "react";

export default function StocksCreatePage() {
  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    await fetch("http://localhost:3000/api/stocks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        //@ts-expect-error
        name: document.querySelector("#name").value,
        //@ts-expect-error
        price: document.querySelector("#price").value,
      }),
    });
  }

  return (
    <div>
      <h1>Stocks Create Page</h1>
      <form onSubmit={onSubmit}>
        <input type="text" id="name" placeholder="name" className="text-black" />
        <br />
        <br />
        <input type="text" id="price" placeholder="price" className="text-black"/>
        <br />
        <br />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}
