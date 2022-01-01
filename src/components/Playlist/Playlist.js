import React from 'react';
import {ListContainer, Line, Song} from '../ResultsList/ResultsList';
import styled from 'styled-components';

const Playlist = () => {
    return (
        <PlaylistContainer>
            <h2>Playlist: <input type="text" placeholder="Name your playlist!"></input></h2>
            <Line />
            <Song>
                <h3>La Fama</h3>
                <p>Rosalia</p>
            </Song>
            <Line />
            <Song>
                <h3>Reactor</h3>
                <p>Woodkid</p>
            </Song>
            <Line />
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