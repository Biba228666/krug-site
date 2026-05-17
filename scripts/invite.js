// Получаем путь текущего URL, например /invite/abc123
const path = window.location.pathname;

// Извлекаем токен приглашения после сегмента /invite/
const token = path.split("/invite/")[1];

console.log("Invite token:", token);

if (token) {
    localStorage.setItem(
        "inviteToken",
        token
    );
}