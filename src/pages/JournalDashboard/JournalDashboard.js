import React, { useState, useEffect } from 'react';
import './JournalDashboard.css';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import { useUserAuth } from '../../context/UserAuthContext';
import { db } from '../../auth/firebase';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { dateConverter } from '../../utils/helper';
import Loading from '../../components/Loading/Loading'

const JournalDashboard = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    let navigate = useNavigate();
    const { user } = useUserAuth();
    console.log(user)
    const gotoCreate = (e) => {
        return navigate('/create')
    }

    useEffect(() => {
        getData()// eslint-disable-next-line
    }, [])

    const getData = async () => {
        let arr = []
        const querySnapshot = await getDocs(collection(db, "journals", user.uid, "data"));
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            arr.push(doc.data())
        });
        setData(arr)
        setLoading(false)
    };



    const handleEdit = (id) => {
        let findItem = data.find((item) => item.id === id)
        navigate('/create', { state: findItem })
    }

    const handleDelete = async (id) => {
        await deleteDoc(doc(db, "journals", user.uid, "data", id))
        alert("Removed one item")
        await getData();
    }

    const gotoDescription = (id) => {
        let findItem = data.find((item) => item.id === id);
        navigate('/journaldetails', { state: findItem })
    }

    console.log(data)

    if (loading) {
        <Loading />
    }

    return (
        <div className="content">
            <div className="content-wrapper">
                <div className="create-button-container"><button onClick={gotoCreate} className="pen-btn">Create Journal</button></div>
                {data.length > 0 ? <div className="journalcard-container">
                    {data.map((item) => {
                        return (
                            <div className="journal-text_container" key={item.id}>
                                <p className="journal-text">{item.text}
                                </p>
                                <div className="journal-mood">
                                    <p>{item.moodIcon} {item.mood}</p>
                                    <p>{dateConverter(item.date_added)}</p>
                                </div>
                                <hr className="seperator"></hr>
                                <div className="journal-stamp">
                                    <button className="read-journal" onClick={() => gotoDescription(item.id)}>Read more</button>
                                    <div>
                                        <FaEdit className="icon-edit" onClick={() => handleEdit(item.id)} />
                                        <FaTrash onClick={() => handleDelete(item.id)} />
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div> : <div className="no-items">No items to show</div>}
            </div>
            <Footer />
        </div>

    )
}

export default JournalDashboard