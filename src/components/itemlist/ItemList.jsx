import Item from "../Item/Item"
import { getProducts } from "../data/asyncMock"
import { useEffect, useState } from "react" //Importamos Hookreact useState
import Loading from "../loading/Loading"; //Importamos componete Loading

export default function ItemList(){
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);// Declaramos las varieables Loading y setLoading

    useEffect(() => {
        getProducts().then((data) =>{
           setProducts(data)
           setLoading(false);
    });
    }, []);
    


    return(
        <>
            {
                loading? (
                    <Loading />
                ):(
                    <div className="flex flex-warp">
                        {products.map((prod) =>(
                            <Item{...prod} key={prod.id}/>
                        ))} 
                    </div>
                )
            }
        </>
    )
}



