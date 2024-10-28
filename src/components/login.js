import React from 'react'
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import springImage from './img/spring.png';

export default function login() {


  if(localStorage.getItem('token')){
    window.location.href = '/user';
    return; 
  } 
    const api = async(object)=>{

     
        fetch('employee/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(object)
          })
            .then(response => {
              if (!response.ok) {
                alert("Something went wrong");
                throw new Error("Network response was not ok");
              }
              alert("Response done")
              const headers = response.headers;
              const token = headers.get('Authorization');
              console.log('Authorization Header:', token);
               window.location.href = '/user';
              localStorage.setItem('token', token);
              return response.json();
    
            }).then(data => {
            
             const token = data.data.token;
            const  employee = data.data.employee;
              console.log(data); // Log the parsed response data
              console.log("Id is: "+employee.id);
              localStorage.setItem('id', employee.id);
    
            }).catch(error => {
              console.error("There was a problem with the fetch operation:", error);
            });
    }



    const handleSubmit = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        
      const LoginRequestDTO = {
        email: email,
        password: password
      }
        api(LoginRequestDTO);
      };

  return (
    <section className="bg-light py-3 py-md-5">
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} sm={10} md={8} lg={6} xl={5} xxl={4}>
          <Card className="border border-light-subtle rounded-3 shadow-sm">
            <Card.Body className="p-3 p-md-4 p-xl-5">
              <div className="text-center mb-3">
                 <img src={springImage}alt="" width="75" height="75" /> 
              </div>
              <h2 className="fs-6 fw-normal text-center text-secondary mb-4">Sign in to your account</h2>
              <Form  onSubmit={handleSubmit}>
                <Row className="gy-2 overflow-hidden">
                  <Col xs={12}>
                    <Form.Floating className="mb-3">
                      <Form.Control
                        type="text"
                        id="email"
                        placeholder="name@example.com"
                       
                      
                        required
                      />
                      <label htmlFor="email" className="form-label">Email</label>
                    </Form.Floating>
                  </Col>
                  <Col xs={12}>
                    <Form.Floating className="mb-3">
                      <Form.Control
                        type="password"
                        id="password"
                        placeholder="Password"
                       
    
                        required
                      />
                      <label htmlFor="password" className="form-label">Password</label>
                    </Form.Floating>
                  </Col>
                  <Col xs={12}>
                    <div className="d-grid my-3">
                      <Button className="btn btn-primary btn-lg" type="submit">Log in</Button>
                    </div>
                  </Col>
                  <Col xs={12}>
                    <p className="m-0 text-secondary text-center">
                      Don't have an account? <a href="/register" className="link-primary text-decoration-none">Sign up</a>
                    </p>
                  </Col>
                </Row>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  </section>
  )
}
