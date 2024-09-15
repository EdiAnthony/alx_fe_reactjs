function UserProfile() {
    return (
      <div className="user-profile bg-gray-100 p-8 max-w-sm mx-auto my-20 rounded-lg shadow-lg">
        <img src="https://via.placeholder.com/150" alt="User" className="w-36 h-36 rounded-full mx-auto" />
        <h1 className="text-xl text-blue-800 my-4">Anthony</h1>
        <p className="text-gray-600 text-base">Developer at Skytech Computer Entreprise.  I love to write code and explore new technologies.</p>
      </div>
    );
  }
  
  export default UserProfile;