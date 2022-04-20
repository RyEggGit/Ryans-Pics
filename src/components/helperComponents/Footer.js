import React, {useState} from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import {validEmail} from './email'


function Footer() {
    const[email, setEmail] = useState('');

    const clickHandler = () =>{
        //console.log(email)
        if(validEmail({email}) === true){
            console.log('valid email')
        }
        else{
            console.log('invalid email')

        }
        
    }
    
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    Join the Ryan Pics newsletter to receive updates on what Ryan will take picutres of next
                </p>
                <p className='footer-subscription-text'>
                    You can unsubscribe at any time.
                </p>
                <div className='input-areas'>
                        <input
                            className='footer-input'
                            name='email'
                            type='email'
                            placeholder='Your Email'
                            value={email}
                            onInput={e => setEmail(e.target.value)}
                        />
                        <Button buttonStyle='btn--outline' click={clickHandler}>Subscribe</Button>
                </div>
            </section>
            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className='footer-logo'>
                        <Link to='/' className='social-logo'>
                            Ryan's Pics
                            <i class="fas fa-camera"></i>
                        </Link>
                    </div>
                    <small className='website-rights'>Ryan's Pics ©2022</small>
                    <div className='social-icons'>
                        <Link
                            className='social-icon-link facebook'
                            to='/'
                            target='_blank'
                            aria-label='Facebook' 
                        >
                            <i className='fab fa-facebook-f' />
                        </Link>
                        <Link
                            className='social-icon-link instagram'
                            to='/'
                            target='_blank'
                            aria-label='Instagram'
                        >
                            <i className='fab fa-instagram' />
                        </Link>
                        <Link
                            className='social-icon-link youtube'
                            to='/'
                            target='_blank'
                            aria-label='Youtube'
                        >
                            <i className='fab fa-youtube' />
                        </Link>
                        <Link
                            className='social-icon-link twitter'
                            to='/'
                            target='_blank'
                            aria-label='Twitter'
                        >
                            <i className='fab fa-twitter' />
                        </Link>
                        <Link
                            className='social-icon-link twitter'
                            to='/'
                            target='_blank'
                            aria-label='LinkedIn'
                        >
                            <i className='fab fa-linkedin' />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Footer;