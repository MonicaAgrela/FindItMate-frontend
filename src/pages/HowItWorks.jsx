import { Link } from "react-router-dom";

function HowItWorks() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-3xl px-8 py-12 bg-white shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold text-center mb-6 text-blue-700">
          Welcome to FindItMate!
        </h1>
        <h2 className="text-2xl font-semibold text-center mb-8 text-gray-800">
          How It Works
        </h2>
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          How many times have we traveled and lost something? How many times do
          we leave the house for a simple walk by the sea or in a park and leave
          something there? How many times do we just go for a coffee, buy
          something, or even be chatting with someone and miss something? Well,
          we've all been there, and that's where FindItMate was born, the site
          where you can find items that you've lost, as well as insert items
          that you found and that their owner certainly misses. Sign up on our
          website and find out more about how to find something you missed or
          enter something you found.
        </p>
        <p className="text-base text-gray-700 mb-8 leading-relaxed">
          Join our community today and never worry about losing your belongings
          again!
        </p>
        <div className="flex justify-center">
          <Link to="/signup" className="block text-sm">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300"
            >
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
