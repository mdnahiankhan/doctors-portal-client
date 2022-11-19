import chair from '../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import bg from '../../assets/images/bg.png'

const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {

    return (
        <header className='my-6'
            style={{
                background: `url(${bg})`
            }}
        >
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} className="max-w-sm rounded-lg shadow-lg " alt='patience chair' />
                    <div className='mr-8 shadow-xl rounded-lg'>
                        <DayPicker
                            mode='single'
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                        />

                    </div>
                </div>

            </div>
        </header>
    );
};

export default AppointmentBanner;