import {Instagram, Github, Twitter} from "lucide-react";

const ProfileCard = ({ name, role, image}) => {
  return (

    <div id="profile" className="bg-white shadow-lg rounded-2xl px-8 py-20 min-w-[400px] h-135 text-center border border-gray-200 scroll-mt-77">
      <h1 className="text-4xl font-bold text-transparent bg-gradient-to-br from-green-400 via-emerald-500 to-green-700 bg-clip-text text-transparent mb-6">Profile</h1>
      <img
        src={`/${image}`}
        alt={name}
        className="w-50 h-50 rounded-full mx-auto shadow mb-4 object-cover"
      />
      <h2 className="text-2xl font-semibold text-gray-800">{name}</h2>
      <p className="text-gray-500 text-sm mb-2">{role}</p>
      <div className="mt-6 flex justify-center gap-4">
        <a
          href="https://instagram.com/soyn1ko_"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram className="w-6 h-6 text-pink-500 hover:text-pink-600 transition" />
        </a>
        <a
          href="https://github.com/nicholas301205"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github className="w-6 h-6 text-gray-800 hover:text-black transition" />
        </a>
        <a
          href="https://x.com/Loopzi7"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Twitter className="w-6 h-6 text-blue-500 hover:text-blue-600 transition" />
        </a>
      </div>
    </div>
  );
};

export default ProfileCard;