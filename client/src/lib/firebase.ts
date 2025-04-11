import { initializeApp, FirebaseApp } from "firebase/app";
import { 
  getAuth, 
  GoogleAuthProvider, 
  signInWithPopup, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signOut, 
  Auth, 
  User 
} from "firebase/auth";

// Check if we're in dev mode with dummy credentials
const isDummyCredentials = 
  import.meta.env.VITE_FIREBASE_API_KEY === "dummy-api-key-12345" || 
  !import.meta.env.VITE_FIREBASE_API_KEY;

// Firebase configuration - using dummy values as requested
const firebaseConfig = {
  apiKey: "dummy-api-key-for-development",
  authDomain: "dummy-project-id.firebaseapp.com",
  projectId: "dummy-project-id",
  storageBucket: "dummy-project-id.appspot.com",
  appId: "dummy-app-id",
};

// Initialize Firebase if we have valid credentials
let app: FirebaseApp | undefined;
let auth: Auth | undefined;
let googleProvider: GoogleAuthProvider | undefined;

try {
  app = initializeApp(firebaseConfig);
  auth = getAuth(app);
  googleProvider = new GoogleAuthProvider();
} catch (error) {
  console.warn("Firebase initialization failed:", error);
}

// Type for dummy user object
interface DummyUser {
  uid: string;
  email: string | null;
  displayName: string | null;
}

// Authentication functions
export const signInWithGoogle = async (): Promise<User | DummyUser> => {
  // If using dummy credentials or Firebase failed to initialize, simulate successful login
  if (isDummyCredentials || !auth || !googleProvider) {
    console.log("Using dummy authentication for Google sign-in");
    return {
      uid: "dummy-uid",
      email: "dummy@example.com",
      displayName: "Dummy User",
    };
  }
  
  try {
    // We know for sure at this point that auth and googleProvider are defined
    // since we checked them in the if statement above
    const result = await signInWithPopup(auth as Auth, googleProvider as GoogleAuthProvider);
    return result.user;
  } catch (error) {
    console.error("Error signing in with Google:", error);
    throw error;
  }
};

export const signInWithEmail = async (email: string, password: string): Promise<User | DummyUser> => {
  // If using dummy credentials or Firebase failed to initialize, simulate successful login
  if (isDummyCredentials || !auth) {
    console.log("Using dummy authentication for email sign-in");
    return {
      uid: "dummy-uid",
      email: email,
      displayName: email.split('@')[0],
    };
  }
  
  try {
    // We know auth is defined at this point
    const result = await signInWithEmailAndPassword(auth as Auth, email, password);
    return result.user;
  } catch (error) {
    console.error("Error signing in with email:", error);
    throw error;
  }
};

export const registerWithEmail = async (email: string, password: string): Promise<User | DummyUser> => {
  // If using dummy credentials or Firebase failed to initialize, simulate successful registration
  if (isDummyCredentials || !auth) {
    console.log("Using dummy authentication for email registration");
    return {
      uid: "dummy-uid",
      email: email,
      displayName: email.split('@')[0],
    };
  }
  
  try {
    // We know auth is defined at this point
    const result = await createUserWithEmailAndPassword(auth as Auth, email, password);
    return result.user;
  } catch (error) {
    console.error("Error registering with email:", error);
    throw error;
  }
};

export const logOut = async (): Promise<void> => {
  // If using dummy credentials or Firebase failed to initialize, simulate successful logout
  if (isDummyCredentials || !auth) {
    console.log("Using dummy authentication for logout");
    return;
  }
  
  try {
    // We know auth is defined at this point
    await signOut(auth as Auth);
  } catch (error) {
    console.error("Error signing out:", error);
    throw error;
  }
};

export { auth };