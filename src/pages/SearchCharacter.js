import React, { useEffect, useState } from 'react';

import api from '../services/api';
import SkeletonCharacters from '../components/SkeletonCharacters';
import PaginationCharacters from '../components/PaginationCharacters';
import ViewCharacters from '../components/ViewCharacters';

import './Characters.css';

function SearchCharacter({ match }) {
    const [characters, setCharacters] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);
    const [charactersPerPage] = useState(2);

    const [active, setActive] = useState(1);

    const [start, setStart] = useState(0);
    const [matchSearch, setMatchSearch] = useState(0);

    let auxSearch = [];

    useEffect(() => {
        async function handleSearch() {
            const responseSearch = await api.get('characters')
            for (let i = 0; i < responseSearch.data.length; i++) {
                if ((responseSearch.data[i].name.toLowerCase()).startsWith((match.params.searchName.toLowerCase())))
                    auxSearch.push(responseSearch.data[i]);
            }
            setCharacters(auxSearch);
            if (auxSearch.length > 0) {
                setCurrentPage(1);
                setActive(1);
                setStart(1);
                setMatchSearch(1);
            }
            else
                setMatchSearch(0);
        }
        handleSearch();

    }, [match.params.searchName]);

    /* useEffect(() => {
        async function handleSearch() {
            const responseSearch = await api.get(`/characters?name=${match.params.searchName}`);
            setCharacters(responseSearch.data);
            setActive(1);
            setStart(1);
        }
        handleSearch();
    }, [match.params.searchName]); */

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
        <section>
            <div className="banner-characters">
                <div className="main-container">
                    {match.params.searchName !== '' && (<h3>Você pesquisou pelo nome {match.params.searchName}</h3>)}
                    {currentCharacters.length > 0 ? (
                        <ViewCharacters characters={currentCharacters} />
                    ) : start === 0 ? (<SkeletonCharacters tam={charactersPerPage} />) :
                            start === 1 && matchSearch === 1 ?
                                (<div className="empty">
                                    <h3>Acabaram os Personagens :(</h3>
                                </div>) : (
                                    <div className="empty">
                                        <h3>Nenhum personagem com o nome {match.params.searchName} :(</h3>
                                    </div>
                                )
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
        </section>

    );
}
export default SearchCharacter;