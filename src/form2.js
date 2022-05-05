import React, { useState } from 'react';

function form2(props) {

    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [name, setName] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        setName(`${firstname} ${lastname}`)

        //mengosongkan kembali
        setFirstname('');
        setLastname('');
    }
    return (
        <div>
            hello world
            <div className="p-5">
                <div className="container ">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header text-center">Stateless component/function</div>
                            <div className="card-body">
                                <form method="post" onSubmit={submitHandler}>
                                    <div className="form-group">
                                        <label htmlFor="firstname">firstname</label>
                                        <input value={firstname} onChange={e => setFirstname(e.target.value)} type="text" className="form-control" name="firstname" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="lastname">lastname</label>
                                        <input value={lastname} onChange={e => setLastname(e.target.value)} type="text" className="form-control" name="lastname" />
                                    </div>
                                    <button type="submit" className="btn btn-danger btn-block mt-2">submit</button>
                                </form>
                            </div>
                            <div className="card-footer">
                                <div>my name is {name ? name : ''}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default form2;