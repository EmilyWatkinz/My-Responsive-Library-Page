import React from 'react';

const BookSkeleton = () => {
    return (
        <div className="book">
            <div className="book__img--skeleton"></div>
            <div className="skeleton book__title--skeleton"></div>
            <div className="skeleton book__rating--skeleton"></div>
            <div className="skeleton book__price--skeleton"></div>
        </div>
    );
};

export default BookSkeleton;
