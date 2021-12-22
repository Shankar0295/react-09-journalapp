import React from 'react';
import './JournalDashboard.css';
import { useNavigate, Link } from 'react-router-dom';

const JournalDashboard = () => {
    let navigate = useNavigate();
    const gotoCreate = (e) => {
        return navigate('/create')
    }
    return (
        <div className="content">
            <div className="create-button-container"><button onClick={gotoCreate} className="pen-btn">Create Journal</button></div>
            <div className="journalcard-container">
                <Link to="/journaldetails"><div className="journal-text_container">
                    <p className="journal-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                    <div className="journal-stamp">
                        <p>:) Happy</p>
                        <p>22/12/2021</p>
                    </div>
                </div></Link>
                <div className="journal-text_container">
                    <p className="journal-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                    <div className="journal-stamp">
                        <p>:) Happy</p>
                        <p>22/12/2021</p>
                    </div>
                </div>
                <div className="journal-text_container">
                    <p className="journal-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                    <div className="journal-stamp">
                        <p>:) Happy</p>
                        <p>22/12/2021</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default JournalDashboard