import React, { useEffect } from 'react';
import './JournalDashboard.css';
import { useNavigate, Link } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import { collection, getDocs } from "firebase/firestore";
import { useUserAuth } from '../../context/UserAuthContext';
import { db } from '../../auth/firebase';

const JournalDashboard = () => {
    let navigate = useNavigate();
    const { user } = useUserAuth();
    console.log(user)
    const gotoCreate = (e) => {
        return navigate('/create')
    }

    useEffect(() => {
        getData()
    })

    const getData = async () => {
        const querySnapshot = await getDocs(collection(db, "journals", user.uid, "data"));
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
        });
    };


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
            <Footer />
        </div>

    )
}

export default JournalDashboard