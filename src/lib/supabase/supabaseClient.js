import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  'https://hyilybvbakkhdxeexsrg.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh5aWx5YnZiYWtraGR4ZWV4c3JnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODcxOTk5OTcsImV4cCI6MjAwMjc3NTk5N30.YXodLjsNJyUzDWjDW7IDAcy-IOskikUvRPvbQsDTQDo'
);
