import React, { Component } from 'react';
import axios from 'axios';

const students = [
    {
        'id': 1,
        'name': 'Student 1',
        'email': 'student1@mnp.com'
    },
    {
        'id': 2,
        'name': 'Student 2',
        'email': 'student2@mnp.com'
    },
    {
        'id': 2,
        'name': 'Student 3',
        'email': 'student3@mnp.com'
    },
];

class Latihan1 extends Component {

    constructor() {
        super()

        // this.state = { name : 'rudi',address : 'makassar'}
        this.state = {
            user: []
        }

    }

    getUser = async () => {
        let response = await axios.get('https://jsonplaceholder.typicode.com/users/2');
        this.setState({
            user: response.data
        })
    }

    componentDidMount() {
        this.getUser()
    }

    render() {

        // const alamat = this.state.address;
        // const user = this.state.user
        const { user } = this.state
        return (
            <div>
                {/* untuk students   data static */}
                <ol>
                    {students.map((student, index) => (
                        <tr data-index={index}>
                            <li>
                                {student.name}
                            </li>
                            <li>
                                {student.email}
                            </li>
                        </tr>
                    ))}
                </ol>



                {/* data dengan json */}
                <h1 className="text-center vh-100">Hello World</h1>
                <div>nama lengkap {user.name}</div>
                <div>username {user.username}</div>
            </div>
        );
    }
}


export default Latihan1;