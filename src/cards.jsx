import 'bootstrap/dist/css/bootstrap.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// import InfoCard from './cardinfo';
import PropTypes from 'prop-types';
import './App.css';

const InfoCard = ({ icon, title, description }) => {
  return (
    <div className="info-card">
      <div className="icon">
        <img src={icon} alt={title} />
      </div>
      <h2 className="title">{title}</h2>
      <p className="description">{description}</p>
    </div>
  );
};

InfoCard.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string
};


const Crd = () => {
  return (
    <div className="app">
      <Row className='to' style={{ backgroundColor: "rgb(238, 235, 235)" }}>
        <Col className='arange'>
          <InfoCard
            icon="https://img.icons8.com/ios/50/000000/application-window.png"
            title="Fully Responsive"
            description="This theme will look great on any device, no matter the size!"
          /></Col>
        <Col className='arange'> <InfoCard
          icon="https://img.icons8.com/ios-filled/50/static-view-level1.png"
          title="Bootstrap 5 Ready"
          description="Featuring the latest build of the new Bootstrap 5 framework!"
        /></Col ><Col className='arange'>
          <InfoCard
            icon="https://img.icons8.com/parakeet-line/48/program.png"
            title="Easy to Use"
            description="Ready to use with your own content, or customize the source files!"
          /></Col>
      </Row>
    </div>
  );
};


export default Crd;

