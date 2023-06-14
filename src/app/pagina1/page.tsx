import { ClientComponent } from "../components/ClientComponent";
import { ListStocks } from "../components/ListStocks";

export default function Pagina1() {
  return (
    <div>
      <h1>Página 1</h1>
      <ListStocks />
      <ClientComponent/>
    </div>
  );
}
