import React, { Fragment } from 'react';

export default function DetailModal({ selectedCharacter, setSelectedCharacter, quotes }) {
    return (
        <dialog className="modal" open>
            <h3>{selectedCharacter.name}</h3>
            {`id= ${selectedCharacter._id}`} <br />
            {`race=${selectedCharacter.race}`} <br />
            {`gender=${selectedCharacter.gender}`} <br />
            {quotes && quotes.map(quote => (
                <Fragment key={quote._id}>
                    <blockquote>{quote.dialog}</blockquote>
                </Fragment>
            ))}
            <button onClick={() => setSelectedCharacter(null)} >Close</button>
        </dialog>
    );
}