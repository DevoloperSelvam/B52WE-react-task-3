
import 'bootstrap/dist/css/bootstrap.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import CloseButton from 'react-bootstrap/CloseButton';
import './App.css';


function NavigationBar() {
  return (
    <nav className='huge' >
      <Row>
        <Col>
          <div className='navone'>
            <button><img width="12" height="12" src="https://img.icons8.com/plumpy/24/left--v2.png" alt="left--v2" /><span>Overview Page</span></button>

          </div>

        </Col>
        <Col>
          <div className='navtwo'>
            <button id='op'><img width="25" height="25" src="https://img.icons8.com/windows/32/imac.png" alt="imac" /></button>
            <button id='op'><img width="22" height="22" src="https://img.icons8.com/ios-glyphs/30/ipad-mini.png" alt="ipad-mini" /></button>
            <button id='op'><img width="20" height="20" src="https://img.icons8.com/ios-glyphs/30/iphone-x.png" alt="iphone-x" /></button>
          </div>
        </Col>
        <Col>
          <div className='navthree'>
            <button><img width="16" height="16" src="https://img.icons8.com/material-outlined/24/github.png" alt="github" /></button>
            <button id='off' ><img width="16" height="16" src="https://img.icons8.com/material-sharp/24/FA5252/download.png" alt="download" />Free Download</button>
            <CloseButton disabled />
          </div>
        </Col>
      </Row>
    </nav>
  );
}





export default NavigationBar;

