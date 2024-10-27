import React from 'react'
import PlaySong from '../components/PlaySong'
import { useParams } from 'react-router-dom'
import { Avatar } from 'antd';

const SongPages = () => {
    const params = useParams();
    const { id, url } = params
    // select * from tbl_songs where id = id;
    const song = {
        id: "3",
        title: "C",
        description: "C description",
        imageUrl: "https://i.pinimg.com/564x/8c/bd/b1/8cbdb1172e0e05b86d911d3e2fe956f2.jpg",
        songUrl: "NewEra.mp3"
    }
    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
            <Avatar
                src={<img src={song.imageUrl} alt="avatar" />}
                size={400}
            />
            <h2>{song.title}</h2>
            <PlaySong url={url} />
        </div>
    )
}

export default SongPages;