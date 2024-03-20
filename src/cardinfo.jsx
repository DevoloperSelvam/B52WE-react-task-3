
import 'bootstrap/dist/css/bootstrap.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { View, Viewone, Info, Fixed, End } from './saprete';
import './App.css';




const port = () => {
    return (
        <div >

            <Row>
                <Col className='cd'>
                    <View
                        title="Fully Responsive Design"
                        description="When you use a theme created by Start Bootstrap, you know 
                        that the theme will look great on any device, whether it's a phone, tablet,
                         or desktop the page will behave responsively!"
                    />
                </Col>
                <Col className='size'>
                    <Viewone
                        icon="https://www.todoappleblog.com/wp-content/uploads/2019/01/como-usar-personas-app-fotos-iphone.jpg.webp"
                    />
                </Col>
            </Row>
            <Row><Col >
                <Viewone
                    icon="https://www.thejavaprogrammer.com/wp-content/uploads/2020/05/Java-Code-768x451.png"
                />
            </Col>
                <Col className='cd' >
                    <View
                        title="Updated For Bootstrap 5"
                        description="Newly improved, and full of great utility classes,
                         Bootstrap 5 is leading the way in mobile responsive web development!
                          All of the themes on Start Bootstrap are now using Bootstrap 5!"
                    />
                </Col>

            </Row>
            <Row>
                <Col className='cd'>
                    <View
                        title="Easy to Use & Customize"
                        description="Landing Page is just HTML and CSS with a splash of SCSS for users
                         who demand some deeper customization options. Out of the box, just add your
                          content and images, and your new landing page will be ready to go!"
                    />
                </Col>
                <Col className='size'>
                    <Viewone
                        icon="https://th.bing.com/th/id/R.ab3a811d4a64b8543bdc80786775282a?rik=ZI80DfH2SMySGw&riu=http%3a%2f%2fmedianews.com.pl%2fwp-content%2fuploads%2f2020%2f07%2fyoung-woman-working-typing-on-her-laptop_free_stock_photos_picjumbo_HNCK2983-2210x1474-1.jpg&ehk=lLM2Y5ePEkaSwEfioNmJWLza8hbuon2y8XvX5B7ajHI%3d&risl=&pid=ImgRaw&r=0"
                    />
                </Col>
            </Row>
            <Row style={{ backgroundColor: "rgb(238, 235, 235)" }}>
                <h2 className='too'>What people are saying...</h2>
                <Col className='arange'>
                    <Info
                        icon="https://www.lensmen.ie/wp-content/uploads/2015/02/Profile-Portrait-Photographer-in-Dublin-Ireland..jpg"
                        title="Margaret E."
                        description="This is fantastic! Thanks so much guys!"
                    /></Col>
                <Col className='arange'> <Info
                    icon="https://th.bing.com/th/id/OIP.hCfHyL8u8XAbreXuaiTMQgHaHZ?rs=1&pid=ImgDetMain"
                    title="Fred S."
                    description="Bootstrap is amazing. I've been using it to create lots of super nice landing pages."
                /></Col ><Col className='arange'>
                    <Info
                        icon="https://th.bing.com/th/id/OIP.N-qSmgcmtlx7ljhgDKq_qgHaHa?pid=ImgDet&w=206&h=206&c=7&dpr=1.3"
                        title="Sarah W."
                        description="Thanks so much for making these free resources available to us!"
                    /></Col>
            </Row>
            <Fixed></Fixed>
            <End></End>
        </div>
    );
};

export default port;