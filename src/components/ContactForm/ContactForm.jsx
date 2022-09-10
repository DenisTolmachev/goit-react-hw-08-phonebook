import { Formik, ErrorMessage } from 'formik';
import shortid from 'shortid';
import * as yup from 'yup';
import { Button } from 'components/common/Button.styled';
import { useSelector, useDispatch } from 'react-redux';
import { getItems } from 'store/contacts/contactsSelectors';
import { addNewContact } from 'store/contacts/contactsOperations';
import { toast } from 'react-toastify';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import {
  FormStyled,
  Label,
  Input,
  InputFeedback,
} from 'components/common/Form.styled';

const nameRegex = RegExp(
  /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/
);

const mySchema = yup.object().shape({
  name: yup
    .string()
    .min(2)
    .matches(
      nameRegex,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    )
    .required('Name is required'),

  number: yup.string().length(19).required('Number is required'),
});

export const ContactForm = () => {
  const dispatch = useDispatch();
  const items = useSelector(getItems);

  const contactsCheck = name => {
    const result = name.name.toLowerCase();
    const data = items.find(item => item.name.toLowerCase().includes(result));
    return data;
  };

  const handleSubmit = (values, { resetForm }) => {
    const newName = {
      id: shortid.generate(),
      name: values.name,
      number: values.number,
    };

    console.log(newName);

    if (contactsCheck(newName)) {
      toast.error(`${newName.name} is already in contacts`);
    } else {
      dispatch(addNewContact(newName));
    }

    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={mySchema}
      onSubmit={handleSubmit}
    >
      {({ values, handleChange, handleBlur }) => (
        <FormStyled>
          <Label>
            Name
            <Input
              type="text"
              name="name"
              placeholder="Rosie Simpson"
              value={values.name}
              onChange={handleChange}
            />
            <ErrorMessage
              name="name"
              render={msg => <InputFeedback>{msg}</InputFeedback>}
            />
          </Label>
          <Label>
            Number
            <PhoneInput
              inputProps={{
                name: 'number',
              }}
              country={'ua'}
              placeholder=""
              value={values.number}
              onBlur={handleBlur}
              onChange={(phoneNumber, country, e) => {
                handleChange(e);
              }}
            />
            <ErrorMessage
              name="number"
              render={msg => <InputFeedback>{msg}</InputFeedback>}
            />
          </Label>
          <Button type="submit">Add contact</Button>
        </FormStyled>
      )}
    </Formik>
  );
};
