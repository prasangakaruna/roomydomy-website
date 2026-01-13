// Authentication utilities using localStorage
export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'user';
  createdAt: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
}

// Get current user from localStorage
export function getCurrentUser(): User | null {
  if (typeof window === 'undefined') return null;
  const userStr = localStorage.getItem('admin_user');
  if (!userStr) return null;
  try {
    return JSON.parse(userStr);
  } catch {
    return null;
  }
}

// Set current user in localStorage
export function setCurrentUser(user: User | null): void {
  if (typeof window === 'undefined') return;
  if (user) {
    localStorage.setItem('admin_user', JSON.stringify(user));
  } else {
    localStorage.removeItem('admin_user');
  }
}

// Check if user is authenticated
export function isAuthenticated(): boolean {
  return getCurrentUser() !== null;
}

// Login function
export function login(email: string, password: string): { success: boolean; user?: User; error?: string } {
  const users = getUsers();
  const user = users.find(u => u.email === email);
  
  if (!user) {
    return { success: false, error: 'User not found' };
  }
  
  // In a real app, you'd hash and compare passwords
  // For demo purposes, we'll store a simple password hash
  const storedPassword = localStorage.getItem(`user_password_${user.id}`);
  if (!storedPassword || storedPassword !== btoa(password)) {
    return { success: false, error: 'Invalid password' };
  }
  
  setCurrentUser(user);
  return { success: true, user };
}

// Signup function
export function signup(email: string, password: string, name: string): { success: boolean; user?: User; error?: string } {
  const users = getUsers();
  
  if (users.find(u => u.email === email)) {
    return { success: false, error: 'User already exists' };
  }
  
  const newUser: User = {
    id: Date.now().toString(),
    email,
    name,
    role: 'admin',
    createdAt: new Date().toISOString(),
  };
  
  users.push(newUser);
  localStorage.setItem('admin_users', JSON.stringify(users));
  localStorage.setItem(`user_password_${newUser.id}`, btoa(password));
  
  setCurrentUser(newUser);
  return { success: true, user: newUser };
}

// Get all users
function getUsers(): User[] {
  if (typeof window === 'undefined') return [];
  const usersStr = localStorage.getItem('admin_users');
  if (!usersStr) return [];
  try {
    return JSON.parse(usersStr);
  } catch {
    return [];
  }
}

// Initialize default admin account
export function initializeDefaultAdmin(): void {
  if (typeof window === 'undefined') return;
  
  const users = getUsers();
  const defaultEmail = 'admin@roomydomy.com';
  
  // Check if default admin already exists
  if (users.find(u => u.email === defaultEmail)) {
    return;
  }
  
  // Create default admin account
  const defaultAdmin: User = {
    id: 'admin-001',
    email: defaultEmail,
    name: 'Admin',
    role: 'admin',
    createdAt: new Date().toISOString(),
  };
  
  users.push(defaultAdmin);
  localStorage.setItem('admin_users', JSON.stringify(users));
  // Default password: admin123 (base64 encoded)
  localStorage.setItem('user_password_admin-001', btoa('admin123'));
}

// Logout function
export function logout(): void {
  setCurrentUser(null);
}
