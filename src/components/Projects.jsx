import { Nav,Card, Button} from "react-bootstrap";

export default function Projects(){

return (
<div className="projects">
<Card border='info'>
  <Card.Header>
    <Nav variant="pills" defaultActiveKey="#first">
      <Nav.Item>
        <Button href="https://github.com/austinokari1998/librarymanagement_API" variant="outline-primary">Link</Button>
      </Nav.Item>
     
    </Nav>
  </Card.Header>
  <Card.Body>
    <Card.Title>SpringBoot</Card.Title>
    <Card.Text>
      Library Management System
    </Card.Text>
    <Button variant="primary" href="https://github.com/austinokari1998/librarymanagement_API">Go</Button>
  </Card.Body>
</Card>
<br/>
<br/>
<Card border="info">
<Card.Header>
    <Nav variant="pills" defaultActiveKey="#first">
     
      <Nav.Item>
        <Button href="https://github.com/austinokari1998/classification_models" variant="outline-primary">Link</Button>
      </Nav.Item>
      
    </Nav>
  </Card.Header>
  <Card.Body>
    <Card.Title>Machine learning </Card.Title>
    <Card.Text>
      Machine learning classification models
    </Card.Text>
    <Button variant="primary" href="https://github.com/austinokari1998/classification_models">Go</Button>
  </Card.Body>
</Card>
<br/>
<br/>
<Card border='info'>
<Card.Header>
    <Nav variant="pills" defaultActiveKey="#first">
     
      <Nav.Item>
        <Button href="https://github.com/austinokari1998/BankingApp_API" variant="outline-primary">Link</Button>
      </Nav.Item>
      
    </Nav>
  </Card.Header>
  <Card.Body>
    <Card.Title>SpringBoot Java</Card.Title>
    <Card.Text>
      Banking App Java 
    </Card.Text>
    <Button variant="primary" href="https://github.com/austinokari1998/BankingApp_API">Go</Button>
  </Card.Body>
</Card>
<br/>
<br/>
<Card border='info'>
<Card.Header>
    <Nav variant="pills" defaultActiveKey="#first">
     
      <Nav.Item>
        <Button variant='outline-primary' href="https://github.com/austinokari1998/ReactHooks">Link</Button>
      </Nav.Item>
     
      
    </Nav>
  </Card.Header>
  <Card.Body>
    <Card.Title>React</Card.Title>
    <Card.Text>
      Javascript React Hooks 
    </Card.Text>
    <Button variant="primary" href="https://github.com/austinokari1998/ReactHooks">Go</Button>
  </Card.Body>
</Card>




</div>
);
}
