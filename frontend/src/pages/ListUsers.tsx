import { useEffect, useState } from "react";
import api from "../services/api";

function ListUsers(){
 const [ state, setState ] = useState([])

  useEffect( () => {
    api.get('users').then( function(response){ return setState(response.data.users) } ).catch( e => console.log(e) );
  },[])
  console.log(state)

  return(
    <>

    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Password</th>
        </tr>
      </thead>
        {state.map( res => (
          <tbody key={res['id']} >
            <td>{res['id']}</td>
            <td>{res['name']}</td>
            <td>{res['email']}</td>
            <td>{res['password']}</td>
          </tbody>
        ) )}
    </table>

    </>
  );
}

export default ListUsers;