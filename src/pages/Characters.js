import React, { useEffect, useState } from 'react';
import api from '../services/api';

import './Characters.css';
import SkeletonCharacters from '../components/SkeletonCharacters';
import PaginationCharacters from '../components/PaginationCharacters';
import ViewCharacters from '../components/ViewCharacters';

function Characters() {
    const [characters, setCharacters] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);
    const [charactersPerPage] = useState(8);

    const [active, setActive] = useState(1);
    const [limit] = useState(40);
    const [page, setPage] = useState(1);
    const [offset, setOffset] = useState(0);
    const [start, setStart] = useState(0);

    //Obtém registros com limit e offset
    useEffect(() => {
        async function loadCharacters(limit, offset) {
            const response = await api.get(`characters?limit=${limit}&offset=${offset}`)
            setCharacters(characters.concat(response.data));
            if (characters.length > 0) {
                setPage(page + 1);
                setOffset(page * limit);
            }
            setStart(1);
        }
        loadCharacters(limit, offset);
    }, []);


    /*  //Obtém todos registros
        useEffect(() => {
             async function loadCharacters() {
                 const response = await api.get('characters')
                 setCharacters(response.data);
             }
             loadCharacters();
         }, []); */

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
        if (pageNumbers[pageNumbers.length - 1] < pageNumber) {
            nextPage();
        }
        setCurrentPage(pageNumber);
        setActive(pageNumber);
    }

    async function nextPage() {
        setPage(page + 1);
        setOffset(page * limit);
        const response = await api.get(`characters?limit=${limit}&offset=${offset}`)
        setCharacters(characters.concat(response.data));
    }

    return (
        <div className="characters">
            <h2>Personagens</h2>
            <div className="main-container">
                {currentCharacters.length > 0 ? (
                    <ViewCharacters characters={currentCharacters} />
                ) : offset === 0 && start === 1 ? (
                    <div className="empty">
                        <h2>Nenhum Personagem :(</h2>
                        <h2>Atualize a página</h2>
                    </div>
                ) : (<SkeletonCharacters tam={8} />)
                    /* <div className="empty">
                    Acabaram os Personagens :(
                    </div> */
                }
                <PaginationCharacters
                    pageNumbers={pageNumbers}
                    currentCharacters={currentCharacters}
                    active={active}
                    paginate={paginate}
                    prev={prev}
                    next={next} />
            </div>
        </div>
    );
}
export default Characters;