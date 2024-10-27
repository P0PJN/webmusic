import React from 'react'
import SongCard from '../components/SongCard'
import { Layout } from 'antd';
const { Content } = Layout;
const Home = () => {
    const listSongs = [
        {
            id: "1",
            title: "A",
            description: "A description",
            imageUrl: "https://i.pinimg.com/564x/8c/bd/b1/8cbdb1172e0e05b86d911d3e2fe956f2.jpg",
            songUrl: "NewEra.mp3"
        },
        {
            id: "2",
            title: "B",
            description: "B description",
            imageUrl: "https://i.pinimg.com/564x/8c/bd/b1/8cbdb1172e0e05b86d911d3e2fe956f2.jpg",
            songUrl: "NewEra.mp3"
        },
        {
            id: "3",
            title: "C",
            description: "C description",
            imageUrl: "https://i.pinimg.com/564x/8c/bd/b1/8cbdb1172e0e05b86d911d3e2fe956f2.jpg",
            songUrl: "NewEra.mp3"
        }
    ]
    return (
        <Content style={{ backgroundColor: "white" }}>
            <div
                style={{
                    padding: 24,
                    // minHeight: 510,
                    gap: '1rem',
                    display: 'flex'
                }}
            >
                {listSongs.map(song => {
                    return (
                        <SongCard
                            key={song.id}
                            id={song.id}
                            title={song.title}
                            description={song.description}
                            imageUrl={song.imageUrl}
                            songUrl={song.songUrl}
                        />
                    )

                })}

            </div>
        </Content>
    )
}

export default Home