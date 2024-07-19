"use client"
import { useState } from 'react';
// import styles from '../style';
// import ContactUs from '../components/ContactUs';
import ContactUsHero from '@/components/contact-us-hero';
// import ContactUsForm from '@/components/contact-us-form';
import ContactForm from '@/components/contact-form';
import styles from '../../app/styles' // Adjust the path to your styles file


const Contact = () => {
  const [showSuccesToster, setSuccesToster] = useState(false);

  const handleSuccessToster = (value) => {
    setSuccesToster(value);
  };

  return (
    <>
      {showSuccesToster && (
        <div
          id="toast-success"
          className="flex fixed items-center z-100 top-[150px] md:left-[35%] left-[10%] w-full md:max-w-xl  max-w-xs p-4 mb-4 text-dimBlack bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
          role="alert"
        >
          <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          <div className="ml-3 text-sm font-normal">
            Thanks for connecting with Escose. We will get back to you soon.
          </div>
          <button
            type="button"
            className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
            data-dismiss-target="#toast-success"
            aria-label="Close"
            onClick={() => handleSuccessToster(false)}
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      )}
      <div className={`md:mt-10 sm:mt-24 ${styles.flexStart} wave_banner`}>
        <ContactUsHero />
      </div>

      <div className={`bg-primary  ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth} `}>
          <ContactForm handleSuccessToster={handleSuccessToster} />
        </div>
      </div>
      <div className='section' id="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3505.389099340218!2d77.27203077549694!3d28.52802217572203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDMxJzQwLjkiTiA3N8KwMTYnMjguNiJF!5e0!3m2!1sen!2sin!4v1720926895304!5m2!1sen!2sin" width="100%" height="422px"></iframe>
      </div>
    </>
  );
};

export default Contact;
