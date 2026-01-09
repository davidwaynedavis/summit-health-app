
// Config
const SUPABASE_URL = "https://zngijeyhtcidznhhxkrf.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpuZ2lqZXlodGNpZHpuaGh4a3JmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ2MTIwNDMsImV4cCI6MjA3MDE4ODA0M30.n1KzorezQL8zTuzZ4DIBEEovdRbKriaolu7QiAeV-Pc";
const TABLE = "healthteam";

// Init
function createClient() {
  if (!window.supabase) throw new Error("Supabase JS not loaded.");
  return window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
}

// Constants
const STATUS_ORDER = ["1-To Do", "2-In Progress", "3-Done"];
