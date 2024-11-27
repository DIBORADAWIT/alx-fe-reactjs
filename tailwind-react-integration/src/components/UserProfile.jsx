function UserProfile() {
  return (
    <div className="user-profile bg-gray-100 p-8 max-w-sm mx-auto my-20 rounded-lg shadow-lg">
      <img
        src="https://via.placeholder.com/150"
        alt="User"
        className="rounded-full w-36 h-36 mx-auto"
      />
      ["md:p-8", "sm:p-4"]
      <h1 className="text-xl text-blue-800 my-4">John Doe</h1>
      <p className="text-gray-600 text-base">
        ["hover:scale-110", "transition-transform", "duration-300",
        "ease-in-out"] ["sm:w-24", "sm:h-24", "md:w-36", "md:h-36"] ["text-lg",
        "md:text-xl", "text-sm"] ["max-w-xs", "md:max-w-sm"] Developer at
        Example Co. Loves to write code and explore new technologies.
      </p>
    </div>
  );
}

export default UserProfile;
