const Contact=()=>{
    return(
        <div className="divContact">
            
<div className="childContact"> 
          <h1><b>--- Contact Us ---</b></h1><br></br>
       <form className="contactForm"><br></br><br></br>
        <label for="name" >Name</label><br></br>
        <input type="text" id="name" name="name" placeholder="Your name" required></input><br></br><br></br>

       <label for="email">Email</label><br></br>
       <input type="text" id="email" name="email" placeholder="Your Email address" required></input><br></br><br></br>

       <label for="message">Message/Feedback</label><br></br>
       <input type="text" id="message" name="message" placeholder="Type your Message or Feedback here.." required></input><br></br><br></br>

      <button type="submit">Send Message</button>
       </form><br></br>
       <p><b>You can also follow us on our social media platforms:</b><br></br><i>foodblog@facebook.com</i><br></br><i>foodblog@instagram.com</i><br></br><br></br><b>"We’d love to hear from you! Whether you have a question, want to share a recipe, or are interested in collaborating, feel free to drop us a message. We’ll get back to you as soon as possible."</b>
       </p>

       </div>
      

        </div>
    );
}
export default Contact;