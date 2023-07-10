import 'react-toastify/dist/ReactToastify.css';
import {Button, Form, Header, Input, Label} from './Searchbar.styled';
import {GoSearch} from 'react-icons/go';
import {toast} from "react-toastify";
import {useState} from "react";

export default function Searchbar({onSubmit}) {
  const [query, setQuery] = useState('');
  const onChange = event => {
    setQuery(event.currentTarget.value.toLowerCase())
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (query.trim() === '') {
      return toast(
        '🦄 Please, enter some data!',
        {className: 'toast-message', autoClose: 2000},
      );
    }
    onSubmit(query);
    setQuery('');
  };

  return (
    <Header>
      <Form onSubmit={handleSubmit}>
        <Button type='submit' style={{marginRight: '20px'}}>
          <Label>
            <GoSearch style={{fontSize: '22px'}}/>
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

