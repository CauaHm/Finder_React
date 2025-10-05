import { CategoriesCards } from "../Categories copy";
import styles from "./styles.module.css";
import { FaComputer } from "react-icons/fa6";
import type { categoriesItems } from "../../Models/CategoriesItems";

const listCategories: categoriesItems[] = [
  { icon: <FaComputer className={styles.icon} />, paragraph: "eletronicos" },
  { icon: <FaComputer className={styles.icon} />, paragraph: "eletronicos" },
];

export function Categories() {
  const renderList = () => {
    return listCategories.map((i) => {
      return (
        <CategoriesCards
          key={i.paragraph}
          icon={i.icon}
          paragraph={i.paragraph}
        />
      );
    });
  };

  return (
    <>
      <h3>Pesquise por Categorias</h3>
      <div>{renderList()}</div>
    </>
  );
}
