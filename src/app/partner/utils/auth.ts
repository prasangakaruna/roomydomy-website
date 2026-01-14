// Authentication utilities for partners using localStorage
export interface Partner {
  id: string;
  email: string;
  name: string;
  role: 'partner' | 'user';
  createdAt: string;
}

export interface AuthState {
  partner: Partner | null;
  isAuthenticated: boolean;
}

// Get current partner from localStorage
export function getCurrentPartner(): Partner | null {
  if (typeof window === 'undefined') return null;
  const partnerStr = localStorage.getItem('partner_user');
  if (!partnerStr) return null;
  try {
    return JSON.parse(partnerStr);
  } catch {
    return null;
  }
}

// Set current partner in localStorage
export function setCurrentPartner(partner: Partner | null): void {
  if (typeof window === 'undefined') return;
  if (partner) {
    localStorage.setItem('partner_user', JSON.stringify(partner));
  } else {
    localStorage.removeItem('partner_user');
  }
}

// Check if partner is authenticated
export function isAuthenticated(): boolean {
  return getCurrentPartner() !== null;
}

// Login function
export function login(email: string, password: string): { success: boolean; partner?: Partner; error?: string } {
  const partners = getPartners();
  const partner = partners.find(p => p.email === email);
  
  if (!partner) {
    return { success: false, error: 'Partner not found' };
  }
  
  // In a real app, you'd hash and compare passwords
  // For demo purposes, we'll store a simple password hash
  const storedPassword = localStorage.getItem(`partner_password_${partner.id}`);
  if (!storedPassword || storedPassword !== btoa(password)) {
    return { success: false, error: 'Invalid password' };
  }
  
  setCurrentPartner(partner);
  return { success: true, partner };
}

// Signup function
export function signup(email: string, password: string, name: string): { success: boolean; partner?: Partner; error?: string } {
  const partners = getPartners();
  
  if (partners.find(p => p.email === email)) {
    return { success: false, error: 'Partner already exists' };
  }
  
  const newPartner: Partner = {
    id: Date.now().toString(),
    email,
    name,
    role: 'partner',
    createdAt: new Date().toISOString(),
  };
  
  partners.push(newPartner);
  localStorage.setItem('partner_users', JSON.stringify(partners));
  localStorage.setItem(`partner_password_${newPartner.id}`, btoa(password));
  
  setCurrentPartner(newPartner);
  return { success: true, partner: newPartner };
}

// Get all partners
function getPartners(): Partner[] {
  if (typeof window === 'undefined') return [];
  const partnersStr = localStorage.getItem('partner_users');
  if (!partnersStr) return [];
  try {
    return JSON.parse(partnersStr);
  } catch {
    return [];
  }
}

// Initialize default partner account
export function initializeDefaultPartner(): void {
  if (typeof window === 'undefined') return;
  
  const partners = getPartners();
  const defaultEmail = 'partner@roomydomy.com';
  
  // Check if default partner already exists
  if (partners.find(p => p.email === defaultEmail)) {
    return;
  }
  
  // Create default partner account
  const defaultPartner: Partner = {
    id: 'partner-001',
    email: defaultEmail,
    name: 'Partner',
    role: 'partner',
    createdAt: new Date().toISOString(),
  };
  
  partners.push(defaultPartner);
  localStorage.setItem('partner_users', JSON.stringify(partners));
  // Default password: partner123 (base64 encoded)
  localStorage.setItem('partner_password_partner-001', btoa('partner123'));
}

// Logout function
export function logout(): void {
  setCurrentPartner(null);
}
