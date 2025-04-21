import styles from './SearchBox.module.css';

function SearchBox({ value, onChange }) {
    return (
        <div className={styles.searchBox}>
            <label className={styles.label}>
                Find contacts by name:
            </label>
            <input
                type="text"
                value={value}
                onChange={e => onChange(e.target.value)}
                className={styles.input}
                placeholder="Type name..."
            />
        </div>
    );
}

export default SearchBox;
