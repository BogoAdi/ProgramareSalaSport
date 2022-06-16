//import  "../CSS/ItemCard.css"
import CustomisedCard from './CustomisedCard'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const ItemCard = ({ sportField, loading }) => {
    if (loading) {
        return <h2>Loading...</h2>
    }
    return (
        <>
            <Box sx={{ flexGrow: 1, margin: "0 5% 0 5%" }}>
                <Grid container spacing={2} sx={{ mt: '20px', mb: '20px' }} >
                    {sportField.map((sportField, index) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={sportField.id}>
                            <CustomisedCard
                                key={index}
                                id={sportField.id}
                                name={sportField.name}
                                image={sportField.img}
                                address={sportField.address}
                                city={sportField.city}
                                category={sportField.category}
                                description={sportField.description}
                                price={sportField.pricePerHour}

                            />
                        </Grid>

                    ))}
                </Grid>
            </Box>
        </>
    );

}
export default ItemCard;