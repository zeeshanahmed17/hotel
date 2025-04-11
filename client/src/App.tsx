import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { AuthProvider } from "@/lib/auth-context";
import React from "react";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Rooms from "@/pages/rooms";
import About from "@/pages/about";
import Contact from "@/pages/contact";
import Gallery from "@/pages/gallery";
import SignIn from "@/pages/auth/sign-in";
import Register from "@/pages/auth/register";
import RoomDetail from "@/pages/room-detail";
import TermsOfService from "@/pages/terms";
import PrivacyPolicy from "@/pages/privacy";
import CookiePolicy from "@/pages/cookies";

// Service pages - direct imports to avoid React errors
import Accommodation from "@/pages/services/accommodation";
import Dining from "@/pages/services/dining";
import Spa from "@/pages/services/spa";
import Fitness from "@/pages/services/fitness";
import Events from "@/pages/services/events";
import Concierge from "@/pages/services/concierge";

import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";

function Router() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/rooms" component={Rooms} />
          <Route path="/rooms/:id" component={RoomDetail} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/auth/sign-in" component={SignIn} />
          <Route path="/auth/register" component={Register} />
          <Route path="/terms" component={TermsOfService} />
          <Route path="/privacy" component={PrivacyPolicy} />
          <Route path="/cookies" component={CookiePolicy} />
          
          {/* Service pages */}
          <Route path="/services/accommodation" component={Accommodation} />
          <Route path="/services/dining" component={Dining} />
          <Route path="/services/spa" component={Spa} />
          <Route path="/services/fitness" component={Fitness} />
          <Route path="/services/events" component={Events} />
          <Route path="/services/concierge" component={Concierge} />
          
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Router />
        <Toaster />
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
