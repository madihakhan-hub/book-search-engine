import React, { useState, useEffect } from 'react';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';
import { getSavedBooks, deleteBook } from '../utils/API';
import { getUserId } from '../utils/localStorage';

const SavedBooks = () => {
  const [savedBooks, setSavedBooks] = useState([]);

  useEffect(() => {
    loadSavedBooks();
  }, []);

  const loadSavedBooks = async () => {
    const userId = getUserId();
    const response = await getSavedBooks(userId);
    setSavedBooks(response.data);
  };

  const handleDeleteBook = async (bookId) => {
    const userId = getUserId();
    await deleteBook(userId, bookId);
    loadSavedBooks();
  };

  return (
    <Container>
      <Row>
        {savedBooks.map((book) => (
          <Col key={book._id} sm={6} md={4} lg={3}>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>
                  {book.authors.join(', ')}
                </Card.Text>
                <Button variant="danger" onClick={() => handleDeleteBook(book._id)}>Delete</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default SavedBooks;

