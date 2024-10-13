import { Table } from 'react-bootstrap' 
import { useSelector } from 'react-redux'

function Cart(props){

  let cart = useSelector((state) => {return state.cart})

  return (
    <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>상품명</th>
          <th>수량</th>
          <th>변경하기</th>
        </tr>
      </thead>
      <tbody>
        {
          cart.map(function(a, i){
            return (
              <tr>
                <td>{a.id}</td>
                <td>{a.name}</td>
                <td>{a.count}</td>
                <td><button>+</button></td>
              </tr>
            )
          })
        }
      </tbody>
    </Table> 
  )
}

export default Cart;