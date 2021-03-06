import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { add } from '../Playlist/playlistSlice';

const ResultsList = () => {

    const tracks = useSelector(state => state.resultslist.searchResults);
    const dispatch = useDispatch();

    const handleClick = (track) => () => dispatch(add(track));

    return (
        <ListContainer>
            <h2>Results</h2>
            <Line />
            {tracks.map(track => {
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
        </ListContainer>
    )
}

export default ResultsList;


export const ListContainer = styled.div`
    border: 2px solid #1ed760;
    color: #191414;
    flex: 0.35;
    height: 50vh;
    min-width: 300px;
    max-width: 400px;
    border-radius: 5px;
    margin-right: 20px;
    overflow: scroll;

    h2 {
        padding: 10px 15px;
        font-weight: 500;
        font-size: 20px;
        opacity: 0.8;
        background-color: rgba(0, 0, 0, .08)
    }
`;

export const Line = styled.hr`
    border: 1px solid #1ed760;
`;

export const Song = styled.div`
    padding: 5px 15px;
    font-size: 13px;
    cursor: pointer;

    h3 {
        font-size: 13px;
    }

    :hover {
        background-color: #e5fbed;
    }
`;

export const SongContainer = styled.a`
`;