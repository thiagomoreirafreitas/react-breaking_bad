import React, { useEffect, useState } from 'react';

import api from '../services/api';
import SkeletonCharacters from '../components/SkeletonCharacters';
import PaginationCharacters from '../components/PaginationCharacters';
import ViewCharacters from '../components/ViewCharacters';

import './Characters.css';

function SearchCharacter({ match }) {
    const [characters, setCharacters] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);
    const [charactersPerPage] = useState(8);

    const [active, setActive] = useState(1);

    const [start, setStart] = useState(0);

    useEffect(() => {
        async function handleSearch() {
            const responseSearch = await api.get(`/characters?name=${match.params.searchName}`);
            setCharacters(responseSearch.data);
            setActive(1);
            setStart(1);
        }
        handleSearch();
    }, [match.params.searchName]);

    const indexOfLastCharacter = currentPage * charactersPerPage;
    const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage;
    const currentCharacters = characters.slice(indexOfFirstCharacter, indexOfLastCharacter);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(characters.length / charactersPerPage); i++) {
        pageNumbers.push(i);
    }

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
        setActive(pageNumber);
    };

    const prev = (pageNumber) => {
        setCurrentPage(pageNumber);
        setActive(pageNumber);
    }

    const next = (pageNumber) => {
        setCurrentPage(pageNumber);
        setActive(pageNumber);
    }

    return (
        <div className="main-container">
            <div className="characters">
                {match.params.searchName !== '' && (<h2>Você pesquisou pelo nome {match.params.searchName}</h2>)}
                {currentCharacters.length > 0 ? (
                    <ViewCharacters characters={currentCharacters} />
                ) : start === 1 ? (
                    <div className="empty">
                        <h2>Nenhum Personagem :(</h2>
                    </div>
                ) : (<SkeletonCharacters tam={8} />)
                }
            </div>
            <PaginationCharacters
                pageNumbers={pageNumbers}
                currentCharacters={currentCharacters}
                active={active}
                paginate={paginate}
                prev={prev}
                next={next} />
        </div>
    );
}
export default SearchCharacter;