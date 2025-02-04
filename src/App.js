import { Fragment, useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { getCharacters, getCharacterQuotes } from './lib/charactersApi';
import DetailModal from './components/detailModal';
import CharacterGrid from './components/characterGrid';

function App() {

  const [characters, setCharacters] = useState(null);
  const [page, setPage] = useState(null);
  const [pages, setPages] = useState(null);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [quotes, setQuotes] = useState(null);

  useEffect(() => {
    getCharacters().then(data => {
      setCharacters(data.docs);
      setPage(1);
      setPages(data.pages)
    });
  }, []);  // Runs once

  const handleSelection = async (c) => {
    // console.log('Selected character:', c);
    // Retrieves data for the selected character to show on the modal
    const characterQuotes = await getCharacterQuotes(c._id);
    setQuotes(characterQuotes.docs);
    setSelectedCharacter(c);
  };

  const handleNextPage = async () => {  // Pagination
    console.log('handleNextPage: ' + page);
    if (page && page < pages) {
      const nextPage = page + 1;
      const data = await getCharacters(nextPage);
      setCharacters(data.docs);
      setPage(nextPage);
    }
  };

  const handlePrevPage = async () => {  // Pagination
    console.log('handlePrevPage: ' + page);
    if (page > 1) {
      const prevPage = page - 1;
      const data = await getCharacters(prevPage);
      setCharacters(data.docs);
      setPage(prevPage);
    }
  };

  console.log(page, pages);

  return (
    <div className="App">
      <div className="App-content">
        <h1>Lord of the Rings Characters</h1>
        <p>
          <CharacterGrid characters={characters} onCharacterSelect={handleSelection} />
        </p>
        <div className="actions">
          {
            page > 1 &&
            <button className="btn" onClick={() => handlePrevPage()}>Previous</button>
          }
          {page && (page < pages) &&
            <button
              className="btn"
              onClick={() => handleNextPage()}
            >
              Next
            </button>
          }
        </div>
      </div>
      {selectedCharacter !== null &&
        <DetailModal
          selectedCharacter={selectedCharacter}
          setSelectedCharacter={setSelectedCharacter}
          quotes={quotes}
        />
      }
    </div>
  );
}

export default App;
