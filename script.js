// Validasi Formulir Kontak
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah form untuk dikirim jika ada kesalahan
  
    // Ambil nilai input
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    // Hapus pesan error sebelumnya
    document.getElementById('name-error').textContent = '';
    document.getElementById('email-error').textContent = '';
    document.getElementById('message-error').textContent = '';
  
    let isValid = true;
  
    // Validasi nama
    if (!name) {
      document.getElementById('name-error').textContent = 'Name is required';
      isValid = false;
    }
  
    // Validasi email
    if (!email) {
      document.getElementById('email-error').textContent = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      document.getElementById('email-error').textContent = 'Please enter a valid email address';
      isValid = false;
    }
  
    // Validasi pesan
    if (!message) {
      document.getElementById('message-error').textContent = 'Message is required';
      isValid = false;
    }
  
    // Jika form valid, tampilkan pesan sukses
    if (isValid) {
      alert('Form submitted successfully!');
      // Jika diperlukan, Anda bisa melanjutkan mengirim data ke server menggunakan AJAX atau fetch API
    }
  });
  

// Event pada Tombol "Shop Now"
document.querySelector(".hero button").addEventListener("click", function () {
  alert("Welcome to Our Product Collection!");
});

// Event pada Tombol "Add to Cart"
document.querySelectorAll(".product .btn-danger").forEach(button => {
  button.addEventListener("click", function () {
    alert("Product successfully added to the cart!");
  });
});
