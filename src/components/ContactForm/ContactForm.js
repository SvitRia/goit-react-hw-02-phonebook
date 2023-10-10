import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import "yup-phone"; 
import { ErrMessage, StyledForm } from './ContactForm.styled';

const quizSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Too short!').required('This field is required!'),
  number: Yup.string().min(8, 'Too short!').required('This field is required!')
  
});

 const ContactForm = ({ onAdd }) => {
  return (
    <Formik
      initialValues={{
        name: '',
        number: 0,
      }}
      validationSchema={quizSchema}
      onSubmit={(values, actions) => {
        onAdd(values);
        actions.resetForm();
      }}
    >
          <StyledForm>
               <h1>Phonebook</h1>
        
              <label>
                Name
          <Field type="text" name="name" placeholder=" " />
          <ErrMessage name="name" component="div" />
              </label>

             <label>
              Number
          <Field type="text" name="number" />
          <ErrMessage name="number" component="div" />
            </label>

            <button type="submit">Add contact</button>
      </StyledForm>
    </Formik>
  );
};

export default ContactForm;