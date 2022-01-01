import React from 'react';
import styled from 'styled-components';
import Playlist from '../Playlist/Playlist';
import ResultsList from '../ResultsList/ResultsList';

const ListSection = () => {
    return (
        <ListSectionContainer>
            <ResultsList />
            <Playlist />
        </ListSectionContainer>
    )
}

export default ListSection;

const ListSectionContainer = styled.section`
    width: 100%;
    height: auto;
    margin-top: 60px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;