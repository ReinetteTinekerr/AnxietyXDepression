'use client'

import Image from 'next/image'
import { Inter } from '@next/font/google'
import { useState, useEffect } from 'react';
// import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

const hideMenu = "items-center hidden justify-between w-full md:flex md:w-auto md:order-1";
const showMenu = "items-center justify-between w-full md:flex md:w-auto md:order-1";

export default function Home() {

  const [toggle, setToggle] = useState(false);
  const [isScrollTop, setIsScrollTop] = useState(true);
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  }, []);

  const handleScroll = () => {
    let yPosition = window.pageYOffset;
    if (yPosition === 0) {
      setIsScrollTop(true);
    } else {

      setIsScrollTop(false);
    }

  }
  const handleNavClick = () => {
    setToggle(!toggle);
  }
  return (
    <>

      <nav className={`${isScrollTop ? "nav-bg-transparent" : "nav-bg-green-600"} px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 left-0 `}>
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <a href="#" className="flex items-center">
            <Image src="/logo.png" width={100} height={100} alt="Flowbite Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white"></span>
          </a>
          <div className="flex md:order-2">
            <button type="button" className="uppercase text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 ">Take the Test</button>
            <button data-collapse-toggle="navbar-sticky" onClick={handleNavClick} type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
            </button>
          </div>
          <div className={toggle ? showMenu : hideMenu} id="navbar-sticky">
            <ul className="flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-bold">
              <li>
                <a href="#" className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0 dark:text-white" aria-current="page">Home</a>
              </li>
              <li>
                <a href="#" className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent  md:p-0 md:dark:hover:text-white dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
              </li>
              <li>
                <a href="#" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
              </li>
              <li>
                <a href="#" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>


      <div className="relative overflow-hidden bg-no-repeat bg-cover" style={{
        backgroundPosition: "50%",
        backgroundImage: "url('/banner.jpg')",
        // background: "linear-gradient(rgba(0,0,0,0.1),#009688), url('/banner.jpg')",
        height: "750px"
      }}
      >
        <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.75)" }}>
          <div className="flex justify-center items-center h-full">
            <div className="text-center text-white px-6 md:px-12">
              <h1 className="text-5xl md:text-7xl font-bold mt-0 mb-6">Assessing Anxiety</h1>
              <h3 className="text-xl font-semibold italic mb-8">Anything That Costs You Your Peace Is Too Expensive.</h3>
              <button type="button"
                className="inline-block px-6 py-2.5 border-2 border-white text-white font-medium text-lg leading-tight uppercase rounded-lg hover:scale-110 focus:outline-none focus:ring-0 transition duration-300 ease-in-out"
                data-mdb-ripple="true" data-mdb-ripple-color="light">
                Take the Test
              </button>
            </div>
          </div>
        </div>
      </div>


      <section id="services" className="sm:px-4 md:px-24 py-24">
        <div className="container">
          <div className="text-center">
            <h2 className="text-2xl md:text-4xl font-bold mb-12 section-heading wow fadeInDown" data-wow-delay="0.3s">Benefits of Having a Psychological Evaluation</h2>
          </div>
          <div className="flex flex-wrap">
            <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3">
              <div className="m-4 wow fadeInRight" data-wow-delay="0.3s">
                <div className="icon text-5xl">
                  <i className="lni lni-cog"></i>
                </div>
                <div >
                  <div className="flex justify-center">
                    <Image src="/anxietyordepression.jpg" width={300} height={300} alt="Anxiety or Depression" />
                  </div>
                  <h3 className="service-title">Diagnose Anxiety or Depression</h3>
                  <p className="text-gray-600">If you are feeling depressed or anxious and are wondering “should I have a psychological evaluation?”, the answer is almost certainly yes. Anxiety affects a huge number of people, with treatment now being more accessible than ever. There are also different types of anxiety that may lead to depression or be confused with depression. There can be confusion on the difference between anxiety and stress as well. We all feel symptoms of either stress, anxiety, or depression from time-to-time, but understanding whether what you are feeling is normal or is a symptom of a serious mental illness is crucial. A psychological assessment can help you determine that..</p>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3">
              <div className="m-4 wow fadeInRight" data-wow-delay="0.6s">
                <div className="icon text-5xl">
                  <i className="lni lni-bar-chart"></i>
                </div>
                <div>
                  <div className="flex justify-center">
                    <Image src="/child.jpg" width={300} height={300} alt="Mental Health" />
                  </div>
                  <h3 className="service-title">Screen Your Children’s Mental Health</h3>
                  <p className="text-gray-600">Psychological evaluations do not just benefit adults. A psychological evaluation for children can help you make essential and informed decisions about the wellbeing and health of your family. A routine psychological evaluation can quickly determine whether your child has a condition such as ADHD or Aspergers, ensuring that they get the right treatment as quickly as possible. An evaluation can also help you determine whether your child is suffering from anxiety or depression, as so many young people are today.</p>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3">
              <div className="m-4 wow fadeInRight" data-wow-delay="0.9s">
                <div className="icon text-5xl">
                  <i className="lni lni-briefcase"></i>
                </div>
                <div>
                  <div className="flex justify-center">
                    <Image src="/brain.jpg" width={300} height={300} alt="Cognitive Function" />
                  </div>
                  <h3 className="service-title">Test Your Cognitive Function</h3>
                  <p className="text-gray-600">Finally, one of the key benefits of a psychological evaluation is that you can quickly can a detailed picture of your overall cognitive function. You can find out whether your brain is working as it should and whether it is able to process information, images, emotions, and events in a healthy way. You will be able to detect any current or potential future cognitive problems you might face, allowing you to take the right preventative steps to ensure healthy brain function throughout your life.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div id="feature" className="bg-zinc-100 py-24">
        <div className="container">
          <div className="flex flex-wrap items-center">
            <div className="w-full lg:w-7/12">
              <div className="ml-5 mb-5 lg:mb-0">
                <h2 className="ml-5 text-2xl md:text-4xl font-bold mb-12 section-heading wow fadeInDown" data-wow-delay="0.3s">What Do School Psychologists Do?</h2>

                <div className="flex flex-wrap">
                  <div className="shadow-lg m-1 p-5 h-100 w-100 bg-white mt-3 sm:w-1/2 lg:w-5/12 rounded-lg hover:scale-110 transition duration-300">
                    <div className="m-3">
                      <div className="icon text-4xl">
                        {/* <i className="lni lni-gift"></i> */}
                        <Image src="/badge.png" width={64} height={64} alt="" />
                      </div>
                      <div className="features-content">
                        <h4 className="feature-title text-xl font-semibold">Improve Academic Achievement
                          <hr />
                        </h4>
                        <p> Promote student motivation and engagement, Conduct psychological and academic assessments, Individualize instruction and interventions, Manage student and classroom behavior, Monitor student progress, Collect and interpret student and classroom data, Reduce inappropriate referrals to special education.</p>
                      </div>
                    </div>
                  </div>
                  <div className="shadow-lg m-1 p-5 h-100 w-90 bg-white sm:w-1/2 lg:w-5/12 mt-3 rounded-lg hover:scale-110 transition duration-300">
                    <div className="m-3">
                      <div className="icon text-4xl">
                        {/* <i className="lni lni-gift"></i> */}
                        <Image src="/mental-health.png" width={64} height={64} alt="" />
                      </div>
                      <div className="features-content">
                        <h4 className="feature-title text-xl font-semibold">Promote Positive Behavior and Mental Health</h4>
                        <hr />
                        <p> Improve students communication and social skills, Assess student emotional and behavioral needs, Provide individual and group counseling, Promote problem solving, anger management and conflict resolution, Reinforce positive coping skills and resilience, Promote positive peer relationships and social problem solving, Make referrals to and help coordinate community services provided in schools</p>
                      </div>
                    </div>
                  </div>
                  <div className="shadow-lg m-1 p-5 h-100 w-90 bg-white mt-3 w-full sm:w-1/2 lg:w-5/12 rounded-lg hover:scale-110 transition duration-300">
                    <div className="m-3">
                      <div className="icon text-4xl">
                        <Image src="/global-education.png" width={64} height={64} alt="" />
                      </div>
                      <div className="features-content">
                        <h4 className="feature-title text-xl font-semibold">Support Diverse Learners</h4>
                        <hr />
                        <p> Assess diverse learning needs, Provide culturally responsive services to students and families from diverse backgrounds, Plan appropriate Individualized Education Programs for students with disabilities, Modify and adapt curricula and instruction, Adjust classroom facilities and routines to improve student engagement and learning, Monitor and effectively communicate with parents about student progress</p>
                      </div>
                    </div>
                  </div>
                  <div className="shadow-lg m-1 p-5 h-100 w-100 bg-white w-full mt-3 sm:w-1/2 lg:w-5/12 rounded-lg hover:scale-110 transition duration-300">
                    <div className="m-3">
                      <div className="icon text-4xl">
                        <i className="lni lni-leaf"></i>
                        <Image src="/motivation.png" width={64} height={64} alt="" />
                      </div>
                      <div className="features-content">
                        <h4 className="feature-title text-xl font-semibold">Strengthen Family-School Partnerships</h4>
                        <hr />
                        <p> Help families understand their child&apos;s learning and mental health needs, Assist in navigating special education processes, Connect families with community service providers when necessary, Help effectively engage families with teachers and other school staff, Enhance staff understanding and responsiveness to diverse cultures and backgrounds, Help students transition between school and community learning environments, such as residential treatment or juvenile justice programs</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-5/12 hover:scale-110 transition duration-300 shadow-sm">
              <div className="mx-3 lg:mr-0 lg:ml-3 wow fadeInRight" data-wow-delay="0.3s">
                <Image className="rounded-lg bg-zinc-100 opacity-75" src="/psychologist.jpg" width={800} height={900} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer id="footer" className="bg-gray-800 py-16 text-white">
        <div>
          <div className="text-center">
            <h2 className="text-2xl md:text-4xl font-bold mb-12 " data-wow-delay="0.3s">Visit Today</h2>
          </div>
          <div className="flex flex-wrap justify-center">

            <div className="w-1/2 text-center">
              <div className="font-semibold text-lg">Opening Hours</div>
              <div className="text-sm font-light">
                <p>Monday to Monday - 9AM to 3PM</p>
                <p>Monday to Monday - 9AM to 3PM</p>

              </div>
            </div>
            <div className="w-1/2 text-center">
              <div className="font-semibold text-lg">Get in Touch</div>
              <div className="text-sm font-light">
                <p>#30 Isabela State University Echague</p>
                <p>xample@website.com</p>
                <p>+639 106 609 209</p>

              </div>
            </div>
          </div>
        </div>
      </footer>

    </>
  )
}
