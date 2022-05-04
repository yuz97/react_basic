import React, { Component } from 'react';

class form extends Component {
    constructor() {
        super()

        this.state = {
            firstname: '',
            lastname: '',
            name: ''
        }
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitHandler = (e) => {
        e.preventDefault();
        // console.log(this.state);
        this.setState({
            name: `${this.state.firstname} ${this.state.lastname}`
        });
        this.state.firstname = '';
        this.state.lastname = '';
    }

    render() {
        // const name = this.state.name
        const { name } = this.state
        return (
            <div className="p-5">
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-8">
                            <div className="card">
                                <div className="card-header text-center">Kartu nama</div>
                                <div className="card-body">
                                    <form method="post" onSubmit={this.submitHandler}>
                                        <div className="form-group">
                                            <label htmlFor="firstname" className="form-label">Firstname</label>
                                            <input onChange={this.changeHandler} value={this.state.firstname} type="text" className="form-control" name="firstname" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="lastname" className="form-label">Lastname</label>
                                            <input onChange={this.changeHandler} value={this.state.lastname} type="text" className="form-control" name="lastname" />
                                        </div>
                                        <button className="btn btn-primary btn-block mt-2" type="submit">submit</button>
                                    </form>
                                </div>
                                <div className="card-footer">
                                    my name is {name ? name : ''}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default form;