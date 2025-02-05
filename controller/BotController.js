const { Controller, Response } = require("pepesan");
const f = require("../utils/Formatter");
const gsheet = require("../service/gsheet")

module.exports = class BotController extends Controller {


    async introduction(request) {
      return Response.menu.fromArrayOfString(
        [
          f("menu.daftarProduk"),
          f("menu.alamatKantor"),
          f("menu.omzet"),
          f("menu.all")
        ],
        f("intro", [request.name]),
        f("template.menu")
      );
    }

    async product(request) {
     const responseStr = await gsheet.getData(request.number)
     await this.reply(f("headeraplikasi"))
     return this.reply(responseStr)
      
    }

    async alamatKantor(request) {
      await this.reply("Alamat kantor kami ada di Jakarta")
      return f("footer")
    }

    async hello(request){
      return this.reply(`selamat datang di bot kami ${request.name}  ada yg bisa kami bantu`)
    }

    async omset(request) {
      return this.reply("belum ada isine ")
    }

    async all_menu(request) {
      return this.reply("belum ada isine juga")
    }


}