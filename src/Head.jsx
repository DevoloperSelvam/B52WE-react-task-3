import Button from 'react-bootstrap/Button';
import './App.css';


function Create() {
    return (
        <div>
            <img className="water" src="https://th.bing.com/th/id/OIP.BJE1cU4vkXy7sSv6w9D_BgHaE7?rs=1&pid=ImgDetMain" alt="" />
            <h1 className='pos'>Generate more leads with a professional landing page!</h1>
            <form className='fd'>
                <input className='fd2' name="Email" placeholder='      Email Address' />
                <Button id='class' variant="primary">Submit</Button>
            </form>

        </div>
    );
}

export default Create;