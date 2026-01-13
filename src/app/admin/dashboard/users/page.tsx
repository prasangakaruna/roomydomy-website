"use client"
import { useState, useEffect } from 'react';
import ProtectedRoute from '../../components/ProtectedRoute';
import AdminLayout from '../../components/AdminLayout';
import { getAllUsers, updateUser, deleteUser, changeUserPassword } from '../../utils/users';
import { User } from '../../utils/auth';

export default function UsersManagementPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
  const [passwordUserId, setPasswordUserId] = useState<string>('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'admin' as 'admin' | 'user',
  });
  const [passwordData, setPasswordData] = useState({
    newPassword: '',
    confirmPassword: '',
  });

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = () => {
    const allUsers = getAllUsers();
    setUsers(allUsers);
  };

  const handleOpenModal = (user?: User) => {
    if (user) {
      setEditingUser(user);
      setFormData({
        name: user.name,
        email: user.email,
        role: user.role,
      });
    } else {
      setEditingUser(null);
      setFormData({
        name: '',
        email: '',
        role: 'admin',
      });
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingUser(null);
    setFormData({
      name: '',
      email: '',
      role: 'admin',
    });
  };

  const handleOpenPasswordModal = (userId: string) => {
    setPasswordUserId(userId);
    setPasswordData({ newPassword: '', confirmPassword: '' });
    setIsPasswordModalOpen(true);
  };

  const handleClosePasswordModal = () => {
    setIsPasswordModalOpen(false);
    setPasswordUserId('');
    setPasswordData({ newPassword: '', confirmPassword: '' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (editingUser) {
      updateUser(editingUser.id, formData);
    }
    
    loadUsers();
    handleCloseModal();
  };

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    
    if (passwordData.newPassword.length < 6) {
      alert('Password must be at least 6 characters');
      return;
    }
    
    changeUserPassword(passwordUserId, passwordData.newPassword);
    alert('Password changed successfully');
    handleClosePasswordModal();
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this user?')) {
      deleteUser(id);
      loadUsers();
    }
  };

  return (
    <ProtectedRoute>
      <AdminLayout>
        <div className="space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-extrabold text-gray-900">User Management</h1>
              <p className="text-gray-600 mt-2">Manage admin users and permissions</p>
            </div>
          </div>

          {/* Users Table */}
          <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Name</th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Email</th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Role</th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Created</th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {users.map((user) => (
                    <tr key={user.id} className="hover:bg-gray-50">
                      <td className="py-4 px-6 text-sm font-medium text-gray-900">{user.name}</td>
                      <td className="py-4 px-6 text-sm text-gray-700">{user.email}</td>
                      <td className="py-4 px-6">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          user.role === 'admin' 
                            ? 'bg-purple-100 text-purple-800' 
                            : 'bg-gray-100 text-gray-800'
                        }`}>
                          {user.role}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-sm text-gray-500">
                        {new Date(user.createdAt).toLocaleDateString()}
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => handleOpenModal(user)}
                            className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                          >
                            Edit
                          </button>
                          <span className="text-gray-300">|</span>
                          <button
                            onClick={() => handleOpenPasswordModal(user.id)}
                            className="text-green-600 hover:text-green-700 text-sm font-medium"
                          >
                            Change Password
                          </button>
                          {users.length > 1 && (
                            <>
                              <span className="text-gray-300">|</span>
                              <button
                                onClick={() => handleDelete(user.id)}
                                className="text-red-600 hover:text-red-700 text-sm font-medium"
                              >
                                Delete
                              </button>
                            </>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Edit User Modal */}
          {isModalOpen && editingUser && (
            <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4" onClick={handleCloseModal}>
              <div
                className="bg-white rounded-2xl shadow-2xl max-w-md w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-gray-900">Edit User</h2>
                  <button onClick={handleCloseModal} className="text-gray-400 hover:text-gray-600">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Role</label>
                    <select
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value as 'admin' | 'user' })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none"
                    >
                      <option value="admin">Admin</option>
                      <option value="user">User</option>
                    </select>
                  </div>

                  <div className="flex gap-4 pt-4">
                    <button
                      type="submit"
                      className="flex-1 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold py-3 rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all"
                    >
                      Update User
                    </button>
                    <button
                      type="button"
                      onClick={handleCloseModal}
                      className="flex-1 bg-gray-200 text-gray-700 font-semibold py-3 rounded-lg hover:bg-gray-300 transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {/* Change Password Modal */}
          {isPasswordModalOpen && (
            <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4" onClick={handleClosePasswordModal}>
              <div
                className="bg-white rounded-2xl shadow-2xl max-w-md w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-gray-900">Change Password</h2>
                  <button onClick={handleClosePasswordModal} className="text-gray-400 hover:text-gray-600">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <form onSubmit={handlePasswordSubmit} className="p-6 space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">New Password</label>
                    <input
                      type="password"
                      value={passwordData.newPassword}
                      onChange={(e) => setPasswordData({ ...passwordData, newPassword: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
                      required
                      minLength={6}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
                    <input
                      type="password"
                      value={passwordData.confirmPassword}
                      onChange={(e) => setPasswordData({ ...passwordData, confirmPassword: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
                      required
                      minLength={6}
                    />
                  </div>

                  <div className="flex gap-4 pt-4">
                    <button
                      type="submit"
                      className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold py-3 rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all"
                    >
                      Change Password
                    </button>
                    <button
                      type="button"
                      onClick={handleClosePasswordModal}
                      className="flex-1 bg-gray-200 text-gray-700 font-semibold py-3 rounded-lg hover:bg-gray-300 transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </AdminLayout>
    </ProtectedRoute>
  );
}
