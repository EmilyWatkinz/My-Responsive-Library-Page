import React from 'react';

const BookInfoSkeleton = () => {
    return (
        <div id="books__body">
            <main id="books_main">
                <div className="books__container">
                    <div className="row">
                        <div className="book__selected--top">
                            <div className="skeleton" style={{ width: '100px', height: '30px' }}></div>
                        </div>
                        <div className="book__selected">
                            <figure className="book__selected--figure">
                                <div className="skeleton book__selected--img--skeleton"></div>
                            </figure>
                            <div className="book__selected--description">
                                <div className="skeleton" style={{ width: '60%', height: '30px', marginBottom: '20px' }}></div>
                                <div className="skeleton" style={{ width: '40%', height: '20px', marginBottom: '20px' }}></div>
                                <div className="skeleton" style={{ width: '30%', height: '25px', marginBottom: '20px' }}></div>
                                <div className="skeleton" style={{ width: '100%', height: '100px', marginBottom: '20px' }}></div>
                                <div className="skeleton" style={{ width: '150px', height: '45px' }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default BookInfoSkeleton;
