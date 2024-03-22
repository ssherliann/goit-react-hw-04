import { useState } from 'react';
import toast from 'react-hot-toast';
import styles from './SearchBar.module.css';

export default function SearchBar({ onSubmit }) {
    const [query, setQuery] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (query.trim() === '') {
            toast.error('Please enter a search query.');
            return;
        }
        onSubmit(query);
    };

    const handleChange = (event) => {
        setQuery(event.target.value);
    };

    return (
        <header className={styles.header}>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    value={query}
                    onChange={handleChange}
                    className={styles.input}
                />
                <button type="submit" className={styles.searchButton}>Search</button>
            </form>
        </header>
    );
}
