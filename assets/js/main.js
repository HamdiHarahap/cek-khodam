const desc = document.getElementById('desc')
const kodam = document.getElementById('kodam')
const button = document.querySelector('.check')
const meaning = document.getElementById('meaning')

const khodams = [
    {
        nama: 'Harimau Putih',
        deskripsi: 'Makhluk yang menampilkan keanggunan dengan bulu putihnya, sering kali muncul dengan suara "Roar!" yang mempesona.'
    },
    {
        nama: 'Lampu Tertidur',
        deskripsi: 'Khodam yang selalu dalam tidurnya, hanya menyala saat dibutuhkan, menunjukkan ketenangan dan kesabaran dalam menunggu saat yang tepat.'
    },
    {
        nama: 'Panda Ompong',
        deskripsi: 'Makhluk yang menghadirkan kelembutan dalam keunikannya, selalu tersenyum tanpa gigi, menunjukkan kebahagiaan dalam kesederhanaan.'
    },
    {
        nama: 'Bebek Karet',
        deskripsi: 'Khodam yang membawa keceriaan dengan kegemarannya bersiul dan bermain di air, menghadirkan keceriaan dan kelembutan.'
    },
    {
        nama: 'Ninja Turtle',
        deskripsi: 'Makhluk yang ahli dalam tindakan diam-diam, menunjukkan keahlian luar biasa dalam keterampilan yang dimilikinya.'
    },
    {
        nama: 'Kucing Kulkas',
        deskripsi: 'Khodam yang berada di tempat yang dingin, selalu memberikan kesegaran dan kenyamanan dengan kehadirannya.'
    },
    {
        nama: 'Sabun Wangi',
        deskripsi: 'Makhluk yang mengajarkan pentingnya kebersihan dan kenyamanan, selalu menghadirkan pengalaman yang menyenangkan dalam perawatan diri.'
    },
    {
        nama: 'Semut Kecil',
        deskripsi: 'Khodam yang kuat dan penuh dedikasi, menunjukkan ketekunan dan kekuatan dalam pekerjaannya.'
    },
    {
        nama: 'Cupcake Pelangi',
        deskripsi: 'Makhluk yang menyebarkan keceriaan dan manisnya kehidupan, selalu menghadirkan keceriaan dalam setiap momen.'
    },
    {
        nama: 'Robot Mini',
        deskripsi: 'Khodam yang canggih dan penuh semangat, selalu siap membantu dengan teknologi dan kebaikan hati.'
    },
    {
        nama: 'Ikan Terbang',
        deskripsi: 'Makhluk yang bisa terbang di udara, sering kali mengejutkan burung-burung, suka bermain di langit saat hujan.'
    },
    {
        nama: 'Ayam Goreng',
        deskripsi: 'Khodam yang suka menggoreng dirinya sendiri, selalu hangat dan renyah, tapi jangan coba-coba memakannya!'
    },
    {
        nama: 'Kecoa Terbang',
        deskripsi: 'Makhluk yang bisa terbang dan sangat gesit, suka bersembunyi di tempat-tempat tak terduga dan membuat orang terkejut.'
    },
    {
        nama: 'Kambing Ngebor',
        deskripsi: 'Khodam yang suka mengebor tanah dengan tanduknya, punya kekuatan luar biasa dan selalu menemukan harta karun.'
    },
    {
        nama: 'Kerupuk Renyah',
        deskripsi: 'Makhluk yang selalu renyah dan enak dimakan kapan saja, suka berkeliling mengajak orang-orang makan camilan bersama.'
    },
    {
        nama: 'Celengan Babi',
        deskripsi: 'Khodam yang selalu menyimpan uang dengan aman, suka mengajarkan anak-anak tentang pentingnya menabung.'
    },
    {
        nama: 'Lemari Tua',
        deskripsi: 'Makhluk yang penuh dengan cerita masa lalu, suka bercerita tentang zaman dahulu kepada siapa saja yang mendengarkan.'
    },
    {
        nama: 'Kopi Susu',
        deskripsi: 'Khodam yang selalu hangat dan menyegarkan, suka menghidupkan semangat di pagi hari.'
    },
    {
        nama: 'Sapu Lidi',
        deskripsi: 'Makhluk yang terbuat dari lidi yang kuat, suka membersihkan rumah dengan teliti dan menyapu semua kotoran.'
    },
    {
        nama: 'Kuda Lumping',
        deskripsi: 'Khodam yang mainan yang bisa menari dengan lincah, suka menghibur orang-orang dengan tariannya yang energik.'
    },
    {
        nama: 'Sepatu Roda',
        deskripsi: 'Makhluk yang cepat dan lincah, suka meluncur di jalanan dengan gaya yang keren.'
    },
    {
        nama: 'Bola Pingpong',
        deskripsi: 'Khodam yang suka melompat-lompat dengan semangat, suka bermain di meja pingpong dengan temannya.'
    },
    {
        nama: 'Lumba-lumba',
        deskripsi: 'Makhluk yang cerdas dan suka bermain di laut, suka mengajak orang-orang berenang bersama dan menunjukkan trik-trik keren.'
    },
    {
        nama: 'Kucing Gemuk',
        deskripsi: 'Khodam yang gemuk dan menggemaskan, suka tidur di tempat yang empuk dan selalu mencari perhatian.'
    },
    {
        nama: 'Iguana Pink',
        deskripsi: 'Makhluk yang dengan warna pink yang unik, suka berjemur di bawah matahari dan menunjukkan warna cerahnya.'
    },
    {
        nama: 'Bantal Guling',
        deskripsi: 'Khodam yang empuk dan nyaman, suka memberikan pelukan yang hangat saat tidur.'
    },
    {
        nama: 'Computer Jadul',
        deskripsi: 'Makhluk yang tua namun masih berfungsi dengan baik, suka membantu dengan pengetikan dan bermain game klasik.'
    },
    {
        nama: 'Aldi Taher',
        deskripsi: 'Khodam yang selalu penuh dengan ide-ide kreatif, suka menghibur dengan lagu-lagu dan film-filmnya.'
    },
    {
        nama: 'Charger Iphone',
        deskripsi: 'Makhluk yang selalu ada ketika baterai habis, suka memberikan energi dan membuat ponsel kembali hidup.'
    },
    {
        nama: 'Kasur Empuk',
        deskripsi: 'Khodam yang sangat empuk dan nyaman, suka memberikan tidur yang nyenyak dan mimpi indah.'
    },
    {
        nama: 'Es Krim Pelangi',
        deskripsi: 'Makhluk yang dengan rasa pelangi yang menyegarkan, suka membuat hari-hari menjadi lebih manis.'
    },
    {
        nama: 'Biskuit Coklat',
        deskripsi: 'Khodam yang dengan rasa coklat yang enak, suka menjadi teman minum teh dan kopi.'
    },
    {
        nama: 'Sepeda Ontel',
        deskripsi: 'Makhluk yang tua namun kuat dan tahan lama, suka berkeliling desa dengan tenang.'
    },
    {
        nama: 'Sate Kambing',
        deskripsi: 'Khodam yang lezat dan nikmat, suka membuat orang-orang lapar dengan aromanya.'
    },
    {
        nama: 'Kue Cubit',
        deskripsi: 'Makhluk yang kecil, lembut, dan manis, suka membuat orang-orang tersenyum dengan rasanya.'
    },
    {
        nama: 'Mie Goreng',
        deskripsi: 'Khodam yang enak dan menggugah selera, suka mengisi perut yang kosong dengan cita rasa yang lezat.'
    },
    {
        nama: 'Anjing Pelacak',
        deskripsi: 'Makhluk yang pintar dan setia, suka membantu mencari benda yang hilang dengan penciumannya yang tajam.'
    },
    {
        nama: 'Panci Penyihir',
        deskripsi: 'Khodam yang bisa memasak apa saja, suka membuat ramuan ajaib yang lezat.'
    },
    {
        nama: 'Gunting Goyang',
        deskripsi: 'Makhluk yang selalu bergerak saat dipakai, suka membantu memotong dengan tarian yang lucu.'
    },
    {
        nama: 'Tisu Terbang',
        deskripsi: 'Khodam yang bisa terbang dan selalu ada saat dibutuhkan, suka membantu menghapus air mata dan membersihkan kotoran.'
    },
    {
        nama: 'Kucing Hitam',
        deskripsi: 'Makhluk yang dengan bulu hitam pekat, suka bermain di malam hari dan misterius.'
    },
    {
        nama: 'Ikan Dewa',
        deskripsi: 'Khodam yang dianggap suci dan membawa keberuntungan, suka berenang di kolam dengan anggun.'
    },
    {
        nama: 'Gajah Putih',
        deskripsi: 'Makhluk yang besar dengan kulit putih, suka membantu membawa barang-barang dan sangat kuat.'
    },
    {
        nama: 'Kijang Perak',
        deskripsi: 'Khodam yang dengan tanduk perak yang mengkilap, suka berlari dengan cepat di hutan.'
    }
];

const loader = document.querySelector('.loader')
const box = document.getElementById('box')
const input = document.getElementById('input')
const result = document.getElementById('result')

function cekKhodam() {
    const inputVal = input.value

    if (inputVal === "") {
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
            const namaKhodam = randomKhodam.nama;
            const deskripsiKhodam = randomKhodam.deskripsi;
            desc.innerHTML = `Khodam yang ada dalam diri <br> <span>${inputVal}</span> adalah`
            kodam.innerText = `${namaKhodam}`;
            meaning.innerText = `${deskripsiKhodam}`
            loader.style.display = 'none'
            box.style.opacity = ''
            input.value = ''
            result.style.display = 'flex'
            box.style.display = 'none'
        }, 2000)
    }
}

button.addEventListener('click', cekKhodam)
input.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        cekKhodam()
    }
})

const repeat = document.querySelector('.repeat')

repeat.addEventListener('click', function() {
    loader.style.display = 'flex'
    result.style.opacity = '0.5'
    setTimeout(() => {
        result.style.opacity = ''
        loader.style.display = 'none'
        result.style.display = 'none'
        box.style.display = 'flex'
    }, 2000)
})