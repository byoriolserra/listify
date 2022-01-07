import React from 'react';
import { ListContainer, Line, Song, SongContainer } from '../ResultsList/ResultsList';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { remove } from './playlistSlice';

const Playlist = () => {

    const dispatch = useDispatch();
    const playlistTracks = useSelector(state => state.playlist.playlistTracks);

    const handleClick = (track) => () => dispatch(remove(track));


    return (
        <PlaylistContainer>
            <h2>Playlist: <input type="text" placeholder="Name your playlist!"></input></h2>
            <Line />
            {playlistTracks.map(track => {
                return (
                    <SongContainer key={track.id} onClick={handleClick(track)}>
                        <Song>
                            <h3>{track.name}</h3>
                            <p>{track.artist}</p>
                        </Song>
                        <Line />
                    </SongContainer>
                )
            })}
        </PlaylistContainer>
    )
}

export default Playlist;

const PlaylistContainer = styled(ListContainer)`
    justify-content: flex-start;
    margin-right: 0;
    margin-left: 20px;
    min-width: 300px;
    max-width: 400px;
    flex: 0.35;

    h2 {
        padding: 10px 15px;
    }

    input {
        font-weight: 200;
        font-size: 20px;
        background-color: transparent;
        outline: 0;
        border: 0;
    }
`;

