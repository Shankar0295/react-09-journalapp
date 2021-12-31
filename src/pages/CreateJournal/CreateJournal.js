import React, { useState, useEffect } from 'react';
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { useUserAuth } from '../../context/UserAuthContext';
import { db } from '../../auth/firebase'
import { useLocation } from 'react-router-dom';
import './CreateJournal.css';
import Footer from '../../components/Footer/Footer'
import JsonData from '../../utils/emoji.json'
import { Link } from 'react-router-dom'


const CreateJournal = () => {
    const [text, setText] = useState("")
    const [edit, setEdit] = useState(false)
    const [radioVal, setRadioVal] = useState("")
    const [dateVal, setDateVal] = useState("")
    const { user } = useUserAuth();
    console.log(user)
    const { state } = useLocation();
    console.log(state, "state")
    console.log(edit)

    const emotionContainer = [{
        id: 1,
        value: "Happy",
        labelName: "Happy",
        emoji: JsonData[0].happy,
    }, {
        id: 2,
        value: "Sad",
        labelName: "Sad",
        emoji: JsonData[1].sad,
    }, {
        id: 3,
        value: "Fear",
        labelName: "Fear",
        emoji: JsonData[2].fear,
    }, {
        id: 4,
        value: "Joy",
        labelName: "Joy",
        emoji: JsonData[3].joy,
    }, {
        id: 5,
        value: "Suprise",
        labelName: "Suprise",
        emoji: JsonData[4].suprise,
    }, {
        id: 6,
        value: "Disgust",
        labelName: "Disgust",
        emoji: JsonData[5].disgust,
    }, {
        id: 7,
        value: "Shame",
        labelName: "Shame",
        emoji: JsonData[6].shame,
    }]


    useEffect(() => {
        if (state) {
            setText(state.text)
            setRadioVal(state.mood)
            setDateVal(state.date_added)
            setEdit(true)
        }
    }, [state])
    const dateHandler = () => {
        const date = new Date();
        return date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()
    }

    const handleTextarea = (e) => {
        e.preventDefault();
        console.log(e)
        console.log(dateVal, radioVal, text, "Datae")
        addDatainFireStore(text, dateVal, radioVal);
    }

    const emojiPicker = (moodValue) => {
        if (moodValue === "Happy") {
            return JsonData[0].happy
        } else if (moodValue === "Sad") {
            return JsonData[1].sad
        } else if (moodValue === "Fear") {
            return JsonData[2].fear
        } else if (moodValue === "Joy") {
            return JsonData[3].joy
        } else if (moodValue === "Suprise") {
            return JsonData[4].suprise
        } else if (moodValue === "Disgust") {
            return JsonData[5].disgust
        } else if (moodValue === "Shame") {
            return JsonData[6].shame
        }
    }

    const addDatainFireStore = async (value, date, mood) => {
        if (value && date && mood && !edit) {
            const id = new Date().getTime().toString();
            const journalRef = doc(db, "journals", user.uid, "data", id);
            console.log(user.uid)
            try {
                await setDoc(journalRef,
                    { text: value, mood: mood, moodIcon: emojiPicker(mood), timestamp: serverTimestamp(), id: id, date_added: date, date_created: dateHandler(), date_modified: "", type: "moodjournal" }, { merge: true })
                alert("Added Successfully");
                setText("");
                setRadioVal("");
                setDateVal("");
            }
            catch (error) {
                console.log(error);
            }
        } else if (value && date && mood && edit) {
            const id = state.id
            const journalRef = doc(db, "journals", user.uid, "data", id);
            console.log(user.uid, id)
            try {
                await setDoc(journalRef,
                    { text: value, mood: mood, timestamp: serverTimestamp(), id: id, date_added: date, date_created: state.date_created, date_modified: dateHandler(), type: "moodjournal" }, { merge: true })
                setEdit(false);
                setText("");
                setRadioVal("");
                setDateVal("");
            }
            catch (error) {
                console.log(error);
            }
        } else {
            alert("Please complete all the fields")
        }
    }

    const handleRadio = (e, i) => {
        console.log(e.target.checked, i)
        setRadioVal(e.target.value)
    }


    return (
        <div className="content ml-0">
            <form onSubmit={handleTextarea} className="form-container">
                <Link to="/journaldashboard" className="goback">Go back</Link>
                <div>
                    <label className="date-label"><h6>Pick a date</h6></label>
                    <input type="date" className="date-input" value={dateVal} onChange={(e) => setDateVal(e.target.value)} />
                </div>
                <textarea rows="18" cols="50" name="notes" id="notes" placeholder="pen your thoughts..." value={text} onChange={(e) => setText(e.target.value)}></textarea>
                <h6>Select your mood..</h6>
                <div className="radio-toolbar-container">
                    {emotionContainer.map((item, i) => {
                        return (
                            <div className="radio-toolbar" key={item.id}>
                                <input type="radio" id={item.id} name="moodbtn" value={item.value} checked={radioVal === item.value} onChange={(e) => handleRadio(e, i)} />
                                <label htmlFor={item.id} className="radio-label">{item.emoji} {item.labelName}</label>
                            </div>
                        )
                    })}
                </div>
                <div className="save-btn-container"><button type="submit" className="save-btn">Save</button></div>
            </form>
            <Footer />
        </div>
    )
}

export default CreateJournal