"use client"
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { isAuthenticated } from './utils/auth';

export default function PartnerIndexPage() {
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated()) {
      router.push('/partner/dashboard');
    } else {
      router.push('/partner/login');
    }
  }, [router]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600 mx-auto mb-4"></div>
        <p className="text-gray-600">Redirecting...</p>
      </div>
    </div>
  );
}
