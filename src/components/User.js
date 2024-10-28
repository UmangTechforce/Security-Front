import React, { useEffect, useState } from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';

export default function User() {



  const token = localStorage.getItem('token');
  const id = localStorage.getItem('id');
  const [employee, setEmployee] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`employee/${id}`, {
          headers: {
            'Authorization': `${token}`
          }
        });
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setEmployee(data.data);
        console.log(data); // Log the parsed response data
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
        setError("Failed to fetch employee data. Please try again later.");
      }
    };

 fetchData();
  }, [token, id]);

  if (error) {
    return <div className="text-center mt-5">{error}</div>;
  }

  if (!employee) {
    return <div className="text-center mt-5">Loading...</div>;
  }

  return (
    <div className="vh-100" style={{ backgroundColor: '#eee' }}>
      <MDBContainer className="container py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol md="12" xl="4">
            <MDBCard style={{ borderRadius: '15px' }}>
              <MDBCardBody className="text-center">
                <div className="mt-3 mb-4">
                  <MDBCardImage 
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
                    className="rounded-circle" 
                    fluid 
                    style={{ width: '100px' }} 
                  />
                </div>
                <MDBTypography tag="h4">{employee.name}</MDBTypography>
                <MDBCardText className="text-muted mb-4">
                  {employee.role} <span className="mx-2">|</span> <a href="#!">{employee.email}</a>
                </MDBCardText>
                <div className="mb-4 pb-2">
                  <MDBBtn outline floating>
                    <MDBIcon fab icon="facebook" size="lg" />
                  </MDBBtn>
                  <MDBBtn outline floating className="mx-1">
                    <MDBIcon fab icon="twitter" size="lg" />
                  </MDBBtn>
                  <MDBBtn outline floating>
                    <MDBIcon fab icon="skype" size="lg" />
                  </MDBBtn>
                </div>
                <MDBBtn rounded size="lg">Message now</MDBBtn>
                <div className="d-flex justify-content-between text-center mt-5 mb-2">
                  <div>
                    <MDBCardText className="mb-1 h5">8471</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">Wallets Balance</MDBCardText>
                  </div>
                  <div className="px-3">
                    <MDBCardText className="mb-1 h5">8512</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">Followers</MDBCardText>
                  </div>
                  <div>
                    <MDBCardText className="mb-1 h5">4751</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">Total Transactions</MDBCardText>
                  </div>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}
