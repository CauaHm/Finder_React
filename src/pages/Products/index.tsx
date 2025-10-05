import { Categories } from "../../components/Categories";
import { Main } from "../../components/Main";
import { ProductsSearch } from "../../components/ProductsSearch";
import { MainTamplates } from "../../Templates/MainTampletes";

export function Products() {
  return (
      <MainTamplates>
        <Main>
          <h2>Produtos</h2>
          <ProductsSearch/>
          <Categories/>
        </Main>
      </MainTamplates>
  );
}
