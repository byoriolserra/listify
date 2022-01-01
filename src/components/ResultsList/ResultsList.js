import React from 'react';
import styled from 'styled-components';

const ResultsList = () => {
    return (
        <ListContainer>
            <h2>Results</h2>
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

    h3 {
        font-size: 13px;
    }
`;