import PropTypes from 'prop-types';
import { useState } from 'react';
import { GrSearch } from 'react-icons/gr';
import { toast } from 'react-toastify';
import { Button, SearchForm, SearchInput } from './SearchBar.styled';

export const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const inputQueryChange = e => {
    setQuery(e.currentTarget.value.toLowerCase());
  };

  const querySubmit = e => {
    e.preventDefault();

    if (query.trim() === '') {
      // alert('Please enter valid search query.');
      return toast.error('Please enter valid search query.');
    }
    onSubmit(query);
    setQuery('');
    e.target.reset();
  };

  return (
    <SearchForm onSubmit={querySubmit}>
      <Button type="submit">
        <GrSearch size="18" />
        {/* <Label>Search</Label> */}
      </Button>

      <SearchInput
        type="text"
        autocomplete="off"
        autoFocus
        name="query"
        placeholder="Search movie"
        onChange={inputQueryChange}
      />
    </SearchForm>
  );
};

SearchBar.propType = {
  onSubmit: PropTypes.func.isRequired,
};
