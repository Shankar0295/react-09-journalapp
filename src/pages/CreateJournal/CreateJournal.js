import React from 'react';
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { useUserAuth } from '../../context/UserAuthContext';
import { db } from '../../auth/firebase'


const CreateJournal = () => {

    const { user } = useUserAuth();
    console.log(user)

    const dateHandler = () => {
        const date = new Date();
        return date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()
    }
    const handleTextarea = (e) => {
        e.preventDefault();
        console.log(e.target[0].value)
        addDatainFireStore(e.target[0].value);
        document.getElementById('notes').value = ''
    }

    const addDatainFireStore = async (value) => {
        if (value) {
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
        } else {
            alert("Please add some mood")
        }
    }
    return (
        <div className="content">
            <form onSubmit={handleTextarea}>
                <textarea rows="4" cols="50" id="notes"></textarea>
                <button type="submit">Save</button>
            </form>
        </div>
    )
}

export default CreateJournal