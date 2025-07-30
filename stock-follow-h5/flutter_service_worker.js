'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "716d6497783f7a51b1e4eeeeabf44032",
"version.json": "5e9523f5ea03908eb985b0ffe28628d3",
"index.html": "7d48292a0b74e7bcf69db36ca0afb770",
"/": "7d48292a0b74e7bcf69db36ca0afb770",
"main.dart.js": "67f42b94543c0cfd6ccdf818c722fa54",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "2343da4ad6263afd6834483b03657212",
"assets/AssetManifest.json": "dc451e23c644bbce755a077bd957289e",
"assets/NOTICES": "f89fa09736e6acbb9fe3ea319d4c456b",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "c708c766ea98ba83f4fd5b53931ef73b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "509ae636cfdd93e49b5a6eaf0f06d79f",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "a8750507c4733303a3d1b7410aefd042",
"assets/fonts/MaterialIcons-Regular.otf": "8128e24dac3e33f0efb42e8ae8d79b5a",
"assets/assets/images/user/email.png": "b69ea489e013151578543105ef9ef99f",
"assets/assets/images/user/border.png": "28568d2d2652b5374e7982e7126371b1",
"assets/assets/images/user/correct.png": "d93796f56ff5a75e190cbacb06fc508e",
"assets/assets/images/user/account.png": "6227e32fa632e20041c1876bcd5f854e",
"assets/assets/images/user/face.png": "2e03861188a80738eddd07f61290d7e3",
"assets/assets/images/user/invite.png": "9a2272a723db912c9dc092b1b5d5f322",
"assets/assets/images/user/email_type.png": "30ebee6bf7785d7176622bf1303ccdff",
"assets/assets/images/user/password.png": "1af2a465692fe7111844b3f3637906f6",
"assets/assets/images/user/error.png": "e8704872e633f34690fe66ef88b3ff82",
"assets/assets/images/user/logo.png": "dc75692abbae2488c233237a574dd84d",
"assets/assets/images/user/phone.png": "1addfd59a6163c36ff9da5c120906d71",
"assets/assets/images/user/open.png": "a51c29946c2a41d26b478c69d468bb3b",
"assets/assets/images/user/phone_type.png": "b671927852db0a0d9b1a65b62681bb29",
"assets/assets/images/user/account_type.png": "5d83086e55a075e0378195dddae6b1e1",
"assets/assets/images/user/close.png": "3d3ef65c52d88da69536937288d7c0c0",
"assets/assets/images/main/add.png": "e52e8fe0c8755d940c4eec1b65fe63e7",
"assets/assets/images/main/border.png": "7e46a48a63b8d05c441592a4b4cbb170",
"assets/assets/images/main/home/record.png": "940d2629e78be37a94edb066536d9ad7",
"assets/assets/images/main/home/teacher.png": "c3066727040fc23074fc9a0798f6ee74",
"assets/assets/images/main/home/wallet.png": "a73e10c163a6c7f1276daf974435748d",
"assets/assets/images/main/home/follow.png": "e0a76145342e4ea88f33d936ef48e31c",
"assets/assets/images/main/home/service.png": "18b0e8c6b6e74f80c6cf4007736c2bfb",
"assets/assets/images/main/home/open_s.png": "e4d590bcf4756ace8f46a3dafdb04ec5",
"assets/assets/images/main/home/agency.png": "a14460120e9f8cdff04ce95c84ecccdb",
"assets/assets/images/main/home/invite.png": "1224506c0b96b2e347dc1310f291e69a",
"assets/assets/images/main/home/more_s.png": "431688d1cfa53d76bbb08aae2ce522db",
"assets/assets/images/main/home/help.png": "3df03b0ef37685b6ef59df069fb52436",
"assets/assets/images/main/home/welfare.png": "bfa11f5655670aa12c4f1bb4054d6024",
"assets/assets/images/main/home/open.png": "dd43b213c57833367c9e4878d72ee5f8",
"assets/assets/images/main/home/market.png": "946f16a4870fc4bf444cf1bce8ded614",
"assets/assets/images/main/home/security.png": "0f1dca9e4c8aa3359a6c36d0979b6525",
"assets/assets/images/main/home/message.png": "66814734cbf8a9d7b6420b8715c63a31",
"assets/assets/images/main/angle.png": "d1901a87345475dea568a2df5062453a",
"assets/assets/images/main/up.png": "2cf1d10723b80aa4c47e651094c1c9bc",
"assets/assets/images/main/down_s.png": "7808a62b2ac3520a4da267564cfd4a5e",
"assets/assets/images/main/follow/info.png": "62a024ada82d6afd22233dae1bc163cf",
"assets/assets/images/main/follow/record.png": "14fa480648c0122206895b9436a85991",
"assets/assets/images/main/follow/cube.png": "1acf629d4555b97be5cd2dfd99957d56",
"assets/assets/images/main/follow/teacher.png": "fd828be958cc697fe28e5d5f201ee12e",
"assets/assets/images/main/follow/time.png": "8aa5f1438b8e80596dc9106149451900",
"assets/assets/images/main/follow/title.png": "25a37313572c3c9eaaaa9a1bd3ca45bd",
"assets/assets/images/main/follow/pocket.png": "4b271a36ded48601c250fa39ad58edd7",
"assets/assets/images/main/follow/following.png": "76012497f4b5a12ec234c0a4f87684e8",
"assets/assets/images/main/follow/lock.png": "10c6edecc8f7b245f39a74d0594ae777",
"assets/assets/images/main/follow/up.png": "16013522b039888fde4d5b14291ecef5",
"assets/assets/images/main/follow/change.png": "23ab4ec12585d7e98272ad936566ab1a",
"assets/assets/images/main/follow/tag.png": "8d885d33fcdc15962e8b3e4d876ae016",
"assets/assets/images/main/follow/detail_bg.png": "66bd1eaeaf2a44ac2f7f95b2a4e3f609",
"assets/assets/images/main/follow/person.png": "a90bf186a5fe92dfd0bb2248ff2fdb0e",
"assets/assets/images/main/follow/delay.png": "afcb27d92e48995271ab49cab5eafb93",
"assets/assets/images/main/follow/enddes.png": "fc7313375f00b3d40e61e22fda6b9d7d",
"assets/assets/images/main/follow/teacher_bg.png": "83916ebe875ddc00b1b3fc21b5952d0b",
"assets/assets/images/main/follow/end.png": "fd97494f676f21831b860b8b6271f9a5",
"assets/assets/images/main/follow/selected.png": "d32b3716c94b1a4455944fc5396d914f",
"assets/assets/images/main/follow/one_bg.png": "c231e8dbda3050ac714424d67ecd966c",
"assets/assets/images/main/follow/state.png": "2b422dbd235ac492ac288c041483d278",
"assets/assets/images/main/follow/date.png": "54f5e7f85d7a1a29047b10dee3705d2e",
"assets/assets/images/main/follow/success.png": "ed4f739a172f8dc94a35c52c60dd39e1",
"assets/assets/images/main/follow/appbar_bg.png": "89539dd050bb9ce92a541cc13b7e220b",
"assets/assets/images/main/follow/mark.png": "50316395dbd87bc6ae1ef0ce98c14878",
"assets/assets/images/main/follow/notice.png": "82c18011a064880733b4ca723088b0ee",
"assets/assets/images/main/follow/warn.png": "fb7939f5566444bb1876c73148dd2fa6",
"assets/assets/images/main/follow/tip.png": "36bd418da4b5e561f9e2cd9ec73078a7",
"assets/assets/images/main/follow/fail.png": "2353a7ad128bab1d57876e704eb9508f",
"assets/assets/images/main/follow/right.png": "12ae3b983526d9705f5e7a6954fe87fd",
"assets/assets/images/main/follow/info_bg.png": "a94389c71950cc72f0b72c7633fa0c03",
"assets/assets/images/main/follow/detail_info_bg.png": "7e2db50aadf1ba5e45bc9ae565807714",
"assets/assets/images/main/down.png": "08cc24019c18f5dbd202c16ad8555415",
"assets/assets/images/main/tabbar/position.png": "e3c645c4013d661421bc8e83de24bd44",
"assets/assets/images/main/tabbar/home.png": "1b55fb779cd14f339a0a7b5e6221c754",
"assets/assets/images/main/tabbar/market.png": "d468649b692d3d895b11a3ac91943ef8",
"assets/assets/images/main/tabbar/assets.png": "46fa012b22573101fac95876823b9a8a",
"assets/assets/images/main/border_sel.png": "410623d18cb9623bb145676969ee5e05",
"assets/assets/images/main/liked.png": "61073d0887f5403ef8f7b88443028ded",
"assets/assets/images/main/like.png": "80842e94c976f43a054df35424d39af2",
"assets/assets/images/main/selected.png": "9060ff0a0d1baefbbbe33190eac0941b",
"assets/assets/images/main/search.png": "4a0d6897d5a82a124d99e07ffeb020fb",
"assets/assets/images/main/search/nodata.png": "a800434f6da93fe0580d473fb9cef1b9",
"assets/assets/images/main/search/rank.png": "466417b211eae4fd1d4ed5a122fdd8fb",
"assets/assets/images/main/search/hot.png": "2bc52c302dfbca47c3da2501073318c7",
"assets/assets/images/main/nodata.png": "44d0a4a57a3337521dd15a47b6fe8473",
"assets/assets/images/main/dialog.png": "43ce67b50403c4348c0e0cf92746db8f",
"assets/assets/images/main/tips.png": "9a84918f9978027ada469327f7e5bace",
"assets/assets/images/main/share.png": "86cbf014f4083ed565051606f068f373",
"assets/assets/images/main/success.png": "5c5160d2fca1e81015d02df3a69c726f",
"assets/assets/images/main/delete.png": "df51a64b699e1da0a0af54f88ab6f395",
"assets/assets/images/main/market/empty.png": "2e87b3e737edcad77b110f7e3aad408f",
"assets/assets/images/main/market/fix.png": "d305e026c2c6330ac817ec8ab27e2a1a",
"assets/assets/images/main/market/delete.png": "40ff4fe76fd5dce0b64586340d4078b1",
"assets/assets/images/main/assets/add.png": "7f19429322bfe70db9cf32996cbdde37",
"assets/assets/images/main/assets/team.png": "f274aa3bd7884cb2cdfb03ccd60d6cd6",
"assets/assets/images/main/assets/card.png": "3e02e3abab43a052ea997582bf701a25",
"assets/assets/images/main/assets/warning.png": "9a2a94c46db5cd210d203e6c2f2ed295",
"assets/assets/images/main/assets/plus.png": "dd152f74f433fd2ff533bee396fe8562",
"assets/assets/images/main/assets/sets.png": "24bcd3fd633c753ddf92842289143e57",
"assets/assets/images/main/assets/border.png": "84c3c493460080dd7e04aec7eb545f66",
"assets/assets/images/main/assets/record.png": "35445ca19d94caad13ff557c54001301",
"assets/assets/images/main/assets/correct.png": "43ab704c872eb057afafe212d0d84d0b",
"assets/assets/images/main/assets/copy_s.png": "e585cf4424f5d67508c099e243f65c90",
"assets/assets/images/main/assets/wallet.png": "1ae500817bb50f78ee020ce0026e6726",
"assets/assets/images/main/assets/agency_help.png": "57cac4961bd382d67b90a8fd973986cc",
"assets/assets/images/main/assets/type.png": "d855370cf0cfe21d9f674a66b086b130",
"assets/assets/images/main/assets/cashin.png": "d2f39525204917ade7215ec73a023315",
"assets/assets/images/main/assets/card_front.png": "b72e85a0e060941f59315fa6170657c4",
"assets/assets/images/main/assets/id_card.png": "77957ee77a509147923490352b9f800d",
"assets/assets/images/main/assets/follow.png": "171105ed06ee6ccd95d9e63d15fb0f24",
"assets/assets/images/main/assets/service.png": "2253e18a752525f3854a41d456526696",
"assets/assets/images/main/assets/agency_percent.png": "613baf5af06b9ec199d0fd151b370853",
"assets/assets/images/main/assets/gou_red.png": "e399b3f86ce2147a4538f0c06bb56758",
"assets/assets/images/main/assets/card_hold.png": "0375bfd879516a9ff3c44885a1603959",
"assets/assets/images/main/assets/down.png": "97a5a6cb974aa8f6d5a0cab0d7dd407c",
"assets/assets/images/main/assets/blur.png": "d1d481d762b174e2f7c33a393f31ca12",
"assets/assets/images/main/assets/agency/record.png": "200e8be410cad3c6204a51bc3670a5cf",
"assets/assets/images/main/assets/agency/code.png": "26d94e32dab0f67631f97ecfb080faa5",
"assets/assets/images/main/assets/agency/des.png": "3780ac340a34386c7513aa4ea61f0857",
"assets/assets/images/main/assets/agency/ratio.png": "f7d1cd3840d38edf082ac0f0dd2a65b0",
"assets/assets/images/main/assets/agency/date.png": "fa3f2caa4002fda0cf9ecb0fc08c6091",
"assets/assets/images/main/assets/agency/double_right.png": "c118a6f17bacde9fc092dab455e7c253",
"assets/assets/images/main/assets/agency/vip_2.png": "f368142ed0764d100b565f608fc9d797",
"assets/assets/images/main/assets/agency/grey_bg.png": "aaf784bd94eb3710f138b7a43191d097",
"assets/assets/images/main/assets/agency/vip_3.png": "0af55798aa7b86450df224bbb9744bfc",
"assets/assets/images/main/assets/agency/vip_1.png": "885782a90c185aff66192a7463d81508",
"assets/assets/images/main/assets/agency/vip_bg.png": "45edc9cba2f699b85ffca0df86805b37",
"assets/assets/images/main/assets/agency/updown.png": "9ca793a58c0c5015b1f8e2329cef3b98",
"assets/assets/images/main/assets/agency/condition.png": "598bcd74a4b11e5fd94bcc33f3f44793",
"assets/assets/images/main/assets/agency/vip_4.png": "d84fa4a0703bed05201a6d6b0d7b9c39",
"assets/assets/images/main/assets/agency/vip_5.png": "9a8d26493400c4dc62eb0aabdbbb43f9",
"assets/assets/images/main/assets/agency/right.png": "81078d8d9248033fbf0126f0999f33ac",
"assets/assets/images/main/assets/person.png": "0f49d893562f3315246da703ef467768",
"assets/assets/images/main/assets/agency_record.png": "84ba9e2330007b9895d1d578bcef16e3",
"assets/assets/images/main/assets/incomplete.png": "e386203143ad616a3d44f0600857b7ff",
"assets/assets/images/main/assets/agency.png": "4a30782dd67f46d3d535654521c8ba18",
"assets/assets/images/main/assets/sheet.png": "255fcc96194df780919221ab669fac17",
"assets/assets/images/main/assets/gou.png": "9cc1711894892e3ded8c6ae0c4fb76dd",
"assets/assets/images/main/assets/passport.png": "7572321b3cfad2d132e04832eea61e13",
"assets/assets/images/main/assets/disabled.png": "e938f804f12744f11abf02b207af3476",
"assets/assets/images/main/assets/tag5.png": "1d34f4cd40c0f039b0970064bd350181",
"assets/assets/images/main/assets/nodata.png": "e04bbae7a9d58ff10f972c4231c17e02",
"assets/assets/images/main/assets/minus.png": "df3d7d6877d32912d9dfd90cb838ee67",
"assets/assets/images/main/assets/tag4.png": "3b2bc5e039eb861b8936c51a3f6ecca7",
"assets/assets/images/main/assets/avatar.png": "ae5fe7bfe2addfcef23b13d7566f3c64",
"assets/assets/images/main/assets/vip1.png": "6bd7a3b9886e46830c295a1ac1f1eead",
"assets/assets/images/main/assets/vip3.png": "1d9ee70310bf161ddd6eca767625a981",
"assets/assets/images/main/assets/tag6.png": "f4d54d958f29b19e74839ab3a5570451",
"assets/assets/images/main/assets/agency_bg.png": "d46c6b079bd36220c4cf3aaa2d2261b4",
"assets/assets/images/main/assets/help.png": "9d9c542c7d6b3445f403e7cc885542dc",
"assets/assets/images/main/assets/error.png": "dfcb6d1c270da6e2a718ec9d031537a5",
"assets/assets/images/main/assets/vip2.png": "c353e0fd1b961c31b65d8634602432dc",
"assets/assets/images/main/assets/reflective.png": "74f5f58b13d9e39e5d987c6ee91d159a",
"assets/assets/images/main/assets/tag3.png": "53dfa4ce9a7520d9b65e6c30ba9c2855",
"assets/assets/images/main/assets/color.png": "d365416d8798fcd1b51401c533977849",
"assets/assets/images/main/assets/active_bg.png": "f312397bc80af57d20154944e5a4f4fa",
"assets/assets/images/main/assets/tag2.png": "22d39ed49e8136cf22d82a57a842e7f5",
"assets/assets/images/main/assets/vip5.png": "1aaf2d9320ef10055c8aa51c39e00547",
"assets/assets/images/main/assets/help_s.png": "57cac4961bd382d67b90a8fd973986cc",
"assets/assets/images/main/assets/tag0.png": "7c13fd5fcee165b9b9cce9d109f3f313",
"assets/assets/images/main/assets/team_bg.png": "edb506a550649654b328589c6f4f3c96",
"assets/assets/images/main/assets/success.png": "fe77784631d16afe992711b8a7b4cafc",
"assets/assets/images/main/assets/condition_bg.png": "84b60ffbd2e8a82260010adf50dc6e6c",
"assets/assets/images/main/assets/tag1.png": "ba829e0e17706da622c1f5429f65199f",
"assets/assets/images/main/assets/vip4.png": "8ede27a49eb27f235b16256034e62995",
"assets/assets/images/main/assets/vip_s.png": "c737f23263ddc92ac5a025ab1951178d",
"assets/assets/images/main/assets/vip.png": "0c882dba3965aaabd25507b60ab3e65c",
"assets/assets/images/main/assets/cash.png": "e5b9cb46c6925650891a530768ee2686",
"assets/assets/images/main/assets/edit.png": "6801989f9d7e45c4bf9afb1c93ef19cd",
"assets/assets/images/main/assets/service_r.png": "59c3a85ac4e08dbe8298728377d30ef0",
"assets/assets/images/main/assets/about.png": "63e24c3cefb003a0bc0ede67f0add924",
"assets/assets/images/main/assets/agency_des.png": "81b799c529c7bf303d0c2c8e16b6ba98",
"assets/assets/images/main/assets/record_item.png": "4e00f119d99a084d4d9bb3a6b5226597",
"assets/assets/images/main/assets/des_bg.png": "bb7a00ae9b4da42c226eada20cf1ea6b",
"assets/assets/images/main/assets/service_s.png": "44f1c766606a941dbf2d6b3afc8a8814",
"assets/assets/images/main/assets/security.png": "59d5a7cf9950a79992d40a2504fd2d2a",
"assets/assets/images/main/assets/feedback.png": "e8393c4020addbce0dac4fd596a84cd8",
"assets/assets/images/main/assets/agency_condition.png": "f0888f8b60267212c79c20e8b0d391b5",
"assets/assets/images/main/assets/cashout.png": "d7d419ca819d8b46e7aeb42e92b9f236",
"assets/assets/images/main/assets/unionpay.png": "2dc897b4850a875589776c465664264e",
"assets/assets/images/main/assets/record_bg.png": "da97eac257e631b884a6571f583c83db",
"assets/assets/images/main/assets/trade.png": "c71db155546db861a9a53222ad4912d6",
"assets/assets/images/main/assets/message.png": "b9162f702fb85318b522960a0733fbf2",
"assets/assets/images/main/assets/nocash.png": "5403dbba83014d148b0c16ac70a1b5f6",
"assets/assets/images/main/assets/card_back.png": "3c83873c597382773c11208b91ba0595",
"assets/assets/images/main/assets/copy.png": "1b6497bf8c9ca10510cc23da87a4212c",
"assets/assets/images/main/assets/bg.png": "68bfbcf18d420be0bd28f3cc2b2b89d9",
"assets/assets/images/main/assets/percent_bg.png": "d7fd14b9db923e72dcbd53cd520172f4",
"assets/assets/images/main/assets/finance.png": "e272215c8cd73bd66235bb133659f536",
"assets/assets/images/main/assets/assets.png": "ddfe3bdbb88ed6a8601e1ae5c4e878bd",
"assets/assets/images/main/assets/invite_bg.png": "fc05a3fa62cbce1dc8d85d94f13bb3fb",
"assets/assets/images/main/right.png": "ad42bbd0cb9e889c68d26d843d7438ec",
"assets/assets/images/main/copy.png": "4a5fa3676c5fc34ff7533630b30a3b4f",
"assets/assets/images/main/close.png": "50168d3a36fe38934cf0b11c8bb7fe15",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
