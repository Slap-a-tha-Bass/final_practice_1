import React, { useEffect, useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { Books, Categories } from '../../../types';
import { apiService } from '../utils/api-service';
import Swal from 'sweetalert2';

const BookCard = (props: Books) => {
    const { id } = useParams<{ id: string }>();
    const history = useHistory();
    const [title, setTitle] = useState<Books['title']>(null);
    const [author, setAuthor] = useState<Books['author']>(null);
    const [price, setPrice] = useState<Books['price']>(null);
    const [categoryid, setCategoryid] = useState<Categories['id']>(null);

    const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (Swal.fire({
            title: "Lemme ask you...",
            text: `Are you sure you want to delete ${props.title} by ${props.author}?`,
            icon: 'question',
            confirmButtonText: 'Do it!'
        })) {
            apiService(`/api/books/${id}/delete`, 'DELETE', { title, author, price, categoryid })
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
                        <h2 className="card-header text-light text-center border rounded border-light">{props.title}</h2>
                        <div className="card-body text-light text-center">
                            <h4 className="card-title text-light text-center">By: {props.author}</h4>
                            <div className="card-text text-light text-center">{props.price}</div>
                        </div>
                        <div className="d-flex justify-content-center mb-3">
                            {props.isPreview && <Link to={`/edit/${props.id}`} className="btn btn-light btn-sm mx-3">Edit</Link>}
                            {props.isPreview && <button onClick={handleDelete} className="btn btn-light btn-sm mx-3">Delete</button>}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default BookCard;
