import React, { useEffect, useState } from 'react';
import { Books } from '../../../types';
import { apiService } from '../utils/api-service';

const Books = () => {

    const [books, setBooks] = useState<Books[]>([]);

    useEffect(() => {
        apiService('/api/books')
            .then(data => setBooks(data));
    }, [])

    return (
        <div>
            {books.map((book) => (
                <h1>{book.title}</h1>
            ))}
        </div>
    )
}

export default Books;
