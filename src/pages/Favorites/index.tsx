import { useState, useEffect } from "react";
import { Main } from "../../components/Main";
import { MainTamplates } from "../../Templates/MainTampletes";
import { ProductCard } from "../../components/ProductCard";
import type { Product } from "../../Models/Product.tsx";
import styles from './styles.module.css';

export function Favorites() {
  const [favoriteProducts, setFavoriteProducts] = useState<Product[]>([]);
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favoritos") || "[]");
    const storedProducts: Product[] = JSON.parse(localStorage.getItem("produtos") || "[]");

    setFavorites(storedFavorites);
    
    if (storedFavorites.length > 0 && storedProducts.length > 0) {
      const favs = storedProducts.filter(product => 
        storedFavorites.includes(product.asin)
      );
      setFavoriteProducts(favs);
    }
  }, []);
  
  const handleToggleFavorite = (asin: string) => {
    const updatedFavorites = favorites.filter(id => id !== asin);
    setFavorites(updatedFavorites);
    setFavoriteProducts(prevProducts => prevProducts.filter(p => p.asin !== asin));
    localStorage.setItem("favoritos", JSON.stringify(updatedFavorites));
  };

  return (
    <MainTamplates>
      <Main>
        <div className={styles.containerTitle}>
          <h1>Favoritos <span className={styles.heartIcon}>❤️</span></h1>
        </div>
        <div className={styles.productsFav}>
          {favoriteProducts.length === 0 ? (
            <p>Você ainda não favoritou nenhum produto.</p>
          ) : (
            favoriteProducts.map((product) => (
              <ProductCard 
                key={product.asin}
                product={product}
                isFavorite={true} 
                onToggleFavorite={handleToggleFavorite} 
              />
            ))
          )}
        </div>
      </Main>
    </MainTamplates>
  );
}