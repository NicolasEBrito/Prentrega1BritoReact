import React, { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import { collection, getFirestore, getDocs, query, where } from 'firebase/firestore';
import '../ItemListContainer/ItemListContainer.module.css';
import Filtro from '../Filtro/Filtro';
import Loader from '../Loader/Loader'

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('Todos'); 
  const [loading,setLoading]= useState(true);


  useEffect(() => {
    (async () => {
      setLoading(true);
      const db = getFirestore();
      const docsRef = collection(db, "categorías");
      const querySnapshot = await getDocs(docsRef);
      setCategorias(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    })();
  }, []);

   useEffect(()=>{

        (async ()=>{
            const db = getFirestore()
           
            if(!id){
              const docsRef = collection(db,"products")
              const querySnapshop = await getDocs(docsRef)
              setProducts(querySnapshop.docs.map(doc => ({id:doc.id,...doc.data()})))
            }else{
              const docsRef = collection(db,"products")
              const q = query(docsRef,where("categoryId","==",id))
              const querySnapshop = await getDocs(q)
              setProducts(querySnapshop.docs.map(doc => ({id:doc.id,...doc.data()})))
            }
            setLoading(false)
          })})()

  const handleCategoriaSeleccionada = async (value) => {
    setSelectedCategory(value); 
  };
 if (loading) return <Loader/>
  return (
    <>
      <div>
        <Filtro handleCategoriaSeleccionada={handleCategoriaSeleccionada} categorias={categorias} />
      </div>
      <div className='cartContainer'>
        {products.map(product => <ItemList key={product.id} product={product} />)}
      </div>
    </>
  );
};

export default ItemListContainer;
