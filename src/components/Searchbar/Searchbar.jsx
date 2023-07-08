import 'react-toastify/dist/ReactToastify.css';
import { Button, Form, Header, Input, Label } from './Searchbar.styled';
import { GoSearch } from 'react-icons/go';

export default function Searchbar({ onSubmit, query, setQuery }) {

  const onChange = event => {
    setQuery(event.currentTarget.value);
  };

  return (
    <Header>
      <Form onSubmit={onSubmit}>
        <Button type='submit' style={{ marginRight: '20px' }}>
          <Label>
            <GoSearch style={{ fontSize: '22px' }} />
            Search
          </Label>
        </Button>

        <Input
          type='text'
          autoComplete='off'
          autoFocus
          value={query}
          placeholder='Search images and photos'
          onChange={onChange}
        />
      </Form>
    </Header>
  );
}

