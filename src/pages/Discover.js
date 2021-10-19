import React, { useEffect } from 'react';
import Book from '../components/Book/Book';
// import books from '../fakeData/books.json'
import PageLayout from '../components/PageLayout/PageLayout';
import { useDispatch, useSelector } from 'react-redux';
import { loadingBooks } from '../redux/Action/bookActions';
const Discover = () => {
    const list = {type: 'discoverList'}
    const books = useSelector((state) => {
       return state.books.discoverList
    })
    const dispatch = useDispatch();
    useEffect(() => dispatch(loadingBooks()), [] )
    return (
        <PageLayout>
            {
                books?.map((book) => (<Book key={book.id} book={book} list ={list} />))
            }
        </PageLayout>
    );
};

export default Discover;