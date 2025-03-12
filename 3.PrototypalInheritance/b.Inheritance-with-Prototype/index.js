// Membuat konstruktor `Mammal`
function Mammal(name) {
  this.name = name; // Properti `name` ditambahkan ke instance yang dibuat
}

// Menambahkan metode `speak` ke `Mammal.prototype`
Mammal.prototype.speak = function () {
  console.log(`${this.name} is speaking.`);
};
// Semua instance `Mammal` dan turunan dari `Mammal` akan memiliki akses ke metode ini

// Membuat konstruktor `Dog` yang mewarisi dari `Mammal`
function Dog(name, breed) {
  // Memanggil konstruktor `Mammal`, supaya `name` diwarisi oleh `Dog`
  Mammal.call(this, name); // Memanggil `Mammal` dengan `this` agar properti `name` bisa diakses di `Dog`
  this.breed = breed; // Menambahkan properti `breed` khusus untuk `Dog`
}

// Mengatur prototype `Dog` agar mewarisi dari `Mammal.prototype`
Dog.prototype = Object.create(Mammal.prototype);

// Memperbaiki constructor `Dog`, karena sebelumnya `Dog.prototype.constructor` mengarah ke `Mammal`
Dog.prototype.constructor = Dog;

// Menambahkan metode baru `bark` ke `Dog.prototype`
Dog.prototype.bark = function () {
  console.log(`${this.name} is barking.`);
};

// Sekarang, setiap instance `Dog` akan memiliki:
// - Properti `name` dan `breed`
// - Metode `speak()` dari `Mammal`
// - Metode `bark()` dari `Dog`
