import React, { useState } from 'react'
import './Signup.css'


import { useNavigate } from 'react-router-dom';




const Signup = () => {
    const router = useNavigate()


    return (
        <div id='signupyoutubescreen'>

            <form>
                <div id='youtubeloginmain'>
                    {/* <div className='youtubelogologin'>
                        </div> */}

                    {/* <div className='signindiv'> </div>
                            <div className='useyourdiv'></div> */}
                    <div id='marginmain'>
                        <div className='signupinputdiv'>
                            <input className='signupinputfocus' type="text" placeholder='' name='name' />
                            <label className='signuplabel'>First name</label>
                        </div>
                        <div className='signupinputdiv'>
                            <input className='signupinputfocus' type="text" placeholder='' name='email' />
                            <label className='signuplabel'>Last name</label>
                        </div>
                        <div className='signupinputdiv'>
                            <input className='signupinputfocus' type="text" placeholder='' name='password' />
                            <label className='signuplabel'>Email</label>
                        </div>
                        <div className='signupinputdiv'>
                            <input className='signupinputfocus' type="text" placeholder='' name='password' />
                            <label className='signuplabel'>Password</label>
                        </div>
                        <div className='signupinputdiv'>
                            <input className='signupinputfocus' type="text" placeholder='' name='password' />
                            <label className='signuplabel'>Confirm password</label>
                        </div>
                    </div>
                    <div id='signupnext'> <div> <input className='nextbuttton' type='submit' value="Register"></input></div></div>
                </div>
                <div className='lastenglishdiv'>
                    <span id='elang'>English(united state)</span>
                    <div id='helpprivacyterm'>
                        <div>Help</div>
                        <div>Privacy</div>
                        <div>Terms</div>
                    </div>
                </div>
            </form>
        </div>

    )
}

export default Signup