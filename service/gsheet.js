const axios = require('axios')

const baseURL = "https://script.google.com/macros/s/AKfycby_Re60LhCLoXvOZfRLBX4IXBwzTLiQ-dycyhiFbEeukRSpAspLrUBAvXZjHxu8pWYVjg/exec"

const axiosInstance = axios.create({
    baseURL: baseURL,
    headers: {
        "Content-Type": "application/json"
    }
})


    exports.getData = async(whatsapp) => {
    try {
        // mengambil data dari spreatsheet
        const response = await axiosInstance.get();
        // data disimpan di simpan
        let responseStr = ""
        response.data.data.forEach(element => {
                // jika element di whatsapp itu sama dengan yag dicari maka akan di ambil 
            if (element.whatsapp.toString() === whatsapp){
                // untuk menambah apa yg akan di tampilkan ke wa selanjutnya
                responseStr += `\n===================\nmonitoring probolinggo\n===================\nnama sales : ${element.NAMA_SF}\nPerdana BYU : ${element.jenis_layanan}\nPerdana lite : Rp. ${element.total_bayar}\nPerdana Tronton : RP. ${element.status}\n`
            }
            
        });
        //jika data yg di cari kosong maka akan dibalas data tidak ditemukan 

        if ( responseStr == ""){
            responseStr = "Data tidak ditemukan....."
        }
        
        return responseStr
    }catch(error) {
        console.log('>>>>>',error)
    }
    
}