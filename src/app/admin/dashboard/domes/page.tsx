"use client"
import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import ProtectedRoute from '../../components/ProtectedRoute';
import AdminLayout from '../../components/AdminLayout';
import Image from 'next/image';
import {
  getDomes,
  addDome,
  updateDome,
  deleteDome,
  type Dome,
} from '../../utils/storage';

export default function DomesManagementPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [domes, setDomes] = useState<Dome[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingDome, setEditingDome] = useState<Dome | null>(null);
  const [formData, setFormData] = useState({
    img: '',
    title: '',
    size: '',
    people: '',
    price: '',
    description: '',
    features: '',
    slug: '',
    status: 'available' as 'available' | 'under-development' | 'coming-soon',
    location: '',
    climate: '',
  });

  useEffect(() => {
    loadDomes();
    if (searchParams.get('action') === 'add') {
      setIsModalOpen(true);
    }
  }, [searchParams]);

  const loadDomes = () => {
    const allDomes = getDomes();
    setDomes(allDomes);
  };

  const handleOpenModal = (dome?: Dome) => {
    if (dome) {
      setEditingDome(dome);
      setFormData({
        img: dome.img,
        title: dome.title,
        size: dome.size,
        people: dome.people,
        price: dome.price,
        description: dome.description,
        features: dome.features,
        slug: dome.slug || '',
        status: dome.status || 'available',
        location: dome.location || '',
        climate: dome.climate || '',
      });
    } else {
      setEditingDome(null);
      setFormData({
        img: '',
        title: '',
        size: '',
        people: '',
        price: '',
        description: '',
        features: '',
        slug: '',
        status: 'available',
        location: '',
        climate: '',
      });
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingDome(null);
    setFormData({
      img: '',
      title: '',
      size: '',
      people: '',
      price: '',
      description: '',
      features: '',
      slug: '',
      status: 'available',
      location: '',
      climate: '',
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (editingDome) {
      updateDome(editingDome.id, formData);
    } else {
      addDome(formData);
    }
    
    loadDomes();
    handleCloseModal();
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this dome?')) {
      deleteDome(id);
      loadDomes();
    }
  };

  return (
    <ProtectedRoute>
      <AdminLayout>
        <div className="space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-extrabold text-gray-900">Dome Management</h1>
              <p className="text-gray-600 mt-2">Manage all dome listings</p>
            </div>
            <button
              onClick={() => handleOpenModal()}
              className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold px-6 py-3 rounded-lg hover:from-emerald-700 hover:to-teal-700 transition-all shadow-lg shadow-emerald-500/30"
            >
              + Add New Dome
            </button>
          </div>

          {/* Domes Grid */}
          {domes.length === 0 ? (
            <div className="bg-white rounded-xl shadow-md border border-gray-200 p-12 text-center">
              <div className="text-6xl mb-4">🏠</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No domes yet</h3>
              <p className="text-gray-600 mb-6">Get started by adding your first dome</p>
              <button
                onClick={() => handleOpenModal()}
                className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold px-6 py-3 rounded-lg hover:from-emerald-700 hover:to-teal-700 transition-all"
              >
                Add First Dome
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {domes.map((dome) => (
                <div
                  key={dome.id}
                  className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="relative h-48 bg-gray-200">
                    {dome.img ? (
                      <Image
                        src={dome.img}
                        alt={dome.title}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-4xl text-gray-400">
                        🏠
                      </div>
                    )}
                    <div className="absolute top-2 right-2">
                      <span
                        className={`px-2 py-1 text-xs font-semibold rounded-full ${
                          dome.status === 'available'
                            ? 'bg-green-100 text-green-800'
                            : dome.status === 'under-development'
                            ? 'bg-yellow-100 text-yellow-800'
                            : 'bg-blue-100 text-blue-800'
                        }`}
                      >
                        {dome.status}
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{dome.title}</h3>
                    <div className="space-y-1 text-sm text-gray-600 mb-4">
                      <p>Size: {dome.size}</p>
                      <p>People: {dome.people}</p>
                      <p className="font-semibold text-emerald-600">{dome.price}</p>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleOpenModal(dome)}
                        className="flex-1 bg-emerald-50 text-emerald-700 font-medium py-2 px-4 rounded-lg hover:bg-emerald-100 transition-colors"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(dome.id)}
                        className="flex-1 bg-red-50 text-red-700 font-medium py-2 px-4 rounded-lg hover:bg-red-100 transition-colors"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Modal */}
          {isModalOpen && (
            <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4" onClick={handleCloseModal}>
              <div
                className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-gray-900">
                    {editingDome ? 'Edit Dome' : 'Add New Dome'}
                  </h2>
                  <button
                    onClick={handleCloseModal}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Image URL
                      </label>
                      <input
                        type="text"
                        value={formData.img}
                        onChange={(e) => setFormData({ ...formData, img: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
                        placeholder="/path/to/image.jpg"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Title
                      </label>
                      <input
                        type="text"
                        value={formData.title}
                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
                        placeholder="Dome Title"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Size
                      </label>
                      <input
                        type="text"
                        value={formData.size}
                        onChange={(e) => setFormData({ ...formData, size: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
                        placeholder="2000 sq ft"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        People
                      </label>
                      <input
                        type="text"
                        value={formData.people}
                        onChange={(e) => setFormData({ ...formData, people: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
                        placeholder="6-8 people"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Price
                      </label>
                      <input
                        type="text"
                        value={formData.price}
                        onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
                        placeholder="$299,000"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Status
                      </label>
                      <select
                        value={formData.status}
                        onChange={(e) => setFormData({ ...formData, status: e.target.value as any })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
                      >
                        <option value="available">Available</option>
                        <option value="under-development">Under Development</option>
                        <option value="coming-soon">Coming Soon</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Slug
                      </label>
                      <input
                        type="text"
                        value={formData.slug}
                        onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
                        placeholder="dome-slug"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Location
                      </label>
                      <input
                        type="text"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
                        placeholder="City, Country"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Climate
                      </label>
                      <input
                        type="text"
                        value={formData.climate}
                        onChange={(e) => setFormData({ ...formData, climate: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
                        placeholder="Tropical Climate"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Description
                    </label>
                    <textarea
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
                      rows={4}
                      placeholder="Detailed description of the dome..."
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Features (comma-separated)
                    </label>
                    <input
                      type="text"
                      value={formData.features}
                      onChange={(e) => setFormData({ ...formData, features: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
                      placeholder="Feature 1, Feature 2, Feature 3"
                      required
                    />
                  </div>

                  <div className="flex gap-4 pt-4">
                    <button
                      type="submit"
                      className="flex-1 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold py-3 rounded-lg hover:from-emerald-700 hover:to-teal-700 transition-all"
                    >
                      {editingDome ? 'Update Dome' : 'Create Dome'}
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
        </div>
      </AdminLayout>
    </ProtectedRoute>
  );
}
