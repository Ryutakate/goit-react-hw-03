import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import styles from './ContactForm.module.css';

const ContactSchema = Yup.object().shape({
    name: Yup.string()
        .min(3, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    number: Yup.string()
        .min(3, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
});

function ContactForm({ onAdd }) {
    return (
        <Formik
            initialValues={{ name: '', number: '' }}
            validationSchema={ContactSchema}
            onSubmit={(values, actions) => {
                const newContact = {
                    id: nanoid(),
                    name: values.name,
                    number: values.number,
                };
                onAdd(newContact);
                actions.resetForm();
            }}
        >
            
            <Form className={styles.form}>
                <div className={styles.labelBlock}>
                    <label htmlFor="name">Name:</label>
                    <Field id="name" name="name" className={styles.input} />
                    <ErrorMessage name="name" component="div" className={styles.error} />
                </div>
                
                <div className={styles.labelBlock}>
                    <label htmlFor="number">Number:</label>
                    <Field id="number" name="number" className={styles.input} />
                    <ErrorMessage name="number" component="div" className={styles.error} />
                </div>
                
                <button type="submit" className={styles.button}>Add Contact</button>
            </Form>
        </Formik>
        );
}

export default ContactForm;
