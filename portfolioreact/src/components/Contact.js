import React, { useRef } from 'react';
import emailjs from "@emailjs/browser";

const Contact = () => {
    const form = useRef();
  
    const sendEmail = (e) => {
        e.preventDefault();
  
        emailjs
        .sendForm('service_enoylh8', 'template_al3odd8', 
        form.current, {
            publicKey: 'A9uxVD_yxpdspaeax',
        })
        .then(
            () => {
                console.log('SUCCESS!');
            },
            (error) => {
                console.log('FAILED...', error.text);
            },
        );
    };

    return (
        <form id="contact" ref={form} onSubmit={sendEmail}>
            <div className="P0">
                <h1 id="formtitle">Contact</h1>
                <span></span>
            </div>
            <div id="container-contact">
                <div className="P1">
                    <input className="formulaire" type="text" name="user_name" placeholder="Nom"/>
                    <input className="formulaire" type="email" name="user_email" placeholder="Email"/>
                    <input className="formulaire" type="tel" name="user_phone" placeholder="Téléphone"/>
                </div>

                <div className="P2">
                    <textarea className="txt" name="message" placeholder="Ecrivez votre messages ici"/>
                </div>
            </div>
            <input className="btn" type="submit" value="Send"/>
            <br />
            <span>Massi.Tgh &#169; 2024</span>
        </form>
    );
};

export default Contact;