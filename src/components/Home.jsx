import { Card,CardGroup, Button } from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.css';
import './cards.css'




export default function Body(){

return (

   <div className="bottom-cards">
      <CardGroup>
  <Card>
    <Card.Img variant="top" src="https://images.unsplash.com/photo-1552308995-2baac1ad5490?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cmVhY3QlMjBqc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"  height="65%" width="65%"  />
    <Card.Body>
      <Card.Title>React</Card.Title>
      <Card.Text>
        Learn React here with tutorials and article links
      </Card.Text>
      <Button >learn</Button>

    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://media.istockphoto.com/photos/java-programming-concept-virtual-machine-on-server-room-background-picture-id1131109259?b=1&k=20&m=1131109259&s=170667a&w=0&h=tiLR2P25HCQO2XLw3GmbFyFOPQ0eDtcHz-Z8V-YvlA4=" />
    <Card.Body>
      <Card.Title>Java</Card.Title>
      <Card.Text>
        Learn Java in these simple articles and tutorials
      </Card.Text>
      <Button  href="">learn</Button>

    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://media.istockphoto.com/photos/programming-code-abstract-technology-background-of-software-developer-picture-id871030872?b=1&k=20&m=871030872&s=170667a&w=0&h=7Ds8cASgDjV6NEh-JtkT3AZSciYDIdxdzAMlmMlkxrc=" />
    <Card.Body>
      <Card.Title>SpringBoot</Card.Title>
      <Card.Text>
          Learn Springboot java Backend in these simple steps 
      </Card.Text>
      <Button >learn</Button>

    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardGroup>
      </div>
);
}