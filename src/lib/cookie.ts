// cookie set
// use:
//  setCookie("user", { id: 1, name: "Ali" });
export function setCookie<T>(name: string, value: T, days: number = 7): void {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  const stringValue = encodeURIComponent(JSON.stringify(value));
  document.cookie = `${name}=${stringValue}; expires=${expires}; path=/`;
}

// cookie get
// use:
// const user = getCookie<{ id: number; name: string }>("user");
export function getCookie<T>(name: string): T | null {
  const cookies = document.cookie.split("; ");
  for (const cookie of cookies) {
    const [key, val] = cookie.split("=");
    if (key === name) {
      try {
        return JSON.parse(decodeURIComponent(val)) as T;
      } catch {
        return null;
      }
    }
  }
  return null;
}

// cookie delete
// use:
//  deleteCookie("user");
export function deleteCookie(name: string): void {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
}
