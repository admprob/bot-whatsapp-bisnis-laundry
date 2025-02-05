const { Router, Response } = require("pepesan");
const BotController = require("./controller/BotController");
const f = require("./utils/Formatter");

const router = new Router();

router.menu(f("menu.daftarProduk"), [BotController, "product"]);
router.menu(f("menu.alamatKantor"), [BotController, "alamatKantor"]);
router.menu(f("menu.omzet"), [BotController, "omset"]);
router.menu(f("menu.all"), [BotController, "all_menu"]);
router.keyword("menu", [BotController, "introduction"]);
router.keyword("*", [BotController, "hello"]);

module.exports = router;