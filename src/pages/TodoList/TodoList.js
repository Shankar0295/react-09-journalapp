import React, { useState } from 'react';
import Footer from '../../components/Footer/Footer'

const TodoList = () => {
    const [hidebtn, setHidebtn] = useState(true)
    const hidebutton = (e) => {
        setHidebtn(false)
    }
    return (
        <div className='products'>
            <div className="products-name">{hidebtn && <button onClick={hidebutton}>Start penning your todolist...</button>}</div>
            <Footer />
        </div>
    );
}

export default TodoList;