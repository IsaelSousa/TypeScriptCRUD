import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './styles.scss';

export default function Home(){
  return(
    <div className="container">
      <div className="borderContainer" >

        <Link to="/login" >
          <Button className="buttonStyle" variant="contained" color="primary">
            Login
          </Button>  
        </Link>
      </div>
    
    </div>
  );
}