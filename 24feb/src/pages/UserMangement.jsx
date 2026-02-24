import React, { useState } from "react";

export default function UserManagement() {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    id: "",
    email: "",
    company: "",
    designation: "",
    address: "",
  });
  const [editingId, setEditingId] = useState(null);
  const [searchId, setSearchId] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingId) {
      setUsers(users.map(user =>
        user.id === editingId ? formData : user
      ));
      setEditingId(null);
    } else {
      setUsers([...users, formData]);
    }

    setFormData({
      name: "",
      id: "",
      email: "",
      company: "",
      designation: "",
      address: "",
    });
  };

  const handleEdit = (user) => {
    setFormData(user);
    setEditingId(user.id);
  };

  const filteredUsers = searchId
    ? users.filter(user => user.id.includes(searchId))
    : users;

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-gray-800">
            User Management
          </h1>
          <p className="text-sm text-gray-500">
            Simple user administration
          </p>
        </div>

        {/* Search */}
        <div className="bg-white p-4 rounded-lg border mb-6">
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Search by User ID"
              value={searchId}
              onChange={(e) => setSearchId(e.target.value)}
              className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
            />
          </div>
        </div>

        {/* Form */}
        <div className="bg-white p-6 rounded-lg border mb-8">
          <h2 className="text-lg font-medium text-gray-700 mb-4">
            {editingId ? "Edit User" : "Add User"}
          </h2>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="border rounded-md px-3 py-2 text-sm"
              required
            />

            <input
              name="id"
              value={formData.id}
              onChange={handleChange}
              placeholder="User ID"
              className="border rounded-md px-3 py-2 text-sm"
              required
            />

            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              type="email"
              className="border rounded-md px-3 py-2 text-sm"
              required
            />

            <input
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Company"
              className="border rounded-md px-3 py-2 text-sm"
            />

            <input
              name="designation"
              value={formData.designation}
              onChange={handleChange}
              placeholder="Designation"
              className="border rounded-md px-3 py-2 text-sm"
            />

            <input
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Address"
              className="border rounded-md px-3 py-2 text-sm"
            />

            <div className="md:col-span-2 flex justify-end gap-3 mt-2">
              <button
                type="button"
                onClick={() =>
                  setFormData({
                    name: "",
                    id: "",
                    email: "",
                    company: "",
                    designation: "",
                    address: "",
                  })
                }
                className="px-4 py-2 text-sm border rounded-md text-gray-600"
              >
                Clear
              </button>

              <button
                type="submit"
                className="px-4 py-2 text-sm bg-gray-800 text-white rounded-md"
              >
                {editingId ? "Update User" : "Save User"}
              </button>
            </div>
          </form>
        </div>

        {/* Table */}
        <div className="bg-white rounded-lg border overflow-hidden">
          <table className="w-full text-sm text-left">
            <thead className="bg-gray-100 text-gray-600 text-xs uppercase">
              <tr>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">ID</th>
                <th className="px-4 py-3">Email</th>
                <th className="px-4 py-3">Company</th>
                <th className="px-4 py-3">Designation</th>
                <th className="px-4 py-3">Address</th>
                <th className="px-4 py-3 text-center">Actions</th>
              </tr>
            </thead>

            <tbody className="divide-y">
              {filteredUsers.length === 0 ? (
                <tr>
                  <td
                    colSpan="7"
                    className="px-4 py-4 text-center text-gray-400"
                  >
                    No users found
                  </td>
                </tr>
              ) : (
                filteredUsers.map((user) => (
                  <tr key={user.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3">{user.name}</td>
                    <td className="px-4 py-3">{user.id}</td>
                    <td className="px-4 py-3">{user.email}</td>
                    <td className="px-4 py-3">{user.company}</td>
                    <td className="px-4 py-3">{user.designation}</td>
                    <td className="px-4 py-3">{user.address}</td>
                    <td className="px-4 py-3 text-center">
                      <button
                        onClick={() => handleEdit(user)}
                        className="text-blue-600 text-xs hover:underline"
                      >
                        Edit
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}