import { revalidatePath, revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const body = await request.json();
    const response = await fetch("http://localhost:8000/stocks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: body.name,
        price: body.price,
      }),
    });
    const newStock = await response.json()
    //revalidatePath('/stocks'); // mutate cache / mutate server (revalidacao sob demanda)
    revalidateTag('stocks');
    return NextResponse.json(newStock);
}