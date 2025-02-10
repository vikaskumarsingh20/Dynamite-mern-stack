// UserList.js - Component using the hook
import React, { useEffect } from "react";
import useFetch from "./CustomHook";

const UserList = () => {
  const {
    data: users,
    loading,
    error,
    refetch,
  } = useFetch("https://jsonplaceholder.typicode.com/users");

  if (loading)
    return (
      <div className="flex justify-center items-center">
        {" "}
        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-gray-900"></div>
      </div>
    );
  if (error) return <div className="text-2xl text-red-600">Error: {error}</div>;

  const refetchList = () => {
    refetch();
  };
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-4xl text-gray-800 font-bold">User List</h2>
      <button
        onClick={refetchList}
        className="bg-blue-500 hover:bg-blue-700 cursor-pointer text-white font-bold py-2 px-4 rounded"
      >
        Refresh List
      </button>

      <ul className="list-disc pl-8">
        {users?.map((user) => (
          <li key={user.id} className="text-lg text-gray-800">
            <span className="font-bold">{user.name}</span> - {user.email}
            <ul className="list-disc pl-4">
              {/* <li>Username: {user.username}</li> */}
              {/* <li>
                Address: {user.address.street}, {user.address.suite},{" "}
                {user.address.city} {user.address.zipcode}
              </li>
              <li>
                Geo: ({user.address.geo.lat}, {user.address.geo.lng})
              </li> */}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
