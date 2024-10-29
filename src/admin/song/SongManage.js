import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SongManage = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:8080/songs')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(responseData => {
                console.log("Dữ liệu từ API:", responseData);
                if (Array.isArray(responseData.data) && responseData.data.length > 0) {
                    setData(responseData.data);
                } else {
                    setData([]);
                }
            })
            .catch(error => {
                console.error('Không thể lấy được dữ liệu: ', error);
                setData([]);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);


    console.log("Dữ liệu sau khi setData:", data);

    const handleAdd = () => {
        navigate('/admin/addsong');
    };

    const handleEdit = (index) => {
        navigate(`/admin/editsong/${index}`);
    };

    const handleDelete = (index) => {
        console.log("Delete button clicked for song index:", index);
        // Thực hiện xoá bài hát ở đây
    };

    return (
        <div>
            {console.log(data)}
            {loading ? (
                <p>Loading data, please wait...</p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Artist</th>
                            <th>Stream URL</th>
                            <th>Image URL</th>
                            <th>Play Count</th>
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
                                    <td>{song.imageUrl}</td>
                                    <td>{song.playCount}</td>
                                    <td>
                                        <button onClick={() => handleEdit(index)}>Edit</button>
                                        <button onClick={() => handleDelete(index)}>Delete</button>
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

export default SongManage;