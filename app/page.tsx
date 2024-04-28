import Image from 'next/image';
import Head from 'next/head';
// import ContactForm from "./contactform";
import WhatsApp from "./whatsapp";
import Navbar from "./navbar";
import { FaInstagram,FaFacebookF,FaTwitter } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import Tshirt from "./tshirts";

export default function garment(){ 
  
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossOrigin="anonymous"/>
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossOrigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossOrigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossOrigin="anonymous"></script>
      </Head>

      <div>
        <Navbar />
        <section id="garment">
   
          <div id="home" className="relative pl-7 pt-5 pr-7 "> 
            <div className="relative w-full h-[500px] md:h-[500px] lg:h-[500px]">
              <Image  src="/garment related pic 1.jpeg" alt="home" layout="fill" objectFit="cover" className="rounded-2xl" />
            </div>
            <h3 className="absolute pl-5 pt-5 mb-0  top-20 text-3xl text-white sm:text-4xl md:text-5xl lg:text-3xl">
            Garment manufacturer in India,<br/> at the forefront of design, <br/>innovation and full-sack <br/>
            innovation specializing<br/> in producing <br/>knitwear.</h3>
          </div> 
       
          <div id="about" className=" py-10  mb-0">
            <div className="flex justify-center items-center mb-0">
              <img src="/laps no bg.png" alt="Logo" className="h-24 w-24" />
            </div>
            <div className="flex justify-center items-center mt-0">
              <img src="/knitwear no bg.png" alt="Logo" className="h-24 w-24" />
            </div>
            <p className="pb-2 3xl pl-10 pr-10">Let’s customize we specialize in manufacturing all kinds of t-shirts that 
            can be fully customized to your specifications. We understand that every customer is unique,
            which is why we offer a wide range of sized, styles . colors and designs to choose from.</p>
            <br/>
            <p className="pb-8 3xl pl-10 pr-10">We take pride in our ability to provide personalized and professional service 
            to our customers.We understand that deadlines are important and we work tirelessly to ensure that we 
            deliver your custom t-shirts on time and within budget. We have a proven track record 
            of delivering high-quality product that exceed our customers’ expectations.</p>
            </div>

            <div className="container px-5 pl-10 pr-10">
              <div className="row">
                <div className="quality mt-5">
                  <div className="col-4">
                    <div className="about-image1 float-right pt-3 pr-8"> 
                      <Image src="/quality check.jpeg" alt="quality" className="rounded-2xl" width={200} height={110} />
                    </div>
                  </div>
                  <div className="col-8">
                    <h4 className=" pt-6 pb-6 pr-5 text-3xl text-black-700 text-start">We believes in quality first 
                  in each and every actions</h4>
                    <br />
                    <p className="pb-8">LAPS in committed in meeting or exceeding customer’s expectation in every 
                    aspect. A top-notch team of professionals consistently examine the intricuries of quality
                    management.</p>
                  </div>
                </div>
                <div className="stitching mt-10">
                  <div className="col-8 ">
                    <div className="about-image2 float-left pt-6 pr-8">
                      <Image src="/stitching image.jpg" alt="stitching" className="rounded-2xl"  width={200} height={110} />
                    </div>
                  </div>
                  <div className="col-4">
                    <h4 className="pt-8 pb-6 pr-5 text-3xl text-black-700 text-start  ">State-of-the-art into an garment 
              with our workmanship </h4>
                    <br />
                    <p className="pb-8">We have experienced sewing factory in our concern. And we take credit in 
                    providing high quality customised designs for men, women,kids garments to our customers. These 
                    garments have been developed with our customer expectation.</p>
                  </div>
                </div>
                <div className="pattern mt-10">
                  <div className="col-4">
                    <div className="about-image1 float-right pt-6 pr-8">
                      <Image src="/designing.jpeg" alt="design" className="rounded-2xl"  width={200} height={110} />
                    </div>
                  </div> 
                  <div className="col-8">
                    <h4 className="pt-6 pb-6 pr-5 text-3xl text-black-700 text-start">Creative designers who are 
                    skilled in making patterns and garments for you</h4>
                    <br />
                    <p className="pb-8">We develop from photos, sample and spreadsheets. Our team is well-versed in 
                    sketching -what you have in your mind.</p>
                  </div>
                </div>
              </div>
            </div>

        
            <div id="wardrobe" className="py-14 ">
              <h2 className="text-3xl text-black-700 pb-6 flex justify-center">We Make Customized Clothing Manufacturing and Brand Building</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {['Men\'s Wear'].map((title, index) => (
                  <div key={index} className="rounded overflow-hidden shadow-lg m-5 transform transition-transform duration-200 hover:scale-105 relative">
                    <img src={"/Mens wear.jfif"} alt={title} className="w-full h-full object-cover " />
                      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-200">
                        <div>
                          <h3 className="mt-2 ml-5 text-lg text-white">{title}</h3>
                          <h3 className="mt-2 ml-5 text-lg text-white">Manufacturing wide range of Polo, round neck,
                          V neck,Full sleeve,Short sleeve, Crew Neck,Neck & more.</h3>
                        </div>
                      </div>
                  </div>
                  ))}
                  {['Women\'s Wear'].map((title, index) => (
                  <div key={index} className="rounded overflow-hidden shadow-lg m-5 transform transition-transform duration-200 hover:scale-105">
                    <img src={"/women wear.jfif"} alt={title} className="w-full h-full object-cover " />
                      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-200">
                        <div>
                          <h3 className="mt-2 ml-5 text-lg text-white">{title}</h3>
                          <h3 className="mt-2 ml-5 text-lg text-white">Manufacturing wide range of Round Neck,
                          Collar Neck,V neck,Henley,Off shoulder,Cold shoulder,High neck andmore women’s t-shirts.</h3>
                        </div>
                      </div>
                  </div>
                  ))}
                  {['Kids\'s Wear'].map((title, index) => (
                  <div key={index} className="rounded overflow-hidden shadow-lg m-5 transform transition-transform duration-200 hover:scale-105">
                    <img src={"/Kids wear.jfif"} alt={title} className="w-full h-full object-cover " />
                      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-200">
                        <div>
                          <h3 className="mt-2 ml-5 text-lg text-white">{title}</h3>
                            <h3 className="mt-2 ml-5 text-lg text-white">Manufacturing wide range of Collar neck,
                            Round neck,Polo Full sleeve,V neck, rompers,Pajamas,Zip suits and much more kids 
                            t-shirts.</h3>
                        </div>
                      </div>
                  </div>
                  ))}
                  {['Events'].map((title, index) => (
                  <div key={index} className="rounded overflow-hidden shadow-lg m-5 transform transition-transform duration-200 hover:scale-105">
                    <img src={"/for your brand.jfif"} alt={title} className="w-full h-full object-cover"/>
                      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-200">
                        <div>
                          <h3 className="mt-2 ml-5 text-lg text-white">{title}</h3>
                          <h3 className="mt-2 ml-5 text-lg text-white">We make customized t-shirts for your brand 
                          in minimum MOQ.</h3>
                        </div>
                      </div>
                  </div>
                  ))}
                </div>
            </div>
          

          <div id="tshirts" className="py-2 ">
            <h2 className="text-3xl text-black-700 pb-10 flex justify-center">Nothing is impossible</h2>
            <Tshirt />
          </div>
          
          <div className=" sm:p-12 md:p-24 flex flex-col items-center justify-center min-h-screen">
          <div className="text-center">
            <h2 className="text-black-700 top-20 pb-5 text-2xl sm:text-1xl md:text-2xl lg:text-3xl">Contact us</h2>
          </div>
          <div className="contact-info justify-between">
            <div className="font-medium w-full md:w-3xl pt-0 text-center">
            <div className="flex items-center">
              <IoMdMail className="text-2xl mr-2 "/>
              <p>: sales@lapsknitwear.com</p>
            </div>
            <br/>
            <div className="flex items-center">
              <FaPhoneAlt className="text-2xl mr-2"/>
              <div>
              <p>: 9600919890 (Sujeet),</p>
              <p>8531071703 (Lokesh)</p>
              </div>
            </div>
            </div>
            <br/>
            <div className="font-medium w-full md:w-3xl pt-0 mt-6 md:mt-0 text-center">
              <div className="flex items-center justify-center space-x-4 pb-6">
                <a href="https://www.instagram.com/invites/contact/?i=1n8ulwmuhzb3l&utm_content=ujyrxev" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="text-3xl" />
                </a>
                <a href="https://www.facebook.com/profile.php?id=61558976730182&mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer">
                  <FaFacebookF className="text-3xl"/>
                </a>
                <FaTwitter className="text-3xl"/>
              </div>
            </div>
            <div className="flex items-center font-bold">
              <h4>Developers : </h4>
            </div>
            {/* <button type="submit" className="text-white-900 bg-gradient-to-br from-green-400  to-blue-600 
        hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 
        font-medium rounded-lg text-sm px-2 py-2 text-center me-3 mb-10 mt-5 ml-5 "> Whatsapp </button> */}
          </div>

          {/* <div className=" px-10 bg-amber-50 float-right">
            <h1 className=" pl-5 pt-5 mb-0 top-20 text-3xl text-gray-700 text-align-left " >Quick Contact</h1>
            <ContactForm />
          </div> */}
          </div>

          <WhatsApp />

        </section>
      </div>
    </>
  );
}