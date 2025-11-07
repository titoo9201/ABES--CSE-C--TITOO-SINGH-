import React from "react";
import Card from "../components/Card";

function Home() {
  const cd = [
    {
      img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR6d8ZMrMHZ-wV5sk2Wf-8eN0JtenAqrJQmGQEZd--hIeI7PKyvJ_uKHl13xA1gjxxpN9X5Je4n7EvOEm7o7plGLRmpgXBScaFcQKMCA6L_qseB6PiOUTk",
      name: "The Anatomy of a Spy",
      price: "345",
    },
    {
      img: "https://m.media-amazon.com/images/I/71YqWkYY0EL._AC_UF1000,1000_QL80_.jpg",
      name: "Spy School",
      price: "400",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpZ9MtocqTi2he-qNLMl8v8FFEqT9uZtJmgA&s",
      name: "The Spy",
      price: "500",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-8 gap-6">
      <h1 className="text-4xl font-bold text-center">
        Welcome to our book store
      </h1>

      <p className="text-center max-w-3xl text-gray-700">
        I.T.A Book Store is a modern online and offline bookstore dedicated to
        providing readers with an extensive collection of books in the genres of
        spy, thriller, adventure, military, intelligence, and war. Our mission
        is to make these gripping and action-packed stories accessible to
        everyone while offering a seamless and enjoyable shopping experience. We
        focus on quality, affordability, and convenience, allowing customers to
        browse, explore, and purchase their favorite books with ease. With
        personalized recommendations, curated collections, and the latest
        releases, I.T.A Book Store is more than just a store — it’s a hub for
        enthusiasts of espionage, strategy, and high-stakes adventures.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cd.map((cad, index) => (
          <Card key={index} img={cad.img} name={cad.name} price={cad.price} />
        ))}
      </div>
    </div>
  );
}

export default Home;
