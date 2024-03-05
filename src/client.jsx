import { createClient } from '@supabase/supabase-js'
const URL = 'https://yziksdbccuusnumvkmhc.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl6aWtzZGJjY3V1c251bXZrbWhjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk2NzI1MDEsImV4cCI6MjAyNTI0ODUwMX0.sDBF8Amt18gPhWIATZ5LIQN8T-WH_8_jTdwLSuWaEKs';

export const supabase = createClient(URL, API_KEY);
