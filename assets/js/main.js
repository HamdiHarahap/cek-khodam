const desc = document.getElementById('desc')
const kodam = document.getElementById('kodam')
const button = document.querySelector('.btn')

const khodams = [
    'Harimau Putih', 'Lampu Tertidur', 'Panda Ompong', 'Bebek Karet', 'Ninja Turtle', 
    'Kucing Kulkas', 'Sabun Wangi', 'Semut Kecil', 'Cupcake Pelangi', 'Robot Mini', 
    'Ikan Terbang', 'Ayam Goreng', 'Kecoa Terbang', 'Kambing Ngebor', 'Kerupuk Renyah', 
    'Celengan Babi', 'Lemari Tua', 'Kopi Susu', 'Sapu Lidi', 'Kuda Lumping', 
    'Sepatu Roda', 'Bola Pingpong', 'Lumba-lumba', 'Kucing Gemuk', 'Iguana Pink', 
    'Bantal Guling', 'Computer Jadul', 'Aldi Taher', 'Charger Iphone',' Kasur Empuk', 
    'Es Krim Pelangi', 'Biskuit Coklat', 'Sepeda Ontel', 'Sate Kambing', 
    'Kue Cubit', 'Mie Goreng', 'Anjing Pelacak', 'Panci Penyihir', 'Gunting Goyang', 
    'Tisu Terbang', 'Kucing Hitam', 'Ikan Dewa', 'Gajah Putih', 'Kijang Perak'
]

const loader = document.querySelector('.loader')
const box = document.getElementById('box')

function cekKhodam() {
    const input = document.querySelector('#input').value

    if (input == "") {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Silahkan Isi Nama",      
        })
    } else {
        loader.style.display = 'flex'
        box.style.opacity = '0.5'
        setTimeout(() => {
            const randomKhodam = khodams[Math.floor(Math.random() * khodams.length)]
            desc.innerHTML = `Khodam yang ada dalam diri <span>${input}</span> adalah`
            kodam.innerText = `${randomKhodam}`
            loader.style.display = 'none';
            box.style.opacity = ''
        }, 2000)
    }
}

button.addEventListener('click', cekKhodam)
input.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        cekKhodam()
    }
})