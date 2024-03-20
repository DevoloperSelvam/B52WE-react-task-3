import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './App.css';



const View = ({ title, description }) => {
    return (
        <div>
            <h2 className="title">{title}</h2>
            <p className="description">{description}</p>

        </div>
    );
};

View.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string
};

const Viewone = ({ icon }) => {
    return (
        <div >
            <img style={{ width: '768px', height: '553px' }} src={icon} />
        </div>
    );
};

Viewone.propTypes = {
    icon: PropTypes.string,
};

const Info = ({ icon, title, description }) => {
    return (
        <div className="info-card">
            <div className="icon">
                <img id='hops' style={{ width: '200px' }} src={icon} alt={title} />
            </div>
            <h2 className="title">{title}</h2>
            <h6 className="description">{description}</h6>
        </div>
    );
};

Info.propTypes = {
    icon: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string
};
function Fixed() {
    return (
        <div className='latest'>
            <h2 className='late '>Ready to get started? Sign up now!</h2>
            <form className='foo' >
                <input className='foo2' name="Email" placeholder='      Email Address' />
                <Button id='class' variant="primary">Submit</Button>
            </form>

        </div>
    );
}

function End() {
    return (
        <div>
            <Row  >
                <Col className='cross'>
                    <ul style={{ display: 'flex', gap: '22px', paddingLeft: '120px' }}>
                        <a href="">About</a>
                        <li><a href="#!">Contact</a></li>
                        <li><a href="#!">Terms of Use</a></li>
                        <li><a href="#!">Privacy Policy</a></li>
                    </ul>
                </Col>
                <Col className='cross'>
                    <div className='gapp' >
                        <button id='gapp'><img width="30" height="30" src="https://cdn-icons-png.flaticon.com/512/5968/5968764.png" alt="imac" /></button>
                        <button id='gapp'><img width="30" height="30" src="https://cdn-icons-png.flaticon.com/512/1384/1384065.png" alt="ipad-mini" /></button>
                        <button id='gapp'><img width="30" height="30" src="https://img.icons8.com/ios/50/228BE6/instagram-new--v1.png" alt="instagram" /></button>
                    </div>
                </Col>
            </Row>
            <h6>
                © Your Website 2023. All Rights Reserved.
            </h6>
        </div>
    )

}



export { View, Viewone, Info, Fixed, End };