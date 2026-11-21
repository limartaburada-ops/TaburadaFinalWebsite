'use strict';

/**
 * Ember & Leaf - Artisanal Coffee & Tea House
 * Pure Vanilla JavaScript Storefront Engine
 */

(function () {
  const STORAGE_KEY = 'ember_leaf_cart_v2';

  /** @type {Array<{id:string, name:string, group:'coffee'|'tea', category:string, categoryLabel:string, price:number, image:string, desc:string, notes:string, defaultTemp:string, bestSeller?:boolean, fx:string[]}>} */
  const PRODUCTS = [
    // ==================== 20 COFFEE CREATIONS ====================
    {
      id: 'classic-espresso',
      name: 'Classic Espresso',
      group: 'coffee',
      category: 'hot-coffee',
      categoryLabel: 'Hot Coffee · Single Origin',
      price: 115,
      image: 'img/coffee-classic-espresso.jpg',
      desc: 'Pulled double shot with thick hazelnut crema in a petite 3oz cylindrical 24k gold-trimmed black Limoges Italian demitasse cup on matching saucer and hammered gold charger.',
      notes: 'Single-origin Arabica · 9-bar velvety crema · Baroque gold demitasse spoon & bean dish',
      defaultTemp: 'Hot',
      fx: ['steam', 'coffee-dust'],
    },
    {
      id: 'americano',
      name: 'Americano',
      group: 'coffee',
      category: 'hot-coffee',
      categoryLabel: 'Hot Coffee · Classic Black',
      price: 125,
      image: 'img/coffee-americano.jpg',
      desc: 'Freshly extracted double espresso poured over steaming spring water in a 24k gold-rimmed faceted Baccarat crystal mug on double gilded plates.',
      notes: 'Double espresso · Crisp toasted almond notes · Gilded filigree saucer & baroque gold spoon',
      defaultTemp: 'Hot',
      fx: ['steam', 'ripple'],
    },
    {
      id: 'cappuccino',
      name: 'Cappuccino',
      group: 'coffee',
      category: 'hot-coffee',
      categoryLabel: 'Hot Coffee · Velvet Microfoam',
      price: 145,
      image: 'img/coffee-cappuccino.jpg',
      desc: 'Bold espresso, steamed milk, and cloud-thick microfoam dusted with dark cocoa in gold-trimmed Royal porcelain on a black-and-gold filigree saucer.',
      notes: 'Double shot · Dutch cocoa dusting · Marble-and-brass tray & baroque gold spoon',
      defaultTemp: 'Hot',
      fx: ['steam', 'cocoa'],
    },
    {
      id: 'cafe-latte',
      name: 'Cafe Latte',
      group: 'coffee',
      category: 'hot-coffee',
      categoryLabel: 'Hot Coffee · Milk Craft',
      price: 145,
      image: 'img/coffee-cafe-latte.jpg',
      desc: 'Silky micro-steamed milk poured over smooth espresso with crisp rosetta art in 24k gold-filigree black Limoges porcelain and double gilded plates.',
      notes: 'Velvety texture · Naturally sweet steamed milk · Baroque gold spoon & almond biscotti plate',
      defaultTemp: 'Hot',
      fx: ['steam', 'milk'],
    },
    {
      id: 'vanilla-latte',
      name: 'Vanilla Latte',
      group: 'coffee',
      category: 'hot-coffee',
      categoryLabel: 'Hot Coffee · Aromatic',
      price: 155,
      image: 'img/coffee-vanilla-latte.jpg',
      desc: 'Creamy espresso latte infused with fragrant Madagascar vanilla pods in a 24k gold-rimmed fluted crystal cup on gilded double charger plates.',
      notes: 'Madagascar vanilla bean infusion · Silky rosetta foam · Baroque gold spoon & vanilla pod dish',
      defaultTemp: 'Hot',
      fx: ['steam', 'milk'],
    },
    {
      id: 'caramel-macchiato',
      name: 'Caramel Macchiato',
      group: 'coffee',
      category: 'hot-coffee',
      categoryLabel: 'Hot Coffee · House Favorite',
      price: 165,
      image: 'img/coffee-caramel-macchiato.jpg',
      desc: 'Layered steamed milk marked with rich espresso and crosshatched amber caramel drizzle in a clear footed 24k gold-rimmed crystal macchiato glass mug with handle on gilded double plates.',
      notes: 'Vanilla-kissed milk · Slow-cooked caramel · Baroque gold spoon & sea-salt caramel plate',
      defaultTemp: 'Hot',
      bestSeller: true,
      fx: ['steam', 'caramel', 'milk'],
    },
    {
      id: 'mocha',
      name: 'Mocha',
      group: 'coffee',
      category: 'hot-coffee',
      categoryLabel: 'Hot Coffee · Chocolate Roast',
      price: 160,
      image: 'img/coffee-mocha.jpg',
      desc: 'Bittersweet dark chocolate ganache melted into hot espresso with cocoa curls in a 24k gold-filigree black Limoges cup on gilded double plates.',
      notes: '70% dark chocolate ganache · Double espresso · Baroque gold spoon & truffle side plate',
      defaultTemp: 'Hot',
      fx: ['steam', 'chocolate', 'cocoa'],
    },
    {
      id: 'white-chocolate-mocha',
      name: 'White Chocolate Mocha',
      group: 'coffee',
      category: 'hot-coffee',
      categoryLabel: 'Hot Coffee · Indulgent',
      price: 165,
      image: 'img/coffee-white-chocolate-mocha.jpg',
      desc: 'Creamy ivory cocoa butter melted into rich espresso and white chocolate curls in ivory-and-24k-gold Limoges porcelain on double gilded plates.',
      notes: 'Artisanal cocoa butter white chocolate · Espresso base · Baroque spoon & chocolate curl plate',
      defaultTemp: 'Hot',
      fx: ['steam', 'milk'],
    },
    {
      id: 'hazelnut-coffee',
      name: 'Hazelnut Coffee',
      group: 'coffee',
      category: 'hot-coffee',
      categoryLabel: 'Hot Coffee · Nutty Roast',
      price: 155,
      image: 'img/coffee-hazelnut-coffee.jpg',
      desc: 'Warm espresso blended with Piedmont hazelnut praline and crushed hazelnuts in chestnut-and-24k-gold Limoges porcelain on double gilded plates.',
      notes: 'Roasted hazelnut praline · Golden crema · Baroque gold spoon & roasted hazelnut dish',
      defaultTemp: 'Hot',
      fx: ['steam', 'coffee-dust'],
    },
    {
      id: 'french-vanilla-coffee',
      name: 'French Vanilla Coffee',
      group: 'coffee',
      category: 'hot-coffee',
      categoryLabel: 'Hot Coffee · Custard Cream',
      price: 155,
      image: 'img/coffee-french-vanilla-coffee.jpg',
      desc: 'Custard-style French vanilla cream swirled into fresh espresso crema in heirloom gold-filigree Royal porcelain on dark slate.',
      notes: 'Rich vanilla bean custard notes · Whole vanilla pod · Baroque 24k gold spoon',
      defaultTemp: 'Hot',
      fx: ['steam', 'milk'],
    },
    {
      id: 'spanish-latte',
      name: 'Spanish Latte',
      group: 'coffee',
      category: 'hot-coffee',
      categoryLabel: 'Hot Coffee · Signature Sweet',
      price: 160,
      image: 'img/coffee-spanish-latte.jpg',
      desc: 'Bold espresso layered over sweet condensed milk and cinnamon foam inside a 24k gold-filigree cut-crystal glass on a hammered gold charger plate.',
      notes: 'Sweetened condensed milk base · Warm cinnamon crema · Baroque gold spoon & crystal spice bowl',
      defaultTemp: 'Hot',
      bestSeller: true,
      fx: ['steam', 'milk', 'coffee-dust'],
    },
    {
      id: 'salted-caramel-latte',
      name: 'Salted Caramel Latte',
      group: 'coffee',
      category: 'hot-coffee',
      categoryLabel: 'Hot Coffee · Sweet & Savory',
      price: 170,
      image: 'img/coffee-salted-caramel-latte.jpg',
      desc: 'Warm butterscotch caramel latte crowned with sea salt flakes in 24k gold-encrusted espresso porcelain on gilded double charger plates.',
      notes: 'House salted caramel · Flaky sea salt · Baroque gold spoon & sea-salt caramel plate',
      defaultTemp: 'Hot',
      fx: ['steam', 'caramel'],
    },
    {
      id: 'iced-coffee',
      name: 'Iced Coffee',
      group: 'coffee',
      category: 'iced-coffee',
      categoryLabel: 'Iced Coffee · Classic',
      price: 135,
      image: 'img/coffee-iced-coffee.jpg',
      desc: 'Flash-chilled dark roast over crystal ice with cascading cream in a tall 24k gold-rimmed cut-crystal Collins highball glass on gilded double plates.',
      notes: 'Chilled dark roast · Cascading fresh cream · Brushed gold straw & baroque spoon',
      defaultTemp: 'Iced',
      fx: ['iced', 'milk', 'ripple'],
    },
    {
      id: 'cold-brew',
      name: 'Cold Brew',
      group: 'coffee',
      category: 'iced-coffee',
      categoryLabel: 'Iced Coffee · 18-Hour Steep',
      price: 145,
      image: 'img/coffee-cold-brew.jpg',
      desc: 'Slow-steeped 18 hours and poured over a crystal ice sphere in a heavy cut-crystal rocks glass on a gold-rimmed marble plate with a hammered brass spoon.',
      notes: '18-hour cold extraction · Crystal ice sphere · Walnut tray & brass spoon',
      defaultTemp: 'Iced',
      fx: ['iced', 'ripple'],
    },
    {
      id: 'iced-americano',
      name: 'Iced Americano',
      group: 'coffee',
      category: 'iced-coffee',
      categoryLabel: 'Iced Coffee · Crisp & Bold',
      price: 130,
      image: 'img/coffee-iced-americano.jpg',
      desc: 'Deep mahogany double espresso poured over hand-carved crystal ice in a brass-rimmed cut-crystal rocks tumbler, crowned with golden crema and fresh orange peel.',
      notes: 'Bold double espresso · Crystal ice · Brushed brass rim & bright orange zest',
      defaultTemp: 'Iced',
      fx: ['iced', 'ripple'],
    },
    {
      id: 'iced-caramel-latte',
      name: 'Iced Caramel Latte',
      group: 'coffee',
      category: 'iced-coffee',
      categoryLabel: 'Iced Coffee · Layered',
      price: 165,
      image: 'img/coffee-iced-caramel-latte.jpg',
      desc: 'Chilled milk and espresso swirled with golden caramel and whipped cream in a tall 24k gold-rimmed fluted crystal highball glass on gilded double plates.',
      notes: 'Golden caramel drizzle · Whipped cream crown · Brushed gold straw, baroque spoon & caramel plate',
      defaultTemp: 'Iced',
      fx: ['iced', 'caramel', 'milk'],
    },
    {
      id: 'iced-mocha',
      name: 'Iced Mocha',
      group: 'coffee',
      category: 'iced-coffee',
      categoryLabel: 'Iced Coffee · Best Seller',
      price: 165,
      image: 'img/coffee-iced-mocha.jpg',
      desc: 'Dark chocolate ganache ribbons, chilled espresso, whipped cream, and chocolate curls in a tall 24k gold-rimmed faceted cut-crystal Collins glass on double gilded plates.',
      notes: 'Dark chocolate ganache · Cocoa & curls · Brushed gold straw, baroque spoon & truffle dish',
      defaultTemp: 'Iced',
      bestSeller: true,
      fx: ['iced', 'chocolate', 'cocoa'],
    },
    {
      id: 'vietnamese-coffee',
      name: 'Vietnamese Coffee',
      group: 'coffee',
      category: 'iced-coffee',
      categoryLabel: 'Iced Coffee · Phin Brewed',
      price: 155,
      image: 'img/coffee-vietnamese-coffee.jpg',
      desc: 'Slow-dripped dark roast through a 24k gold-filigree phin filter onto sweet condensed milk in a gold-rimmed crystal rocks glass on double gilded plates.',
      notes: 'Gold-filigree phin drip · Sweet condensed milk · Scalloped Limoges saucer & baroque spoon',
      defaultTemp: 'Iced',
      fx: ['iced', 'milk', 'coffee-dust'],
    },
    {
      id: 'dalgona-coffee',
      name: 'Dalgona Coffee',
      group: 'coffee',
      category: 'iced-coffee',
      categoryLabel: 'Iced Coffee · Whipped Cloud',
      price: 160,
      image: 'img/coffee-dalgona-coffee.jpg',
      desc: 'Chilled milk crowned with sculpted golden whipped coffee cloud and cocoa in a tall ribbed 24k gold-rimmed crystal iced tumbler on gilded double plates.',
      notes: 'Velvet whipped coffee cloud · Chilled fresh milk · Brushed gold straw, spoon & chocolate curl dish',
      defaultTemp: 'Iced',
      fx: ['iced', 'coffee-dust', 'milk'],
    },
    {
      id: 'matcha-espresso-fusion',
      name: 'Matcha Espresso Fusion',
      group: 'coffee',
      category: 'iced-coffee',
      categoryLabel: 'Iced Coffee · Dual Craft',
      price: 180,
      image: 'img/coffee-matcha-espresso-fusion.jpg',
      desc: 'Three clean tiers of emerald Uji matcha, chilled milk, and dark espresso in a 24k gold-rimmed fluted crystal glass on double gilded plates.',
      notes: 'Ceremonial Uji matcha · Double espresso contrast · Engraved gold straw & baroque spoon',
      defaultTemp: 'Iced',
      fx: ['iced', 'matcha', 'milk'],
    },

    // ==================== 20 TEA CREATIONS ====================
    {
      id: 'classic-black-tea',
      name: 'Classic Black Tea',
      group: 'tea',
      category: 'brewed-tea',
      categoryLabel: 'Brewed Tea · Whole Leaf',
      price: 115,
      image: 'img/tea-classic-black-tea.jpg',
      desc: 'Full-bodied Assam and Ceylon black tea leaves steeped to a luminous copper-amber brew in gold-filigree bone china.',
      notes: 'Whole orthodox leaves · Malty brisk finish · Zero bitterness',
      defaultTemp: 'Hot',
      fx: ['steam', 'leaves'],
    },
    {
      id: 'english-breakfast-tea',
      name: 'English Breakfast Tea',
      group: 'tea',
      category: 'brewed-tea',
      categoryLabel: 'Brewed Tea · Morning Classic',
      price: 120,
      image: 'img/tea-english-breakfast-tea.jpg',
      desc: 'Robust mahogany black tea swirled with cream in ivory-and-24k-gold Royal Limoges porcelain beside a gilded teapot and crystal creamer.',
      notes: 'Rich malty body · Double gilded charger plates · Baroque 24k gold spoon',
      defaultTemp: 'Hot',
      fx: ['steam', 'milk', 'leaves'],
    },
    {
      id: 'earl-grey-tea',
      name: 'Earl Grey Tea',
      group: 'tea',
      category: 'brewed-tea',
      categoryLabel: 'Brewed Tea · Citrus Bergamot',
      price: 130,
      image: 'img/tea-earl-grey-tea.jpg',
      desc: 'Fragrant black tea with fresh bergamot citrus and blue cornflower petals in obsidian-and-24k-gold Limoges porcelain on double gilded plates.',
      notes: 'Calabrian bergamot citrus · Cornflower botanicals · Baroque gold spoon & citrus side dish',
      defaultTemp: 'Hot',
      fx: ['steam', 'leaves'],
    },
    {
      id: 'green-tea',
      name: 'Green Tea',
      group: 'tea',
      category: 'brewed-tea',
      categoryLabel: 'Brewed Tea · Steamed Leaf',
      price: 120,
      image: 'img/tea-green-tea.jpg',
      desc: 'Luminous jade infusion steeped at 78°C in 24k gold-filigree celadon Limoges porcelain on a hammered gold charger with brass tea strainer.',
      notes: 'First-flush green leaves · Delicate umami · Gold spoon & gilded tea leaf dish',
      defaultTemp: 'Hot',
      fx: ['steam', 'leaves', 'ripple'],
    },
    {
      id: 'jasmine-green-tea',
      name: 'Jasmine Green Tea',
      group: 'tea',
      category: 'brewed-tea',
      categoryLabel: 'Brewed Tea · Floral',
      price: 130,
      image: 'img/tea-jasmine-green-tea.jpg',
      desc: 'Silky green tea with floating white jasmine blossoms in a 24k gold-rimmed faceted Baccarat crystal cup on gilded double charger plates.',
      notes: 'Whole white jasmine blossoms · Pale golden liquor · Baroque gold spoon & blossom dish',
      defaultTemp: 'Hot',
      fx: ['steam', 'leaves'],
    },
    {
      id: 'matcha-latte',
      name: 'Matcha Latte',
      group: 'tea',
      category: 'milk-tea',
      categoryLabel: 'Matcha Bar · Ceremonial',
      price: 165,
      image: 'img/tea-matcha-latte.jpg',
      desc: 'Stone-milled Uji matcha whisked with rosetta microfoam in a 24k gold kintsugi chawan bowl on a gilded filigree plate inside a walnut-and-brass tray.',
      notes: 'First-harvest Uji matcha · Hand-carved bamboo chasen · Baroque gold spoon & powder dish',
      defaultTemp: 'Hot',
      bestSeller: true,
      fx: ['steam', 'matcha', 'milk'],
    },
    {
      id: 'strawberry-matcha',
      name: 'Strawberry Matcha',
      group: 'tea',
      category: 'milk-tea',
      categoryLabel: 'Matcha Bar · House Favorite',
      price: 175,
      image: 'img/tea-strawberry-matcha.jpg',
      desc: 'House-macerated ruby strawberry compote layered beneath chilled milk and emerald matcha in fluted crystal with a brass straw, spoon, and porcelain berry dish.',
      notes: 'Real crushed strawberries · Creamy milk middle · Whisked Uji matcha cap',
      defaultTemp: 'Iced',
      bestSeller: true,
      fx: ['iced', 'matcha', 'milk'],
    },
    {
      id: 'thai-milk-tea',
      name: 'Thai Milk Tea',
      group: 'tea',
      category: 'milk-tea',
      categoryLabel: 'Milk Tea · Spiced Classic',
      price: 145,
      image: 'img/tea-thai-milk-tea.jpg',
      desc: 'Star-anise and cardamom spiced black tea swirled with cream over crystal ice in a tall 24k gold-rimmed cut-crystal highball tumbler on double gilded plates.',
      notes: 'Whole star anise & fresh mint · Wide gold boba straw · Baroque gold spoon & spice dish',
      defaultTemp: 'Iced',
      fx: ['iced', 'milk', 'ripple'],
    },
    {
      id: 'classic-milk-tea',
      name: 'Classic Milk Tea',
      group: 'tea',
      category: 'milk-tea',
      categoryLabel: 'Milk Tea · With Boba',
      price: 140,
      image: 'img/tea-classic-milk-tea.jpg',
      desc: 'Slow-brewed Assam black tea shaken with fresh cream and honey-glazed pearls in a tall 24k gold-rimmed fluted crystal tumbler on a gold-filigree plate.',
      notes: 'Strong roasted black tea · Chewy dark boba pearls · Wide gold boba straw & baroque spoon',
      defaultTemp: 'Iced',
      fx: ['iced', 'milk', 'ripple'],
    },
    {
      id: 'brown-sugar-milk-tea',
      name: 'Brown Sugar Milk Tea',
      group: 'tea',
      category: 'milk-tea',
      categoryLabel: 'Milk Tea · Best Seller',
      price: 160,
      image: 'img/tea-brown-sugar-milk-tea.jpg',
      desc: 'Warm caramelized brown sugar pearls coating a tall 24k gold-rimmed cut-crystal milk tea tumbler in tiger stripes on scalloped gold-filigree double plates.',
      notes: 'Slow-simmered muscovado syrup · Warm boba pearls · Wide gold boba straw & baroque spoon',
      defaultTemp: 'Iced',
      bestSeller: true,
      fx: ['iced', 'caramel', 'milk'],
    },
    {
      id: 'wintermelon-milk-tea',
      name: 'Wintermelon Milk Tea',
      group: 'tea',
      category: 'milk-tea',
      categoryLabel: 'Milk Tea · Caramelized',
      price: 145,
      image: 'img/tea-wintermelon-milk-tea.jpg',
      desc: 'Caramelized wintermelon tea mellowed with cold milk in a tall fluted crystal Collins glass on a scalloped marble coaster with brass straw, spoon, and candied wintermelon dish.',
      notes: 'Toasted caramel wintermelon · Light cream · Candied wintermelon garnish',
      defaultTemp: 'Iced',
      fx: ['iced', 'caramel', 'ripple'],
    },
    {
      id: 'taro-milk-tea',
      name: 'Taro Milk Tea',
      group: 'tea',
      category: 'milk-tea',
      categoryLabel: 'Milk Tea · Velvety Cream',
      price: 155,
      image: 'img/tea-taro-milk-tea.jpg',
      desc: 'Sweet purple taro root and jasmine tea with dark boba pearls and cream foam in a tall fluted 24k gold-rimmed cut-crystal boba tumbler on gilded double plates.',
      notes: 'Real taro creaminess · Subtle lavender-vanilla aroma · Wide gold boba straw & baroque spoon',
      defaultTemp: 'Iced',
      fx: ['iced', 'milk', 'ripple'],
    },
    {
      id: 'okinawa-milk-tea',
      name: 'Okinawa Milk Tea',
      group: 'tea',
      category: 'milk-tea',
      categoryLabel: 'Milk Tea · Roasted Sugar',
      price: 155,
      image: 'img/tea-okinawa-milk-tea.jpg',
      desc: 'Roasted black tea with smoky Okinawa kokuto caramel, cream foam, edible blossoms, and dark pearls in a tall faceted 24k gold-rimmed crystal boba highball on gilded double plates.',
      notes: 'Japanese kokuto brown sugar · Wide gold boba straw · Gilded kokuto raw sugar bowl',
      defaultTemp: 'Iced',
      fx: ['iced', 'caramel', 'milk'],
    },
    {
      id: 'hokkaido-milk-tea',
      name: 'Hokkaido Milk Tea',
      group: 'tea',
      category: 'milk-tea',
      categoryLabel: 'Milk Tea · Salted Cream Cap',
      price: 160,
      image: 'img/tea-hokkaido-milk-tea.jpg',
      desc: 'Velvety caramelized Hokkaido milk tea with salted cream foam, dark pearls, and roasted sugar art in a tall ribbed 24k gold-rimmed crystal Collins glass on gilded double plates.',
      notes: 'Salted cream cap · Wide gold boba straw & baroque spoon · Gilded boba side dish',
      defaultTemp: 'Iced',
      fx: ['iced', 'milk', 'caramel'],
    },
    {
      id: 'honey-lemon-tea',
      name: 'Honey Lemon Tea',
      group: 'tea',
      category: 'brewed-tea',
      categoryLabel: 'Brewed Tea · Soothing Citrus',
      price: 130,
      image: 'img/tea-honey-lemon-tea.jpg',
      desc: 'Warm golden-amber tea with fresh lemon wheel and mint in a 24k gold-rimmed Baccarat crystal cup on gilded double charger plates.',
      notes: 'Raw wildflower honey · Gilded crystal honey pot & dipper · Baroque 24k gold spoon',
      defaultTemp: 'Hot',
      fx: ['steam', 'ripple', 'leaves'],
    },
    {
      id: 'peach-iced-tea',
      name: 'Peach Iced Tea',
      group: 'tea',
      category: 'brewed-tea',
      categoryLabel: 'Fruit Tea · Orchard Chilled',
      price: 135,
      image: 'img/tea-peach-iced-tea.jpg',
      desc: 'Cold-steeped black tea with ripe orchard peach slices and mint in a tall 24k gold-rimmed cut-crystal Collins highball glass on gilded double plates.',
      notes: 'Fresh peach slices · Brushed gold straw & baroque spoon · Gilded porcelain fruit dish',
      defaultTemp: 'Iced',
      fx: ['iced', 'leaves', 'ripple'],
    },
    {
      id: 'passion-fruit-tea',
      name: 'Passion Fruit Tea',
      group: 'tea',
      category: 'brewed-tea',
      categoryLabel: 'Fruit Tea · Tropical',
      price: 145,
      image: 'img/tea-passion-fruit-tea.jpg',
      desc: 'Crisp jasmine green tea shaken with golden passion fruit pulp in a tall cut-crystal highball glass on a walnut tray with vintage brass spoon, straw, and scalloped porcelain plate.',
      notes: 'Real passion fruit seeds & pulp · Jasmine green tea · Bright tropical zing',
      defaultTemp: 'Iced',
      fx: ['iced', 'ripple', 'leaves'],
    },
    {
      id: 'mango-green-tea',
      name: 'Mango Green Tea',
      group: 'tea',
      category: 'brewed-tea',
      categoryLabel: 'Fruit Tea · Philippine Mango',
      price: 150,
      image: 'img/tea-mango-green-tea.jpg',
      desc: 'Golden Philippine mango puree layered with steamed green tea and diced mango in a tall fluted 24k gold-rimmed crystal Collins glass on gilded double plates.',
      notes: 'Ripe golden mango cubes · Brushed gold straw & baroque spoon · Gilded fruit side dish',
      defaultTemp: 'Iced',
      fx: ['iced', 'ripple', 'leaves'],
    },
    {
      id: 'chamomile-tea',
      name: 'Chamomile Tea',
      group: 'tea',
      category: 'brewed-tea',
      categoryLabel: 'Herbal Tea · Caffeine Free',
      price: 125,
      image: 'img/tea-chamomile-tea.jpg',
      desc: 'Whole dried chamomile blossoms steeped in a gold-rimmed cut-crystal teacup to a soothing golden-honey infusion for calm evenings.',
      notes: '100% caffeine-free whole blossoms · Gentle apple-like sweetness · Calming aroma',
      defaultTemp: 'Hot',
      fx: ['steam', 'leaves'],
    },
    {
      id: 'hibiscus-tea',
      name: 'Hibiscus Tea',
      group: 'tea',
      category: 'brewed-tea',
      categoryLabel: 'Herbal Tea · Ruby Botanical',
      price: 135,
      image: 'img/tea-hibiscus-tea.jpg',
      desc: 'Deep ruby hibiscus calyces steeped chilled over crystal ice in a tall 24k gold-rimmed faceted cut-crystal Collins glass on gilded double charger plates.',
      notes: 'Dried hibiscus petals · Brushed gold straw & baroque spoon · Gilded blossom side dish',
      defaultTemp: 'Iced',
      fx: ['iced', 'leaves', 'ripple'],
    },
  ];

  // State
  let cart = loadCart();
  let activeFilter = 'all';
  let activeMood = 'all';
  let activeSort = 'curated';
  let searchQuery = '';
  let toastTimer = null;
  const GIFT_THRESHOLD = 400;

  // DOM References
  const siteHeader = document.getElementById('site-header');
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileNavPanel = document.getElementById('mobile-nav-panel');
  const bestsellerGrid = document.getElementById('bestseller-grid');
  const coffeeGrid = document.getElementById('coffee-grid');
  const teaGrid = document.getElementById('tea-grid');
  const coffeeEmpty = document.getElementById('coffee-empty');
  const teaEmpty = document.getElementById('tea-empty');
  const coffeeCountNote = document.getElementById('coffee-count-note');
  const teaCountNote = document.getElementById('tea-count-note');
  const searchInput = document.getElementById('menu-search');
  const searchClearBtn = document.getElementById('search-clear-btn');
  const filterTabs = document.querySelectorAll('.filter-tab');
  const moodBtns = document.querySelectorAll('.mood-btn');
  const sortSelect = document.getElementById('menu-sort');
  const resetFilterBtns = document.querySelectorAll('.reset-filters-btn');
  const activeFilterBar = document.getElementById('active-filter-bar');
  const activeFilterText = document.getElementById('active-filter-text');
  const navLinks = document.querySelectorAll('.primary-nav .nav-link');
  const flightSlotsGrid = document.getElementById('flight-slots-grid');
  const flightSummaryBar = document.getElementById('flight-summary-bar');
  const flightPresetBtns = document.querySelectorAll('[data-flight-preset]');

  const FLIGHT_PRESETS = {
    midnight: ['classic-espresso', 'spanish-latte', 'vietnamese-coffee'],
    velvet: ['caramel-macchiato', 'salted-caramel-latte', 'brown-sugar-milk-tea'],
    kyoto: ['matcha-latte', 'strawberry-matcha', 'jasmine-green-tea'],
  };
  let flightSelection = [...FLIGHT_PRESETS.midnight];
  const FLIGHT_PRIVILEGE = 45;

  // Cart DOM
  const cartOpenBtn = document.getElementById('cart-open-btn');
  const cartCloseBtn = document.getElementById('cart-close-btn');
  const cartBackdrop = document.getElementById('cart-backdrop');
  const cartDrawer = document.getElementById('cart-drawer');
  const cartCountEl = document.getElementById('cart-count');
  const cartItemSummaryEl = document.getElementById('cart-item-summary');
  const cartGiftText = document.getElementById('cart-gift-text');
  const cartGiftFill = document.getElementById('cart-gift-fill');
  const cartPackagingTier = document.getElementById('cart-packaging-tier');
  const cartItemsBody = document.getElementById('cart-items-body');
  const cartUpsellSlot = document.getElementById('cart-upsell-slot');
  const cartSubtotalEl = document.getElementById('cart-subtotal');
  const cartTotalEl = document.getElementById('cart-total');
  const cartDrawerFooter = document.getElementById('cart-drawer-footer');
  const clearCartBtn = document.getElementById('clear-cart-btn');

  // Modals & Utilities
  const productModal = document.getElementById('product-modal');
  const productModalBackdrop = document.getElementById('product-modal-backdrop');
  const productModalClose = document.getElementById('product-modal-close');
  const productModalContent = document.getElementById('product-modal-content');

  const openCheckoutBtn = document.getElementById('open-checkout-btn');
  const checkoutModal = document.getElementById('checkout-modal');
  const checkoutModalBackdrop = document.getElementById('checkout-modal-backdrop');
  const checkoutModalClose = document.getElementById('checkout-modal-close');
  const checkoutForm = document.getElementById('demo-checkout-form');
  const checkoutSummaryBox = document.getElementById('checkout-summary-box');
  const checkoutConfirmation = document.getElementById('checkout-confirmation');

  const toastBanner = document.getElementById('toast-banner');
  const toastMessage = document.getElementById('toast-message');
  const toastViewBag = document.getElementById('toast-view-bag');
  const backToTopBtn = document.getElementById('back-to-top');
  const footerYear = document.getElementById('footer-year');

  // ==========================================================================
  // Helpers
  // ==========================================================================

  function formatPeso(amount) {
    return '₱' + amount.toLocaleString('en-PH', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }

  function loadCart() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return [];
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  }

  function saveCart() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
    } catch {
      // Ignore storage quota issues safely
    }
  }

  function getProductById(id) {
    return PRODUCTS.find((item) => item.id === id) || null;
  }

  const POWDER_THEMES = {
    cocoa: {
      grain: [168, 102, 62],
      lit: [218, 162, 118],
      haze: [152, 92, 56],
    },
    espresso: {
      grain: [156, 102, 58],
      lit: [214, 166, 116],
      haze: [142, 90, 50],
    },
    caramel: {
      grain: [218, 152, 78],
      lit: [248, 206, 144],
      haze: [204, 140, 68],
    },
    vanilla: {
      grain: [238, 222, 194],
      lit: [255, 246, 228],
      haze: [228, 210, 180],
    },
    matcha: {
      grain: [138, 188, 74],
      lit: [188, 228, 126],
      haze: [122, 174, 64],
    },
    botanical: {
      grain: [226, 178, 96],
      lit: [250, 218, 148],
      haze: [212, 164, 86],
    },
  };

  function getEffectConfig(product) {
    const id = product.id;
    let powderType = 'vanilla';

    if (id === 'mocha' || id === 'iced-mocha' || id === 'cappuccino' || id === 'dalgona-coffee') {
      powderType = 'cocoa';
    } else if (
      id === 'classic-espresso' ||
      id === 'americano' ||
      id === 'hazelnut-coffee' ||
      id === 'cold-brew' ||
      id === 'iced-americano' ||
      id === 'vietnamese-coffee'
    ) {
      powderType = 'espresso';
    } else if (
      id === 'caramel-macchiato' ||
      id === 'spanish-latte' ||
      id === 'salted-caramel-latte' ||
      id === 'iced-caramel-latte' ||
      id === 'brown-sugar-milk-tea' ||
      id === 'wintermelon-milk-tea' ||
      id === 'okinawa-milk-tea' ||
      id === 'thai-milk-tea'
    ) {
      powderType = 'caramel';
    } else if (
      id === 'matcha-latte' ||
      id === 'strawberry-matcha' ||
      id === 'matcha-espresso-fusion' ||
      id === 'green-tea'
    ) {
      powderType = 'matcha';
    } else if (
      id === 'classic-black-tea' ||
      id === 'english-breakfast-tea' ||
      id === 'earl-grey-tea' ||
      id === 'jasmine-green-tea' ||
      id === 'honey-lemon-tea' ||
      id === 'peach-iced-tea' ||
      id === 'passion-fruit-tea' ||
      id === 'mango-green-tea' ||
      id === 'chamomile-tea' ||
      id === 'hibiscus-tea'
    ) {
      powderType = 'botanical';
    }

    let x = 0.5;
    let rimY = product.defaultTemp === 'Hot' ? 0.39 : 0.31;

    if (id === 'french-vanilla-coffee') {
      x = 0.43;
      rimY = 0.28;
    } else if (id === 'caramel-macchiato' || id === 'strawberry-matcha' || id === 'dalgona-coffee') {
      rimY = 0.29;
    } else if (id === 'iced-americano') {
      rimY = 0.27;
    } else if (id === 'cold-brew' || id === 'iced-coffee') {
      rimY = 0.35;
    } else if (id === 'classic-espresso' || id === 'matcha-latte') {
      rimY = 0.43;
    } else if (id === 'spanish-latte') {
      rimY = 0.37;
    } else if (id === 'brown-sugar-milk-tea' || id === 'thai-milk-tea') {
      rimY = 0.33;
    }

    return {
      powderType,
      x,
      rimY,
    };
  }

  /**
   * Realistic Canvas Poured Powder Cascade + Curling Smoke Tendrils Stage
   */
  function buildFxStage(product) {
    const fxList = product.fx || [];
    const isHot = product.defaultTemp === 'Hot';
    const fx = getEffectConfig(product);

    return `
      <div class="fx-stage ${isHot ? 'is-hot' : 'is-iced'}" aria-hidden="true">
        <canvas
          class="fx-canvas"
          data-fx-hot="${isHot ? '1' : '0'}"
          data-fx-powder="${fx.powderType}"
          data-fx-x="${fx.x}"
          data-fx-rim-y="${fx.rimY}"
        ></canvas>
        ${
          fxList.includes('iced')
            ? '<div class="fx-iced"><span class="condensation-gleam"></span></div>'
            : ''
        }
      </div>
    `;
  }

  // ==========================================================================
  // Photorealistic Canvas Poured Powder & Curling Smoke Engine
  // ==========================================================================

  const FX_SMOKE_SPRITES = {};
  const FX_HAZE_SPRITES = {};
  const FX_CASCADE_SPRITES = {};
  const fxCanvasStates = new WeakMap();
  const activeFxCanvases = new Set();
  const observedFxCanvases = new WeakSet();
  let fxRafId = null;
  let fxLastTs = 0;
  let fxIntersectionObserver = null;
  let fxResizeObserver = null;
  const fxReducedMotionQuery =
    typeof window.matchMedia === 'function'
      ? window.matchMedia('(prefers-reduced-motion: reduce)')
      : null;

  function getSmokeSprite(isHot) {
    const key = isHot ? 'hot' : 'iced';
    if (FX_SMOKE_SPRITES[key]) return FX_SMOKE_SPRITES[key];

    const size = 128;
    const off = document.createElement('canvas');
    off.width = size;
    off.height = size;
    const octx = off.getContext('2d');
    if (!octx) return off;

    const baseRgb = isHot ? '248, 236, 218' : '226, 234, 244';
    const midRgb = isHot ? '228, 210, 186' : '204, 214, 228';
    const lobes = [
      [0.5, 0.5, 0.44, 0.34, 0.32],
      [0.42, 0.44, 0.34, 0.28, 0.26],
      [0.58, 0.48, 0.32, 0.30, 0.24],
      [0.48, 0.60, 0.35, 0.26, 0.22],
      [0.44, 0.36, 0.24, 0.22, 0.20],
      [0.57, 0.61, 0.25, 0.22, 0.18],
      [0.37, 0.54, 0.22, 0.20, 0.16],
      [0.62, 0.39, 0.21, 0.19, 0.14],
    ];

    lobes.forEach(([cx, cy, rx, ry, alpha], idx) => {
      const px = cx * size;
      const py = cy * size;
      const r = Math.max(rx, ry) * size;
      octx.save();
      octx.translate(px, py);
      octx.scale(1, ry / rx);
      const grad = octx.createRadialGradient(0, 0, r * 0.05, 0, 0, r);
      const rgb = idx % 2 === 0 ? baseRgb : midRgb;
      grad.addColorStop(0, `rgba(${rgb}, ${alpha})`);
      grad.addColorStop(0.55, `rgba(${rgb}, ${(alpha * 0.42).toFixed(3)})`);
      grad.addColorStop(1, `rgba(${rgb}, 0)`);
      octx.fillStyle = grad;
      octx.beginPath();
      octx.arc(0, 0, r, 0, Math.PI * 2);
      octx.fill();
      octx.restore();
    });

    // Subtle internal voids break circular uniformity into realistic curling folds
    octx.globalCompositeOperation = 'destination-out';
    const cutouts = [
      [0.36, 0.40, 0.18, 0.18],
      [0.63, 0.56, 0.19, 0.16],
      [0.49, 0.47, 0.13, 0.12],
    ];
    cutouts.forEach(([cx, cy, r, a]) => {
      const px = cx * size;
      const py = cy * size;
      const rad = r * size;
      const g = octx.createRadialGradient(px, py, 0, px, py, rad);
      g.addColorStop(0, `rgba(0, 0, 0, ${a})`);
      g.addColorStop(1, 'rgba(0, 0, 0, 0)');
      octx.fillStyle = g;
      octx.beginPath();
      octx.arc(px, py, rad, 0, Math.PI * 2);
      octx.fill();
    });

    FX_SMOKE_SPRITES[key] = off;
    return off;
  }

  function getPowderHazeSprite(powderType) {
    if (FX_HAZE_SPRITES[powderType]) return FX_HAZE_SPRITES[powderType];

    const theme = POWDER_THEMES[powderType] || POWDER_THEMES.vanilla;
    const size = 96;
    const off = document.createElement('canvas');
    off.width = size;
    off.height = size;
    const octx = off.getContext('2d');
    if (!octx) return off;

    const [r, g, b] = theme.haze;
    const baseGrad = octx.createRadialGradient(size * 0.5, size * 0.5, 2, size * 0.5, size * 0.5, size * 0.46);
    baseGrad.addColorStop(0, `rgba(${r}, ${g}, ${b}, 0.24)`);
    baseGrad.addColorStop(0.55, `rgba(${r}, ${g}, ${b}, 0.08)`);
    baseGrad.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);
    octx.fillStyle = baseGrad;
    octx.fillRect(0, 0, size, size);

    for (let i = 0; i < 48; i += 1) {
      const angle = (i * 2.39996) % (Math.PI * 2);
      const dist = ((i + 0.5) / 48) * size * 0.42;
      const x = size * 0.5 + Math.cos(angle) * dist;
      const y = size * 0.5 + Math.sin(angle) * dist * 0.78;
      const rad = 0.5 + ((i * 7) % 10) * 0.095;
      const rgb = i % 3 === 0 ? theme.lit : theme.grain;
      octx.fillStyle = `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${0.15 + ((i % 4) * 0.045)})`;
      octx.beginPath();
      octx.arc(x, y, rad, 0, Math.PI * 2);
      octx.fill();
    }

    FX_HAZE_SPRITES[powderType] = off;
    return off;
  }

  function getPowderCascadeSprite(powderType) {
    if (FX_CASCADE_SPRITES[powderType]) return FX_CASCADE_SPRITES[powderType];

    const theme = POWDER_THEMES[powderType] || POWDER_THEMES.vanilla;
    const size = 96;
    const off = document.createElement('canvas');
    off.width = size;
    off.height = size;
    const octx = off.getContext('2d');
    if (!octx) return off;

    // Fine vertical powdery mist core
    const [hr, hg, hb] = theme.haze;
    const [lr, lg, lb] = theme.lit;
    const coreGrad = octx.createRadialGradient(size * 0.5, size * 0.5, 1, size * 0.5, size * 0.5, size * 0.42);
    coreGrad.addColorStop(0, `rgba(${lr}, ${lg}, ${lb}, 0.22)`);
    coreGrad.addColorStop(0.45, `rgba(${hr}, ${hg}, ${hb}, 0.14)`);
    coreGrad.addColorStop(1, `rgba(${hr}, ${hg}, ${hb}, 0)`);
    octx.fillStyle = coreGrad;
    octx.fillRect(0, 0, size, size);

    // Dense micro-granular stippling so the stream reads clearly as fine poured powder
    for (let i = 0; i < 72; i += 1) {
      const angle = (i * 2.3999632) % (Math.PI * 2);
      const frac = Math.sqrt((i + 0.5) / 72);
      const x = size * 0.5 + Math.cos(angle) * frac * size * 0.34;
      const y = size * 0.5 + Math.sin(angle) * frac * size * 0.42;
      const rx = 0.45 + ((i * 5) % 9) * 0.09;
      const ry = rx * (1.2 + ((i % 3) * 0.25));
      const rgb = i % 4 === 0 ? theme.lit : theme.grain;
      const a = (1 - frac * 0.65) * (0.28 + ((i % 5) * 0.08));
      octx.fillStyle = `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${a.toFixed(3)})`;
      octx.beginPath();
      octx.ellipse(x, y, rx, ry, (i % 6) * 0.2, 0, Math.PI * 2);
      octx.fill();
    }

    // Break uniformity with subtle diagonal air gaps
    octx.globalCompositeOperation = 'destination-out';
    const gaps = [
      [0.34, 0.36, 0.16, 0.18],
      [0.66, 0.62, 0.16, 0.18],
    ];
    gaps.forEach(([cx, cy, r, a]) => {
      const px = cx * size;
      const py = cy * size;
      const rad = r * size;
      const g = octx.createRadialGradient(px, py, 0, px, py, rad);
      g.addColorStop(0, `rgba(0, 0, 0, ${a})`);
      g.addColorStop(1, 'rgba(0, 0, 0, 0)');
      octx.fillStyle = g;
      octx.beginPath();
      octx.arc(px, py, rad, 0, Math.PI * 2);
      octx.fill();
    });

    FX_CASCADE_SPRITES[powderType] = off;
    return off;
  }

  function spawnSmokeParticle(state, prewarmProgress) {
    const { w, h, rimX, rimY, isHot } = state;
    const streamOffsets = [-0.055, 0, 0.055];
    const streamIndex = Math.floor(Math.random() * streamOffsets.length);
    const streamOffset = streamOffsets[streamIndex] * w;

    if (isHot) {
      const life = 2.6 + Math.random() * 1.4;
      const age = typeof prewarmProgress === 'number' ? prewarmProgress * life : 0;
      return {
        streamIndex,
        baseX: rimX + streamOffset + (Math.random() - 0.5) * w * 0.025,
        x: rimX + streamOffset,
        y: rimY + h * 0.015,
        age,
        life,
        vy: -(h * (0.095 + Math.random() * 0.055)),
        vxBias: (Math.random() - 0.5) * w * 0.018,
        phase: Math.random() * Math.PI * 2,
        freq: 1.5 + Math.random() * 0.9,
        amp: w * (0.024 + Math.random() * 0.022),
        startSize: w * (0.085 + Math.random() * 0.03),
        endSize: w * (0.24 + Math.random() * 0.07),
        angle: Math.random() * Math.PI * 2,
        spin: (Math.random() - 0.5) * 0.45,
        peakAlpha: 0.038 + Math.random() * 0.024,
      };
    }

    const side = streamIndex === 0 ? -1 : streamIndex === 2 ? 1 : Math.random() < 0.5 ? -1 : 1;
    const life = 2.8 + Math.random() * 1.4;
    const age = typeof prewarmProgress === 'number' ? prewarmProgress * life : 0;
    return {
      streamIndex,
      baseX: rimX + side * w * (0.03 + Math.random() * 0.065),
      x: rimX,
      y: rimY + (Math.random() - 0.3) * h * 0.03,
      age,
      life,
      vy: h * (0.018 + Math.random() * 0.024),
      vxBias: side * w * (0.026 + Math.random() * 0.022),
      phase: Math.random() * Math.PI * 2,
      freq: 1.1 + Math.random() * 0.6,
      amp: w * (0.014 + Math.random() * 0.014),
      startSize: w * (0.09 + Math.random() * 0.03),
      endSize: w * (0.22 + Math.random() * 0.06),
      angle: Math.random() * Math.PI * 2,
      spin: (Math.random() - 0.5) * 0.3,
      peakAlpha: 0.024 + Math.random() * 0.016,
    };
  }

  function spawnPourPuff(state, prewarmProgress) {
    const { w } = state;
    const life = 0.95 + Math.random() * 0.42;
    const age = typeof prewarmProgress === 'number' ? prewarmProgress * life : 0;
    const laneBias = (Math.random() + Math.random() - 1) * 0.5;
    return {
      age,
      life,
      laneBias,
      phase: Math.random() * Math.PI * 2,
      startSize: w * (0.042 + Math.random() * 0.018),
      endSize: w * (0.095 + Math.random() * 0.035),
      swayAmp: w * (0.008 + Math.random() * 0.008),
      angle: Math.random() * Math.PI * 2,
      spin: (Math.random() - 0.5) * 0.8,
      peakAlpha: 0.22 + Math.random() * 0.14,
    };
  }

  function spawnPourGrain(state, prewarmProgress) {
    const life = 0.8 + Math.random() * 0.55;
    const age = typeof prewarmProgress === 'number' ? prewarmProgress * life : 0;
    // Bell-shaped lateral distribution concentrates crisp powder in the pour core
    const gauss = (Math.random() + Math.random() + Math.random() - 1.5) / 1.5;
    const isOuterWisp = Math.random() < 0.22;
    return {
      age,
      life,
      gauss,
      isOuterWisp,
      phase: Math.random() * Math.PI * 2,
      rx: isOuterWisp ? 0.45 + Math.random() * 0.55 : 0.5 + Math.random() * 0.72,
      ry: isOuterWisp ? 0.55 + Math.random() * 0.75 : 0.75 + Math.random() * 1.1,
      angle: (Math.random() - 0.5) * 0.32,
      isLit: Math.random() < 0.38,
      peakAlpha: isOuterWisp ? 0.34 + Math.random() * 0.26 : 0.55 + Math.random() * 0.35,
    };
  }

  function spawnBloomPuff(state, prewarmProgress) {
    const { w, h } = state;
    const life = 1.25 + Math.random() * 0.65;
    const age = typeof prewarmProgress === 'number' ? prewarmProgress * life : 0;
    const dir = Math.random() < 0.5 ? -1 : 1;
    return {
      age,
      life,
      dir,
      offsetX: (Math.random() - 0.5) * w * 0.04,
      vx: dir * w * (0.032 + Math.random() * 0.042),
      vy: -(h * (0.012 + Math.random() * 0.022)),
      startSize: w * (0.055 + Math.random() * 0.025),
      endSize: w * (0.145 + Math.random() * 0.045),
      angle: Math.random() * Math.PI * 2,
      spin: (Math.random() - 0.5) * 0.6,
      peakAlpha: 0.16 + Math.random() * 0.1,
    };
  }

  function spawnPowderGrain(state, prewarmProgress) {
    const { w, h, rimX, rimY } = state;
    const life = 2.2 + Math.random() * 1.8;
    const age = typeof prewarmProgress === 'number' ? prewarmProgress * life : 0;
    const spread = w * (0.2 + Math.random() * 0.14);
    const startX = rimX + (Math.random() - 0.5) * spread;
    const startY = Math.max(h * 0.04, rimY - h * (0.12 + Math.random() * 0.16));

    return {
      x: startX,
      y: startY,
      startX,
      startY,
      age,
      life,
      vy: h * (0.035 + Math.random() * 0.045),
      phase: Math.random() * Math.PI * 2,
      swayAmp: w * (0.012 + Math.random() * 0.018),
      rx: 0.5 + Math.random() * 0.72,
      ry: 0.45 + Math.random() * 0.65,
      angle: Math.random() * Math.PI,
      spin: (Math.random() - 0.5) * 1.2,
      isLit: Math.random() < 0.32,
      peakAlpha: 0.34 + Math.random() * 0.32,
    };
  }

  function resizeFxCanvasState(canvas, state) {
    const rect = canvas.getBoundingClientRect();
    if (!rect.width || !rect.height) return false;

    const dpr = Math.min(window.devicePixelRatio || 1, 1.75);
    const targetW = Math.round(rect.width * dpr);
    const targetH = Math.round(rect.height * dpr);

    if (canvas.width !== targetW || canvas.height !== targetH) {
      canvas.width = targetW;
      canvas.height = targetH;
    }

    const sizeChanged = Math.abs(state.w - rect.width) > 2 || Math.abs(state.h - rect.height) > 2;
    state.w = rect.width;
    state.h = rect.height;
    state.dpr = dpr;
    state.rimX = state.xNorm * rect.width;
    state.rimY = state.rimYNorm * rect.height;

    if (sizeChanged || !state.initialized) {
      const smokeCount = state.isHot ? 26 : 18;
      state.smoke = Array.from({ length: smokeCount }, (_, i) =>
        spawnSmokeParticle(state, i / smokeCount)
      );
      state.pourPuffs = Array.from({ length: 18 }, (_, i) =>
        spawnPourPuff(state, i / 18)
      );
      state.pourGrains = Array.from({ length: 64 }, (_, i) =>
        spawnPourGrain(state, i / 64)
      );
      state.bloomPuffs = Array.from({ length: 12 }, (_, i) =>
        spawnBloomPuff(state, i / 12)
      );
      state.grains = Array.from({ length: 22 }, (_, i) =>
        spawnPowderGrain(state, i / 22)
      );
      state.initialized = true;
    }
    return true;
  }

  function initFxCanvasState(canvas) {
    if (fxCanvasStates.has(canvas)) return fxCanvasStates.get(canvas);
    const state = {
      canvas,
      ctx: canvas.getContext('2d'),
      isHot: canvas.dataset.fxHot === '1',
      powderType: canvas.dataset.fxPowder || 'vanilla',
      powderDisabled: canvas.dataset.fxPowder === 'none',
      xNorm: parseFloat(canvas.dataset.fxX || '0.5'),
      rimYNorm: parseFloat(canvas.dataset.fxRimY || '0.38'),
      w: 0,
      h: 0,
      dpr: 1,
      rimX: 0,
      rimY: 0,
      hoverBoost: 0,
      time: Math.random() * 10,
      smoke: [],
      pourPuffs: [],
      pourGrains: [],
      bloomPuffs: [],
      grains: [],
      initialized: false,
    };
    fxCanvasStates.set(canvas, state);
    resizeFxCanvasState(canvas, state);
    return state;
  }

  function drawSmokeWisp(ctx, originX, originY, heightSpan, w, time, seed, alphaPeak) {
    const drift1 = Math.sin(time * 0.72 + seed) * w * 0.032;
    const drift2 = Math.cos(time * 0.56 + seed * 1.4) * w * 0.044;
    const drift3 = Math.sin(time * 0.44 + seed * 2.1) * w * 0.056;
    const topY = originY - heightSpan;

    const grad = ctx.createLinearGradient(originX, originY, originX + drift3, topY);
    grad.addColorStop(0, 'rgba(250, 236, 214, 0)');
    grad.addColorStop(0.24, `rgba(250, 236, 214, ${alphaPeak.toFixed(3)})`);
    grad.addColorStop(0.68, `rgba(232, 212, 186, ${(alphaPeak * 0.55).toFixed(3)})`);
    grad.addColorStop(1, 'rgba(220, 198, 172, 0)');

    ctx.save();
    ctx.strokeStyle = grad;
    ctx.lineCap = 'round';
    ctx.lineWidth = Math.max(1.8, w * 0.014);
    ctx.beginPath();
    ctx.moveTo(originX, originY);
    ctx.bezierCurveTo(
      originX + drift1,
      originY - heightSpan * 0.34,
      originX - drift2,
      originY - heightSpan * 0.68,
      originX + drift3,
      topY
    );
    ctx.stroke();
    ctx.restore();
  }

  function drawSpecularStar(ctx, x, y, radius, alpha) {
    ctx.save();
    ctx.translate(x, y);
    ctx.strokeStyle = `rgba(255, 240, 210, ${alpha.toFixed(3)})`;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(-radius, 0);
    ctx.lineTo(radius, 0);
    ctx.moveTo(0, -radius);
    ctx.lineTo(0, radius);
    ctx.stroke();
    ctx.fillStyle = `rgba(255, 248, 232, ${(alpha * 1.15).toFixed(3)})`;
    ctx.beginPath();
    ctx.arc(0, 0, Math.max(0.8, radius * 0.22), 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  function stepAndDrawFxCanvas(state, dt) {
    const { ctx, w, h, dpr, isHot, powderType, powderDisabled, rimX, rimY } = state;
    if (!ctx || !w || !h || !state.initialized) return;

    const cardHoverTarget = state.canvas.closest('.product-card, .bestseller-card, .flight-slot-card')?.matches(':hover') ? 1 : 0;
    state.hoverBoost += (cardHoverTarget - (state.hoverBoost || 0)) * Math.min(1, dt * 8);
    const boost = state.hoverBoost || 0;

    state.time += dt * (1 + boost * 0.22);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, w, h);

    const activePowder = powderDisabled ? 'vanilla' : powderType;
    const smokeSprite = getSmokeSprite(isHot);
    const hazeSprite = getPowderHazeSprite(activePowder);
    const cascadeSprite = getPowderCascadeSprite(activePowder);
    const theme = POWDER_THEMES[activePowder] || POWDER_THEMES.vanilla;

    const pourStartY = -h * 0.02;
    const pourEndY = rimY + h * 0.014;
    const pourSpan = Math.max(24, pourEndY - pourStartY);
    const streamSway = Math.sin(state.time * 1.15) * w * 0.008;

    // 1. Organic curling smoke tendrils (hot) or chilled rim mist (iced) behind powder stream
    ctx.globalCompositeOperation = 'screen';
    for (let i = 0; i < state.smoke.length; i += 1) {
      let p = state.smoke[i];
      p.age += dt * (1 + boost * 0.16);
      if (p.age >= p.life) {
        p = spawnSmokeParticle(state);
        state.smoke[i] = p;
      }
      const prog = p.age / p.life;
      const fadeIn = Math.min(1, prog / 0.16);
      const fadeOut = Math.pow(1 - prog, 1.35);
      const alpha = p.peakAlpha * fadeIn * fadeOut * (1 + boost * 0.45);
      if (alpha <= 0.002) continue;

      const y = (isHot ? rimY + h * 0.015 : p.y) + p.vy * p.age;
      const curl =
        Math.sin(p.phase + prog * p.freq * 3.4 - state.time * 0.85) * p.amp * (0.4 + prog * 1.15) +
        Math.cos(p.phase * 1.7 + prog * 5.2 + state.time * 0.6) * p.amp * 0.35;
      const x = p.baseX + p.vxBias * p.age + curl;
      const drawSize = p.startSize + (p.endSize - p.startSize) * Math.pow(prog, 0.85);
      const stretchY = isHot ? 1.18 + prog * 0.22 : 0.88 + prog * 0.12;

      ctx.save();
      ctx.globalAlpha = alpha;
      ctx.translate(x, y);
      ctx.rotate(p.angle + p.spin * p.age);
      ctx.scale(1, stretchY);
      ctx.drawImage(smokeSprite, -drawSize * 0.5, -drawSize * 0.5, drawSize, drawSize);
      ctx.restore();
    }

    // Feathered Bezier steam curl wisps rising off hot beverages
    if (isHot) {
      for (let k = 0; k < 4; k += 1) {
        const offsetX = (k - 1.5) * w * 0.036;
        const heightSpan = h * (0.24 + (k % 2) * 0.07);
        drawSmokeWisp(
          ctx,
          rimX + offsetX,
          rimY + h * 0.01,
          heightSpan,
          w,
          state.time,
          k * 1.65,
          0.034 + boost * 0.018
        );
      }
    } else if (boost > 0.04) {
      // Subtle chilled crystal rim specular star glints on hover
      for (let k = 0; k < 3; k += 1) {
        const gx = rimX + (k - 1) * w * 0.078 + Math.sin(state.time * 1.1 + k) * w * 0.008;
        const gy = rimY + h * (0.045 + k * 0.028);
        const twinkle = Math.max(0, Math.sin(state.time * 2.8 + k * 2.1));
        const glintAlpha = boost * twinkle * 0.38;
        if (glintAlpha > 0.03) {
          drawSpecularStar(ctx, gx, gy, 3.6 + twinkle * 2.2, glintAlpha);
        }
      }
    }

    if (powderDisabled) return;

    // Soft warm candlelight bloom illuminating the lower half of the poured powder cloud
    const [lr, lg, lb] = theme.lit;
    const candleBloom = ctx.createRadialGradient(
      rimX + streamSway * 0.6,
      rimY - pourSpan * 0.18,
      w * 0.015,
      rimX + streamSway * 0.6,
      rimY - pourSpan * 0.18,
      w * (0.19 + boost * 0.03)
    );
    candleBloom.addColorStop(0, `rgba(${lr}, ${lg}, ${lb}, ${(0.11 + boost * 0.07).toFixed(3)})`);
    candleBloom.addColorStop(0.55, `rgba(${lr}, ${lg}, ${lb}, ${(0.04 + boost * 0.025).toFixed(3)})`);
    candleBloom.addColorStop(1, `rgba(${lr}, ${lg}, ${lb}, 0)`);
    ctx.fillStyle = candleBloom;
    ctx.beginPath();
    ctx.arc(rimX + streamSway * 0.6, rimY - pourSpan * 0.18, w * (0.19 + boost * 0.03), 0, Math.PI * 2);
    ctx.fill();

    // Soft elliptical landing meniscus glow where poured powder touches the drink crema or foam
    const pulse = 0.72 + 0.28 * Math.sin(state.time * 2.1);
    ctx.save();
    ctx.translate(rimX + streamSway, rimY + h * 0.012);
    ctx.scale(1.45, 0.44);
    const meniscus = ctx.createRadialGradient(0, 0, w * 0.01, 0, 0, w * 0.13);
    meniscus.addColorStop(0, `rgba(${lr}, ${lg}, ${lb}, ${(0.14 * pulse + boost * 0.06).toFixed(3)})`);
    meniscus.addColorStop(0.65, `rgba(${lr}, ${lg}, ${lb}, ${(0.05 * pulse).toFixed(3)})`);
    meniscus.addColorStop(1, `rgba(${lr}, ${lg}, ${lb}, 0)`);
    ctx.fillStyle = meniscus;
    ctx.beginPath();
    ctx.arc(0, 0, w * 0.13, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    // 2. Poured Powdery Cascade (gravity-accelerated dusty wisps falling from top edge to drink rim)
    ctx.globalCompositeOperation = 'source-over';
    for (let i = 0; i < state.pourPuffs.length; i += 1) {
      let p = state.pourPuffs[i];
      p.age += dt;
      if (p.age >= p.life) {
        p = spawnPourPuff(state);
        state.pourPuffs[i] = p;
      }
      const prog = p.age / p.life;
      const gravProg = Math.pow(prog, 1.32);
      const y = pourStartY + gravProg * pourSpan;
      const coneSpread = w * (0.012 + gravProg * 0.036);
      const x =
        rimX +
        streamSway * gravProg +
        p.laneBias * coneSpread +
        Math.sin(p.phase + prog * 3.5 - state.time * 1.2) * p.swayAmp * gravProg;
      const drawSize = p.startSize + (p.endSize - p.startSize) * Math.pow(prog, 0.9);
      const env = Math.min(1, prog / 0.14) * Math.pow(1 - Math.max(0, prog - 0.72) / 0.28, 1.15);

      ctx.save();
      ctx.globalAlpha = p.peakAlpha * env;
      ctx.translate(x, y);
      ctx.rotate(p.angle + p.spin * p.age);
      ctx.scale(0.84 + gravProg * 0.26, 1.48 - gravProg * 0.25);
      ctx.drawImage(cascadeSprite, -drawSize * 0.5, -drawSize * 0.5, drawSize, drawSize);
      ctx.restore();
    }

    // 3. Surface Impact Dust Bloom right where poured powder hits the crema/foam/ice
    for (let i = 0; i < state.bloomPuffs.length; i += 1) {
      let b = state.bloomPuffs[i];
      b.age += dt;
      if (b.age >= b.life) {
        b = spawnBloomPuff(state);
        state.bloomPuffs[i] = b;
      }
      const prog = b.age / b.life;
      const env = Math.min(1, prog / 0.18) * Math.pow(1 - prog, 1.35);
      const x = rimX + b.offsetX + b.vx * b.age + streamSway;
      const y = rimY + h * 0.008 + b.vy * b.age;
      const drawSize = b.startSize + (b.endSize - b.startSize) * Math.pow(prog, 0.75);

      ctx.save();
      ctx.globalAlpha = b.peakAlpha * env;
      ctx.translate(x, y);
      ctx.rotate(b.angle + b.spin * b.age);
      ctx.scale(1.22, 0.76);
      ctx.drawImage(hazeSprite, -drawSize * 0.5, -drawSize * 0.5, drawSize, drawSize);
      ctx.restore();
    }

    // 4. Crisp Gravity-Accelerated Powder Grains inside the Pour Stream (with thermal updraft curl)
    for (let i = 0; i < state.pourGrains.length; i += 1) {
      let g = state.pourGrains[i];
      g.age += dt;
      if (g.age >= g.life) {
        g = spawnPourGrain(state);
        state.pourGrains[i] = g;
      }
      const prog = g.age / g.life;
      const gravProg = Math.pow(prog, 1.38);
      const thermalCurl =
        isHot && g.isOuterWisp && gravProg > 0.65
          ? (gravProg - 0.65) * 2.8 * h * 0.024
          : 0;
      const y = pourStartY + gravProg * pourSpan - thermalCurl;
      const coneWidth = g.isOuterWisp
        ? w * (0.022 + gravProg * 0.076)
        : w * (0.011 + gravProg * 0.036);
      const curlJitter = g.isOuterWisp
        ? Math.sin(g.phase + prog * 4.8 - state.time * 1.4) * w * 0.016
        : Math.sin(g.phase + prog * 3.0) * w * 0.003;
      const x = rimX + streamSway * gravProg + g.gauss * coneWidth + curlJitter;

      const fadeIn = Math.min(1, prog / 0.08);
      const fadeOut = Math.min(1, (1 - prog) / 0.18);
      const alpha = g.peakAlpha * fadeIn * fadeOut * (1 + boost * 0.15);
      if (alpha <= 0.02) continue;

      const rgb = g.isLit ? theme.lit : theme.grain;
      ctx.save();
      ctx.fillStyle = `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${alpha.toFixed(3)})`;
      ctx.translate(x, y);
      ctx.rotate(g.angle);
      ctx.beginPath();
      ctx.ellipse(0, 0, g.rx, g.ry * (0.85 + gravProg * 0.45), 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }

    // 5. Fine drifting powder motes around the rim caught in thermal smoke eddies
    for (let i = 0; i < state.grains.length; i += 1) {
      let g = state.grains[i];
      g.age += dt;
      if (g.age >= g.life) {
        g = spawnPowderGrain(state);
        state.grains[i] = g;
      }
      const prog = g.age / g.life;
      const fadeIn = Math.min(1, prog / 0.18);
      const fadeOut = Math.min(1, (1 - prog) / 0.28);
      const thermalLift = isHot ? Math.sin(prog * Math.PI) * h * 0.026 : 0;
      const y = g.startY + g.vy * g.age - thermalLift;
      const swirl =
        Math.sin(g.phase + prog * 4.4 - state.time * 0.9) * g.swayAmp +
        Math.cos(g.phase * 1.3 + prog * 2.5) * g.swayAmp * 0.4;
      const x = g.startX + swirl;

      const shimmer = 0.74 + 0.26 * Math.sin(state.time * 2.4 + g.phase);
      const alpha = g.peakAlpha * fadeIn * fadeOut * shimmer * (1 + boost * 0.18);
      if (alpha <= 0.02) continue;

      const rgb = g.isLit ? theme.lit : theme.grain;
      ctx.save();
      ctx.fillStyle = `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${alpha.toFixed(3)})`;
      ctx.translate(x, y);
      ctx.rotate(g.angle + g.spin * g.age);
      ctx.beginPath();
      ctx.ellipse(0, 0, g.rx, g.ry, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
  }

  function runFxLoop(ts) {
    if (!fxLastTs) fxLastTs = ts;
    const dt = Math.min(0.05, Math.max(0.008, (ts - fxLastTs) / 1000));
    fxLastTs = ts;

    activeFxCanvases.forEach((canvas) => {
      if (!document.body.contains(canvas)) {
        activeFxCanvases.delete(canvas);
        return;
      }
      const state = fxCanvasStates.get(canvas);
      if (state) {
        if (!state.initialized) resizeFxCanvasState(canvas, state);
        stepAndDrawFxCanvas(state, dt);
      }
    });

    if (activeFxCanvases.size > 0 && !(fxReducedMotionQuery && fxReducedMotionQuery.matches)) {
      fxRafId = window.requestAnimationFrame(runFxLoop);
    } else {
      fxRafId = null;
      fxLastTs = 0;
    }
  }

  function ensureFxObservers() {
    if (!fxIntersectionObserver && 'IntersectionObserver' in window) {
      fxIntersectionObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const canvas = entry.target;
            if (!(canvas instanceof HTMLCanvasElement)) return;
            const state = initFxCanvasState(canvas);
            if (entry.isIntersecting) {
              resizeFxCanvasState(canvas, state);
              if (fxReducedMotionQuery && fxReducedMotionQuery.matches) {
                stepAndDrawFxCanvas(state, 0.016);
              } else {
                activeFxCanvases.add(canvas);
                if (!fxRafId) fxRafId = window.requestAnimationFrame(runFxLoop);
              }
            } else {
              activeFxCanvases.delete(canvas);
            }
          });
        },
        { rootMargin: '80px 0px' }
      );
    }

    if (!fxResizeObserver && 'ResizeObserver' in window) {
      fxResizeObserver = new ResizeObserver((entries) => {
        entries.forEach((entry) => {
          const canvas = entry.target;
          if (!(canvas instanceof HTMLCanvasElement)) return;
          const state = fxCanvasStates.get(canvas);
          if (state) {
            resizeFxCanvasState(canvas, state);
            if (fxReducedMotionQuery && fxReducedMotionQuery.matches) {
              stepAndDrawFxCanvas(state, 0.016);
            }
          }
        });
      });
    }
  }

  function syncFxCanvases() {
    // Purge detached canvases first
    activeFxCanvases.forEach((canvas) => {
      if (!document.body.contains(canvas)) {
        activeFxCanvases.delete(canvas);
      }
    });

    ensureFxObservers();

    document.querySelectorAll('.fx-canvas').forEach((canvas) => {
      if (!(canvas instanceof HTMLCanvasElement)) return;
      const state = initFxCanvasState(canvas);

      if (!observedFxCanvases.has(canvas)) {
        observedFxCanvases.add(canvas);
        if (fxIntersectionObserver) fxIntersectionObserver.observe(canvas);
        if (fxResizeObserver) fxResizeObserver.observe(canvas);
      }

      if (fxReducedMotionQuery && fxReducedMotionQuery.matches) {
        stepAndDrawFxCanvas(state, 0.016);
      } else if (!fxIntersectionObserver || canvas.closest('.product-modal')) {
        resizeFxCanvasState(canvas, state);
        activeFxCanvases.add(canvas);
        if (!fxRafId) fxRafId = window.requestAnimationFrame(runFxLoop);
      }
    });
  }

  function projectImgPointToCanvas(imgEl, canvasW, canvasH, normX, normY, posX = 0.5, posY = 0.5) {
    if (!imgEl || !imgEl.naturalWidth || !imgEl.naturalHeight) {
      return { x: normX * canvasW, y: normY * canvasH };
    }
    const imgRatio = imgEl.naturalWidth / imgEl.naturalHeight;
    const boxRatio = canvasW / canvasH;
    let drawW = canvasW;
    let drawH = canvasH;
    let offsetX = 0;
    let offsetY = 0;

    if (imgRatio > boxRatio) {
      drawH = canvasH;
      drawW = canvasH * imgRatio;
      offsetX = (canvasW - drawW) * posX;
    } else {
      drawW = canvasW;
      drawH = canvasW / imgRatio;
      offsetY = (canvasH - drawH) * posY;
    }

    return {
      x: offsetX + normX * drawW,
      y: offsetY + normY * drawH,
    };
  }

  function initEditorialFxCanvases() {
    const specs = [
      {
        canvas: document.getElementById('hero-fx-canvas'),
        img: document.querySelector('.hero-bg-img'),
        posX: 0.5,
        posY: 0.48,
        vessels: [
          { normX: 0.21, normY: 0.56, spread: 0.025, heightFrac: 0.2 },
          { normX: 0.63, normY: 0.56, spread: 0.032, heightFrac: 0.23 },
        ],
        hasEmbers: true,
      },
      {
        canvas: document.getElementById('about-fx-canvas'),
        img: document.querySelector('.about-img'),
        posX: 0.5,
        posY: 0.5,
        vessels: [
          { normX: 0.41, normY: 0.64, spread: 0.028, heightFrac: 0.24 },
          { normX: 0.66, normY: 0.61, spread: 0.032, heightFrac: 0.22 },
        ],
        hasEmbers: false,
      },
      {
        canvas: document.getElementById('promo-fx-canvas'),
        img: document.querySelector('.promo-bg-img'),
        posX: 0.5,
        posY: 0.5,
        isChilled: true,
        vessels: [
          { normX: 0.36, normY: 0.41, spread: 0.03, heightFrac: 0.12 },
          { normX: 0.67, normY: 0.40, spread: 0.03, heightFrac: 0.12 },
        ],
        hasEmbers: true,
        emberAnchor: { normX: 0.89, normY: 0.28 },
      },
    ];

    specs.forEach((spec) => {
      const { canvas, img, posX, posY, vessels, hasEmbers, isChilled, emberAnchor } = spec;
      if (!(canvas instanceof HTMLCanvasElement)) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const smokeSprite = getSmokeSprite(!isChilled);
      let w = 0;
      let h = 0;
      let dpr = 1;
      let time = Math.random() * 10;
      let visible = true;
      let rafId = null;
      let lastTs = 0;

      const wisps = [];
      vessels.forEach((v, vIdx) => {
        for (let i = 0; i < 14; i += 1) {
          wisps.push({
            vIdx,
            prog: i / 14,
            speed: (isChilled ? 0.18 : 0.26) + Math.random() * 0.14,
            offsetFrac: (Math.random() - 0.5) * 2,
            phase: Math.random() * Math.PI * 2,
            spin: (Math.random() - 0.5) * 0.4,
            angle: Math.random() * Math.PI * 2,
            peakAlpha: (isChilled ? 0.032 : 0.048) + Math.random() * 0.028,
          });
        }
      });

      const embers = hasEmbers
        ? Array.from({ length: 18 }, () => ({
            prog: Math.random(),
            speed: 0.18 + Math.random() * 0.18,
            ox: (Math.random() - 0.5) * 0.14,
            oy: (Math.random() - 0.5) * 0.12,
            phase: Math.random() * Math.PI * 2,
            size: 1.1 + Math.random() * 1.4,
          }))
        : [];

      const resize = () => {
        const rect = canvas.getBoundingClientRect();
        if (!rect.width || !rect.height) return false;
        dpr = Math.min(window.devicePixelRatio || 1, 1.75);
        w = rect.width;
        h = rect.height;
        const tw = Math.round(w * dpr);
        const th = Math.round(h * dpr);
        if (canvas.width !== tw || canvas.height !== th) {
          canvas.width = tw;
          canvas.height = th;
        }
        return true;
      };

      const renderFrame = (dt) => {
        if (!w || !h) {
          if (!resize()) return;
        }
        time += dt;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        ctx.clearRect(0, 0, w, h);
        ctx.globalCompositeOperation = 'screen';

        const mapped = vessels.map((v) => ({
          ...v,
          pt: projectImgPointToCanvas(img, w, h, v.normX, v.normY, posX, posY),
        }));

        wisps.forEach((p) => {
          p.prog += p.speed * dt;
          if (p.prog >= 1) p.prog -= 1;
          const vessel = mapped[p.vIdx];
          const fadeIn = Math.min(1, p.prog / 0.18);
          const fadeOut = Math.pow(1 - p.prog, 1.45);
          const alpha = p.peakAlpha * fadeIn * fadeOut;
          if (alpha <= 0.002) return;

          const sway = Math.sin(p.phase + p.prog * 4.4 - time * 0.9) * w * 0.016;
          const driftDir = isChilled ? 0.55 : -1;
          const x = vessel.pt.x + p.offsetFrac * vessel.spread * w + sway;
          const y = vessel.pt.y + driftDir * p.prog * vessel.heightFrac * h;
          const size = (0.048 + p.prog * 0.095) * Math.min(w, h * 1.25);

          ctx.save();
          ctx.globalAlpha = alpha;
          ctx.translate(x, y);
          ctx.rotate(p.angle + p.spin * p.prog * 3);
          ctx.scale(isChilled ? 1.1 : 0.95, isChilled ? 0.9 : 1.24);
          ctx.drawImage(smokeSprite, -size * 0.5, -size * 0.5, size, size);
          ctx.restore();
        });

        if (!isChilled) {
          mapped.forEach((vessel, idx) => {
            drawSmokeWisp(
              ctx,
              vessel.pt.x,
              vessel.pt.y,
              h * vessel.heightFrac * 0.85,
              w * 0.38,
              time,
              idx * 2.3 + 0.7,
              0.042
            );
          });
        }

        if (hasEmbers) {
          const anchor = emberAnchor || { normX: 0.28, normY: 0.44 };
          const hearthPt = projectImgPointToCanvas(img, w, h, anchor.normX, anchor.normY, posX, posY);
          embers.forEach((e) => {
            e.prog += e.speed * dt;
            if (e.prog >= 1) e.prog -= 1;
            const alpha = Math.sin(e.prog * Math.PI) * 0.48;
            if (alpha <= 0.02) return;
            const ex = hearthPt.x + e.ox * w + Math.sin(time * 1.6 + e.phase) * w * 0.012;
            const ey = hearthPt.y + e.oy * h - e.prog * h * 0.12;
            ctx.fillStyle = `rgba(255, 196, 118, ${alpha.toFixed(3)})`;
            ctx.beginPath();
            ctx.arc(ex, ey, e.size, 0, Math.PI * 2);
            ctx.fill();
          });
        }
      };

      const tick = (ts) => {
        if (!lastTs) lastTs = ts;
        const dt = Math.min(0.05, Math.max(0.008, (ts - lastTs) / 1000));
        lastTs = ts;
        renderFrame(dt);
        if (visible && !(fxReducedMotionQuery && fxReducedMotionQuery.matches)) {
          rafId = window.requestAnimationFrame(tick);
        } else {
          rafId = null;
          lastTs = 0;
        }
      };

      resize();
      if (fxReducedMotionQuery && fxReducedMotionQuery.matches) {
        renderFrame(0.016);
      } else {
        rafId = window.requestAnimationFrame(tick);
      }

      if ('ResizeObserver' in window) {
        new ResizeObserver(() => {
          resize();
          if (fxReducedMotionQuery && fxReducedMotionQuery.matches) renderFrame(0.016);
        }).observe(canvas);
      }
      if ('IntersectionObserver' in window) {
        new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              visible = entry.isIntersecting;
              if (visible && !rafId && !(fxReducedMotionQuery && fxReducedMotionQuery.matches)) {
                lastTs = 0;
                rafId = window.requestAnimationFrame(tick);
              }
            });
          },
          { rootMargin: '60px 0px' }
        ).observe(canvas);
      }
    });
  }

  function createProductCardHTML(product, isSpotlight, index) {
    const cardClass = isSpotlight ? 'bestseller-card' : 'product-card';
    const editionNum = typeof index === 'number' ? String(index + 1).padStart(2, '0') : '';
    const mediaTag = isSpotlight
      ? `<span class="product-media-label">Reserve No. ${editionNum}</span>`
      : product.bestSeller
      ? '<span class="product-media-label">House Favorite</span>'
      : '';
    const tempTag = `<span class="product-temp-tag">${product.defaultTemp}</span>`;
    const notesBlock = isSpotlight
      ? `<p class="product-notes-line">${product.notes}</p>`
      : `<p class="product-sensory-line">${product.notes}</p>`;
    const footerActions = isSpotlight
      ? `
        <div class="product-actions-dual">
          <button
            type="button"
            class="customize-btn"
            data-preview-id="${product.id}"
            aria-label="Customize ${product.name}"
          >
            Customize
          </button>
          <button
            type="button"
            class="add-to-cart-btn"
            data-add-id="${product.id}"
            aria-label="Add ${product.name} to cart"
          >
            Add to Cart
          </button>
        </div>`
      : `
        <button
          type="button"
          class="add-to-cart-btn"
          data-add-id="${product.id}"
          aria-label="Add ${product.name} to cart"
        >
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M6 7h12l1 12H5L6 7z"></path>
            <path d="M9 7V5a3 3 0 016 0v2"></path>
          </svg>
          <span>Add to Cart</span>
        </button>`;

    return `
      <article class="${cardClass}" data-product-id="${product.id}">
        <span class="card-corner-tl" aria-hidden="true"></span>
        <span class="card-corner-br" aria-hidden="true"></span>
        <div class="product-media" data-preview-id="${product.id}" role="button" tabindex="0" aria-label="View details and customize ${product.name}">
          <img
            src="${product.image}"
            alt="${product.name}, ${product.categoryLabel}"
            class="product-img"
            loading="lazy"
            referrerpolicy="no-referrer"
          />
          ${buildFxStage(product)}
          ${mediaTag}
          ${tempTag}
          <span class="product-quick-hint" aria-hidden="true">Customize &amp; View</span>
        </div>
        <div class="product-body">
          <p class="product-kicker">${product.categoryLabel}</p>
          <h3 class="product-title" data-preview-id="${product.id}">${product.name}</h3>
          <p class="product-desc">${product.desc}</p>
          ${notesBlock}
          <div class="product-footer">
            <span class="product-price">${formatPeso(product.price)}</span>
            ${footerActions}
          </div>
        </div>
      </article>
    `;
  }

  // ==========================================================================
  // Rendering Catalog, Mood Profiles, Sorting & Filters
  // ==========================================================================

  function getProductMood(product) {
    const id = product.id;
    if (
      id === 'matcha-latte' ||
      id === 'strawberry-matcha' ||
      id === 'matcha-espresso-fusion' ||
      id === 'green-tea'
    ) {
      return 'matcha';
    }
    if (
      id === 'classic-black-tea' ||
      id === 'english-breakfast-tea' ||
      id === 'earl-grey-tea' ||
      id === 'jasmine-green-tea' ||
      id === 'honey-lemon-tea' ||
      id === 'peach-iced-tea' ||
      id === 'passion-fruit-tea' ||
      id === 'mango-green-tea' ||
      id === 'chamomile-tea' ||
      id === 'hibiscus-tea'
    ) {
      return 'botanical';
    }
    if (
      id === 'classic-espresso' ||
      id === 'americano' ||
      id === 'cappuccino' ||
      id === 'cafe-latte' ||
      id === 'mocha' ||
      id === 'hazelnut-coffee' ||
      id === 'iced-coffee' ||
      id === 'cold-brew' ||
      id === 'iced-americano' ||
      id === 'iced-mocha' ||
      id === 'vietnamese-coffee'
    ) {
      return 'bold';
    }
    return 'caramel';
  }

  function renderBestSellers() {
    if (!bestsellerGrid) return;
    const bestSellerOrder = [
      'caramel-macchiato',
      'spanish-latte',
      'matcha-latte',
      'brown-sugar-milk-tea',
      'iced-mocha',
      'strawberry-matcha',
    ];
    const items = bestSellerOrder
      .map((id) => getProductById(id))
      .filter(Boolean);

    bestsellerGrid.innerHTML = items
      .map((item, idx) => createProductCardHTML(item, true, idx))
      .join('');
    syncFxCanvases();
  }

  function matchesFilter(product) {
    const matchesCat = activeFilter === 'all' || product.category === activeFilter;
    if (!matchesCat) return false;
    const matchesMood = activeMood === 'all' || getProductMood(product) === activeMood;
    if (!matchesMood) return false;
    if (!searchQuery) return true;

    const q = searchQuery.toLowerCase();
    return (
      product.name.toLowerCase().includes(q) ||
      product.desc.toLowerCase().includes(q) ||
      product.notes.toLowerCase().includes(q) ||
      product.categoryLabel.toLowerCase().includes(q)
    );
  }

  function sortProducts(list) {
    if (activeSort === 'price-asc') {
      return [...list].sort((a, b) => a.price - b.price);
    }
    if (activeSort === 'price-desc') {
      return [...list].sort((a, b) => b.price - a.price);
    }
    if (activeSort === 'featured') {
      return [...list].sort((a, b) => (b.bestSeller ? 1 : 0) - (a.bestSeller ? 1 : 0));
    }
    return list;
  }

  function renderCollections() {
    const coffees = sortProducts(PRODUCTS.filter((p) => p.group === 'coffee' && matchesFilter(p)));
    const teas = sortProducts(PRODUCTS.filter((p) => p.group === 'tea' && matchesFilter(p)));

    if (coffeeGrid && coffeeEmpty) {
      coffeeGrid.innerHTML = coffees.map((item) => createProductCardHTML(item, false)).join('');
      coffeeEmpty.hidden = coffees.length > 0;
    }

    if (teaGrid && teaEmpty) {
      teaGrid.innerHTML = teas.map((item) => createProductCardHTML(item, false)).join('');
      teaEmpty.hidden = teas.length > 0;
    }

    if (coffeeCountNote) {
      coffeeCountNote.textContent = coffees.length === 20
        ? 'Roastery Menu | 20 Creations'
        : `Roastery Menu | Showing ${coffees.length} of 20`;
    }

    if (teaCountNote) {
      teaCountNote.textContent = teas.length === 20
        ? 'Tea Apothecary | 20 Creations'
        : `Tea Apothecary | Showing ${teas.length} of 20`;
    }

    if (activeFilterBar && activeFilterText) {
      const hasActiveControls = activeFilter !== 'all' || activeMood !== 'all' || searchQuery.length > 0;
      activeFilterBar.hidden = !hasActiveControls;
      if (hasActiveControls) {
        const totalMatches = coffees.length + teas.length;
        const moodLabels = {
          bold: 'Smoky & Bold',
          caramel: 'Velvet & Caramel',
          matcha: 'Ceremonial Matcha',
          botanical: 'Floral & Orchard',
        };
        const catLabels = {
          'hot-coffee': 'Hot Coffee',
          'iced-coffee': 'Iced Coffee',
          'brewed-tea': 'Brewed & Fruit Tea',
          'milk-tea': 'Milk Tea & Matcha',
        };
        const activeParts = [];
        if (activeFilter !== 'all') activeParts.push(catLabels[activeFilter] || activeFilter);
        if (activeMood !== 'all') activeParts.push(moodLabels[activeMood] || activeMood);
        if (searchQuery) activeParts.push(`“${escapeHtml(searchQuery)}”`);
        activeFilterText.innerHTML = `Showing <strong>${totalMatches}</strong> of 40 creations for <strong>${activeParts.join(' · ')}</strong>`;
      }
    }
    syncFxCanvases();
  }

  function resetFilters() {
    activeFilter = 'all';
    activeMood = 'all';
    activeSort = 'curated';
    searchQuery = '';
    if (searchInput) searchInput.value = '';
    if (searchClearBtn) searchClearBtn.hidden = true;
    if (sortSelect) sortSelect.value = 'curated';

    filterTabs.forEach((tab) => {
      const isAll = tab.dataset.filter === 'all';
      tab.classList.toggle('is-active', isAll);
      tab.setAttribute('aria-selected', String(isAll));
    });

    moodBtns.forEach((btn) => {
      btn.classList.toggle('is-active', btn.dataset.mood === 'all');
    });

    renderCollections();
  }

  // ==========================================================================
  // Shopping Cart System (supports customization notes)
  // ==========================================================================

  function makeCartKey(productId, optionLabel, unitPrice) {
    return `${productId}::${optionLabel || 'Standard'}::${unitPrice}`;
  }

  function getEntryUnitPrice(entry, product) {
    return typeof entry.unitPrice === 'number' && entry.unitPrice > 0
      ? entry.unitPrice
      : product.price;
  }

  const buttonResetTimers = new WeakMap();
  function flashAddedButton(btn, addedLabel = 'Added ✓') {
    if (!(btn instanceof HTMLElement)) return;
    if (!btn.dataset.originalHtml) {
      btn.dataset.originalHtml = btn.innerHTML;
    }
    const prevTimer = buttonResetTimers.get(btn);
    if (prevTimer) clearTimeout(prevTimer);

    btn.classList.add('is-added');
    btn.textContent = addedLabel;
    const t = setTimeout(() => {
      btn.classList.remove('is-added');
      if (btn.dataset.originalHtml) {
        btn.innerHTML = btn.dataset.originalHtml;
      }
      buttonResetTimers.delete(btn);
    }, 950);
    buttonResetTimers.set(btn, t);
  }

  function addToCart(productId, quantity = 1, optionLabel = '', unitPriceOverride = null, silentToast = false) {
    const product = getProductById(productId);
    if (!product) return;

    const cleanOption = optionLabel || `Petite 8oz, ${product.defaultTemp}, Classic Sweetness`;
    const unitPrice =
      typeof unitPriceOverride === 'number' && unitPriceOverride > 0
        ? unitPriceOverride
        : product.price;
    const key = makeCartKey(productId, cleanOption, unitPrice);
    const existing = cart.find((entry) => (entry.key || entry.id) === key);

    if (existing) {
      existing.qty += quantity;
    } else {
      cart.push({
        key,
        id: productId,
        qty: quantity,
        option: cleanOption,
        unitPrice,
      });
    }

    saveCart();
    renderCart();
    if (cartCountEl) {
      cartCountEl.classList.remove('is-bumped');
      void cartCountEl.offsetWidth;
      cartCountEl.classList.add('is-bumped');
      setTimeout(() => cartCountEl.classList.remove('is-bumped'), 190);
    }
    if (!silentToast) {
      showToast(`Added ${product.name} to your bag`);
    }
  }

  function updateQuantity(cartKey, delta) {
    const item = cart.find((entry) => (entry.key || entry.id) === cartKey);
    if (!item) return;

    item.qty += delta;
    if (item.qty <= 0) {
      cart = cart.filter((entry) => (entry.key || entry.id) !== cartKey);
    }

    saveCart();
    renderCart();
  }

  function removeFromCart(cartKey) {
    cart = cart.filter((entry) => (entry.key || entry.id) !== cartKey);
    saveCart();
    renderCart();
  }

  function clearCart() {
    cart = [];
    saveCart();
    renderCart();
  }

  function getCartTotals() {
    let totalItems = 0;
    let subtotal = 0;

    cart.forEach((entry) => {
      const product = getProductById(entry.id);
      if (!product) return;
      totalItems += entry.qty;
      subtotal += getEntryUnitPrice(entry, product) * entry.qty;
    });

    return { totalItems, subtotal };
  }

  function renderCartUpsell() {
    if (!cartUpsellSlot) return;
    if (cart.length === 0) {
      cartUpsellSlot.hidden = true;
      cartUpsellSlot.innerHTML = '';
      return;
    }

    const inCartIds = new Set(cart.map((e) => e.id));
    const hasCoffee = cart.some((e) => getProductById(e.id)?.group === 'coffee');
    const candidates = hasCoffee
      ? ['strawberry-matcha', 'brown-sugar-milk-tea', 'matcha-latte', 'hibiscus-tea', 'spanish-latte']
      : ['caramel-macchiato', 'spanish-latte', 'iced-mocha', 'salted-caramel-latte', 'strawberry-matcha'];

    const pickId = candidates.find((id) => !inCartIds.has(id));
    const suggestion = pickId ? getProductById(pickId) : null;

    if (!suggestion) {
      cartUpsellSlot.hidden = true;
      cartUpsellSlot.innerHTML = '';
      return;
    }

    cartUpsellSlot.hidden = false;
    cartUpsellSlot.innerHTML = `
      <p class="cart-upsell-heading">Complete Your Candlelit Tasting</p>
      <div class="cart-upsell-card">
        <img src="${suggestion.image}" alt="${suggestion.name}" class="cart-upsell-img" referrerpolicy="no-referrer" />
        <div>
          <h4 class="cart-upsell-name">${suggestion.name}</h4>
          <p class="cart-upsell-price tabular-nums">${suggestion.defaultTemp} &middot; ${formatPeso(suggestion.price)}</p>
        </div>
        <button type="button" class="cart-upsell-add" data-upsell-id="${suggestion.id}">+ Add</button>
      </div>
    `;
  }

  function renderCart() {
    const { totalItems, subtotal } = getCartTotals();

    if (cartCountEl) {
      cartCountEl.textContent = String(totalItems);
    }
    if (cartItemSummaryEl) {
      cartItemSummaryEl.textContent =
        totalItems === 1 ? '1 item selected' : `${totalItems} items selected`;
    }
    if (cartSubtotalEl) {
      cartSubtotalEl.textContent = formatPeso(subtotal);
    }
    if (cartTotalEl) {
      cartTotalEl.textContent = formatPeso(subtotal);
    }

    if (cartGiftText && cartGiftFill) {
      const pct = Math.min(100, Math.round((subtotal / GIFT_THRESHOLD) * 100));
      cartGiftFill.style.width = `${pct}%`;
      if (subtotal >= GIFT_THRESHOLD) {
        cartGiftText.innerHTML =
          '<strong>Complimentary Velvet Gold Box &amp; Handwritten Card</strong> unlocked for your order';
      } else {
        const remaining = GIFT_THRESHOLD - subtotal;
        cartGiftText.innerHTML =
          `Add <strong class="tabular-nums">${formatPeso(remaining)}</strong> for complimentary velvet gold-box presentation &amp; handwritten card`;
      }
    }

    if (cartPackagingTier) {
      cartPackagingTier.textContent =
        subtotal >= GIFT_THRESHOLD ? 'Complimentary Velvet Gold Box' : 'Signature Kraft';
    }

    if (!cartItemsBody || !cartDrawerFooter) return;

    if (cart.length === 0) {
      cartItemsBody.innerHTML = `
        <div class="cart-empty">
          <p class="cart-empty-title">Your bag is currently empty</p>
          <p>Explore our roasted espresso blends, silky lattes, and whole-leaf teas to begin your order.</p>
        </div>
      `;
      cartDrawerFooter.hidden = true;
      renderCartUpsell();
      return;
    }

    cartDrawerFooter.hidden = false;
    cartItemsBody.innerHTML = cart
      .map((entry) => {
        const product = getProductById(entry.id);
        if (!product) return '';
        const itemKey = entry.key || entry.id;
        const unitPrice = getEntryUnitPrice(entry, product);
        const lineTotal = unitPrice * entry.qty;
        const optionText = entry.option || `Petite 8oz, ${product.defaultTemp}, Classic Sweetness`;
        return `
          <div class="cart-item">
            <img src="${product.image}" alt="${product.name}" class="cart-item-img" referrerpolicy="no-referrer" />
            <div>
              <div class="cart-item-top">
                <h3 class="cart-item-name">${product.name}</h3>
                <button type="button" class="cart-item-remove" data-remove-key="${itemKey}">Remove</button>
              </div>
              <p class="cart-item-option">${optionText}</p>
              <p class="cart-item-unit tabular-nums">${formatPeso(unitPrice)} each</p>
              <div class="cart-item-controls">
                <div class="qty-stepper">
                  <button type="button" class="qty-btn" data-qty-dec="${itemKey}" aria-label="Decrease quantity of ${product.name}">&minus;</button>
                  <span class="qty-val">${entry.qty}</span>
                  <button type="button" class="qty-btn" data-qty-inc="${itemKey}" aria-label="Increase quantity of ${product.name}">+</button>
                </div>
                <span class="cart-item-line-total">${formatPeso(lineTotal)}</span>
              </div>
            </div>
          </div>
        `;
      })
      .join('');

    renderCartUpsell();
  }

  function openCartDrawer() {
    if (!cartDrawer || !cartBackdrop) return;
    cartDrawer.hidden = false;
    cartBackdrop.hidden = false;
    cartOpenBtn?.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    cartCloseBtn?.focus();
  }

  function closeCartDrawer() {
    if (!cartDrawer || !cartBackdrop) return;
    cartDrawer.hidden = true;
    cartBackdrop.hidden = true;
    cartOpenBtn?.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  // ==========================================================================
  // Product Preview Modal (with Real Serving & Vessel Customization) & Demo Checkout
  // ==========================================================================

  const POWDER_LABELS = {
    cocoa: 'Dutch Cocoa Cloud',
    espresso: 'Fresh Espresso Mist',
    caramel: 'Caramelized Sugar Dust',
    vanilla: 'Madagascar Vanilla Sugar',
    matcha: 'Ceremonial Uji Matcha Dust',
    botanical: 'Golden Honey Blossom Dust',
  };

  function getTablewareSummary(product) {
    if (product.id === 'classic-espresso') {
      return 'Petite 3oz 24k gold-trimmed black Limoges Italian demitasse cup & saucer, hammered brass charger plate, tiny baroque gold demitasse spoon & bean dish';
    }
    if (product.id === 'matcha-latte') {
      return '24k gold-veined kintsugi chawan bowl, black-and-gold filigree plate, walnut-and-brass tray, bamboo chasen whisk & baroque gold spoon';
    }
    if (product.id === 'vietnamese-coffee') {
      return 'Ornate 24k gold-filigree phin filter, gold-rimmed crystal rocks glass, scalloped black-and-gold Limoges saucer, hammered gold charger & baroque spoon';
    }
    if (product.id === 'cold-brew' || product.id === 'iced-americano') {
      return 'Heavy cut-crystal or brass-rimmed rocks tumbler glass, marble-and-gold coaster, walnut serving tray & vintage brass tasting spoon';
    }
    if (product.id === 'caramel-macchiato') {
      return '24k gold-rimmed footed crystal macchiato glass mug with handle, black-and-gold Limoges saucer, hammered gold charger, baroque gold spoon & caramel dish';
    }
    if (product.id === 'spanish-latte') {
      return 'Cut-crystal cup in ornate 24k gold filigree holder, gilded black saucer, hammered gold charger, baroque spoon & crystal spice bowl';
    }
    if (product.id === 'cafe-latte') {
      return '24k gold-encrusted black Limoges porcelain latte cup, scalloped double gilded plates, baroque gold spoon & biscotti side dish';
    }
    if (product.id === 'honey-lemon-tea') {
      return '24k gold-rimmed cut-crystal teacup, black-and-gold filigree saucer, hammered gold charger, baroque spoon & gilded crystal honey pot';
    }
    if (product.id === 'english-breakfast-tea') {
      return 'Ivory-and-24k-gold Royal Limoges teacup & matching teapot, scalloped double gilded plates, crystal creamer & baroque gold spoon';
    }
    if (product.id === 'green-tea' || product.id === 'classic-black-tea') {
      return '24k gold-filigree Royal porcelain teacup, scalloped gilded charger plates, antique brass tea strainer & baroque gold spoon';
    }
    if (product.defaultTemp === 'Hot') {
      return product.group === 'tea'
        ? '24k gold-rimmed Limoges porcelain or crystal teacup, black-and-gold filigree saucer, hammered gold charger & baroque gold spoon'
        : '24k gold-encrusted Limoges porcelain or fluted crystal latte cup, gilded filigree saucer, hammered gold charger & baroque gold spoon';
    }
    if (product.category === 'milk-tea') {
      return 'Tall 24k gold-rimmed fluted or cut-crystal boba milk tea tumbler glass, black-and-gold filigree saucer, hammered gold charger, wide brushed gold boba straw & baroque spoon';
    }
    return 'Tall 24k gold-rimmed fluted or cut-crystal Collins highball glass, black-and-gold filigree saucer, hammered gold charger plate, brushed gold straw & baroque spoon';
  }

  function getDrinkCraftSpecs(product) {
    const id = product.id;
    let brewSpec = product.defaultTemp === 'Hot' ? '93°C · 9-Bar Velvet Pull' : '4°C · Flash-Chilled Reserve';
    let originSpec = 'Single-Origin Benguet & Ethiopian Arabica';
    let pairingSpec = 'Dark Cocoa Hazelnut Truffle';

    if (id === 'cold-brew') {
      brewSpec = '18-Hour Slow Cold Steep';
      pairingSpec = 'Salted Caramel Biscotti';
    } else if (id === 'vietnamese-coffee') {
      brewSpec = 'Gold-Filigree Phin Slow Drip';
      originSpec = 'Dark-Roast Robusta & Arabica Blend';
      pairingSpec = 'Toasted Coconut Madeleine';
    } else if (id === 'dalgona-coffee') {
      brewSpec = 'Whipped Micro-Crema Fold';
      pairingSpec = 'Burnt Basque Tartlet';
    } else if (id === 'matcha-latte' || id === 'strawberry-matcha' || id === 'matcha-espresso-fusion') {
      brewSpec = '76°C Bamboo Chasen Whisk';
      originSpec = 'First-Harvest Stone-Milled Uji, Kyoto';
      pairingSpec = 'White Chocolate Yuzu Financier';
    } else if (product.category === 'milk-tea') {
      brewSpec = '92°C Whole-Leaf Infusion';
      originSpec = 'Assam & Roasted Kokuto Sugar';
      pairingSpec = 'Brown-Butter Almond Shortbread';
    } else if (product.group === 'tea') {
      brewSpec = product.defaultTemp === 'Hot' ? '78°C–94°C Whole-Leaf Steep' : 'Cold-Botanical Orchard Shake';
      originSpec = 'Whole Loose-Leaf & Real Fruit Botanicals';
      pairingSpec = 'Lemon Verbena Butter Scone';
    } else if (id.includes('caramel') || id === 'spanish-latte') {
      pairingSpec = 'Sea-Salt Espresso Caramels';
    }

    return { brewSpec, originSpec, pairingSpec };
  }

  function updateModalDynamicPrice(basePrice) {
    if (!productModalContent) return;
    const sizeDelta = parseInt(
      productModalContent.querySelector('[data-size-choice].is-selected')?.getAttribute('data-size-delta') || '0',
      10
    );
    const milkDelta = parseInt(
      productModalContent.querySelector('[data-milk-choice].is-selected')?.getAttribute('data-milk-delta') || '0',
      10
    );
    const qtyVal = parseInt(document.getElementById('modal-qty-val')?.textContent || '1', 10);
    const qty = Number.isFinite(qtyVal) && qtyVal > 0 ? qtyVal : 1;
    const unitPrice = basePrice + (Number.isFinite(sizeDelta) ? sizeDelta : 0) + (Number.isFinite(milkDelta) ? milkDelta : 0);
    const total = unitPrice * qty;
    const priceEl = productModalContent.querySelector('.modal-price');
    const addBtn = document.getElementById('modal-add-btn');
    if (priceEl) priceEl.textContent = formatPeso(total);
    if (addBtn) {
      addBtn.setAttribute('data-modal-unit-price', String(unitPrice));
      addBtn.setAttribute('data-modal-qty', String(qty));
      addBtn.textContent = qty > 1 ? `Add ${qty} to Bag · ${formatPeso(total)}` : 'Add to Bag';
    }
  }

  function openProductModal(productId) {
    const product = getProductById(productId);
    if (!product || !productModal || !productModalBackdrop || !productModalContent) return;

    const isDefaultHot = product.defaultTemp === 'Hot';
    const tablewareText = getTablewareSummary(product);
    const craftSpecs = getDrinkCraftSpecs(product);
    const powderType = getEffectConfig(product).powderType;
    const signaturePowderLabel = POWDER_LABELS[powderType] || 'Signature Finishing Dust';
    const hasMilkBase = (product.fx || []).includes('milk') || product.category === 'milk-tea';
    const baseMilkChoices = hasMilkBase
      ? [
          { label: 'House Velvet Milk', text: 'House Velvet Milk', delta: 0 },
          { label: 'Barista Oat (+₱20)', text: 'Barista Oat Milk', delta: 20 },
          { label: 'Almond Cream (+₱20)', text: 'Almond Cream', delta: 20 },
        ]
      : [
          { label: 'Pure Craft Steep', text: 'Pure Craft Brew', delta: 0 },
          { label: 'Extra Shot / Leaf (+₱30)', text: 'Double Reserve', delta: 30 },
          { label: 'Oat Cream Splash (+₱20)', text: 'Oat Cream Splash', delta: 20 },
        ];

    const finishOptions = [
      { key: powderType, label: `${signaturePowderLabel} (Signature)` },
      powderType !== 'cocoa' ? { key: 'cocoa', label: 'Dutch Cocoa Cloud' } : null,
      powderType !== 'caramel' ? { key: 'caramel', label: 'Caramelized Sugar Dust' } : null,
      powderType !== 'matcha' ? { key: 'matcha', label: 'Ceremonial Matcha Dust' } : null,
      { key: 'none', label: 'Undusted' },
    ].filter(Boolean);

    productModalContent.innerHTML = `
      <div class="product-modal-media">
        <img src="${product.image}" alt="${product.name}" referrerpolicy="no-referrer" />
        ${buildFxStage(product)}
      </div>
      <div class="product-modal-body" data-base-price="${product.price}">
        <p class="product-kicker">${product.categoryLabel}</p>
        <h2 id="modal-product-title">${product.name}</h2>
        <p class="modal-notes">${product.desc}</p>
        <p class="modal-meta-line">${product.notes}</p>
        <p class="modal-tableware-line"><strong>Cups, Plates &amp; Utensils:</strong> ${tablewareText}</p>

        <div class="modal-specs-grid">
          <div class="modal-spec-cell">
            <span class="modal-spec-key">Preparation</span>
            <span class="modal-spec-val">${craftSpecs.brewSpec}</span>
          </div>
          <div class="modal-spec-cell">
            <span class="modal-spec-key">Origin &amp; Leaf</span>
            <span class="modal-spec-val">${craftSpecs.originSpec}</span>
          </div>
          <div class="modal-spec-cell">
            <span class="modal-spec-key">Table Pairing</span>
            <span class="modal-spec-val">${craftSpecs.pairingSpec}</span>
          </div>
        </div>

        <div class="modal-customizer">
          <div class="customizer-group">
            <span class="customizer-label">Vessel Size</span>
            <div class="customizer-options" role="group" aria-label="Vessel size">
              <button type="button" class="custom-chip is-selected" data-size-choice="Petite 8oz" data-size-delta="0">Petite 8oz</button>
              <button type="button" class="custom-chip" data-size-choice="Reserve 12oz" data-size-delta="25">Reserve 12oz (+₱25)</button>
              <button type="button" class="custom-chip" data-size-choice="Grand Carafe 16oz" data-size-delta="45">Grand 16oz (+₱45)</button>
            </div>
          </div>

          <div class="customizer-group">
            <span class="customizer-label">Milk &amp; Extraction</span>
            <div class="customizer-options" role="group" aria-label="Milk or brew intensity">
              ${baseMilkChoices
                .map(
                  (m, idx) =>
                    `<button type="button" class="custom-chip ${idx === 0 ? 'is-selected' : ''}" data-milk-choice="${m.text}" data-milk-delta="${m.delta}">${m.label}</button>`
                )
                .join('')}
            </div>
          </div>

          <div class="customizer-group">
            <span class="customizer-label">Serving Style</span>
            <div class="customizer-options" role="group" aria-label="Serving style">
              <button type="button" class="custom-chip ${isDefaultHot ? 'is-selected' : ''}" data-temp-choice="Hot">Warm &amp; Steaming</button>
              <button type="button" class="custom-chip ${!isDefaultHot ? 'is-selected' : ''}" data-temp-choice="Iced">Chilled Over Ice</button>
            </div>
          </div>

          <div class="customizer-group">
            <span class="customizer-label">Sweetness &amp; Live Powder Finish</span>
            <div class="customizer-options" role="group" aria-label="Sweetness level">
              <button type="button" class="custom-chip" data-sweet-choice="50% Light">50% Light</button>
              <button type="button" class="custom-chip is-selected" data-sweet-choice="Classic Sweetness">Classic</button>
              <button type="button" class="custom-chip" data-sweet-choice="Extra Rich">Extra Rich</button>
            </div>
            <div class="customizer-options" role="group" aria-label="Complimentary powder finishing">
              ${finishOptions
                .map(
                  (opt, idx) =>
                    `<button type="button" class="custom-chip ${idx === 0 ? 'is-selected' : ''}" data-powder-choice="${opt.label}" data-powder-key="${opt.key}">${opt.label}</button>`
                )
                .join('')}
            </div>
          </div>
        </div>

        <div class="modal-buy-row">
          <div class="modal-price">${formatPeso(product.price)}</div>
          <div class="modal-buy-controls">
            <div class="modal-qty-stepper" aria-label="Drink quantity">
              <button type="button" class="modal-qty-btn" id="modal-qty-dec" aria-label="Decrease quantity">&minus;</button>
              <span class="modal-qty-val" id="modal-qty-val">1</span>
              <button type="button" class="modal-qty-btn" id="modal-qty-inc" aria-label="Increase quantity">+</button>
            </div>
            <button type="button" class="btn btn-primary" id="modal-add-btn" data-modal-product-id="${product.id}" data-modal-unit-price="${product.price}" data-modal-qty="1">
              Add to Bag
            </button>
          </div>
        </div>

        <div class="modal-flight-row">
          <span>Curating a 3-Cup Candlelit Flight?</span>
          <button type="button" class="modal-flight-btn" id="modal-stage-flight" data-stage-product-id="${product.id}">
            Place in Tasting Flight Tray
          </button>
        </div>
      </div>
    `;

    productModal.hidden = false;
    productModalBackdrop.hidden = false;
    document.body.style.overflow = 'hidden';
    syncFxCanvases();
    productModalClose?.focus();
  }

  function closeProductModal() {
    if (!productModal || !productModalBackdrop) return;
    productModal.hidden = true;
    productModalBackdrop.hidden = true;
    if (productModalContent) productModalContent.innerHTML = '';
    syncFxCanvases();
    if (cartDrawer?.hidden && checkoutModal?.hidden) {
      document.body.style.overflow = '';
    }
  }

  function openCheckoutModal() {
    if (!checkoutModal || !checkoutModalBackdrop || !checkoutSummaryBox) return;
    const { totalItems, subtotal } = getCartTotals();
    if (totalItems === 0) return;

    closeCartDrawer();

    const itemLines = cart
      .map((entry) => {
        const p = getProductById(entry.id);
        return p ? `${entry.qty}× ${p.name} (${entry.option || p.defaultTemp})` : '';
      })
      .filter(Boolean)
      .join(' · ');

    const packagingNote = subtotal >= GIFT_THRESHOLD ? ' · Includes Complimentary Velvet Gold Box' : '';
    checkoutSummaryBox.innerHTML = `
      <strong>Order Summary (${totalItems} ${totalItems === 1 ? 'drink' : 'drinks'}${packagingNote})</strong>
      <div class="checkout-summary-items">${itemLines}</div>
      <div class="checkout-summary-total tabular-nums">Total: ${formatPeso(subtotal)}</div>
    `;

    if (checkoutForm) checkoutForm.hidden = false;
    if (checkoutConfirmation) checkoutConfirmation.hidden = true;

    checkoutModal.hidden = false;
    checkoutModalBackdrop.hidden = false;
    document.body.style.overflow = 'hidden';
    document.getElementById('customer-name')?.focus();
  }

  function closeCheckoutModal() {
    if (!checkoutModal || !checkoutModalBackdrop) return;
    checkoutModal.hidden = true;
    checkoutModalBackdrop.hidden = true;
    document.body.style.overflow = '';
  }

  // ==========================================================================
  // Toast, Scroll Effects & Navigation
  // ==========================================================================

  function showToast(message) {
    if (!toastBanner || !toastMessage) return;
    toastMessage.textContent = message;
    toastBanner.hidden = false;

    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toastBanner.hidden = true;
    }, 3400);
  }

  function toggleMobileMenu(forceState) {
    if (!mobileMenuBtn || !mobileNavPanel) return;
    const currentlyExpanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
    const nextState = typeof forceState === 'boolean' ? forceState : !currentlyExpanded;
    mobileMenuBtn.setAttribute('aria-expanded', String(nextState));
    mobileNavPanel.hidden = !nextState;
  }

  function initScrollReveal() {
    const targets = document.querySelectorAll('.reveal-on-scroll');
    if (!('IntersectionObserver' in window)) {
      targets.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -24px 0px' }
    );

    targets.forEach((el) => observer.observe(el));
  }

  function handleScrollState() {
    const y = window.scrollY || window.pageYOffset;
    if (siteHeader) {
      siteHeader.classList.toggle('is-scrolled', y > 24);
    }
    if (backToTopBtn) {
      backToTopBtn.hidden = y < 480;
    }
  }

  // ==========================================================================
  // Event Delegation & Initialization
  // ==========================================================================

  document.addEventListener('click', (event) => {
    const target = event.target;
    if (!(target instanceof Element)) return;

    const sizeBtn = target.closest('[data-size-choice]');
    if (sizeBtn) {
      sizeBtn.parentElement?.querySelectorAll('[data-size-choice]').forEach((btn) => {
        btn.classList.toggle('is-selected', btn === sizeBtn);
      });
      const base = parseInt(productModalContent?.querySelector('.product-modal-body')?.getAttribute('data-base-price') || '0', 10);
      if (base > 0) updateModalDynamicPrice(base);
      return;
    }

    const milkBtn = target.closest('[data-milk-choice]');
    if (milkBtn) {
      milkBtn.parentElement?.querySelectorAll('[data-milk-choice]').forEach((btn) => {
        btn.classList.toggle('is-selected', btn === milkBtn);
      });
      const base = parseInt(productModalContent?.querySelector('.product-modal-body')?.getAttribute('data-base-price') || '0', 10);
      if (base > 0) updateModalDynamicPrice(base);
      return;
    }

    const tempBtn = target.closest('[data-temp-choice]');
    if (tempBtn) {
      tempBtn.parentElement?.querySelectorAll('[data-temp-choice]').forEach((btn) => {
        btn.classList.toggle('is-selected', btn === tempBtn);
      });
      const nextIsHot = tempBtn.getAttribute('data-temp-choice') === 'Hot';
      const modalStage = productModalContent?.querySelector('.fx-stage');
      const modalCanvas = productModalContent?.querySelector('.fx-canvas');
      if (modalStage) {
        modalStage.classList.toggle('is-hot', nextIsHot);
        modalStage.classList.toggle('is-iced', !nextIsHot);
      }
      if (modalCanvas instanceof HTMLCanvasElement) {
        modalCanvas.dataset.fxHot = nextIsHot ? '1' : '0';
        const mState = fxCanvasStates.get(modalCanvas);
        if (mState && mState.isHot !== nextIsHot) {
          mState.isHot = nextIsHot;
          mState.initialized = false;
          resizeFxCanvasState(modalCanvas, mState);
          if (fxReducedMotionQuery && fxReducedMotionQuery.matches) {
            stepAndDrawFxCanvas(mState, 0.016);
          }
        }
      }
      return;
    }

    const modalQtyDec = target.closest('#modal-qty-dec');
    const modalQtyInc = target.closest('#modal-qty-inc');
    if (modalQtyDec || modalQtyInc) {
      const qtyValEl = document.getElementById('modal-qty-val');
      if (qtyValEl) {
        const cur = parseInt(qtyValEl.textContent || '1', 10) || 1;
        const next = Math.max(1, Math.min(12, cur + (modalQtyInc ? 1 : -1)));
        qtyValEl.textContent = String(next);
        const base = parseInt(productModalContent?.querySelector('.product-modal-body')?.getAttribute('data-base-price') || '0', 10);
        if (base > 0) updateModalDynamicPrice(base);
      }
      return;
    }

    const sweetBtn = target.closest('[data-sweet-choice]');
    if (sweetBtn) {
      sweetBtn.parentElement?.querySelectorAll('[data-sweet-choice]').forEach((btn) => {
        btn.classList.toggle('is-selected', btn === sweetBtn);
      });
      return;
    }

    const powderBtn = target.closest('[data-powder-choice]');
    if (powderBtn) {
      powderBtn.parentElement?.querySelectorAll('[data-powder-choice]').forEach((btn) => {
        btn.classList.toggle('is-selected', btn === powderBtn);
      });
      const powderKey = powderBtn.getAttribute('data-powder-key') || 'vanilla';
      const modalCanvas = productModalContent?.querySelector('.fx-canvas');
      if (modalCanvas instanceof HTMLCanvasElement) {
        modalCanvas.dataset.fxPowder = powderKey;
        const mState = fxCanvasStates.get(modalCanvas);
        if (mState) {
          mState.powderDisabled = powderKey === 'none';
          if (powderKey !== 'none') mState.powderType = powderKey;
          if (fxReducedMotionQuery && fxReducedMotionQuery.matches) {
            stepAndDrawFxCanvas(mState, 0.016);
          }
        }
      }
      return;
    }

    const stageFlightBtn = target.closest('#modal-stage-flight');
    if (stageFlightBtn) {
      const stageId = stageFlightBtn.getAttribute('data-stage-product-id');
      if (stageId) {
        const existingIdx = flightSelection.indexOf(stageId);
        if (existingIdx === -1) {
          flightSelection = [flightSelection[1], flightSelection[2], stageId];
        }
        flightPresetBtns.forEach((b) => b.classList.remove('is-active'));
        renderTastingFlight();
        closeProductModal();
        document.getElementById('tasting-flight')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        showToast(`Staged ${getProductById(stageId)?.name || 'drink'} on your Tasting Flight Tray`);
      }
      return;
    }

    const presetBtn = target.closest('[data-flight-preset]');
    if (presetBtn) {
      const key = presetBtn.getAttribute('data-flight-preset') || 'midnight';
      if (FLIGHT_PRESETS[key]) {
        flightSelection = [...FLIGHT_PRESETS[key]];
        flightPresetBtns.forEach((b) => b.classList.toggle('is-active', b === presetBtn));
        renderTastingFlight();
      }
      return;
    }

    const addFlightBtn = target.closest('#add-flight-btn');
    if (addFlightBtn) {
      const flightProducts = flightSelection.map((id) => getProductById(id)).filter(Boolean);
      if (flightProducts.length === 3) {
        const perDrinkDiscount = Math.round(FLIGHT_PRIVILEGE / 3);
        flightProducts.forEach((p, idx) => {
          const discounted = Math.max(50, p.price - perDrinkDiscount);
          addToCart(
            p.id,
            1,
            `Tasting Flight Course 0${idx + 1} (-₱${perDrinkDiscount} Trio Privilege)`,
            discounted,
            true
          );
        });
        flashAddedButton(addFlightBtn, 'Flight Added ✓');
        showToast('Added 3-Cup Candlelit Tasting Flight to your bag');
      }
      return;
    }

    const modalAddBtn = target.closest('#modal-add-btn');
    if (modalAddBtn) {
      const id = modalAddBtn.getAttribute('data-modal-product-id');
      const unitPrice = parseInt(modalAddBtn.getAttribute('data-modal-unit-price') || '0', 10);
      const qty = parseInt(modalAddBtn.getAttribute('data-modal-qty') || '1', 10) || 1;
      const selectedSize = productModalContent?.querySelector('[data-size-choice].is-selected')?.getAttribute('data-size-choice') || 'Petite 8oz';
      const selectedMilk = productModalContent?.querySelector('[data-milk-choice].is-selected')?.getAttribute('data-milk-choice') || '';
      const selectedTemp = productModalContent?.querySelector('[data-temp-choice].is-selected')?.getAttribute('data-temp-choice') || 'Hot';
      const selectedSweet = productModalContent?.querySelector('[data-sweet-choice].is-selected')?.getAttribute('data-sweet-choice') || 'Classic Sweetness';
      const selectedPowder = productModalContent?.querySelector('[data-powder-choice].is-selected')?.getAttribute('data-powder-choice') || '';
      const optionParts = [selectedSize, selectedMilk, selectedTemp, selectedSweet, selectedPowder].filter(Boolean);
      if (id) {
        addToCart(id, qty, optionParts.join(', '), unitPrice > 0 ? unitPrice : null);
        closeProductModal();
      }
      return;
    }

    const duoBtn = target.closest('[data-add-duo]');
    if (duoBtn) {
      const rawIds = duoBtn.getAttribute('data-add-duo') || '';
      const ids = rawIds.split(',').map((s) => s.trim()).filter(Boolean);
      if (ids.length > 0) {
        ids.forEach((id) => addToCart(id, 1, '', null, true));
        flashAddedButton(duoBtn, 'Candlelit Duo Added ✓');
        showToast('Added Candlelit Duo (2 drinks) to your bag');
      }
      return;
    }

    const upsellBtn = target.closest('[data-upsell-id]');
    if (upsellBtn) {
      const id = upsellBtn.getAttribute('data-upsell-id');
      if (id) addToCart(id, 1);
      return;
    }

    const addBtn = target.closest('[data-add-id]');
    if (addBtn) {
      const id = addBtn.getAttribute('data-add-id');
      if (id) {
        addToCart(id, 1);
        flashAddedButton(addBtn);
      }
      return;
    }

    const previewEl = target.closest('[data-preview-id]');
    if (previewEl) {
      const id = previewEl.getAttribute('data-preview-id');
      if (id) openProductModal(id);
      return;
    }

    const decBtn = target.closest('[data-qty-dec]');
    if (decBtn) {
      updateQuantity(decBtn.getAttribute('data-qty-dec'), -1);
      return;
    }

    const incBtn = target.closest('[data-qty-inc]');
    if (incBtn) {
      updateQuantity(incBtn.getAttribute('data-qty-inc'), 1);
      return;
    }

    const removeBtn = target.closest('[data-remove-key]');
    if (removeBtn) {
      removeFromCart(removeBtn.getAttribute('data-remove-key'));
      return;
    }
  });

  // Warm candlelight pointer sheen across product & reserve cards
  document.addEventListener(
    'pointermove',
    (event) => {
      if (!(event.target instanceof Element)) return;
      const card = event.target.closest('.product-card, .bestseller-card');
      if (!(card instanceof HTMLElement)) return;
      const rect = card.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;
      card.style.setProperty('--mx', `${x.toFixed(1)}%`);
      card.style.setProperty('--my', `${y.toFixed(1)}%`);
    },
    { passive: true }
  );

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeCartDrawer();
      closeProductModal();
      closeCheckoutModal();
      toggleMobileMenu(false);
    }

    if (event.key === 'Enter' && event.target instanceof Element) {
      const previewEl = event.target.closest('[data-preview-id]');
      if (previewEl && !event.target.closest('button')) {
        const id = previewEl.getAttribute('data-preview-id');
        if (id) openProductModal(id);
      }
    }
  });

  filterTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      activeFilter = tab.dataset.filter || 'all';
      filterTabs.forEach((btn) => {
        const active = btn === tab;
        btn.classList.toggle('is-active', active);
        btn.setAttribute('aria-selected', String(active));
      });
      renderCollections();

      if (activeFilter === 'brewed-tea' || activeFilter === 'milk-tea') {
        document.getElementById('tea')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else if (activeFilter === 'hot-coffee' || activeFilter === 'iced-coffee') {
        document.getElementById('coffee')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  moodBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      activeMood = btn.dataset.mood || 'all';
      moodBtns.forEach((b) => b.classList.toggle('is-active', b === btn));
      renderCollections();
    });
  });

  if (sortSelect instanceof HTMLSelectElement) {
    sortSelect.addEventListener('change', () => {
      activeSort = sortSelect.value || 'curated';
      renderCollections();
    });
  }

  if (searchInput) {
    searchInput.addEventListener('input', () => {
      searchQuery = searchInput.value.trim();
      if (searchClearBtn) {
        searchClearBtn.hidden = searchQuery.length === 0;
      }
      renderCollections();
    });
  }

  searchClearBtn?.addEventListener('click', () => {
    searchQuery = '';
    if (searchInput) {
      searchInput.value = '';
      searchInput.focus();
    }
    searchClearBtn.hidden = true;
    renderCollections();
  });

  resetFilterBtns.forEach((btn) => btn.addEventListener('click', resetFilters));

  mobileMenuBtn?.addEventListener('click', () => toggleMobileMenu());
  document.querySelectorAll('.mobile-nav-link').forEach((link) => {
    link.addEventListener('click', () => toggleMobileMenu(false));
  });

  cartOpenBtn?.addEventListener('click', openCartDrawer);
  cartCloseBtn?.addEventListener('click', closeCartDrawer);
  cartBackdrop?.addEventListener('click', closeCartDrawer);
  clearCartBtn?.addEventListener('click', clearCart);

  toastViewBag?.addEventListener('click', () => {
    if (toastBanner) toastBanner.hidden = true;
    openCartDrawer();
  });

  productModalClose?.addEventListener('click', closeProductModal);
  productModalBackdrop?.addEventListener('click', closeProductModal);

  openCheckoutBtn?.addEventListener('click', openCheckoutModal);
  checkoutModalClose?.addEventListener('click', closeCheckoutModal);
  checkoutModalBackdrop?.addEventListener('click', closeCheckoutModal);

  function getFlavorProfile(product) {
    if (!product) return { roast: 60, body: 60, aroma: 60 };
    const mood = getProductMood(product);
    if (mood === 'bold') return { roast: 88, body: product.fx.includes('milk') ? 76 : 58, aroma: 72 };
    if (mood === 'caramel') return { roast: 68, body: 92, aroma: 78 };
    if (mood === 'matcha') return { roast: 54, body: 82, aroma: 92 };
    return { roast: 36, body: 54, aroma: 95 };
  }

  function renderTastingFlight() {
    if (!flightSlotsGrid || !flightSummaryBar) return;

    const courseLabels = ['Course 01 · Opening Pour', 'Course 02 · Heart of Table', 'Course 03 · Lingering Finish'];
    const coffees = PRODUCTS.filter((p) => p.group === 'coffee');
    const teas = PRODUCTS.filter((p) => p.group === 'tea');

    const selected = flightSelection.map((id) => getProductById(id) || PRODUCTS[0]);
    const individualTotal = selected.reduce((sum, p) => sum + p.price, 0);
    const finalTotal = Math.max(0, individualTotal - FLIGHT_PRIVILEGE);

    const avgProfile = selected.reduce(
      (acc, p) => {
        const prof = getFlavorProfile(p);
        acc.roast += prof.roast / 3;
        acc.body += prof.body / 3;
        acc.aroma += prof.aroma / 3;
        return acc;
      },
      { roast: 0, body: 0, aroma: 0 }
    );

    flightSlotsGrid.innerHTML = selected
      .map((product, idx) => {
        const selectHtml = `
          <optgroup label="The Coffee Collection (20)">
            ${coffees
              .map(
                (p) =>
                  `<option value="${p.id}" ${p.id === product.id ? 'selected' : ''}>${p.name} — ₱${p.price}</option>`
              )
              .join('')}
          </optgroup>
          <optgroup label="The Tea Collection (20)">
            ${teas
              .map(
                (p) =>
                  `<option value="${p.id}" ${p.id === product.id ? 'selected' : ''}>${p.name} — ₱${p.price}</option>`
              )
              .join('')}
          </optgroup>
        `;

        return `
          <article class="flight-slot-card">
            <div class="flight-slot-media" data-preview-id="${product.id}" role="button" tabindex="0" aria-label="Inspect ${product.name}">
              <img src="${product.image}" alt="${product.name}" class="product-img" loading="lazy" referrerpolicy="no-referrer" />
              ${buildFxStage(product)}
              <span class="product-temp-tag">${product.defaultTemp}</span>
            </div>
            <div class="flight-slot-body">
              <div class="flight-course-row">
                <span class="flight-course-label">${courseLabels[idx]}</span>
                <span class="flight-course-price">${formatPeso(product.price)}</span>
              </div>
              <h3 class="flight-slot-title">${product.name}</h3>
              <p class="flight-slot-notes">${product.notes}</p>
              <div class="flight-select-wrap">
                <label for="flight-select-${idx}" class="flight-select-label">Swap Pour</label>
                <select id="flight-select-${idx}" class="flight-drink-select" data-flight-slot="${idx}">
                  ${selectHtml}
                </select>
              </div>
            </div>
          </article>
        `;
      })
      .join('');

    const roastPct = Math.round(avgProfile.roast);
    const bodyPct = Math.round(avgProfile.body);
    const aromaPct = Math.round(avgProfile.aroma);

    flightSummaryBar.innerHTML = `
      <div class="flight-balance-group">
        <div class="flight-meter">
          <div class="flight-meter-head">
            <span>Roast &amp; Depth</span>
            <strong class="tabular-nums">${roastPct}%</strong>
          </div>
          <div class="flight-meter-track"><div class="flight-meter-fill" style="width: ${roastPct}%"></div></div>
        </div>
        <div class="flight-meter">
          <div class="flight-meter-head">
            <span>Velvet Silkiness</span>
            <strong class="tabular-nums">${bodyPct}%</strong>
          </div>
          <div class="flight-meter-track"><div class="flight-meter-fill" style="width: ${bodyPct}%"></div></div>
        </div>
        <div class="flight-meter">
          <div class="flight-meter-head">
            <span>Botanical Aroma</span>
            <strong class="tabular-nums">${aromaPct}%</strong>
          </div>
          <div class="flight-meter-track"><div class="flight-meter-fill" style="width: ${aromaPct}%"></div></div>
        </div>
      </div>

      <div class="flight-cta-block">
        <div class="flight-pricing-meta">
          <span class="flight-savings-note">Includes Trio Privilege (-₱${FLIGHT_PRIVILEGE})</span>
          <div class="flight-price-compare tabular-nums">
            <span class="flight-price-strike">${formatPeso(individualTotal)}</span>
            <span class="flight-price-final">${formatPeso(finalTotal)}</span>
          </div>
        </div>
        <button type="button" class="btn btn-primary" id="add-flight-btn">
          Add 3-Cup Flight &middot; ${formatPeso(finalTotal)}
        </button>
      </div>
    `;

    syncFxCanvases();
  }

  flightSlotsGrid?.addEventListener('change', (event) => {
    const sel = event.target;
    if (!(sel instanceof HTMLSelectElement)) return;
    const slotIdx = parseInt(sel.getAttribute('data-flight-slot') || '-1', 10);
    if (slotIdx >= 0 && slotIdx <= 2 && getProductById(sel.value)) {
      flightSelection[slotIdx] = sel.value;
      flightPresetBtns.forEach((b) => b.classList.remove('is-active'));
      renderTastingFlight();
    }
  });

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function initNavScrollSpy() {
    if (!navLinks.length || !('IntersectionObserver' in window)) return;
    const sectionIds = ['home', 'about', 'coffee', 'tea', 'best-sellers', 'contact'];
    const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);
    if (!sections.length) return;

    const setActiveNav = (id) => {
      navLinks.forEach((link) => {
        const href = link.getAttribute('href') || '';
        link.classList.toggle('is-active', href === `#${id}`);
      });
    };

    setActiveNav('home');
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.id) {
            setActiveNav(entry.target.id);
          }
        });
      },
      { rootMargin: '-32% 0px -56% 0px', threshold: 0 }
    );
    sections.forEach((sec) => spy.observe(sec));
  }

  checkoutForm?.addEventListener('submit', (event) => {
    event.preventDefault();
    const nameInput = document.getElementById('customer-name');
    const notesInput = document.getElementById('order-notes');
    const customerName =
      nameInput instanceof HTMLInputElement && nameInput.value.trim()
        ? escapeHtml(nameInput.value.trim())
        : 'Valued Guest';
    const guestNotes =
      notesInput instanceof HTMLInputElement && notesInput.value.trim()
        ? escapeHtml(notesInput.value.trim())
        : '';
    const orderCode = 'EL-' + Math.floor(1000 + Math.random() * 9000);
    const { totalItems, subtotal } = getCartTotals();
    const hasVelvetBox = subtotal >= GIFT_THRESHOLD;
    const snapshotLines = cart
      .map((entry) => {
        const p = getProductById(entry.id);
        if (!p) return '';
        const unit = getEntryUnitPrice(entry, p);
        return `<li><span>${entry.qty}&times; ${escapeHtml(p.name)}</span><strong class="tabular-nums">${formatPeso(unit * entry.qty)}</strong></li>`;
      })
      .filter(Boolean)
      .join('');

    clearCart();
    checkoutForm.reset();
    checkoutForm.hidden = true;

    if (checkoutConfirmation) {
      checkoutConfirmation.innerHTML = `
        <h3>Demo Order #${orderCode} Confirmed</h3>
        <p>
          Thank you, <strong>${customerName}</strong>! Your bespoke order is staged for preparation.
          (Demonstration only, no real payment was processed.)
        </p>
        <div class="ticket-card">
          <div class="ticket-card-meta">
            <span>${totalItems} ${totalItems === 1 ? 'Creation' : 'Creations'} &middot; ${hasVelvetBox ? 'Velvet Gold Box &amp; Wax Seal' : 'Signature Kraft Sleeve'}</span>
            <span class="tabular-nums">${formatPeso(subtotal)}</span>
          </div>
          <ul class="ticket-items-list">${snapshotLines}</ul>
          ${
            guestNotes
              ? `<div class="ticket-card-inscription"><span>Handwritten Card &amp; Barista Note</span>“${guestNotes}”</div>`
              : ''
          }
          <div class="ticket-ritual-steps">
            <div class="ticket-ritual-step"><strong>01. Mill &amp; Steep</strong>Single-origin grind &amp; leaf water calibration</div>
            <div class="ticket-ritual-step"><strong>02. Vessel Pour</strong>Limoges porcelain or crystal highball service</div>
            <div class="ticket-ritual-step"><strong>03. Table Finish</strong>Complimentary powder dusting &amp; box seal</div>
          </div>
        </div>
        <button type="button" class="btn btn-primary" id="done-demo-order">Return to Menu</button>
      `;
      checkoutConfirmation.hidden = false;
      document.getElementById('done-demo-order')?.addEventListener('click', closeCheckoutModal);
    }
  });

  backToTopBtn?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  window.addEventListener('scroll', handleScrollState, { passive: true });

  if (footerYear) {
    footerYear.textContent = String(new Date().getFullYear());
  }

  // Boot
  renderBestSellers();
  renderCollections();
  renderTastingFlight();
  renderCart();
  initEditorialFxCanvases();
  initNavScrollSpy();
  handleScrollState();
  initScrollReveal();
})();
