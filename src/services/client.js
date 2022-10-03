import { createClient } from '@supabase/supabase-js';
export const client = createClient(
  process.env.REACT_APP_SUPABASE_URL,
  process.env.REACT_APP_SUPABASE_KEY
);

export function checkError({ data, error }) {
  if (error) {
    throw error;
  }
  return data;
}

export async function fetchMessages(from, to) {
  const response = await client.from('messages').select('*').range(from, to).order('timestamp', { ascending: false });
  return checkError(response);
}

export async function createMessage(username, text) {
  const response = await client.from('messages').insert({ username, text });
  return checkError(response);
}

// export async function realtimeMessages(handler) {
//   const response = await (await client.from('messages')).count('INSERT', (payload) => {
//     handler(payload.new);
//   }).subscribe();
//   return checkError(response);
// }