import {Link} from "react-router-dom"

export default function Item(){
    const imgProd = "./imgzapatilla"
    const name = "Producto Uno"
    const price = 299;

    return(
        <div className="flex-col items-center my-[10px] mx-[10px]">
            <Link to=""><img src={imgProd} alt="Imagen Productos"/></Link>

            <Link to="" className="text-[22px] font-blod my-[15px] tracking-[3px] 
            uppercase text-[#2d3a4b] hover:text-[rgb(255,255,255,21)]">{name}</Link>

            <h4 className="text-[18px] font-blod mb-[20px]">${price}</h4>

        </div>
    )
}