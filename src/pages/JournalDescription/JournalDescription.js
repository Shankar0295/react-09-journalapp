import React from 'react';
import './JournalDescription.css';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { dateConverter } from '../../utils/helper';
import Footer from '../../components/Footer/Footer';


const JournalDescription = () => {
    const { state } = useLocation();
    console.log(state, "state")

    const { date_added, day_added, date_created, date_modified, text, moodIcon, mood } = state

    return (
        <div className="content">
            <div className="content-wrapper">
                <div className="description-container">
                    <div>
                        <Link to="/journaldashboard" className="goback">Go back</Link>
                    </div>
                    <div className="description-text added-date">
                        <p>{day_added}, {dateConverter(date_added)}</p>
                    </div>
                    <div className="description-text">
                        <p className="description-text">{text}</p>
                        <p>{moodIcon} {mood}</p>
                    </div>
                    <div className="description-text date-color">
                        <p><em>Date Created: {date_created}</em></p>
                        {date_modified && <p><em>Date Modified: {date_modified}</em></p>}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default JournalDescription