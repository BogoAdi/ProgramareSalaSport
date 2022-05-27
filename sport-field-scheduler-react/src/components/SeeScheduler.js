import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import AppointmentsCalendar from './AppointmentsCalendar';
import { useParams } from "react-router-dom";


const SeeScheduler = () => {
    let { id } = useParams();
    return (
        <>
            <div id="Show table">
                <Link to={`/select-date/${id}`}>
                    <Button  >Back
                    </Button>
                </Link>
            </div>
            <AppointmentsCalendar selectedSportFieldId={id} />
        </>
    )

}
export default SeeScheduler;