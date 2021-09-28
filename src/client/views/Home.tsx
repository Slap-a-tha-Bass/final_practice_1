import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { Books, Categories } from '../../../types';
import { apiService } from '../utils/api-service';

const Home = () => {
    const history = useHistory();
    const [books, setBooks] = useState<Books[]>([]);

    const [title, setTitle] = useState<Books['title']>(null);
    const [author, setAuthor] = useState<Books['author']>(null);
    const [price, setPrice] = useState<Books['price']>(null);
    const [categoryid, setCategoryid] = useState<Books['id']>(null);
    const [categories, setCategories] = useState<Categories[]>([]);

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        apiService('/api/books', 'POST', { title, author, price, categoryid })
            .then(data => {
                history.push('/books');
            })
    }
    useEffect(() => {
        apiService('/api/categories')
            .then(data => {
                setCategories(data)
            })
    }, []);
    const selectCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setCategoryid(Number(e.target.value));
    }
    return (
        <main className="container">
            <section className="row justify-content-center">
                <div className="col-md-6 bg-dark border rounded">
                    <form className="form-group">
                        <h3 className="text-light text-center mt-2">Add a Book!</h3>
                        <label className="text-light">Title</label>
                        <input value={title || ''} onChange={e => setTitle(e.target.value)} type="text" className="form-control" />
                        <label className="text-light">Author</label>
                        <input value={author || ''} onChange={e => setAuthor(e.target.value)}type="text" className="form-control" />
                        <label className="text-light">Price</label>
                        <input value={price || ''} onChange={e => setPrice(Number(e.target.value))}type="number" step=".01" className="form-control" />
                        <select onChange={selectCategory} className="form-select my-3" aria-label="Default select sample">
                            <option value="0">Select Genre</option>
                            {categories.map((category) => (
                                <option key = {category.id} value={category.id}>
                                    {category.name}
                                </option>
                            ))}
                        </select>
                        <div className="d-flex justify-content-center">
                            <button onClick={handleSubmit} className="btn btn-light m-3">Submit</button>
                            <Link className="btn btn-light m-3" to="/profile">Profile</Link>
                        </div>
                    </form>
                </div>
            </section>
        </main>
    )
}

export default Home;
