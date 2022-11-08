import React from 'react'

const Contact = () => {
    function handleSubmit(e) {
      e.preventDefault();
      const name = document.querySelector("#name"),
      email = document.querySelector("#email"),
      message = document.querySelector("#message");

      if(name.length === 0 || name.value === ""
      || email.length === 0 || email.value === ""
      || message.length === 0 || message.value === "") {
        window.alert("Please fill the details carefully");
        return false;
      }

      if(email.value.includes("@") === false) {
        alert("Enter valid email.");
        return false;
      } else {
        let sep= email.value.split("@");
        if(sep[1] === "gmail.com"
        || sep[1] === "yahoo.com"
        || sep[1] === "outlook.com") {

        

          const xmlhttp = new XMLHttpRequest();
          xmlhttp.onreadystatechange = function() {
            if(this.readyState === 4 && this.status === 200) {
              alert("Thank you for connecting with us.");
            } else {
              alert("Thank you for connecting with us.");
            }
          }
          xmlhttp.open("POST", "https://sadikkhanemailapi.000webhostapp.com/email.php", true);
          xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
          xmlhttp.send("Name="+name.value+"&Email="+email.value+"&Message="+message.value);
        
        } else {
        
          alert("We accept emails from: Gmail, Yahoo and Outlook.");
          return false;

        }



      }
      
    }
  return (
    <>
   <section className="text-gray-600 body-font relative" id='contact'>
  <div className="container px-5 py-14 mx-auto flex sm:flex-nowrap flex-wrap">
    <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
      <iframe
        width="100%"
        height="100%"
        className="absolute inset-0"
        frameBorder={0}
        title="map"
        marginHeight={0}
        marginWidth={0}
        scrolling="no"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60539.19735398687!2d73.90439907243517!3d18.497250780029354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2e9ff81f1aae9%3A0x2560343555ac8b53!2sHadapsar%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1667826311205!5m2!1sen!2sin"
        style={{ filter: "grayscale(0) contrast(1) opacity(0.6)" }}
      />
      
      <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
        <div className="lg:w-1/2 px-6">
          <h2 className="title-font font-semibold text-[#4FE143]  tracking-widest text-xs">
            ADDRESS
          </h2>
          <p className="mt-1">
          hadapsar sayyad nagar pune Maharashtra
          </p>
        </div>
        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
          <h2 className="title-font font-semibold text-[#4FE143]  tracking-widest text-xs">
            EMAIL
          </h2>
          <a href="mailto:" className="leading-relaxed cursor-pointer">sadikkhalidkhan@gmail.com</a>
          <h2 className="title-font font-semibold text-[#4FE143] tracking-widest text-xs mt-4">
            PHONE
          </h2>
          <p className="leading-relaxed">8788413295</p>
        </div>
      </div>
    </div>
    <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full  md:mt-0">
      <h2 className="text-[#4FE143]  text-2xl mb-1 font-medium title-font">
        Feedback
      </h2>
      
      <div className="relative mb-4 mt-4">
        <label htmlFor="name" className="leading-7 text-sm text-gray-600">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-gray-600">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="message" className="leading-7 text-sm text-gray-600">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          defaultValue={""}
        />
      </div>
      <button onClick={handleSubmit} className="rounded-md outline bg-[#4FE143] border-0 py-2 px-6  hover:bg-white hover:text-[#4FE143] text-lg">
        submit
      </button>
    </div>
  </div>
</section>
    </>
  )
}



export default Contact