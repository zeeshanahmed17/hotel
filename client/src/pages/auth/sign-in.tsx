import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import { FaGoogle } from "react-icons/fa";
import { useAuth } from "@/lib/auth-context";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const [, navigate] = useLocation();
  const { emailSignIn, googleSignIn, currentUser } = useAuth();
  
  // Redirect if user is already logged in
  useEffect(() => {
    if (currentUser) {
      navigate("/");
    }
  }, [currentUser, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      toast({
        title: "Missing information",
        description: "Please enter both email and password",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    
    try {
      // Using the Auth context to sign in
      await emailSignIn(email, password);
      
      toast({
        title: "Welcome back",
        description: "You've successfully signed in",
      });
      
      // Redirect handled by useEffect when currentUser changes
    } catch (error: any) {
      let errorMessage = "Invalid email or password";
      
      // Handle specific Firebase errors
      if (error.code === 'auth/user-not-found') {
        errorMessage = "No account found with this email";
      } else if (error.code === 'auth/wrong-password') {
        errorMessage = "Incorrect password";
      } else if (error.code === 'auth/invalid-email') {
        errorMessage = "Invalid email format";
      } else if (error.code === 'auth/too-many-requests') {
        errorMessage = "Too many attempts. Try again later";
      }
      
      toast({
        title: "Sign in failed",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setIsLoading(true);
    
    try {
      // Using Auth context for Google sign in
      await googleSignIn();
      
      toast({
        title: "Welcome back",
        description: "You've successfully signed in with Google",
      });
      
      // Redirect handled by useEffect when currentUser changes
    } catch (error: any) {
      let errorMessage = "An error occurred during authentication";
      
      // Handle specific Google sign-in errors
      if (error.code === 'auth/popup-closed-by-user') {
        errorMessage = "Authentication cancelled";
      } else if (error.code === 'auth/popup-blocked') {
        errorMessage = "Pop-up was blocked by your browser";
      }
      
      toast({
        title: "Google sign in failed",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto py-16 px-4 max-w-md">
      <div className="text-center mb-8">
        <h1 className="font-serif text-3xl font-bold mb-2 bg-gradient-to-r from-amber-600 to-yellow-400 bg-clip-text text-transparent">
          Welcome Back
        </h1>
        <p className="text-neutral-600">Sign in to access your Grand Azure account</p>
      </div>
      
      <Card className="shadow-lg border-0">
        <CardHeader>
          <CardTitle className="text-xl font-medium">Sign In</CardTitle>
          <CardDescription>
            Access your reservations, preferences, and exclusive member benefits
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-12"
              />
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Link 
                  href="/auth/forgot-password" 
                  className="text-sm font-medium text-primary hover:underline"
                >
                  Forgot password?
                </Link>
              </div>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="h-12"
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full h-12 bg-gradient-to-r from-amber-600 to-yellow-400 text-white border-none"
              disabled={isLoading}
            >
              {isLoading ? "Signing in..." : "Sign In"}
            </Button>
          </form>
          
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <Separator className="w-full" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-neutral-500">Or continue with</span>
              </div>
            </div>
            
            <Button
              variant="outline"
              className="w-full mt-4 h-12 border-neutral-300 hover:bg-neutral-50"
              onClick={handleGoogleSignIn}
              disabled={isLoading}
            >
              <FaGoogle className="mr-2 h-5 w-5 text-red-600" />
              Google Account
            </Button>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center">
          <p className="text-sm text-neutral-600">
            Don't have an account?{" "}
            <Link href="/auth/register" className="font-medium text-primary hover:underline">
              Register Now
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SignIn;