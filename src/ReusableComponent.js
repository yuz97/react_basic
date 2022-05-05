import React from 'react';
import Card from './components/Card';
import Gummy from './image/gummy-cassette.svg';


function ReusableComponent(props) {
    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-md-4">
                    <Card
                        imageUrl={Gummy}
                        title="first post"
                        published="5 Mei 2022"
                    />
                </div>
                <div className="col-md-4">
                    <Card
                        imageUrl={Gummy}
                        title="second post"
                        published="6 Mei 2022"
                    />
                </div>
                <div className="col-md-4">
                    <Card
                        imageUrl={Gummy}
                        title="third post"
                        published="7 Mei 2022"
                    />
                </div>
            </div>
        </div>
    );
}

export default ReusableComponent;