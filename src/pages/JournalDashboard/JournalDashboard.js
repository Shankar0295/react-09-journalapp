import React, { useState, useEffect } from 'react';
import './JournalDashboard.css';
import { useNavigate, Link } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import { collection, getDocs } from "firebase/firestore";
import { useUserAuth } from '../../context/UserAuthContext';
import { db } from '../../auth/firebase';
import { FaEdit, FaTrash } from 'react-icons/fa';

const JournalDashboard = () => {
    const [data, setData] = useState([])
    let navigate = useNavigate();
    const { user } = useUserAuth();
    console.log(user)
    const gotoCreate = (e) => {
        return navigate('/create')
    }

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        let arr = []
        const querySnapshot = await getDocs(collection(db, "journals", user.uid, "data"));
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            arr.push(doc.data())
        });
        setData(arr)
    };

    const handleEdit = (id) => {
        let findItem = data.find((item) => item.id === id)
        navigate('/create', { state: findItem })
    }

    console.log(data)


    return (
        <div className="content">
            <div className="create-button-container"><button onClick={gotoCreate} className="pen-btn">Create Journal</button></div>
            <div className="journalcard-container">
                {data.map((item) => {
                    return (
                        <div className="journal-text_container" key={item.id}>
                            <p className="journal-text">{item.text}
                            </p>
                            <div className="journal-mood">
                                <p>:) {item.mood}</p>
                                <p>{item.date_added}</p>
                            </div>
                            <hr className="seperator"></hr>
                            <div className="journal-stamp">
                                <Link to="/journaldetails" key={item.id}>Read more</Link>
                                <div>
                                    <FaEdit className="icon-edit" onClick={() => handleEdit(item.id)} />
                                    <FaTrash />
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <Footer />
        </div>

    )
}

export default JournalDashboard