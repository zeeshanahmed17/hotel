import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { auth, signInWithGoogle, signInWithEmail, registerWithEmail, logOut } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';

// User type for our context
interface AuthUser {
  uid: string;
  email: string | null;
  displayName: string | null;
}

// Auth context type
interface AuthContextType {
  currentUser: AuthUser | null;
  loading: boolean;
  googleSignIn: () => Promise<AuthUser>;
  emailSignIn: (email: string, password: string) => Promise<AuthUser>;
  emailRegister: (email: string, password: string) => Promise<AuthUser>;
  logout: () => Promise<void>;
}

// Create the context with a default value
const AuthContext = createContext<AuthContextType>({
  currentUser: null,
  loading: true,
  googleSignIn: async () => ({ uid: '', email: '', displayName: '' }), // Placeholder
  emailSignIn: async () => ({ uid: '', email: '', displayName: '' }), // Placeholder
  emailRegister: async () => ({ uid: '', email: '', displayName: '' }), // Placeholder
  logout: async () => {}, // Placeholder
});

// Provider component
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);

  // Set up auth state listener
  useEffect(() => {
    // If we're using dummy credentials, simulate a signed-in user
    if (!auth) {
      setCurrentUser({
        uid: 'dummy-uid',
        email: 'dummy@example.com',
        displayName: 'Dummy User',
      });
      setLoading(false);
      return () => {};
    }

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
        });
      } else {
        setCurrentUser(null);
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  // Auth methods
  const googleSignIn = async () => {
    const user = await signInWithGoogle();
    return user;
  };

  const emailSignIn = async (email: string, password: string) => {
    const user = await signInWithEmail(email, password);
    return user;
  };

  const emailRegister = async (email: string, password: string) => {
    const user = await registerWithEmail(email, password);
    return user;
  };

  const logout = async () => {
    await logOut();
  };

  const value = {
    currentUser,
    loading,
    googleSignIn,
    emailSignIn,
    emailRegister,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Custom hook to use the auth context
export const useAuth = () => {
  return useContext(AuthContext);
};