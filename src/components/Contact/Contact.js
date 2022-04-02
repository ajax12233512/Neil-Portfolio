import React, { useRef, useState } from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';


function Contact() {
    
    const userId = process.env.USER_ID || window.env.USER_ID;
    const templateId = process.env.TEMPLATE_ID || window.env.TEMPLATE_ID;
    const serviceId = process.env.SERVICE_ID || window.env.SERVICE_ID;

    const form = useRef(); //Create reference to form *required in sendForm()*
    const [formName, setFormName] = useState()
    const [formPhone, setFormPhone] = useState()
    const [formEmail, setFormEmail] = useState()
    const [formMessage, setFormMessage] = useState()
    
    

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('form submited')
        let parameters = {
            formName,
            formPhone,
            formEmail,
            formMessage
        };

        emailjs.sendForm(
            serviceId,
            templateId,
            form.current,
            userId
        ).then((result) => {
            console.log(result.text);
            window.location.reload();
        }, (err) => {
            console.log(err.text);
        })

        
        
    }
    
    

    return (        
        <form ref={form} onSubmit={e => handleSubmit(e)} id='contact' className='contact-ctn'>
            <h2 className='contact-title'>Contact</h2>
            <div className='contact'>
                <div className='contact-feild contact-name'>
                    {/* <label htmlFor='name'>Name</label> */}
                    <input 
                        name='formName'
                        onChange={e => setFormName(e.target.value)} 
                        id='name' 
                        type='text' 
                        placeholder='Name'
                        value={formName}/>
                </div>

                <div className='contact-feild contact-email'>
                    {/* <label htmlFor='email'>Email</label> */}
                    <input 
                        name='formEmail'
                        onChange={e => setFormEmail(e.target.value)} 
                        id='email' 
                        type='email' 
                        placeholder='Email'
                        value={formEmail}/>
                </div>

                <div className='contact-feild contact-phone'>
                    {/* <label htmlFor='phone'>Phone</label> */}
                    <input 
                        name='formPhone'
                        onChange={e => setFormPhone(e.target.value)} 
                        id='phone' 
                        type='tel' 
                        placeholder='Phone'
                        value={formPhone}/>
                </div>

                <div className='contact-feild contact-message'>
                    {/* <label htmlFor='message'>message</label> */}
                    <textarea 
                        name='formMessage'
                        id='message'
                        type='text' 
                        placeholder='Message'
                        onChange={e => setFormMessage(e.target.value)}
                        value={formMessage}
                    />
                </div>
            </div>
            <a href='/'><button className='submit-btn' type='submit'>Submit</button></a>
        </form>
    )
}

export default Contact
