// User management utilities
import { User } from './auth';

// Get all users
export function getAllUsers(): User[] {
  if (typeof window === 'undefined') return [];
  const usersStr = localStorage.getItem('admin_users');
  if (!usersStr) return [];
  try {
    return JSON.parse(usersStr);
  } catch {
    return [];
  }
}

// Save all users
export function saveAllUsers(users: User[]): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem('admin_users', JSON.stringify(users));
}

// Update user
export function updateUser(id: string, updates: Partial<User>): User | null {
  const users = getAllUsers();
  const index = users.findIndex(u => u.id === id);
  if (index === -1) return null;
  
  users[index] = {
    ...users[index],
    ...updates,
  };
  saveAllUsers(users);
  return users[index];
}

// Delete user
export function deleteUser(id: string): boolean {
  const users = getAllUsers();
  const filtered = users.filter(u => u.id !== id);
  if (filtered.length === users.length) return false;
  saveAllUsers(filtered);
  // Also delete password
  localStorage.removeItem(`user_password_${id}`);
  return true;
}

// Change user password
export function changeUserPassword(id: string, newPassword: string): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(`user_password_${id}`, btoa(newPassword));
}
