import React from 'react';
import { Button, Card } from 'react-bootstrap';
import img from '../../../images/unnamed.png'
import img1 from '../../../images/a.png'
import img2 from '../../../images/b.png'
import img3 from '../../../images/c.png'
import img4 from '../../../images/d.png'
import img5 from '../../../images/e.png'
import image1 from '../../../images/1.png'
import image2 from '../../../images/2.png'
import image3 from '../../../images/3.png'
import image4 from '../../../images/4.png'
import image5 from '../../../images/5.png'
import image6 from '../../../images/6.png'
import image7 from '../../../images/7.png'
import image8 from '../../../images/8.png'
import png1 from '../../../images/p1.png'
import png2 from '../../../images/p2.png'
import png3 from '../../../images/p3.png'
import png4 from '../../../images/p4.png'
import png5 from '../../../images/p5.png'
import png6 from '../../../images/p6.png'
import pngapp from '../../../images/app-store-png-logo-33107.png'
import pngplay from '../../../images/play store.png'


const Overview = () => {
    return (
        <div class=" mt-5 pt-5 me-5">
            <div className='container'>
                <div class="row mt-5">
                    <div class="col-md-6 col-lg-6 mt-5">
                        <h1>Premium video meetings for everyone.</h1>
                        <p>
                            We re-engineered the service we built for secure, high-quality business meetings, Google Meet, to make it available for all, on any device.
                        </p>
                        <div className='d-flex'>
                            <Button>
                                Start a meeting
                            </Button>
                            <p className='mx-2 mt-2'>or</p>
                            <input placeholder='Enter meeting code' type="Number" />
                            <Button className='mx-2'>Join</Button>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-6 p-3">
                        <img width="370px" height="258px" src={img} alt="" />
                    </div>
                </div>
                <div class="row mt-5">

                    <div class="col-md-6 col-lg-6 mt-5">
                        <h1>Meet safely</h1>
                        <p>
                            Meet uses the same protections that Google uses to secure your information and safeguard your privacy. Meet video conferences are encrypted in transit, and our array of safety measures are continuously updated for added protection.
                        </p>
                    </div>
                    <div class="col-md-6 col-lg-6 p-3">
                        <img width="370px" height="258px" src={img1} alt="" />
                    </div>
                </div>
                <div class="row mt-5">

                    <div class="col-md-6 col-lg-6 p-3">
                        <img width="370px" height="258px" src={img2} alt="" />
                    </div>

                    <div class="col-md-6 col-lg-6 mt-5">
                        <h1>Meet from anywhere</h1>
                        <p>
                            Get the whole crew together in Google Meet, where you can present business proposals, collaborate on chemistry assignments, or just catch up face to face.

                            Businesses, schools, and other organizations can live stream meetings to 100,000 viewers within their domain.
                        </p>
                    </div>
                </div>
                <div class="row mt-5">

                    <div class="col-md-6 col-lg-6 mt-5">
                        <h1>Meet on any device</h1>
                        <p>
                            Invited guests can join an online video conference from their computer using any modern web browser—no software to install. On mobile devices, they can join from the Google Meet app. Guests can even join meetings from Google Nest Hub Max.
                        </p>
                    </div>

                    <div class="col-md-6 col-lg-6 p-3">
                        <img width="370px" height="258px" src={img3} alt="" />
                    </div>

                </div>
                <div class="row mt-5">

                    <div class="col-md-6 col-lg-6 p-3">
                        <img width="370px" height="258px" src={img4} alt="" />
                    </div>

                    <div class="col-md-6 col-lg-6 mt-5">
                        <h1>Meet clearly</h1>
                        <p>
                            Google Meet adjusts to your network speed, ensuring high quality video calls wherever you are. New AI enhancements keep your calls clear even when your surroundings aren’t.
                        </p>
                    </div>
                </div>
                <div class="row mt-5">

                    <div class="col-md-6 col-lg-6 mt-5">
                        <h1>Meet with everyone</h1>
                        <p>
                            With live captions powered by Google’s speech recognition technology, Google Meet makes meetings more accessible. For non-native speakers, hearing impaired participants, or just noisy coffee shops, live captions make it easy for everyone to follow along (available in English only).
                        </p>
                        <div className='d-flex'>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-6 p-3">
                        <img width="370px" height="258px" src={img5} alt="" />
                    </div>
                </div>

                <div className='container row col-md-2 col-lg-10 mt-5 justify-content-between bg-light p-5'>
                    <Card border="light" bg="light" style={{ width: '18rem' }}>
                        <img src={png1} alt="" className='ms-2' width="50"
                            height="50" />
                        <Card.Body className='mt-4'>
                            <Card.Title>Stay connected</Card.Title>
                            <Card.Text>
                                Simple scheduling, easy recording, and adaptive layouts help people stay engaged and connected.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card border="light" bg="light" style={{ width: '18rem' }}>
                        <img src={png2} alt="" className='ms-2' width="50"
                            height="50" />
                        <Card.Body className='mt-4'>
                            <Card.Title>Share your screen</Card.Title>
                            <Card.Text>
                                Present documents, slides, and spreadsheets by showing your entire screen or just a window.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card border="light" bg="light" style={{ width: '18rem' }}>
                        <img src={png3} alt="" className='ms-2' width="50"
                            height="50" />
                        <Card.Body className='mt-4'>
                            <Card.Title>Host large meetings</Card.Title>
                            <Card.Text>
                                Invite up to 500 internal or external participants to a meeting.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card border="light" bg="light" style={{ width: '18rem' }}>
                        <img src={png4} alt="" className='ms-2' width="50"
                            height="50" />
                        <Card.Body className='mt-4'>
                            <Card.Title>Join from your phone</Card.Title>
                            <Card.Text>
                                Use the Google Meet app to join a video call, or join audio-only by calling the dial-in number in the meeting invite.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card border="light" bg="light" style={{ width: '18rem' }}>
                        <img src={png5} alt="" className='ms-2' width="50"
                            height="50" />
                        <Card.Body className='mt-4'>
                            <Card.Title>Take control</Card.Title>
                            <Card.Text>
                                Meetings are safe by default. Owners can control who can join the meeting; only people approved by the meeting owner can enter.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card border="light" bg="light" style={{ width: '18rem' }}>
                        <img src={png6} alt="" className='ms-2' width="50"
                            height="50" />
                        <Card.Body className='mt-4'>
                            <Card.Title>Broadcast internal events</Card.Title>
                            <Card.Text>
                                Live stream events such as town halls and sales meetings for up to 100,000 viewers within your domain.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>

                <div className='text-center me-5 mt-5'>
                    <h3>Leading companies trust Google Meet</h3>
                </div>

                <div className='row mt-5 ms-2'>
                    <ul class="col-md-2 col-lg-10 mt-5">
                        <img className='p-2 ms-2' src={image1} alt="" width="260"
                            height="60" />
                        <img className='p-2 ms-2' src={image2} alt="" width="260"
                            height="60" />
                        <img className='p-2 ms-2' src={image3} alt="" width="260"
                            height="60" />
                        <img className='p-2 ms-2' src={image4} alt="" width="160"
                            height="90" />
                        <img className='p-2 ms-2' src={image5} alt="" width="260"
                            height="60" />
                        <img className='p-2 ms-2' src={image6} alt="" width="260"
                            height="60" />
                        <img className='p-2 ms-2' src={image7} alt="" width="260"
                            height="60" />
                        <img className='p-2 ms-2' src={image8} alt="" width="160"
                            height="90" />
                    </ul>
                </div>
            </div>
            <div class="container mt-5 p-5 col-12 col-md-12 col-lg-6">
                <div class="accordion" id="accordionExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingOne">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                                aria-expanded="true" aria-controls="collapseOne">
                                TOP QUESTIONS
                            </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                            data-bs-parent="#accordionExample">
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingTwo">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                What is the difference between Google Hangouts, Hangouts Meet, and Google Meet?
                            </button>
                        </h2>
                        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                            data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                Hangouts Meet and Hangouts Chat were rebranded to Google Meet and Google Chat in April 2020. We announced in 2019 that we would be migrating all classic Hangouts users to the new Meet and Chat products. In order to provide enterprise-grade online video conferencing to everyone, we announced a no-cost version of Google Meet in May 2020.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingThree">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Is Google Meet safe?
                            </button>
                        </h2>
                        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
                            data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                Yes. Meet takes advantage of Google Cloud’s secure-by-design infrastructure to help protect your data and safeguard your privacy. You can learn about our privacy commitments, counter-abuse measures and data protection here.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingFour">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                Can external participants join a call?
                            </button>
                        </h2>
                        <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour"
                            data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                Absolutely. For the no-cost version of Google Meet, all participants will need to be signed into a Google Account to join. You can create a Google Account with a work or personal email address.

                                For Google Workspace customers, once you’ve created a meeting, you can invite anyone to join even if they don’t have a Google Account. Just share the link or meeting ID with all meeting participants.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingFour">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                What does Google Meet cost?
                            </button>
                        </h2>
                        <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour"
                            data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                Anyone with a Google Account can create a video meeting, invite up to 100 participants, and meet for up to 60 minutes per meeting at no cost.

                                For additional features such as international dial-in numbers, meeting recording, live streaming, and administrative controls, see plans and pricing.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingFour">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                Do Google Meet links expire?
                            </button>
                        </h2>
                        <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour"
                            data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                Each meeting is given a unique meeting code which has an expiration time based on what Workspace product the meeting is created from. Read more here.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingFour">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                Is Google Meet compliant with my industry requirements?
                            </button>
                        </h2>
                        <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour"
                            data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                Our products, including Google Meet, regularly undergo independent verification of their security, privacy, and compliance controls, achieving certifications, attestations of compliance, or audit reports against standards around the world. Our global list of certifications and attestations can be found here.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingFour">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                My organization uses Google Workspace. Why don’t I see Google Meet in Calendar?
                            </button>
                        </h2>
                        <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour"
                            data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                IT administrators control Google Workspace settings, such as whether Google Meet is the default video conferencing solution in Google Calendar. Visit the Google Workspace Admin Help Center to learn how to activate Google Meet in your organization.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Overview;
