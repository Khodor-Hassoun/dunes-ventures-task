export function authHeader(token) {
  const headers = { headers: { authorization: `Bearer ${token}` } };
  return headers;
}
