import React, { useState, useEffect } from 'react';

const Search = ( {listOfQuestions} ) => {

  const [items, setItems] = useState(listOfQuestions);

// Needs to filter the listOfQuestions and update to questions without changing listOfQuestions state?

  return (
    <div>
      <div className="search-input">
        <input
          type="text"
          placeholder="Have a Question? Searchfor answers..."
        />
      </div>
      <button >Search</button>
    </div>
  );

};

export default Search;

/*

Search terms entered in this text input will filter the list for matching results



https://dev.to/asimdahall/simple-search-form-in-react-using-hooks-42pg



  return (
    <div>
      <h3>Search</h3>
      <div className="search-input">
        <input
          type="text"
          placeholder="Have a Question? Searchfor answers..."
          value={searchQuestions}
        />
        <button type="submit" onChange={handleChange}>Search</button>
      </div>
      <ul>
        {searchResults.map(item => {
          <li>{item}</li>;
        })}
      </ul>
    </div>
  );
};




const Search = () => {

  const [searchQuestions, setSearchQuestions] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleText = event => {
    console.log(event.target.value);
  };
  const handleChange = event => {
    console.log(event.target.value);
    setSearchQuestions(event.target.value);
  };

  return (
    <div>
      <h3>Search</h3>
      <div className="search-input">
        <input
          type="text"
          placeholder="Have a Question? Search for answers..."
          onChange={handleText}
        />
        <button type="submit" onChange={handleChange}>Search</button>
      </div>
      <ul>
        {searchResults.map(item => {
          <li>{item}</li>;
        })
        }
      </ul>
    </div>
  );
};

export default Search;






import React, { useState, useEffect } from 'react';

const Search = ( {listOfQuestions} ) => {

  const [items, setItems] = useState(listOfQuestions);

  const filterResults = () => setItems(items.filter(x => x.includes('who')));
  return (
    <div>
      {
        items.map(item => <p key={item}>{item}</p>)
      }
      <button onClick={filterResults}>Filter</button>
    </div>
  );

};

export default Search;

*/

