import React, { useState, useEffect } from 'react';
import MultipleData from '../MultipleData/MultipleData';

const DataLoad = () => {
    // post data load
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data  => setData(data))
    }, [])
    return (
        <div>
            {
                data.map(data  => <MultipleData data={data}  key={data.id}></MultipleData>)
            }
        </div>
    );
};

export default DataLoad;