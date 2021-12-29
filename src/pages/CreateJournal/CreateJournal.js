import React, { useState, useEffect } from 'react';
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { useUserAuth } from '../../context/UserAuthContext';
import { db } from '../../auth/firebase'
import { useLocation } from 'react-router-dom';
import './CreateJournal.css'
import { FaEdit } from 'react-icons/fa';


const CreateJournal = () => {
    const [text, setText] = useState("")
    const [edit, setEdit] = useState(false)
    const { user } = useUserAuth();
    console.log(user)
    const { state } = useLocation();
    console.log(state, "state")
    console.log(edit)

    const emotionContainer = [{
        id: 1,
        value: "Happy",
        labelName: "Happy"
    }, {
        id: 2,
        value: "Sad",
        labelName: "Sad"
    }]


    useEffect(() => {
        if (state) {
            setText(state.text)
            setEdit(true)
        }
    }, [state])
    const dateHandler = () => {
        const date = new Date();
        return date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()
    }

    const handleTextarea = (e) => {
        e.preventDefault();
        console.log(e.target[0].value)
        setText(e.target[0].value)
        addDatainFireStore(text);
        setText("")
    }

    const addDatainFireStore = async (value) => {
        if (value && !edit) {
            const id = new Date().getTime().toString();
            const journalRef = doc(db, "journals", user.uid, "data", id);
            console.log(user.uid)
            try {
                await setDoc(journalRef,
                    { text: value, mood: "Happy", timestamp: serverTimestamp(), id: id, date_added: dateHandler(), date_modified: "", type: "moodjournal" }, { merge: true })
            }
            catch (error) {
                console.log(error);
            }
        } else if (value && edit) {
            const id = state.id
            const journalRef = doc(db, "journals", user.uid, "data", id);
            console.log(user.uid, id)
            try {
                await setDoc(journalRef,
                    { text: value, mood: "Happy", timestamp: serverTimestamp(), id: id, date_added: state.date_added, date_modified: dateHandler(), type: "moodjournal" }, { merge: true })
                setEdit(false);
            }
            catch (error) {
                console.log(error);
            }
        } else {
            alert("Please add some mood")
        }
    }

    return (
        <div className="content">
            <form onSubmit={handleTextarea}>
                <textarea rows="4" cols="50" name="notes" id="notes" value={text} onChange={(e) => setText(e.target.value)}></textarea>
                <button type="submit">Save</button>

                {emotionContainer.map((item) => {
                    return (
                        <div className="radio-toolbar" key={item.id}>
                            <input type="radio" id={item.id} name="moodbtn" value={item.value} />
                            <label htmlFor={item.id}><FaEdit />{item.labelName}</label>
                        </div>
                    )
                })}
            </form>
        </div>
    )
}

export default CreateJournal