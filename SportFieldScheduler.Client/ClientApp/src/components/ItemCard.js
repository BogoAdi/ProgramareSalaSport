import  "../CSS/ItemCard.css"

const ItemCard =({name, imgUrl, pricePerHour, City})=>{
    return (
        <div className="card-container"> 
                <img className="sportfield-img" src={imgUrl}
                alt="photo"
                />
            <br/>
            <div className = "sport-field-name">
                Name = {name}
            </div>
            <div className = "price-per-hour">
                Price = {pricePerHour}$
            </div>
            <div className = "city">
                City ={City}
            </div>
        </div>
    )

}
export default ItemCard;