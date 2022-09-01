import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Container } from 'pages/ContactsPage/ContactsPage.style';
import { Helmet } from 'react-helmet';

const Contacts = () => {
  return (
    <Container>
      <Helmet>
        <title>Contacts</title>
      </Helmet>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </Container>
  );
};

export default Contacts;
