import React from 'react'
import { ContactContainer, ContactSection, ContactH1, ContactEvent, ContactInfo, ContactGPS, ContactBox, ContactIcon, ContactIconColor,ContactText, ContactH3, ContactTextP,ContactEvent2} from './ContactsElements'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMapMarkerAlt, faPhoneAlt, faEnvelope} from '@fortawesome/free-solid-svg-icons'



const Contacts = () => {
    return (
        <ContactContainer id="contact">
            <ContactH1>Contact Us</ContactH1>
            <ContactSection>

                <ContactEvent>
                    <ContactInfo>
                        <ContactBox>
                                <ContactIcon>
                                    <ContactIconColor><FontAwesomeIcon icon={faMapMarkerAlt}></FontAwesomeIcon></ContactIconColor>
                                </ContactIcon>
                                <ContactText>
                                    <ContactH3>Address</ContactH3>
                                    <ContactTextP> 8882 170 St NW, Edmonton, AB T5T 4J2</ContactTextP>
                                </ContactText>
                            </ContactBox>

                            <ContactBox>
                                <ContactIcon>
                                    <ContactIconColor><FontAwesomeIcon icon={faPhoneAlt}></FontAwesomeIcon></ContactIconColor>
                                </ContactIcon>
                                <ContactText>
                                    <ContactH3>Phone</ContactH3>
                                    <ContactTextP>(780) 444-5321</ContactTextP>
                                </ContactText>
                            </ContactBox>

                            <ContactBox>
                                <ContactIcon>
                                    <ContactIconColor><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon></ContactIconColor>
                                </ContactIcon>
                                <ContactText>
                                    <ContactH3>Email</ContactH3>
                                    <ContactTextP>register@gmail.com</ContactTextP>
                                </ContactText>
                            </ContactBox>
                    </ContactInfo>
                </ContactEvent>

                {
                    // fix this map issue later
                }
                <ContactEvent2>
                    <ContactGPS> 
                                <iframe 
                                title="This is a unique title"
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9487.897368670738!2d-113.6241906!3d53.5225151!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8546a29e09b26fcb!2sWest%20Edmonton%20Mall!5e0!3m2!1sen!2sca!4v1631322809603!5m2!1sen!2sca" 
                                width="600" 
                                height="450"
                                frameBorder="0"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                aria-hidden="false"
                                tabIndex="0" />
                    </ContactGPS>
                </ContactEvent2>
            </ContactSection>
        </ContactContainer>
    )
}

export default Contacts

/*
<ContactEvent>
                    <ContactInfo>
                        <ContactBox>
                            <ContactIcon>
                                <ContactIconColor><FontAwesomeIcon icon={faMapMarkerAlt}></FontAwesomeIcon></ContactIconColor>
                            </ContactIcon>
                            <ContactText>
                                <ContactH3>Address</ContactH3>
                                <ContactTextP> 8882 170 St NW, Edmonton, AB T5T 4J2</ContactTextP>
                            </ContactText>
                        </ContactBox>

                        <ContactBox>
                            <ContactIcon>
                                <ContactIconColor><FontAwesomeIcon icon={faPhoneAlt}></FontAwesomeIcon></ContactIconColor>
                            </ContactIcon>
                            <ContactText>
                                <ContactH3>Phone</ContactH3>
                                <ContactTextP>(780) 444-5321</ContactTextP>
                            </ContactText>
                        </ContactBox>

                        <ContactBox>
                            <ContactIcon>
                                <ContactIconColor><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon></ContactIconColor>
                            </ContactIcon>
                            <ContactText>
                                <ContactH3>Email</ContactH3>
                                <ContactTextP>register@gmail.com</ContactTextP>
                            </ContactText>
                        </ContactBox>
                    </ContactInfo>

                    <ContactGPS>
                        <ContactMap>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9487.897368670738!2d-113.6241906!3d53.5225151!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8546a29e09b26fcb!2sWest%20Edmonton%20Mall!5e0!3m2!1sen!2sca!4v1631322809603!5m2!1sen!2sca" 
                            width="400" 
                            height="450"
                            frameBorder="0"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            aria-hidden="false"
                            tabIndex="0"/>
                        </ContactMap>
                    </ContactGPS>
                </ContactEvent>



*/