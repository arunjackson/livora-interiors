const SUPABASE_URL = 'https://pdndahgnrscvdxqicxuw.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBkbmRhaGducnNjdmR4cWljeHV3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ4NjczODQsImV4cCI6MjEwMDQ0MzM4NH0.iRwpFRsUtrGSlajpuYYodifHcb9SKpTydTHR0gbolW4';

// Safety Check: ensure the CDN library loaded first
if (typeof window.supabase === 'undefined') {
    console.error("CRITICAL ERROR: Supabase JS library (CDN) failed to load.");
} else {
    // Create the client safely
    const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    
    // Helper to check login status
    async function checkUser() {
        const { data: { user } } = await supabase.auth.getUser();
        return user;
    }

    // Helper to log out
    async function signOut() {
        await supabase.auth.signOut();
        window.location.href = 'index.html';
    }
}
