import React from 'react';
import styled from 'styled-components';

const SaveButton = () => {
    return (
        <SaveButtonContainer>
            <Button>
                Save Playlist
            </Button>
        </SaveButtonContainer>
    )
}

export default SaveButton;

const SaveButtonContainer = styled.section`
    width: 100%;
    margin-top: 40px;
    display: flex;
    justify-content: center;
`;

export const Button = styled.button`
    padding: 10px;
    border-radius: 5px;
    background-color: #1db954;
    color: white;
    cursor: pointer;
    font-weight: 500;
    font-size: 15px;
    border: 0;

    :hover {
        opacity: 0.8;
    }
`;