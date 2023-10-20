import React from "react";
import {
    FormattedMessage,
    FormattedDate
} from "react-intl";
import {
    CardActionArea,
    CardContent,
    CardMedia,
    Typography,
    Grid,
    Card,
    CardHeader,
    Avatar,
} from "@mui/material";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/MainPage.css';

export default function MainPage() {

    interface Skill {
        name: string;
        description: string;
        level: string;
    }

    interface Employee {
        username: string;
        name: string;
        company_position: string;
        avatar: string; // URL of the employee's avatar image
        skills: Skill[];
    }

    interface EmployeeCardProps {
        employee: Employee;
    }

    const [selectedEmployee, setSelectedEmployee] = React.useState(
        null as Employee | null
    )
    const [employees, setEmployees] = React.useState([])

    React.useEffect(() => {
        fetch('http://localhost:8000/employees/')
            .then(response => response.json())
            .then(data => setEmployees(data))
    }, [])


    const EmployeeCard: React.FC<EmployeeCardProps> = ({ employee }) => {
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
                <Grid item xs={12} sm={6} md={4} >
                    <EmployeeCard employee={employee} key={index} />
                </Grid>
            )}
        </Grid>
    }


    const EmployeeDetail = () => {

        const [employee, setEmployee] = React.useState(
            null as Employee | null
        )

        React.useEffect(() => {
            if (selectedEmployee) {
                fetch(`http://localhost:8000/employees/${selectedEmployee.username}`)
                    .then(response => response.json())
                    .then(data => setEmployee(data))
                    .catch(error => console.log(error))
            }
        }, [selectedEmployee])

        if (!employee) {
            return null
        }

        return < Card id="employeeDetailCard">
            <CardHeader
                avatar={<Avatar src={employee.avatar} />}
                title={employee.name}
                subheader={employee.company_position}
            />
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    Skills
                </Typography>
                {employee.skills.map((skill, index) => (
                    <div key={index}>
                        <Typography variant="subtitle1">{skill.name}</Typography>
                        <Typography variant="body2" color="textSecondary">
                            {skill.description}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            Level: {skill.level}
                        </Typography>
                        {index < employee.skills.length - 1 && <hr />}
                    </div>
                ))}
            </CardContent>
        </Card >
    }


    return <Grid container spacing={2}>
        <Grid md={6}>
            <EmployeeGrid />
        </Grid>
        <Grid md={6}>
            <EmployeeDetail />
        </Grid>
    </Grid>

}

