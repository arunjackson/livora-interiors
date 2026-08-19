(function() {
    const SUPABASE_URL = 'https://pdndahgnrscvdxqicxuw.supabase.co';
    const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBkbmRhaGducnNjdmR4cWljeHV3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ4NjczODQsImV4cCI6MjEwMDQ0MzM4NH0.iRwpFRsUtrGSlajpuYYodifHcb9SKpTydTHR0gbolW4';
    if (typeof window.supabase === 'undefined') { console.error("Supabase CDN failed to load!"); return; }
    window._supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
})();
async function checkUser() { const { data: { user } } = await window._supabaseClient.auth.getUser(); return user; }
async function signOut() { await window._supabaseClient.auth.signOut(); window.location.href = 'index.html'; }
