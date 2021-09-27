import React from 'react';

const EditDetails = () => {



    return (
        <main className="container">
            <section className="row justify-content-center">
                <div className="col-md-6 bg-dark border rounded">
                    <form className="form-group">
                        <h3 className="text-light text-center mt-2">Add a Book!</h3>
                        <label className="text-light mt-2">Author</label>
                            <input type="text" className="form-control" />
                        <label className="text-light">Title</label>
                            <input type="text" className="form-control" />
                        <label className="text-light">Price</label>
                            <input type="text" className="form-control" />
                        <div className="d-flex justify-content-center">
                            <button className="btn btn-light mt-3">Edit</button>
                        </div>
                    </form>
                </div>
            </section>
        </main>
    )
}

export default EditDetails;
