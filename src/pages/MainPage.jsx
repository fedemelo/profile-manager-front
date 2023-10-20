import React from "react";
import { FormattedMessage, FormattedDate } from "react-intl";
import { CardActionArea, CardContent, CardMedia, Typography, Grid, Card, Container } from "@mui/material";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/MainPage.css';

export default function MainPage() {

    const [selectedEmployee, setSelectedEmployee] = React.useState(null)
    const [employees, setEmployees] = React.useState([])

    React.useEffect(() => {
        fetch('http://localhost:8000/employees/')
            .then(response => response.json())
            .then(data => setEmployees(data))
    }, [])


    const EmployeeCard = ({ employee }) => {
        return <Card id="employeeCard" onClick={() => {
            setSelectedEmployee(employee)
        }}>
            <CardActionArea>
                <CardMedia
                    id="employeeAvatar"
                    component="img"
                    height="140"
                    image={employee.avatar}
                    alt={`Avatar for employee ${employee.name}`}
                />
                <CardContent id="employeeName">
                    <Typography gutterBottom variant="h5" component="div">
                        {employee.name}
                    </Typography>
                    <Typography id="employeePosition" variant="body2" color="text.secondary">
                        {employee.company_position}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    }

    const EmployeeGrid = () => {

        return <Grid container spacing={2}>
            {employees.map((employee, index) => 
                <Grid item xs={12} sm={6} md={3} lg={2} >
                    <EmployeeCard employee={employee} key={index} />
                </Grid>
            )}
        </Grid>
    }



    return <EmployeeGrid id="employeeGrid" />

}

