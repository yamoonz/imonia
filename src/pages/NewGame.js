import React, { useState } from 'react';
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./style.css";

function NewGame() {

  const firstStep = () => {
    return <div>First Component</div>;
  };
  const secondStep = () => {
    return <div>Second Component</div>;
  };
  const thirdStep = () => {
    return <div>Third Component</div>;
  };
  const finalStep = () => {
    return <div>Final Component</div>;
  };
  const [steps, setSteps] = useState([
    { key: 'firstStep', label: 'My First Step', isDone: true, component: firstStep },
    { key: 'secondStep', label: 'My Second Step', isDone: false, component: secondStep },
    { key: 'thirdStep', label: 'My Third Step', isDone: false, component: thirdStep },
    { key: 'finalStep', label: 'My Final Step', isDone: false, component: finalStep },
  ]);
 
  const [activeStep, setActiveStep] = useState(steps[0]);
 
  const handleNext = () => {
    if (steps[steps.length - 1].key === activeStep.key) {
      alert('You have completed all steps.');
      return;
    }
 
    const index = steps.findIndex(x => x.key === activeStep.key);
    setSteps(prevStep => prevStep.map(x => {
      if (x.key === activeStep.key) x.isDone = true;
      return x;
    }))
    setActiveStep(steps[index + 1]);
  }
 
  const handleBack = () => {
    const index = steps.findIndex(x => x.key === activeStep.key);
    if (index === 0) return;
 
    setSteps(prevStep => prevStep.map(x => {
      if (x.key === activeStep.key) x.isDone = false;
      return x;
    }))
    setActiveStep(steps[index - 1]);
  }
 
  return (
    <div>
      <Form className="column justify-content-center page">
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Benzersiz Ad</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Görünen İsim</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Oyun Açıklaması</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Oyun Türü</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Bireysel</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Oyun Durumu</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Açık</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
      </Form>
      <Link to="/PageTwo">
        <Button className="button" variant="outline-secondary">
          İ L E R İ
        </Button>{" "}
      </Link>
    </div>
  );
}

export default NewGame;
