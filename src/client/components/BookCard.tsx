import React, { useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { Books } from '../../../types';
import { apiService } from '../utils/api-service';

const BookCard = (props: Books) => {
    const { id } = useParams<{ id: string }>();
    const history = useHistory();
    const [title, setTitle] = useState<Books['title']>(null);
    const [author, setAuthor] = useState<Books['author']>(null);
    const [price, setPrice] = useState<Books['price']>(null);

    const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (confirm(`Are you sure you want to delete ${props.title} by ${props.author}?`)) {
            apiService(`/api/books/${id}/delete`, 'DELETE', { title, author, price })
                .then(data => {
                    history.push('/books');
                })
        }
    }

    return (
        <main className="container">
            <section className="row justify-content-center">
                <div className="col-md-6 my-3">
                    <div className="card border rounded shadow bg-dark">
                        <h3 className="card-header text-light text-center">{props.title}</h3>
                        <div className="card-body text-light text-center">
                            <div className="card-title text-light text-center">{props.author}</div>
                            <div className="card-text text-light text-center">{props.price}</div>
                        </div>
                        <div className="d-flex justify-content-center mb-3">
                            {props.isPreview && <Link to="/edit" className="btn btn-light btn-sm mx-3">Edit</Link>}
                            {props.isPreview && <button onClick={handleDelete} className="btn btn-light btn-sm mx-3">Delete</button>}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default BookCard;
