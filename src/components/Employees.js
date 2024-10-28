import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import Pagination from 'react-bootstrap/Pagination';

export default function Employees() {

    const [employeeData, setEmployeeData] = useState([]);
    const [loading, setLoading] = useState([true]);
    const [error, setError] = useState(null);
    const token = localStorage.getItem('token');
    const [totalCount, setTotalCount] = useState(0);

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(8);

    useEffect(() => {
        const fetchEmployees = async () => {
            try {
                const response = await axios.get(`admin/employees?page=${currentPage}&size=${itemsPerPage}`, {
                    headers: {
                        'Authorization': `${token}`
                    }
                });


                setEmployeeData(response.data.data);
                setTotalCount(response.totalCount);
             
                console.log(employeeData);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchEmployees();
    }, []); // Adding token to dependencies if it changes


    // New useEffect to log employeeData whenever it changes
    useEffect(() => {
        console.log(employeeData);
        console.log(totalCount)
    }, [employeeData]);


    if (loading) {
        return <div>Loading...</div>; // You can replace this with a spinner or loading component
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    //Pagination function
    const renderPagination = () => {
        let items = [];
        for (let number = 1; number <= totalCount; number++) {
            items.push(
                <Pagination.Item   key={number}>
                    {number} 1
                </Pagination.Item>
            );
        }



        return items;
    };





    return (
        <div>Employees

            <br />


            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Department</th>
                    </tr>
                </thead>
                <tbody>
                    {employeeData.map((employee) => (
                        <tr key={employee.id}> {/* Use a unique key for each row */}
                            <td>{employee.id}</td>
                            <td>{employee.name}</td>
                            <td>{employee.email}</td>
                            <td>{employee.departmentDTO?.name || 'No Department'}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            <Pagination>
                {renderPagination()}
                
            </Pagination>



        </div>
    )
}
