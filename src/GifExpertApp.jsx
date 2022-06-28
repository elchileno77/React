
import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";



export const GifExpertApp = () => {
    const [categories, setCategories] = useState([]);
    
    const onNewObject = (value) => {
        if (categories.includes(value))  return;
        setCategories([value])
    }
    return (
        <>
            {/* titulo*/}
            <h1>GifExpertApp</h1>
            {/* Input*/}
            <AddCategory onNewObject={onNewObject} PlaceHolder={'Agregar Categoria'} />

            {/* Listado de Gif*/}
            <ol>
                {
                    categories.map(category => <GifGrid key={category} category={category} />)
                }
            </ol>
            {/* GifItem*/}
        </>

    )
}
