import React from 'react';

import { Pagination } from 'react-bootstrap';
import './PaginationCharacters.css';

function PaginationCharacters({
    pageNumbers,
    currentCharacters,
    active,
    paginate,
    prev,
    next }) {

    return (
            <Pagination size="lg">
                {(active - 1) >= pageNumbers[0] && <Pagination.Prev onClick={() => prev(active - 1)} />}
                {
                    pageNumbers.map(number => (
                        <Pagination.Item key={number} active={number === active} onClick={() => paginate(number)}>{number}</Pagination.Item>
                    ))
                }
                {currentCharacters.length > 1 && < Pagination.Next onClick={() => next(active + 1)} />}
            </Pagination>
    );
}
export default PaginationCharacters;

