import React from "react";
import Headphones from "../assets/headphones.jpg";

const Card = () => {
  return (
    <div className="border p-4 rounded shadow-2xl w-[80%] max-w-[500px]">
      <div className="relative h-60 mb-4">
        <img
          className="absolute w-full h-full object-cover rounded"
          src={Headphones}
          alt="/"
        />
      </div>
      <div>
        <p className="font-semibold">Apple Headphones</p>
        <p className="text-sm pb-2">Price: $299</p>
        <p className="font-thin">
            Experience unparalleled sound quality with Apple's premium headphones. 
            Immerse yourself in your favorite music, podcasts, and calls with crystal-clear audio. 
            The sleek and ergonomic design ensures a comfortable fit for extended wear. 
            Features include active noise cancellation, seamless device connectivity, and long battery life. 
            Elevate your audio experience with Apple headphones – where innovation meets exceptional sound.
        </p>
      </div>
    </div>
  );
};

export default Card;