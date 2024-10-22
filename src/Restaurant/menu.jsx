import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import "./grd.css"



function Menu(){
    return(
        <>

   <div className='hii'>


   <Card style={{ width: '18rem' }}>
    <img src="https://www.bing.com/th?id=OIP.-eqwoMdlzYdMIgZqeBB6tQHaEK&w=146&h=120&c=8&rs=1&qlt=90&o=6&cb=13&dpr=1.3&pid=3.1&rm=2" alt="" /> 
      <Card.Body>
        <Card.Title>chicken biryani</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">order now</Button>
        <br /> 
        <br />
        <b>$240</b>
      </Card.Body>
    </Card>


    <Card style={{ width: '18rem' }}>
    <img src="http://ts4.mm.bing.net/th?id=OIP.szPB5ZL9KA5xPZmK0f1ysgHaEK&pid=15.1" alt="" height="180"  /> 
      <Card.Body>
        <Card.Title>Veg biryani</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">order now</Button>
        <br /> 
        <br />
        <b>$230</b>
      </Card.Body>
    </Card>


    <Card style={{ width: '18rem' }}>
    <img src="https://th.bing.com/th/id/OIP.vwC7Kw1RgyrCoQj1sjtI3QHaE8?w=223&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" /> 
      <Card.Body>
        <Card.Title>Fish biryani</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">order now</Button>
        <br /> 
        <br />
        <b>$220</b>
      </Card.Body>
    </Card>



    <Card style={{ width: '18rem' }}>
    <img src="https://th.bing.com/th/id/OIP.S0wc4XuTvKyM28-uivNnPQHaFx?w=201&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" /> 
      <Card.Body>
        <Card.Title>Naligosh biryani</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">order now</Button>
        <br /> 
        <br />
        <b>$210</b>
      </Card.Body>
    </Card>


   </div>

        </>
    )
}

export default Menu;