import React from 'react';

import { Badge } from 'react-bootstrap';
import { MdStarBorder } from 'react-icons/md';

import './ViewCharacters.css';

function ViewCharacters({ characters }) {
    return (
        <ul>
            {
                characters.map(
                    character => (
                        <li key={character.char_id}>
                            {character.status === 'Presumed dead' && <Badge variant="warning" className="badge">Morto ?</Badge>}
                            {character.status === 'Alive' && <Badge variant="success" className="badge">Vivo</Badge>}
                            {character.status === 'Deceased' && <Badge variant="danger" className="badge">Morto</Badge>}
                            <img src={character.img} alt={character.name} />
                            <footer>
                                <strong>{character.name}</strong> ({character.nickname})
                                <p>{character.occupation}</p>
                            </footer>
                        </li>))
            }
        </ul>
    );
}
export default ViewCharacters;
