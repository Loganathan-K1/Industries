"use client";

export default function Garment() {
  async function handleSubmit(event: any) {
    event.preventDefault();

    const data={
        name:String(event.target.name.value),
        email:String(event.target.name.value),
        message:String(event.target.name.value),
      };

      console.log(data);

  }
  return(
    <form onSubmit={handleSubmit} className="flex flex-col justify-start pt-0  mr-0 ">
        <div className=" flex-col ">
            <label className="font-bold text-black-800 pr-5" htmlFor="name">Name:</label>
            <br/>
            <input type="text" minLength={3} maxLength={150} required className=" p-2  bg-black-50 border 
              border-gray-100 " autoComplete="off" id="name"/>
        </div>
        <div className="flex-col ">
            <label className="font-bold text-black-800 pr-5" htmlFor="email">Email:</label>
            <br/>
            <input type="email" minLength={5} maxLength={150} required className=" p-2 bg-black-50 border
              border-gray-100 " autoComplete="off" id="email"/>
        </div>
        <div>
            <label className="font-bold text-black-800 pr-5 " htmlFor="message"> Message: </label>
            <br/>
            <textarea rows={2} required minLength={10} maxLength={500} name="message" className=" p-3 
              bg-gray-50 border border-black-100 "/>
        </div>
        <button type="submit" className="text-black-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 
        hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 
        font-medium rounded-lg text-sm px-2 py-2 text-center me-3 mb-10 mt-5 ml-5 "> Send Message </button>
    </form>
  );
}