
import { createClient } from '@supabase/supabase-js'
import { Database } from './supabase';

const supabaseUrl = 'https://zoytealctbwfzsveavlm.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY; 
const databaseClient = createClient<Database>(supabaseUrl, supabaseKey || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpveXRlYWxjdGJ3ZnpzdmVhdmxtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTgzOTAzMzgsImV4cCI6MjAzMzk2NjMzOH0.sCOGE3YhKObBOp6Xg2Co2kgvLUgDo54plXhx3_iPj6c')

export default databaseClient;