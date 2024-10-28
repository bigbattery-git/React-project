import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState } from 'react';

function Main(){
  
  let [lists, setLists] = useState([]);
  let [id, setId] = useState(0);

  function AddList(text){
    if(text === null || text === "")
      return;

    let copy = [...lists];

    copy.push({id : id, content : text})

    setId(id+=1);
    setLists(copy);
  }

  function RemoveList(id){
    let copy = [...lists];

    let removeArgu = copy.findIndex((a) => a.id === id);
    copy.splice(removeArgu, 1);

    setLists(copy);
  }

  return(
    <>
      {lists.map((a, i) => {
        return <CheckBox list={a} remove={(a) => RemoveList(a)}/>
      })}
      <InputBox addList={(text) => AddList(text)}/>      
    </>
  )
}

function CheckBox(props){
  let id = props.list.id;
  return (
    <>
      <div key={`default-${'checkbox'}`} className="mb-3">
        <Form.Check // prettier-ignore
          type={'checkbox'}
          id={`default-${'checkbox'}`}
          label={props.list.content}
          onChange={() => {props.remove(id);}}
        />
      </div>
    </>
  )
}

function InputBox(props){

  let [value, setValue] = useState();

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