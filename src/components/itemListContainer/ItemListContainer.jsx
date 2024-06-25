import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import { collection, getFirestore, getDocs, query, where } from 'firebase/firestore';
import styles from './ItemListContainer.module.css';
import Filtro from '../Filtro/Filtro';
import Loader from '../Loader/Loader';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('Todos'); 
  const [loader, setLoader]=useState(true)


  useEffect(() => {
    const fetchCategorias = async () => {
      setLoader(true)
      const db = getFirestore();
      const docsRef = collection(db, "categorias");
      const querySnapshot = await getDocs(docsRef);
      setCategorias(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };

    fetchCategorias();
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      const db = getFirestore();
      let docsRef = collection(db, "products");

      if (selectedCategory !== 'Todos') {
        docsRef = query(docsRef, where("categoryId", "==", selectedCategory));
      }

      const querySnapshot = await getDocs(docsRef);
      setProducts(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };
      setLoader(false)
      fetchProducts();
  }, [selectedCategory]);

  const handleCategoriaSeleccionada = (value) => {
    setSelectedCategory(value); 
  };

  if(loader){
    return <Loader/>
  }
  return (
    <>
      <div>
        <Filtro handleCategoriaSeleccionada={handleCategoriaSeleccionada} categorías={categorias} />
      </div>
      <div className={styles.cartContainer}>
        {products.map(item => <Item key={item.id} item={item} />)}
      </div>
    </>
  );
};

export default ItemListContainer;