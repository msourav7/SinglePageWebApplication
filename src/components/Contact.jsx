import React from 'react'

function Contact() {
  return (
    <div className='contact'>
        <main className='res'>
            <h1>Contact Us</h1>
            <form>
                <div className='inner'>
                    <label>Name</label>
                    <input type="text" required placeholder='abc...'/>
                </div>
                <div className='inner'>
                    <label>Email</label>
                    <input type="email" required placeholder='abc@xyz.com'/>
                </div>
                <div className='inner'>
                    <label>Message</label>
                    <input type="text" required placeholder='Tell us about your query...'/>
                </div>
                <button type='submit'>Send</button>
            </form>
        </main>
    </div>
  )
}

export default Contact