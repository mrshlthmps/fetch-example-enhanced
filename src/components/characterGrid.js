// CharacterGrid.js
import React, { Fragment } from 'react';

const CharacterGrid = ({ characters, onCharacterSelect }) => {
    return (
        <div className="grid">
            <span>Name</span>
            <span>Gender</span>
            <span>Species</span>
            {characters && characters.map(character => (
                <Fragment key={character._id}>
                    <span>
                        <button className="name" onClick={() => onCharacterSelect(character)}>
                            <h2>{character.name}</h2>
                        </button>
                    </span>
                    <span>
                        {character.gender}
                    </span>
                    <span>
                        {character.race}
                    </span>
                </Fragment>
            ))}
        </div>
    );
};

export default CharacterGrid;