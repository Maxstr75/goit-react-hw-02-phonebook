import PropTypes from 'prop-types';
import { Item, Button } from './ContactItem.styled';

export const ContactItem = ({ id, name, onClick }) => {
  return (
    <Item key={id}>
      <p>{name}</p>
      <Button type="button" onClick={() => onClick(id)}>
        Delete
      </Button>
    </Item>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ContactItem;
