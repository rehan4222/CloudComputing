import { useState, useRef, Fragment } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import { send, sendHover } from '../assets';
import facebook  from '../assets/social/facebook.png';
import github  from '../assets/social/github.png';
import  mail  from '../assets/social/mail.png';
import linkedin  from '../assets/social/linkedin.png';
import  twitter  from '../assets/social/twitter.png';
import  medium  from '../assets/social/medium.png';
import  linktree  from '../assets/social/linktree.png';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      let res = await fetch("https://u5l8shlik7.execute-api.us-west-2.amazonaws.com/prod/ContactForm", {
      method: "POST",
      body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message
        }),
      });
      let resJson = await res.json();
      if (res.status === 200) {
          setLoading(false);
          alert('Thank you. I will get back to you as soon as possible.');

          setForm({
            name: '',
            email: '',
            message: '',
          });
      } else {
        setLoading(false);
        console.log(error);
        alert('Something went wrong. Please try again.');
      }
    } catch (err) {
        console.log(err);
    }

    // sign up on emailjs.com (select the gmail service and connect your account).
    //click on create a new template then click on save.
    // emailjs
    //   .send(
    //     'serviceID', // paste your ServiceID here (you'll get one when your service is created).
    //     'templateID', // paste your TemplateID here (you'll find it under email templates).
    //     {
    //       from_name: form.name,
    //       to_name: 'YourName', // put your name here.
    //       from_email: form.email,
    //       to_email: 'youremail@gmail.com', //put your email here.
    //       message: form.message,
    //     },
    //     'yourpublickey' //paste your Public Key here. You'll get it in your profile section.
    //   )
    //   .then(
    //     () => {
    //       setLoading(false);
    //       alert('Thank you. I will get back to you as soon as possible.');

    //       setForm({
    //         name: '',
    //         email: '',
    //         message: '',
    //       });
    //     },
    //     (error) => {
    //       setLoading(false);
    //       console.log(error);
    //       alert('Something went wrong. Please try again.');
    //     }
    //   );


  };

  return (
    <Fragment>
    <div
      className="-mt-[8rem] xl:flex-row flex-col-reverse 
      flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] bg-jet p-8 rounded-2xl">
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadTextLight}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-10 flex flex-col gap-6 font-poppins">
          <label className="flex flex-col">
            <span className="text-timberWolf font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-eerieBlack py-4 px-6
              placeholder:text-taupe
              text-timberWolf rounded-lg outline-none
              border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-timberWolf font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-eerieBlack py-4 px-6
              placeholder:text-taupe
              text-timberWolf rounded-lg outline-none
              border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-timberWolf font-medium mb-4">
              Your Message
            </span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What's your message?"
              className="bg-eerieBlack py-4 px-6
              placeholder:text-taupe
              text-timberWolf rounded-lg outline-none
              border-none font-medium resize-none"
            />
          </label>

          <button
            type="submit"
            className="live-demo flex justify-center sm:gap-4 
            gap-3 sm:text-[20px] text-[16px] text-timberWolf 
            font-bold font-beckman items-center py-5
            whitespace-nowrap sm:w-[130px] sm:h-[50px] 
            w-[100px] h-[45px] rounded-[10px] bg-night 
            hover:bg-battleGray hover:text-eerieBlack 
            transition duration-[0.2s] ease-in-out"
            onMouseOver={() => {
              document
                .querySelector('.contact-btn')
                .setAttribute('src', sendHover);
            }}
            onMouseOut={() => {
              document.querySelector('.contact-btn').setAttribute('src', send);
            }}>
            {loading ? 'Sending' : 'Send'}
            <img
              src={send}
              alt="send"
              className="contact-btn sm:w-[26px] sm:h-[26px] 
              w-[23px] h-[23px] object-contain"
            />
          </button>
        </form>
      </motion.div>
      
    </div>
    <div className="md:flex md:flex-row justify-between mt-10">
  {/* Social Section on the Left */}
  <div className="md-6">
    <div className="social-section flex items-center space-x-4">
      <a href="mailto:mum.rehan95@gmail.com">
        <img src={mail} alt="Email" width="50"/>
      </a>
      <a href="https://twitter.com/hero1602?s=20">
        <img src={twitter} alt="Twitter" width="50"/>
      </a>
      <a href="https://www.linkedin.com/in/mum95/">
        <img src={linkedin} alt="LinkedIn" width="50"/>
      </a>
      <a href="https://github.com/mrh4222/">
        <img src={github} alt="GitHub" width="50"/>
      </a>
      <a href="https://www.facebook.com/mrh614653/">
        <img src={facebook} alt="Facebook" width="50"/>
      </a>
      <a href="https://medium.com/@mum.rehan95/">
        <img src={medium} alt="Medium" width="50"/>
      </a>
      <a href="https://linktr.ee/mumrehan/">
        <img src={linktree} alt="Linktree" width="50"/>
      </a>
    </div>
  </div>

  {/* Next md-6 Section on the Right */}
  <div className="md-6 mt-4 md:mt-0">
    <p>&copy; {new Date().getFullYear()} Muhammad Rehan - All rights reserved.</p>
  </div>
</div>

    </Fragment>
  );
};

export default SectionWrapper(Contact, 'contact');
