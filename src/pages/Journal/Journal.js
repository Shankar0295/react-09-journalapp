import React from 'react';
import Footer from '../../components/Footer/Footer'
import { useNavigate } from 'react-router';

const Journal = () => {
    let navigate = useNavigate();
    const hidebutton = (e) => {
        return navigate('/journaldashboard')
    }
    return (
        <div className='products'>
            <div className="products-name">
                <button onClick={hidebutton} className="pen-btn">Start penning your journal...</button>
            </div>
            <Footer />
        </div>
    );
}

export default Journal;