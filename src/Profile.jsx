import './App.css'

/*
    This Profile component differs from the one in class in that
    the image is included in the Intake Form component.
*/

function Profile (){
    return (
        <div className="profile">
        <br></br>
            <h1 className="profile-name">John Doe</h1>
        
            <p className = "bio">
                From Philadelphia, PA <br></br>
                Dog walker and trainer.
            </p>

        </div>
    )

}

export default Profile;