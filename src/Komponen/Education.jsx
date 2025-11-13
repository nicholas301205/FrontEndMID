const Education = ({ school, degree, period, description }) => {
  return (
    <div className="bg-gray-200 shadow-md rounded-xl p-5 w-80  hover:shadow-emerald-300 transition">
      <h3 className="text-lg font-semibold text-gray-800">{school}</h3>
      <p className="text-sm text-gray-600">{degree}</p>
      <p className="text-xs text-gray-500 mb-2">{period}</p>
      <p className="text-gray-700 text-sm">{description}</p>
    </div>
  );
};

export default Education;