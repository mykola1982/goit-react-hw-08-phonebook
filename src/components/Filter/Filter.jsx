import { useDispatch, useSelector } from 'react-redux';
import { setFilterContacts } from 'redux/filterSlice';
import { selectContactsFilter } from 'redux/contacts/contactsSelectors';

import { FilterStyled, Input, Label } from './Filter.styled';

export const Filter = () => {
  const filter = useSelector(selectContactsFilter);
  const dispatch = useDispatch();
  return (
    <FilterStyled>
      <Label>Find contact by name</Label>
      <Input
        type="text"
        name="filter"
        value={filter}
        onChange={event =>
          dispatch(setFilterContacts(event.currentTarget.value))
        }
      />
    </FilterStyled>
  );
};
