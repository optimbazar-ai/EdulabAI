import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Register from "./pages/Register";
import FreeLesson from "./pages/FreeLesson";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";

// Admin Imports
import AdminLayout from "./components/layout/AdminLayout";
import Login from "./pages/admin/Login";
import Dashboard from "./pages/admin/Dashboard";
import Applications from "./pages/admin/Applications";
import AdminCourses from "./pages/admin/AdminCourses";
import AdminBlog from "./pages/admin/AdminBlog";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/register" element={<Register />} />
            <Route path="/free-lesson" element={<FreeLesson />} />
            <Route path="/contact" element={<Contact />} />

            {/* Admin Routes */}
            <Route path="/admin/login" element={<Login />} />
            <Route path="/admin" element={<AdminLayout />}>
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="applications" element={<Applications />} />
              <Route path="courses" element={<AdminCourses />} />
              <Route path="blog" element={<AdminBlog />} />
              <Route index element={<Dashboard />} />
            </Route>

            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
