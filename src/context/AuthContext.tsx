import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { auth, db } from '../lib/firebase';
import { onAuthStateChanged, signOut, getRedirectResult, User as FirebaseUser } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';

export interface User {
    id: string;
    username: string;
    email: string;
    avatar?: string;
}

interface AuthContextType {
    user: User | null;
    isAuthenticated: boolean;
    loading: boolean;
    logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Handle redirect result from Google/Microsoft login
        getRedirectResult(auth).catch((error) => {
            console.error("Redirect login error:", error);
            if (error.code !== 'auth/redirect-cancelled-by-user') {
                alert("Login error: " + error.message);
            }
        });

        const unsubscribe = onAuthStateChanged(auth, async (firebaseUser: FirebaseUser | null) => {
            if (firebaseUser) {
                let username = firebaseUser.displayName || firebaseUser.email?.split('@')[0] || 'User';
                
                try {
                    // Fetch extra user details from Firestore
                    const userDocRef = doc(db, 'users', firebaseUser.uid);
                    const userDoc = await getDoc(userDocRef);
                    
                    if (userDoc.exists()) {
                        username = userDoc.data().username || username;
                    } else {
                        // Create user document if it doesn't exist
                        await setDoc(userDocRef, {
                            username,
                            email: firebaseUser.email,
                            createdAt: Date.now()
                        }, { merge: true });
                    }
                } catch (error) {
                    console.error("Error accessing Firestore user doc:", error);
                    // Database failed, but user is authenticated in Firebase Auth
                }

                setUser({
                    id: firebaseUser.uid,
                    username,
                    email: firebaseUser.email || '',
                    avatar: firebaseUser.photoURL || undefined
                });
            } else {
                setUser(null);
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const logout = async () => {
        await signOut(auth);
    };

    return (
        <AuthContext.Provider value={{ user, isAuthenticated: !!user, loading, logout }}>
            {!loading && children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
