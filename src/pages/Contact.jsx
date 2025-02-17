import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Mail, Phone, MapPin, Clock, ArrowBigLeftDash } from 'lucide-react';
import { ContactContainer, ContactInfo, ContactForm } from '../styles/contactStyles';
import { pagesConfig } from '../config/pagesConfig';
import { Link } from 'react-router-dom';


const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters')
});


const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={fadeInUp}
    >
       <div className=' max-w-7xl mx-auto bg-green-500 h-32 relative rounded-full'> 
            <div className='absolute inset-0 bg-gradient-to-r from-green-500 to-green-600 opacity-40 rounded-full
            '>
              <img src="./trees-image.png" alt="about-hero" className="w-full h-full object-cover rounded-full" />
            </div>
            <div className='absolute inset-0 flex flex-col items-center justify-center'>
              <h1 className='text-white text-4xl font-bold mb-4 uppercase'>Contact Us</h1>
              <div className='flex items-center justify-center gap-6'>
              <Link to='/' className='text-white text-xl font-semibold'>
                <p>Home</p>
              </Link>
              <span className='text-white text-lg font-semibold'>
                <ArrowBigLeftDash size={24} />
              </span>
              <p className='text-white text-xl font-bold'>Contact</p>
              </div>
            </div>  
         </div>

      <ContactContainer>
        <ContactInfo>
          <motion.h1
            className="text-4xl font-bold mb-6"
            variants={fadeInUp}
          >
            Get in Touch
          </motion.h1>
          <motion.p
            className="text-gray-600 mb-8"
            variants={fadeInUp}
          >
            Have questions about our products or services? We're here to help!
          </motion.p>

          <motion.div variants={fadeInUp}>
            <div className="info-item">
              <Mail size={24} />
              <div>
                <h3 className="font-bold">Email</h3>
                <p>
                <a href={`mailto:${pagesConfig.contact.email}`}>{pagesConfig.contact.email}</a>
                </p>
              </div>
            </div>
            <div className="info-item">
              <Phone size={24} />
              <div>
                <h3 className="font-bold">Phone</h3>
                <p> {pagesConfig.contact.phone} </p>
              </div>
            </div>
            <div className="info-item">
              <MapPin size={24} />
              <div>
                <h3 className="font-bold">Address</h3>
                <p>
                  {pagesConfig.contact.address}
                </p>
              </div>
            </div>
            <div className="info-item">
              <Clock size={24} />
              <div>
                <h3 className="font-bold">Business Hours</h3>
                <p>
                  {pagesConfig.contact.bussinessHours.map((item, index) => (
                    <p key={index} className="mb-1">
                      <span className="font-semibold">{item.day}:</span> {item.hours}
                    </p>
                  ))}
                </p>

              </div>
            </div>
          </motion.div>
        </ContactInfo>

        <ContactForm onSubmit={handleSubmit(onSubmit)}>
          <motion.div variants={fadeInUp}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                {...register('name')}
                className={errors.name ? 'border-red-500' : ''}
              />
              {errors.name && <p className="error">{errors.name.message}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                {...register('email')}
                className={errors.email ? 'border-red-500' : ''}
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                {...register('subject')}
                className={errors.subject ? 'border-red-500' : ''}
              />
              {errors.subject && <p className="error">{errors.subject.message}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                rows={5}
                {...register('message')}
                className={errors.message ? 'border-red-500' : ''}
              />
              {errors.message && <p className="error">{errors.message.message}</p>}
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-green-600 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all"
            >
              Send Message
            </button>
          </motion.div>
        </ContactForm>
      </ContactContainer>
    </motion.div>
  );
}