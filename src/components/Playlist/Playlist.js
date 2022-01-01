import React from 'react';
import {ListContainer, Line, Song} from '../ResultsList/ResultsList';
import styled from 'styled-components';

const Playlist = () => {
    return (
        <PlaylistContainer>
            <h2>Playlist</h2>
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
`;