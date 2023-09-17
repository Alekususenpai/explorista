import React from "react";

const benefits = [
  {
    title: "Share Your Passion:",
    text: "Hosts on Explorista have the opportunity to showcase their unique talents and knowledge, whether it's teaching a craft, leading a cultural immersion, or offering a specialized workshop.",
  },

  {
    title: "Global Reach:",
    text: "Connect with eager learners and adventure-seekers from around the world. Your virtual classroom or experience becomes a global stage for exploration and connection.",
  },

  {
    title: "Flexible Schedule:",
    text: "Set your availability and choose when to host sessions. Whether it's a one-time event or a series of classes, you have the flexibility to tailor your hosting experience to your schedule.",
  },

  {
    title: "Earn Rewards:",
    text: "As an Explorista host, you can turn your passion into earnings. Share your expertise and receive compensation for your time and skills.",
  },

  {
    title: "Expand Your Horizons:",
    text: "Hosting on Explorista allows you to interact with a diverse community of explorers, fostering cross-cultural understanding and personal growth.",
  },
];

const PartnerWithUs = () => {
  return (
    <section className="relative isolate overflow-hidden bg-white/25 px-6 py-24 sm:py-32 lg:px-8 rounded-2xl my-10">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white/10 shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <div className="logo-circle mx-auto">
          <img
            className="logo-emblem"
            src="icons/logo1.png"
            alt="Explorista logo"
          />
        </div>

        <p className="heading">
          Become an Explorista Host: Share Your Passion and Earn Rewards
        </p>

        <p className="subheading">
          Are you passionate about a skill, hobby, or cultural experience that
          you'd love to share with the world? Consider becoming a host on
          Explorista, where your expertise can ignite curiosity and inspire
          others.
        </p>

        <div className="flex justify-evenly p-6 md:p-16 gap-16 flex-wrap">
          {benefits.map((el, index) => (
            <div className="w-full lg:w-[350px]" key={index}>
              <h3 className="passage-bold">{el.title}</h3>
              <p className="passage">{el.text}</p>
            </div>
          ))}
        </div>

        <h3 className="passage-bold">How to Get Started:</h3>
        <p className="passage">
          Becoming a host on Explorista is easy. Simply share your passion,
          expertise, and the unique experience you want to offer. We'll support
          you every step of the way, from setting up your listings to connecting
          with eager participants.
        </p>
        <br />
        <h3 className="passage-bold">Join Explorista Today:</h3>
        <p className="passage">
          Turn your passion into a rewarding journey of discovery for both you
          and your participants. Explore the world, one virtual experience at a
          time, with Explorista.
        </p>

        <figcaption className="mt-10">
          <img
            className="mx-auto h-24 w-24 rounded-full"
            src="images/alekusu.png"
            alt="Creator of Explorista"
          />
          <div className="mt-4 flex items-center justify-center space-x-3 text-base">
            <div className="passage-bold">Alekusu</div>
            <svg
              viewBox="0 0 2 2"
              width={3}
              height={3}
              aria-hidden="true"
              className="fill-gray-900"
            >
              <circle cx={1} cy={1} r={1} />
            </svg>
            <div className="passage">Creator of Explorista</div>
          </div>
        </figcaption>
      </div>
    </section>
  );
};

export default PartnerWithUs;
