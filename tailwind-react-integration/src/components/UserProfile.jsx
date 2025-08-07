function UserProfile() {
  return (
    <div className="user-profile bg-gray-100 mx-auto my-20 rounded-lg shadow-lg p-2 sm:p-4 md:p-8 max-w-2xs sm:max-w-xs md:max-w-sm hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <img src="//unsplash.it/150/150" alt="User" className="rounded-full mx-auto w-16 h-16 sm:w-24 sm:h-24 md:w-36 md:h-36 hover:scale-110 transition-transform duration-300 ease-in-out"/>
      <h1 className="text-base sm:text-lg md:text-xl text-blue-800 my-4 hover:text-blue-500" >John Doe</h1>
      <p className="text-gray-600 text-xs sm:text-sm md:text-base" >Developer at Example Co. Loves to write code and explore new technologies.</p>
    </div>
  ); 
}

export default UserProfile;