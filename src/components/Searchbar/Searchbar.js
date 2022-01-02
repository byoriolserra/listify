import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { updateSearchTerm } from './searchbarSlice';
import { search } from '../ResultsList/resultslistSlice';
import Spotify from '../../util/Spotify';

const Searchbar = () => {

    const dispatch = useDispatch();
    const searchTerm = useSelector(state => state.searchbar.searchTerm);
    
    const handleChange = (e) => {
        const value = e.target.value;
        dispatch(updateSearchTerm(value));
    };

    const handleClick = (e) => {
        e.preventDefault();
        Spotify.search(searchTerm).then(results => dispatch(search(results)));
    };

    return (
        <SearchbarContainer>
            <SearchForm>
                <input id="type" type="text" placeholder='Search for a track' onChange={handleChange} />
                <input id="search" type="submit" value="Search" onClick={handleClick} />
            </SearchForm>
        </SearchbarContainer>
    );
};

export default Searchbar;

const SearchbarContainer = styled.section`
    width: 100%;
    margin-top: 70px;
    display: flex;
    justify-content: center;
`;

export const SearchForm = styled.form`
    width: auto;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: start;

    #type {
        width: 250px;
        padding: 4px 7px;
        border-radius: 5px;
        text-align: center;
        font-size: 13px;
        margin-right: 5px;
        outline: 0;
        border: 1px solid rgba(0, 0, 0, 0.2);

        :focus {
            text-align: left;
        }
    }

    #search {
        background-color: #1db954;
        color: white;
        font-size: 13px;
        padding: 4px 8px;
        border: 0;
        border-radius: 5px;
        cursor: pointer;

        :hover {
            opacity: 0.8;
        }
    }
`;