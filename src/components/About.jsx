import React from 'react';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './cards.css';


export default function About(){
return (
<>
<div className='Intro_card'>
  

  <br />
  <Card border='info'>
  <Card.Body>
      <Card.Text>
      I am a full stack web developer and tech enthusiast with interests in machine learning and cloud
computing. I have had to learn java spring-boot framework that is entirely used in most enterprise backend API building.I am currently learning React library in building reusable components for front-end
development. I have associate level skills in cloud computing(Google Cloud Associate) in deploying apps
in the App engine and Kubernetes(GKE service) for scalability. I also have intermediate experience in
data persistence in Google Cloud Storage service.
I have also had the opportunity of building machine learning models and also using Python’s libraries in
Sklearn to build effective models on data provided by clients.
      </Card.Text>
    </Card.Body>
  </Card>
  </div>
</>
);
}
