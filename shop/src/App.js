import logo from './logo.svg';
import './App.css';
import { Routes, Route, useNavigate, Outlet } from 'react-router-dom';
import {useSelector} from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Index/>} />
      </Routes>
    </div>
  );
}

function Header(){
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className='header-img' style={{backgroundImage : 'url(https://codingapple-cdn.b-cdn.net/wp-content/uploads/2022/04/bg.png)'}}/>
    </>
  );
}
function Index(){

  let data = useSelector((state) => {return state});
  return (
    <Container>
    <Row>   
      {data.map(function(a, i){
          return(
            <Col sm={4} style={{textAlign : 'center'}}>
              <img src={'https://codingapple1.github.io/shop/shoes'+ (a.id + 1) +'.jpg'} width={'80%'}></img>
              <h4>{a.title}</h4>
              <p>{a.content}</p>
              <p>{a.price}</p>
            </Col>
          )
        })
      }   
    </Row>
  </Container>
  );
}

export default App;
