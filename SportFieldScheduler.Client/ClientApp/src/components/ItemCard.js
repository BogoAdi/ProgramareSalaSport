//import  "../CSS/ItemCard.css"
import CustomisedCard from './CustomisedCard'


const ItemCard = ({sportField, loading}) =>{
    if(loading) {
        return <h2>Loading...</h2>
    }
    return (
    <div>
        {sportField.map((sportField => (
                        <CustomisedCard 
                            id = {sportField.id}
                            name = {sportField.name}
                            image = {sportField.img}
                            address = {sportField.address}
                            city = {sportField.city}
                            category = {sportField.category}
                            description = {sportField.description}
                            price = {sportField.pricePerHour}
                        />
                    )))}
    </div>
    );

}
export default ItemCard;