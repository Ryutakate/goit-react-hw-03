import { FaUser, FaPhone } from 'react-icons/fa';
import styles from './Contact.module.css';

function Contact({ name, number, onDelete }) {
    return (
        <li className={styles.item}>
            <div>
                <p>
                    <FaUser className={styles.icon} /> {name}
                </p>
                <p>
                    <FaPhone className={styles.icon} /> {number}
                </p>
            </div>
            <button className={styles.button} onClick={onDelete}>Delete</button>
        </li>
    );
}

export default Contact;
