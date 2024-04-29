import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const SearchBooks = ({ handleSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch(searchQuery);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicSearch">
        <Form.Label>Search for books</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Enter search query" 
          value={searchQuery} 
          onChange={handleChange} 
          required 
        />
      </Form.Group>
      <Button variant="primary" type="submit">Search</Button>
    </Form>
  );
};

export default SearchBooks;
