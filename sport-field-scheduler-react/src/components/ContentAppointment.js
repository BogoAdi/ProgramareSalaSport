//import  "../CSS/ItemCard.css"
import RoundButton from './RoundButton';


const ContentAppointment = ({ appointment }) => {

    return (
        <div>
            {appointment.map((appointment) => (
                <RoundButton
                    id={appointment.id}
                    date={appointment.date}
                    hours={appointment.hours}

                />
            ))}
        </div>
    );

}
export default ContentAppointment;