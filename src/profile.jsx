import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "./authContext";

// Component for adding a new book
const NewBook = ({ onBookAdded }) => {
    // Access authentication context
    const { auth } = useContext(AuthContext);

    // State for storing book information
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [genre, setGenre] = useState('');

    // Function to create a new book
    const createNewBook = () => {
        axios.post('http://127.0.0.1:8000/book/', {
            title: title,
            author: author,
            genre: genre,
        }, {
            headers: {
                'Authorization': `Bearer ${auth.accessToken}`,
            }
        })
        .then(response => {
            console.log('RESPONSE: ', response);
            // If the request is successful, clear input fields and refresh book list
            if (response.status >= 200 && response.status <= 202) {
                setTitle('');
                setAuthor('');
                setGenre('');
                onBookAdded();  // Callback to refresh the book list
            }
        })
        .catch(error => console.log('ERROR: ', error));
    };

    // Render input fields for book information and button for adding book
    return (
        <div>
            <h2>Add New Book</h2>
            <input 
                onChange={e => setTitle(e.target.value)}
                placeholder="Enter Title"
                value={title}
            />
            <input 
                onChange={e => setAuthor(e.target.value)}
                placeholder="Enter Author"
                value={author}
            />
            <input 
                onChange={e => setGenre(e.target.value)}
                placeholder="Enter Genre"
                value={genre}
            />
            <button onClick={createNewBook}>Add Book</button>
        </div>
    );
};

// Component for displaying list of books
const BookList = () => {
    // Access authentication context
    const { auth } = useContext(AuthContext);

    // State for storing list of books
    const [books, setBooks] = useState([]);

    // Fetch books when component mounts or auth changes
    useEffect(() => {
        if (auth.accessToken) {
            fetchBooks();
        }
    }, [auth.accessToken]);

    // Function to fetch list of books from backend
    const fetchBooks = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/book/', {
                headers: {
                    'Authorization': `Bearer ${auth.accessToken}`
                }
            });
            setBooks(response.data);
        } catch (error) {
            console.error('Error fetching books:', error);
        }
    };

    // Function to delete a book
    const deleteBook = async (bookId) => {
        try {
            await axios.delete(`http://127.0.0.1:8000/book/${bookId}/`, {
                headers: {
                    'Authorization': `Bearer ${auth.accessToken}`,
                }
            });
            await fetchBooks();  // Wait for fetchBooks to complete before updating state
        } catch (error) {
            console.error('Error deleting book:', error);
        }
    };

    // Render list of books and new book form
    return (
        <>
            <div className="text-center p-4">
                <h1>Welcome Back</h1>
            </div>
            <div className="p-4 text-center">
                <h3>Your Books:</h3>
                <ul>
                    {books.map((book) => (
                        <li key={book.id}>
                            <strong>{book.title}</strong> by {book.author} (Genre: {book.genre})
                            <button onClick={() => deleteBook(book.id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="text-center p-3">
                <h2>Want to add a book?</h2> <br />
                <NewBook onBookAdded={fetchBooks} />
            </div>
        </>
    );
};

export default BookList;
