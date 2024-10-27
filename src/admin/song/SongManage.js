import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SongTable = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        fetch('http://localhost:8080/songs')
            .then(response => response.json())
            .then(data => {
                setData(data)
                setLoading(false)
            })
            .catch(error => {
                console.error('không thể lấy được dữ liệu: ', error)
                setLoading(false)
            })
    }, []);

    const handleAdd = () => {
        navigate('/admin/addsong');
    };

    const handleEdit = () => {
        navigate('/admin/editsong')
    };

    const handleDelete = (index) => {
        console.log("Delete button clicked for song index:", index);
        // delete
    };

    return (
        <div>
            {loading ? (
                <p>Loading data, please wait...</p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Artist</th>
                            <th>StreamUrl</th>
                            <th>PlayCount</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.length === 0 ? (
                            <tr>
                                <td colSpan="5">No data available...</td>
                            </tr>
                        ) : (
                            data.map((song, index) => (
                                <tr key={index}>
                                    <td>{song.title}</td>
                                    <td>{song.artist}</td>
                                    <td>{song.streamUrl}</td>
                                    <td>{song.playCount}</td>
                                    <td>
                                        <button onClick={() => handleEdit(index)}>Edit</button>
                                        <button style={{ marginLeft: '10px' }} onClick={() => handleDelete(index)}>Delete</button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            )}
            <div style={{ marginTop: '20px' }}>
                <button onClick={handleAdd}>Add Song</button>
            </div>
        </div>
    );
};

export default SongTable;
