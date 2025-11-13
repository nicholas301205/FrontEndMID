import { useEffect, useState } from "react";
import axios from "axios";
import ProfileCard from "./Komponen/Bio";
import Loading from "./Komponen/Loading";
import Header from "./Komponen/Header";
import Aboutme from "./Komponen/About";
import Education from "./Komponen/Education";
import Contact from "./Komponen/Contact";

const RestAPI = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  return (
  <>  
    <div className="bg-gradient-to-br from-green-400 via-emerald-500 to-green-700 min-h-screen">
      <Header />

      <div className="px-10 pt-30 pb-10 flex justify-center space-between gap-10 flex-wrap">
        {users.length === 0 ? (
          <Loading />
        ) : (
          users.map((user) => <ProfileCard key={user.id} {...user} />)
        )}
      <div className="bg-white shadow-lg rounded-2xl px-10 pt-20 pb-10 flex flex-col items-center">
        <h2 className="text-4xl font-bold text-transparent bg-gradient-to-br from-green-400 via-emerald-500 to-green-700 bg-clip-text text-transparent mb-6 text-left">Education</h2>
        <div className="grid grid-cols-2 justify-center gap-4">
          {users.map((user) =>
            user.education?.map((edu) => (
              <Education key={edu.id} {...edu} />
            ))
          )}
        </div>
        
      </div>
      
      </div>
      <div className="px-34 py-50 flex justify-center space-between gap-0 min-h-[300px]">
        <Aboutme />
        <img src="Aboutme.jpg" alt="Education Illustration" className="mt-5 rounded-r-2xl w-100 h-100 shadow mb-4 object-cover"/>
      </div>
      
      <div className="bg-white shadow-lg rounded-t-2xl px-10 pt-8 pb-10 items-center scroll-snap-align: center">
        {users.map((user) => <Contact key={user.id} email={user.email} phone={user.phone} />)}
      </div>
    </div>
  </>
  );
};

export default RestAPI;