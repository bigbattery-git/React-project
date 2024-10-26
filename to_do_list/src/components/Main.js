import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState } from 'react';

function Main(){
  
  const [lists, setLists] = useState([]);

  function AddList(text){
    if(text === null || text === "")
      return;

    let copy = [...lists];

    copy.push({id : 0, content : text})

    setLists(copy);
  }
  function RemoveList(text){
    const copy = [...lists];

    const removeArgu = copy.findIndex((a) => a.content === text);
    copy.splice(removeArgu, 1);

    setLists(copy);
  }
  return(
    <>
      {lists.map((a, i) => {
        return <CheckBox text={a.content} remove={(text) => RemoveList(text)}/>
      })}
      <InputBox addList={(text) => AddList(text)}/>      
    </>
  )
}

function CheckBox(props){
  return (
    <>
      <div key={`default-${'checkbox'}`} className="mb-3">
        <Form.Check // prettier-ignore
          type={'checkbox'}
          id={`default-${'checkbox'}`}
          label={props.text}
          onChange={() => {props.remove(props.text);}}
        />
      </div>
    </>
  )
}

function InputBox(props){

  const [value, setValue] = useState();

  function ResetValue(){
    setValue('');
  }

  return(
    <InputGroup className="mb-3">
      <Form.Control
        placeholder="Write Todo List"
        aria-label="Recipient's username"
        aria-describedby="basic-addon2"
        onChange={(e) => setValue(e.target.value)}
        value = {value}
      />
      <Button variant="outline-secondary" id="button-addon2" onClick={() => {props.addList(value); ResetValue();}}>
        Add
      </Button>
    </InputGroup>
  );
}

export default Main;