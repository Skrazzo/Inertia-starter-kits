import { Link, useForm } from '@inertiajs/inertia-react';
import React, { useState } from 'react';

const Test = () => {
    function clickHandler(){
        post(route('test'));
    }
    
    const {
        data,
        post,
    } = useForm({
        nickname: 'Skrazzo',
    });
    
    return (
        <>
            <h1>This is test component</h1>
            <button onClick={clickHandler}>Submit</button>
        </>
    )
}

export default Test