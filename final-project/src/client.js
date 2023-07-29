// user authenticate themselves inside our platform 
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://rggmndrtsleedmuuagzv.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJnZ21uZHJ0c2xlZWRtdXVhZ3p2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTA2NDQ5NTQsImV4cCI6MjAwNjIyMDk1NH0.TuLl0Y1JDSBMeCfqZ8qvMHwH2fndsTNVU3Wl9SF-VAQ'
export const supabase = createClient(supabaseUrl, supabaseKey)

