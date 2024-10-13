import logo from './logo.svg';
import './App.css';
import { Routes, Route, useNavigate, Outlet } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'
import axios from 'axios'
import { AddData } from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'  
import { lazy, Suspense } from 'react';
const Detail = lazy(() => import('./components/detail'));
const Cart = lazy(() => import('./components/cart'));


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Index/>} />
        <Route path='/detail/:id' element={<Suspense fallback={<div> 로딩중 </div>}><Detail/></Suspense>}/>
        <Route path='/cart' element ={<Suspense fallback={<div> 로딩중 </div>}><Cart/></Suspense>}/>
        <Route path='*' element={<div>없는 페이지임</div>}/>
      </Routes>
    </div>
  );
}

function Header(){
  const navigate = useNavigate();

  let result = useQuery(['작명'],() => 
    axios.get('https://codingapple1.github.io/userdata.json')
    .then((a) => { return a.data;})
    .catch((error) => console.log(error))
  ,{staleTime : 2000});

  let result1 = useQuery('작명', ()=>
    axios.get('https://codingapple1.github.io/userdata.json')
    .then((a)=>{ return a.data })
    .catch((error) => {console.log(error)})
  )

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand onClick={() => {navigate('/')}}>Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => {navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={() => {navigate('/detail/0')}}>Detail</Nav.Link>
            <Nav.Link onClick={() => {navigate('/cart')}}>Cart</Nav.Link>
            <Nav.Link >{result.isLoading ? '로딩중' : (result.data ? result.data.name : '데이터 없음')}</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className='header-img' style={{backgroundImage : 'url(https://codingapple-cdn.b-cdn.net/wp-content/uploads/2022/04/bg.png)'}}/>
    </>
  );
}

function Index(){

  let shoes = useSelector((state) => {return state.shoes});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <Container>
    <Row>   
      {shoes.map(function(a, i){
          return(
            <Col sm={4} style={{textAlign : 'center'}} onClick={() => {navigate('/detail/' + (i))}}>
              <img src={'https://codingapple1.github.io/shop/shoes'+ (a.id + 1) +'.jpg'} width={'80%'}></img>
              <h4>{a.title}</h4>
              <p>{a.content}</p>
              <p>{a.price}</p>
            </Col>
          )
        })
      }   
    </Row>
    <button onClick={() => {
      axios.get('https://codingapple1.github.io/shop/data2.json')
      .then((data) => { data.data.map(function(a, i){ dispatch(AddData(a)); }) })
      .catch((error) => console.log(error))
    }}> 더보기 </button>
  </Container>
  );
}

export default App;
