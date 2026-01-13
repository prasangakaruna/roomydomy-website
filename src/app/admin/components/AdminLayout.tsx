"use client"
import { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import { getCurrentUser, logout } from '../utils/auth';

interface AdminLayoutProps {
  children: React.ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [viewMode, setViewMode] = useState<'user' | 'system'>('user');
  const user = getCurrentUser();

  const handleLogout = () => {
    logout();
    router.push('/admin/login');
  };

  const dashboardItems = [
    { href: '/admin/dashboard', label: 'Overview', icon: '📊' },
    { href: '/admin/dashboard/analytics', label: 'Business Analytics', icon: '📈' },
    { href: '/admin/dashboard/customers', label: 'Customer Insights', icon: '👥' },
    { href: '/admin/dashboard/marketing', label: 'Marketing Insights', icon: '📢' },
  ];

  const salesMarketingItems = [
    { href: '/admin/dashboard/crm', label: 'CRM', icon: '💼' },
    { href: '/admin/dashboard/finance', label: 'Accounting', icon: '💰' },
    { href: '/admin/dashboard/reporting', label: 'Reporting', icon: '📄' },
    { href: '/admin/dashboard/marketing', label: 'Marketing', icon: '📣' },
  ];

  const operationsItems = [
    { href: '/admin/dashboard/operations', label: 'Operations', icon: '⚙️' },
    { href: '/admin/dashboard/orders', label: 'Orders', icon: '📦' },
    { href: '/admin/dashboard/shipments', label: 'Shipments', icon: '🚚' },
    { href: '/admin/dashboard/scheduling', label: 'Scheduling', icon: '📅' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Sidebar Toggle */}
      <div className="lg:hidden fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-40 p-4 flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-900">Admin Panel</h1>
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 rounded-lg hover:bg-gray-100"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <aside
          className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 transform ${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
          } transition-transform duration-300 ease-in-out`}
        >
          <div className="h-full flex flex-col overflow-y-auto">
            {/* Logo/Header */}
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <div className="flex gap-1">
                  <div className="w-6 h-6 rounded bg-emerald-500"></div>
                  <div className="w-6 h-6 rounded bg-teal-500"></div>
                </div>
                <h1 className="text-xl font-bold text-gray-900">RomyDomy Admin</h1>
              </div>
            </div>

            {/* Navigation */}
            <nav className="flex-1 p-4 space-y-6">
              {/* Dashboard Section */}
              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 px-4">Dashboard</p>
                <div className="space-y-1">
                  {dashboardItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setSidebarOpen(false)}
                        className={`flex items-center gap-3 px-4 py-2.5 rounded-lg transition-colors ${
                          isActive
                            ? 'bg-blue-600 text-white'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        <span className="text-lg">{item.icon}</span>
                        <span className="font-medium text-sm">{item.label}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Sales & Marketing Section */}
              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 px-4">Sales & Marketing</p>
                <div className="space-y-1">
                  {salesMarketingItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setSidebarOpen(false)}
                        className={`flex items-center gap-3 px-4 py-2.5 rounded-lg transition-colors ${
                          isActive
                            ? 'bg-blue-600 text-white'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        <span className="text-lg">{item.icon}</span>
                        <span className="font-medium text-sm">{item.label}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Operations Section */}
              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 px-4">Operations</p>
                <div className="space-y-1">
                  {operationsItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setSidebarOpen(false)}
                        className={`flex items-center gap-3 px-4 py-2.5 rounded-lg transition-colors ${
                          isActive
                            ? 'bg-blue-600 text-white'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        <span className="text-lg">{item.icon}</span>
                        <span className="font-medium text-sm">{item.label}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </nav>

            {/* Management Section */}
            <div className="p-4 border-t border-gray-200 space-y-4">
              {/* View Mode Toggle */}
              <div className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                <button
                  onClick={() => setViewMode('user')}
                  className={`flex-1 py-2 px-3 rounded text-sm font-medium transition-colors ${
                    viewMode === 'user'
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  User
                </button>
                <button
                  onClick={() => setViewMode('system')}
                  className={`flex-1 py-2 px-3 rounded text-sm font-medium transition-colors ${
                    viewMode === 'system'
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  System
                </button>
              </div>

              {/* User Info */}
              <div className="px-2">
                <p className="text-xs text-gray-500 mb-1">Logged in as Admin</p>
                <p className="text-sm font-medium text-gray-900">{user?.email || 'admin@romydomy.com'}</p>
              </div>

              {/* Logout Button */}
              <button
                onClick={handleLogout}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors font-medium text-sm"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                <span>Logout</span>
              </button>
            </div>
          </div>
        </aside>

        {/* Overlay for mobile */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Main Content */}
        <main className="flex-1 lg:ml-0 pt-16 lg:pt-0">
          <div className="p-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
