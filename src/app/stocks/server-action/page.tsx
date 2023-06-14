import { revalidatePath } from "next/cache";
import { prisma } from "../../prisma";

async function getStocks() {
  return await prisma.stock.findMany();
}

export default async function StocksCreateWithServerAction() {
  async function onSubmit(data: FormData) {
    "use server";
    const name = data.get("name");
    const price = data.get("price");
    await prisma.$queryRaw`INSERT INTO Stock (name, price) VALUES (${name}, ${price})`;
    revalidatePath("/stocks/server-action");
  }

  const stocks = await getStocks();

  return (
    <div>
      <form action={onSubmit}>
        <input
          type="text"
          name="name"
          placeholder="name"
          className="text-black"
        />
        <br />
        <br />
        <input
          type="text"
          name="price"
          placeholder="price"
          className="text-black"
        />
        <br />
        <br />
        <button type="submit">Create</button>
      </form>
      <br />
      <br />
      <br />
      <ul>
        {stocks.map((stock) => (
          <li key={stock.id}>
            {stock.name} - {stock.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
