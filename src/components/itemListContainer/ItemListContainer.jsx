/*import React, { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import { collection, getFirestore, getDocs, query, where } from 'firebase/firestore';
import styles from './ItemListContainer.module.css';
import Filtro from '../Filtro/Filtro';


const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('Todos'); 

  useEffect(() => {
    const fetchCategorias = async () => {
    
      const db = getFirestore();
      const docsRef = collection(db, "categorías");
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

      const querySnapshop = await getDocs(docsRef);
      setProducts(querySnapshop.docs.map(doc => ({ id: doc.id, ...doc.data() })));
  
    };

    fetchProducts();
  }, [selectedCategory]);

  const handleCategoriaSeleccionada = (value) => {
    setSelectedCategory(value); 
  };

  return (
    <>
      <div>
        <Filtro handleCategoriaSeleccionada={handleCategoriaSeleccionada} categorias={categorias} />
      </div>
      <div className={styles.cartContainer}>
        {products.map(product => <ItemList key={product.id} product={product} />)}
      </div>
    </>
  );
};

export default ItemListContainer;*/
import React, { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import { collection, getFirestore, getDocs, query, where } from 'firebase/firestore';
import styles from './ItemListContainer.module.css';
import Filtro from '../Filtro/Filtro';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('Todos'); 

  useEffect(() => {
    const fetchCategorias = async () => {
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

    fetchProducts();
  }, [selectedCategory]);

  const handleCategoriaSeleccionada = (value) => {
    setSelectedCategory(value); 
  };

  return (
    <>
      <div>
        <Filtro handleCategoriaSeleccionada={handleCategoriaSeleccionada} categorías={categorias} />
      </div>
      <div className={styles.cartContainer}>
        {products.map(product => <ItemList key={product.id} product={product} />)}
      </div>
    </>
  );
};

export default ItemListContainer;