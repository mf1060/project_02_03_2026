
import puppy from './assets/cute_puppy.jpg'
function IntakeForm (){

    /* The following is a component for an intake form
    for a consultation with a dog trainer. The intake form
    adds a picture of a puppy. The intake form asks for
    name, email, number, and preferred date and time for a consultation. */

    return (
        <>

        <img src={puppy} class="puppy" height="100px" 
                    width="100px" alt="cute puppy" /> 
                <br></br>
                <caption class="puppy">Photo by <a href="https://unsplash.com/@joeyc?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Joe Caione</a> on <a href="https://unsplash.com/photos/shallow-focus-photography-of-white-shih-tzu-puppy-running-on-the-grass-qO-PIF84Vxg?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></caption>
              
        <br></br>
        <form className="intakeForm">
            <label for="name">Full Name</label>
            <br></br>
            <input name="name" />
            <br></br>
            <br></br>
            <label for="email">Email</label>
            <br></br>
            <input name="email" type="email" />
            <br></br>
            <br></br>
            <label for="number">Number</label>
            <br></br>
            <input name="number" type="number" />
            <br></br>
            <br></br>
            <label for="date">Preferred Date</label>
            <br></br>
            <input name="date" type="date" />
            <br></br>
            <label for="time">Preferred Time</label>
            <br></br>
            <input name="time" type="time" />
            <br></br>
            <button type = "submit">Submit</button>
            

        </form>
        </>
    )

}

export default IntakeForm;