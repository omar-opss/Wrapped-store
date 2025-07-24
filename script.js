function checkout() {
  // الحل النهائي لمسار GitHub Pages
  window.location.href = "/Wrapped-store/checkout.html";
}

// ✅ لو على صفحة الكارت، اربط الزر بالفنكشن بعد تحميل الصفحة
document.addEventListener("DOMContentLoaded", () => {
  const checkoutButton = document.querySelector('button[onclick="checkout()"]');
  if (checkoutButton) {
    checkoutButton.addEventListener("click", checkout);
  }
});
