import React, { useState } from 'react';

const LandingPage = () => {
    const [navOpen, setNavOpen] = useState(false);

    const scrollToSection = (id) => {
        const el = document.getElementById(id);
        if(el) el.scrollIntoView({behaviour: 'smooth' });
    };
  return (
    <div className='font-sans text-gray-800'>
      <header className='bg-[#3b1717] text-white p-4'>
        <nav className='flex justify-between items-center relative'>
            <div className='text-2xl font-bold rounded-md  hover:text-yellow-400 hover:scale-105 hover:shadow-2xl  hover:-translate-y-1 transform transition duration-300 inline-block'>Landing Page</div>
            <div className='md:hidden text-2xl cursor-pointer' onClick={() => setNavOpen(!navOpen)}>&#9776;</div>
            <ul className={`md:flex gap-8 list-none absolute md:static top-14 right-4 p-4 rounded-md z-10 transition-all duration-300 ${navOpen ? 'flex flex-col' : 'hidden'}`}>
                <li> <a href='#hero' className='text-white text-base rounded-md  hover:text-yellow-400 hover:scale-105 hover:shadow-2xl  hover:-translate-y-1 transform transition duration-300 inline-block'>Home</a></li>
                <li> <a href='#features' className='text-white text-base rounded-md  hover:text-yellow-400 hover:scale-105 hover:shadow-2xl  hover:-translate-y-1 transform transition duration-300 inline-block'>Features</a></li>
                <li> <a href='#hero' className='text-white text-base rounded-md  hover:text-yellow-400 hover:scale-105 hover:shadow-2xl  hover:-translate-y-1 transform transition duration-300 inline-block'>Contact</a></li>
            </ul>
        </nav>
      </header>

      <section id='hero' className='bg-cover bg-center py-24 text-center text-white rounded-b-lg mx-1'  style={{ backgroundImage: `url('/images/banner.jpg')` }} >
        <div className='max-w-xl mx-auto'>
            <h1 className='text-4xl font-bold mb-6'>Build beautiful Website Effortlessly</h1>
            <p className='text-lg mb-6'>Create user-friendly and interactive web application,responsive websites.</p>
            <button className='bg-[#3b1717] text-white px-6 py-3 rounded-md text-base transform  hover:text-yellow-400 hover:scale-105 transition duration-300' onClick={() => scrollToSection('contact')}> Start Free Trial</button>
        </div>
      </section>

      <section id='features' className='py-16 text-center bg-white'>
        <h2 className='text-3xl font-semibold mb-4'>Our Features</h2>
        <p className='text-lg mb-8'>Everything you need to build fast, responsive, and elegant websites.</p>
       <div className='flex gap-4 m-4 justify-center'> {[
            {title: 'Lightning Fast' , desc: 'Optimized code and assets to make your websites blazing fast.'},
            { title: 'Responsive Design', desc: 'Mobile-first design that looks great on every screen size.' },
            { title: 'SEO Friendly', desc: 'Built-in best practices to help your website rank on Google.' },
        ].map((feature, idx) => (
            <div key={idx} className='bg-gray-100 p-6 rounded-lg shadow w-64'>
                <h3 className='text-xl font-bold mb-2'>{feature.title}</h3>
                <p>{feature.desc}</p>
            </div>
        ))}
        </div>
      </section>

      <section id='contact' className='bg-gray-100 py-16 text-center'>
        <h2 className='text-3xl font-semibold mb-4'>Have questions or want to collaborate?</h2>
        <p className='mb-6'>Send us a message!</p>
        <form className='flex flex-col gap-4 max-w-md mx-auto'>
            <input type="text" placeholder='Your Name' required className='p-3 border border-gray-300 rounded-md text-base'/>
            <input type="email" placeholder='Your Email' required className='p-3 border border-gray-300 rounded-md text-base'/>
            <button type='submit' className='bg-[#3b1717] text-white p-3 rounded-md text-base transform  hover:text-yellow-400 hover:scale-105 transition duration-300'>Send Message</button>
        </form>
      </section>

      <footer className='text-center bg-[#3b1717] text-white p-6'>
        <p>© 2025. Amit Anand</p>
      </footer>
    </div>
  )
}

export default LandingPage;
