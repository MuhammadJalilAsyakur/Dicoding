import React from "react";

function Profile({name , Username, Bio, isVerified}) {
    return (
        <div className="container">
            <dl>
                <dt>Name: </dt>
                <dd>{name}</dd>

                <dt>Username: </dt>
                <dd>{Username}</dd>

                <dt>Bio: </dt>
                <dd>{Bio}</dd>

                <dt>isVerified: </dt>
                <dd>{isVerified ? 'yes' : 'no'}</dd>
            </dl>
        </div>
    )
}

export default Profile;
