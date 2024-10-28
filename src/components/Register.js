import React , { useEffect, useState } from 'react'
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import springImage from './img/spring.png';
import Dropdown from 'react-bootstrap/Dropdown';
import axios from 'axios';

export default function Register() {

  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const token = localStorage.getItem('token');
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('department', {
          headers: {
            'Authorization': `${token}`
          }
        });
        const data = response.data.data;
        setData(data);
      } catch (err) {
        setError(err);
      }
    };

    fetchData();
  }, [token]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }



  return (
    <section className="bg-light py-3 py-md-5">
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} sm={10} md={8} lg={6} xl={5} xxl={4}>
            <Card className="border border-light-subtle rounded-3 shadow-sm">
              <Card.Body className="p-3 p-md-4 p-xl-5">
                <div className="text-center mb-3">
                  <img src={springImage} alt="" width="75" height="75" />
                </div>
                <h2 className="fs-6 fw-normal text-center text-secondary mb-4">Add Employee</h2>
                <Form  >
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
                          type="text"
                          id="name"
                          placeholder="John"
                          required
                        />
                        <label htmlFor="name" className="form-label">Name</label>
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



                    <Row>

                      <Col>

                        <Dropdown>
                          <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Role
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Admin</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Employee</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </Col>
                      <Col>
                        <Dropdown>
                          <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Department
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                            {data.map((item, index) => (
                              <Dropdown.Item key={index} href="">
                                {item.name} 
                              </Dropdown.Item>
                            ))}SS
                          </Dropdown.Menu>
                        </Dropdown>
                      </Col>
                    </Row>


                    <Col xs={12}>
                      <div className="d-grid my-3">
                        <Button className="btn btn-primary btn-lg" type="submit">Register</Button>
                      </div>
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
