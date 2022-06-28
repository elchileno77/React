import { GifGridItem } from "./GifGridItem";
import { useFetchGifs } from "../Hooks/useFetchGifs";



export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs(category);

    return (
        <>
            <h2>Busqueda : {category}</h2>
            {
                isLoading && <h3 >Cargado...</h3>
            }

            <div className="card-grid">
                {
                    images.map(image =>
                        <GifGridItem key={image.id} {...image} />)
                }
            </div>
        </>
    )

}


