import { DefaultButton } from "../DefaultButton";
import styles from "./styles.module.css";

export function ProductsSearch() {
  return (
    <form className={styles.containerForm}>
      <input className={styles.searchInput} type="text" id="search-input" placeholder="Produto..."/>
      <DefaultButton value="Buscar"/>
    </form>
  );
}
