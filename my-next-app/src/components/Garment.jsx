import Image from 'next/image'

export default function Garment() {
  return (
    <div>
    <section id="about" className="mt-5 py-10 bg-gray-200 mb-5">
      <div className="about-container flex justify-between px-5">
        <div className="about-content flex flex-wrap justify-between">
          <div className="about-description flex flex-col items-center">
            <h2 className="text-3xl text-gray-700">Company Name</h2>
            <div className="quality mt-5">
              <div className="about-image1 text-center float-right pr-8">
                <Image src="/quality.jpg" alt="quality" width={500} height={300} />
              </div>
              <h4 className="flex-1 pt-2 pr-5 text-3xl text-gray-700 text-start">We believes in quality first in 
              each and every actions</h4>
              <br />
              <p className="w-1/2">LAPS in committed in meeting or exceeding customer’s expectation in every aspect.
               A top-notch team of professionals consistently examine the intricuries of quality management</p>
            </div>
            <div className="stitching mt-5">
              <div className="about-image2 text-center float-left pr-8">
                <Image src="/stitching.jpeg" alt="stitching" width={500} height={300} />
              </div>
              <h4 className="flex-1 pt-2 pr-5 text-3xl text-gray-700 text-start">State-of-the-art into an garment 
              with our workmanship </h4>
              <br />
              <p className="w-1/2">We have experienced sewing factory in our concern. And we take credit in 
              providing high quality customised designs for men, women,kids garments to our customers. These 
              garments have been developedwith our customer expectation </p>
            </div>
            <div className="pattern mt-5">
              <div className="about-image3 text-center float-right pr-8">
                <Image src="/pattern.jpeg" alt="Pattern" width={500} height={300} />
              </div>
              <h4 className="flex-1 pt-2 pr-5 text-3xl text-gray-700 text-start">Creative designers who are 
              skilled in making patterns and garments for you</h4>
              <br />
              <p className="w-1/2">We develop from photos, sample and spreadsheets. Our team is well-versed 
              in sketching -what you have in your mind</p>
            </div>
          </div>
        </div>
      </div>
    </section> 
    <section id="wardrobe" className="py-2 bg-grey-200">
    <h2 className="text-3xl text-gray-700 flex flex-col items-center">We Make Customized Clothing Manufacturing and Brand Building</h2>
      <div className="flex flex-wrap justify-around ">
        <div className="flex items-center justify-center text-center min-h-[300px] text-yellow-400 border-2 
        border-black rounded text-center w-48 m-5 p-5 transform transition-transform duration-200 hover:scale-105">
          <div>
            <h3 className="mt-2 text-lg">Men's Wear</h3>
            <p className="mt-2 text-sm mb-5 text-black">Manufacturing wide range of Polo, round neck, V neck,Full
            sleeve,Short sleeve, Crew Neck,& more </p>
          </div>
        </div>
        <div className="flex items-center justify-center text-center min-h-[300px] text-yellow-400 border-2 
        border-black rounded text-center w-48 m-5 p-5 transform transition-transform duration-200 hover:scale-105">
          <div>
            <h3 className="mt-2 text-lg">Women's Wear</h3>
            <p className="mt-2 text-sm mb-5 text-black">Manufacturing wide range of Round Neck, Collar Neck,V neck,
            Henley, Off shoulder,Cold shoulder,High neck & more</p>
          </div>
        </div>
        <div className="flex items-center justify-center text-center min-h-[300px] text-yellow-400 border-2 
        border-black rounded text-center w-48 m-5 p-5 transform transition-transform duration-200 hover:scale-105">
          <div>
            <h3 className="mt-2 text-lg">Kids's Wear</h3>
            <p className="mt-2 text-sm mb-5 text-black">Manufacturing wide range of Collar neck,Round neck,Polo
             Full sleeve,V neck, rompers,Pajamas,Zip suits & more</p>
          </div>
        </div>
        <div className="flex items-center justify-center text-center min-h-[300px] text-yellow-400 border-2 
        border-black rounded text-center w-48 m-5 p-5 transform transition-transform duration-200 hover:scale-105">
          <div>
            <h3 className="mt-2 text-lg">Events</h3>
            <p className="mt-2 text-sm mb-5 text-black">Manufacturing customized t-shirt for customer needs  </p>
          </div>
        </div>
        
      </div>
    </section> 
    </div>
  );
}