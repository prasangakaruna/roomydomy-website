"use client"
import { useState, useEffect } from 'react';
import ProtectedRoute from '../../components/ProtectedRoute';
import PartnerLayout from '../../components/PartnerLayout';
import { getDomes } from '../../utils/storage';

export default function PartnerDomesPage() {
  const [domes, setDomes] = useState<any[]>([]);

  useEffect(() => {
    const allDomes = getDomes();
    setDomes(allDomes);
  }, []);

  return (
    <ProtectedRoute>
      <PartnerLayout>
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Domes</h1>
            <p className="text-gray-600 mt-1">View available domes</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {domes.length === 0 ? (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-500">No domes available</p>
              </div>
            ) : (
              domes.map((dome) => (
                <div key={dome.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{dome.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">Size: {dome.size}</p>
                  <p className="text-sm text-gray-600 mb-2">Price: {dome.price}</p>
                  <p className="text-sm text-gray-500">{dome.description}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </PartnerLayout>
    </ProtectedRoute>
  );
}
