import {
  FilterLabelTitle,
  FilterFormLabel,
  FilteInput,
  FilterNoneMessage,
} from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { filteredContacts } from 'store/contacts/contactsActions';
import { getFilter, getItems } from 'store/contacts/contactsSelectors';

export const Filter = () => {
  const filter = useSelector(getFilter);
  const items = useSelector(getItems);
  const dispatch = useDispatch();

  const handleFilter = e => {
    dispatch(filteredContacts(e.target.value));
  };

  return (
    <>
      {items.length === 0 ? (
        <FilterNoneMessage>Please, add contact!</FilterNoneMessage>
      ) : (
        <FilterFormLabel>
          <FilterLabelTitle>Find contacts by name:</FilterLabelTitle>
          <FilteInput
            type="text"
            placeholder="Enter name"
            value={filter}
            onChange={handleFilter}
          />
        </FilterFormLabel>
      )}
    </>
  );
};
