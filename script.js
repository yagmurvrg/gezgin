// ==========================================
// GEZGİN - TAM ÜRÜN VE E-TİCARET SİSTEMİ
// ==========================================


// ==========================================
// ÜRÜNLER VE TEKNİK BİLGİLER
// ==========================================

const products = [

    {
        id: 1,
        name: "GEZGİN StormGuard Kamp Çadırı",
        category: "Kamp Ekipmanları",
        price: 7990,
        oldPrice: 9400,
        discount: 15,
        stock: 8,
        description: "GEZGİN StormGuard Kamp Çadırı, doğa gezileri ve kamp organizasyonlarında konforlu bir barınma alanı oluşturmak üzere tasarlanmıştır. Üç kişilik kapasitesi, suya dayanıklı dış yüzeyi ve hafif alüminyum taşıyıcı sistemiyle açık hava kullanımına uygundur.",
        features: [
            "Kapasite: 3 kişilik",
            "Dış kumaş: 210D Ripstop polyester",
            "Zemin: Suya dayanıklı Oxford polyester",
            "Direkler: Hafif alüminyum alaşım",
            "Su dayanımı: 3000 mm su sütunu",
            "Ölçüler: 210 × 210 × 130 cm",
            "Paket ölçüsü: 55 × 18 × 18 cm",
            "Ağırlık: Yaklaşık 3,8 kg",
            "Giriş: Çift fermuarlı giriş sistemi",
            "Havalandırma: Üst havalandırma penceresi",
            "Kullanım: Kamp ve doğa gezileri"
        ],
        warranty: "2 yıl",
        usageInstructions: [
            "Çadırı düz, taşlardan ve keskin cisimlerden arındırılmış zemine kurun.",
            "Direkleri kullanım kılavuzundaki sıraya göre birleştirin.",
            "Çadır kumaşını direklere sabitleyin ve kazıkları zemine yerleştirin.",
            "Kullanım sonrasında çadırı tamamen kurutarak katlayın.",
            "Temizlik için yumuşak bir fırça ve nemli bez kullanın.",
            "Lekeleri ılık su ve az miktarda hassas sabunla nazikçe temizleyin.",
            "Çadırı çamaşır makinesinde yıkamayın; çamaşır suyu ve ağır kimyasallar kullanmayın.",
            "Yıkama sonrasında gölgede tamamen kurutun.",
            "Nemli şekilde çantasında saklamayın."
        ],
        boxContents: [
            "1 adet kamp çadırı",
            "1 takım alüminyum çadır direği",
            "Kazık seti",
            "Taşıma çantası",
            "Kurulum kılavuzu"
        ],
        colors: [
            { name: "Siyah", image: "cadirsiyah.png" },
            { name: "Lacivert", image: "cadirlacivert.png" },
            { name: "Yeşil", image: "cadiryesil.png" }
        ],
        reviews: [
            { name: "Örnek Kullanıcı", text: "Kamp gezileri için kullanışlı bir tasarım.", stars: 5 },
            { name: "Örnek Kullanıcı", text: "Görünümü ve renk seçenekleri güzel.", stars: 4 }
        ]
    },

    {
        id: 2,
        name: "GEZGİN Comfort Neck Boyun Yastığı",
        category: "Seyahat Konforu",
        price: 790,
        stock: 15,
        description: "GEZGİN Comfort Neck Boyun Yastığı, uzun süreli yolculuklarda boyun bölgesine destek sağlamak amacıyla ergonomik formda tasarlanmıştır. Hafızalı köpük dolgusu ve çıkarılabilir kılıfıyla uçak, otobüs ve otomobil yolculuklarında konforlu bir kullanım sunar.",
        features: [
            "Dolgu: Yüksek yoğunluklu memory foam",
            "Kılıf: Yumuşak polyester kumaş",
            "Ölçüler: 28 × 25 × 12 cm",
            "Ağırlık: Yaklaşık 350 g",
            "Kapanış: Ayarlanabilir ön bağlantı",
            "Kılıf: Çıkarılabilir ve yıkanabilir",
            "Kullanım: Uçak, otobüs ve otomobil yolculukları",
            "Taşıma: Kompakt yapı"
        ],
        warranty: "1 yıl",
        usageInstructions: [
            "Yastığı boyun çevresine yerleştirerek ön bağlantısını kapatın.",
            "Boyun ölçünüze uygun şekilde bağlantıyı ayarlayın.",
            "Kılıfı temizlemek için dolgu malzemesinden ayırın.",
            "Çıkarılabilir kılıfı bakım etiketine uygunsa 30 °C hassas programda yıkayın.",
            "Kılıfı doğal şekilde kurutun; yüksek sıcaklıkta kurutma yapmayın.",
            "Memory foam dolgu malzemesini çamaşır makinesinde yıkamayın.",
            "Dolgu malzemesini nemli bir bezle nazikçe silin.",
            "Kullanmadan önce tüm parçaların tamamen kuruduğundan emin olun."
        ],
        boxContents: [
            "1 adet Comfort Neck boyun yastığı",
            "1 adet çıkarılabilir kumaş kılıf",
            "Kullanım ve bakım bilgilendirmesi"
        ],
        colors: [
            { name: "Yeşil", image: "yastikyesil.png" },
            { name: "Lacivert", image: "yastiklacivert.png" },
            { name: "Siyah", image: "yastiksiyah.png" }
        ],
        reviews: [
            { name: "Örnek Kullanıcı", text: "Seyahatlerde oldukça kullanışlı görünüyor.", stars: 5 },
            { name: "Örnek Kullanıcı", text: "Renk seçeneklerini beğendim.", stars: 4 }
        ]
    },

    {
        id: 3,
        name: "GEZGİN ThermoSleep Uyku Tulumu",
        category: "Kamp Ekipmanları",
        price: 3290,
        oldPrice: 3871,
        discount: 15,
        stock: 2,
        description: "GEZGİN ThermoSleep Uyku Tulumu, kamp ve açık hava etkinliklerinde uyku konforunu desteklemek üzere tasarlanmıştır. Sentetik dolgusu, dayanıklı dış kumaşı ve fermuarlı yapısıyla doğa gezilerinde pratik bir kullanım sunar.",
        features: [
            "Dış yüzey: 210T polyester",
            "İç yüzey: Yumuşak polyester astar",
            "Dolgu: Sentetik elyaf",
            "Kullanıcı boyu: 190 cm'ye kadar",
            "Genişlik: Yaklaşık 80 cm",
            "Açık uzunluk: 220 cm",
            "Paket ölçüsü: 38 × 22 cm",
            "Ağırlık: Yaklaşık 1,6 kg",
            "Konfor sıcaklığı: +5 °C",
            "Alt sıcaklık sınırı: 0 °C",
            "Kapanış: Çift yönlü fermuar",
            "Kullanım: Kamp ve doğa gezileri"
        ],
        warranty: "2 yıl",
        usageInstructions: [
            "Uyku tulumunu düz ve kuru bir zeminde kullanın.",
            "Düşük sıcaklıklarda uygun mat ve ek izolasyon kullanın.",
            "Kullanım sonrasında tamamen havalandırıp kurutun.",
            "Nemli şekilde uzun süre kapalı çantada saklamayın.",
            "Yıkamadan önce ürünün bakım etiketini kontrol edin.",
            "Bakım etiketi izin veriyorsa hassas programda ve düşük sıcaklıkta yıkayın.",
            "Hassas deterjan kullanın; çamaşır suyu ve yumuşatıcı kullanmayın.",
            "Yüksek sıcaklıkta kurutma yapmayın.",
            "Saklamadan önce dolgu malzemesinin tamamen kuruduğundan emin olun."
        ],
        boxContents: [
            "1 adet ThermoSleep uyku tulumu",
            "1 adet sıkıştırmalı taşıma çantası",
            "Kullanım ve bakım kılavuzu"
        ],
        colors: [
            { name: "Yeşil", image: "tulumyesil.png" },
            { name: "Siyah", image: "tulumsiyah.png" },
            { name: "Lacivert", image: "tulumlacivert.png" }
        ],
        reviews: [
            { name: "Örnek Kullanıcı", text: "Kamp gezileri için güzel bir seçenek.", stars: 5 },
            { name: "Örnek Kullanıcı", text: "Taşınabilir yapısını beğendim.", stars: 4 }
        ]
    },

    {
        id: 4,
        name: "GEZGİN Adventure Kamp Sandalyesi",
        category: "Kamp Ekipmanları",
        price: 2790,
        stock: 0,
        description: "GEZGİN Adventure Kamp Sandalyesi, kamp alanları, piknikler ve açık hava etkinliklerinde rahat oturma deneyimi sunmak üzere tasarlanmıştır. Katlanabilir gövdesi ve hafif taşıyıcı yapısı sayesinde kolay taşınabilir.",
        features: [
            "İskelet: Alüminyum alaşım",
            "Kumaş: 600D Oxford polyester",
            "Taşıma kapasitesi: 120 kg",
            "Açık ölçüler: 55 × 55 × 85 cm",
            "Katlı ölçüler: 85 × 15 × 15 cm",
            "Oturma yüksekliği: Yaklaşık 42 cm",
            "Ağırlık: Yaklaşık 2,7 kg",
            "Gövde: Katlanabilir yapı",
            "Ayaklar: Kaymayı azaltan destek yapısı",
            "Kullanım: Kamp, piknik ve açık hava"
        ],
        warranty: "2 yıl",
        usageInstructions: [
            "Sandalyeyi düz ve sağlam bir zemine yerleştirin.",
            "Oturmadan önce taşıyıcı iskeletin tamamen açıldığını kontrol edin.",
            "Belirtilen taşıma kapasitesinin üzerine çıkmayın.",
            "Sandalyeyi katlamadan önce üzerindeki eşyaları kaldırın.",
            "Kumaş yüzeyindeki tozu yumuşak bir fırçayla temizleyin.",
            "Lekeleri nemli bez ve az miktarda hassas sabunla silin.",
            "Sandalyeyi çamaşır makinesinde yıkamayın.",
            "Temizlik sonrasında tamamen kuruyana kadar açık şekilde bekletin.",
            "Nemli kumaşı kapalı çantada saklamayın."
        ],
        boxContents: [
            "1 adet katlanabilir kamp sandalyesi",
            "1 adet taşıma çantası",
            "Kullanım kılavuzu"
        ],
        colors: [
            { name: "Lacivert", image: "sandalyelacivert.png" },
            { name: "Yeşil", image: "sandalyeyesil.png" }
        ],
        reviews: [
            { name: "Örnek Kullanıcı", text: "Kamp alanları için kullanışlı bir ürün.", stars: 5 },
            { name: "Örnek Kullanıcı", text: "Renkleri oldukça güzel.", stars: 4 }
        ]
    },

    {
        id: 5,
        name: "GEZGİN Premium Valiz Düzenleyici",
        category: "Seyahat Düzenleyicileri",
        price: 699,
        stock: 6,
        description: "GEZGİN Premium Valiz Düzenleyici, seyahat sırasında kıyafet ve kişisel eşyaların valiz içerisinde kategorilere ayrılmasını kolaylaştırır. Farklı boyutlardaki düzenleyici bölmeleri sayesinde valiz alanının daha verimli kullanılmasına yardımcı olur.",
        features: [
            "Malzeme: Polyester kumaş",
            "Fermuar: Dayanıklı çift yönlü fermuar",
            "Set içeriği: 6 parçalı düzenleyici set",
            "Büyük çanta: 40 × 30 × 12 cm",
            "Orta çanta: 30 × 25 × 12 cm",
            "Küçük çanta: 25 × 18 × 10 cm",
            "Ağırlık: Yaklaşık 450 g",
            "Yapı: Katlanabilir ve hafif",
            "Kullanım: Valiz, seyahat çantası ve dolap düzeni"
        ],
        warranty: "1 yıl",
        usageInstructions: [
            "Eşyalarınızı kullanım türüne ve boyutuna göre ayırın.",
            "Düzenleyici çantaları valiz içerisine yerleştirin.",
            "Fermuarları aşırı doldurarak zorlamayın.",
            "Temizlik öncesinde tüm bölmeleri boşaltın.",
            "Bakım etiketi izin veriyorsa elde veya 30 °C hassas programda yıkayın.",
            "Hassas deterjan kullanın; çamaşır suyu kullanmayın.",
            "Kurutma makinesi yerine doğal şekilde kurutun.",
            "Kullanılmadığında katlayarak saklayın."
        ],
        boxContents: [
            "1 adet büyük boy düzenleyici",
            "2 adet orta boy düzenleyici",
            "3 adet küçük boy düzenleyici",
            "Kullanım bilgilendirmesi"
        ],
        colors: [
            { name: "Siyah", image: "valizduzenleyicisiyah.png" },
            { name: "Beyaz", image: "valizduzenleyicibeyaz.png" }
        ],
        reviews: [
            { name: "Örnek Kullanıcı", text: "Valiz içerisinde düzen sağlamaya yardımcı oluyor.", stars: 5 },
            { name: "Örnek Kullanıcı", text: "Pratik ve kullanışlı bir ürün.", stars: 4 }
        ]
    },

    {
        id: 6,
        name: "GEZGİN Premium Seyahat Çantası",
        category: "Seyahat Çantaları",
        price: 1999,
        oldPrice: 2352,
        discount: 15,
        stock: 3,
        description: "GEZGİN Premium Seyahat Çantası, hafta sonu gezileri, kısa süreli seyahatler ve günlük kullanım için tasarlanmıştır. Geniş ana bölmesi, fermuarlı yardımcı cepleri ve taşıma kolaylığı sağlayan ergonomik tutma alanlarıyla eşyalarınızı düzenli şekilde taşımanıza yardımcı olur.",
        features: [
            "Malzeme: Yüksek yoğunluklu polyester",
            "Kapasite: 35 litre",
            "Ölçüler: 50 × 30 × 25 cm",
            "Ağırlık: Yaklaşık 900 g",
            "Ana bölme: Geniş fermuarlı iç hacim",
            "Ek bölmeler: 2 adet dış cep",
            "Taşıma: Ayarlanabilir omuz askısı",
            "Taban: Güçlendirilmiş alt yüzey",
            "Kullanım: Hafta sonu ve kısa süreli seyahat"
        ],
        warranty: "2 yıl",
        usageInstructions: [
            "Ağır eşyaları çantanın tabanına yakın yerleştirin.",
            "Omuz askısını kullanımınıza uygun şekilde ayarlayın.",
            "Fermuarları aşırı doldurarak zorlamayın.",
            "Çantayı temizlemeden önce tüm ceplerini boşaltın.",
            "Günlük temizlikte nemli ve yumuşak bir bez kullanın.",
            "Gerekli durumlarda bakım etiketi izin veriyorsa soğuk suyla elde yıkayın.",
            "Çamaşır suyu ve yüksek sıcaklıkta kurutma kullanmayın.",
            "Saklamadan önce çantanın tamamen kuruduğundan emin olun."
        ],
        boxContents: [
            "1 adet Premium seyahat çantası",
            "1 adet ayarlanabilir omuz askısı",
            "Kullanım bilgilendirmesi"
        ],
        colors: [
            { name: "Siyah", image: "seyahatcantasisiyah.png" },
            { name: "Yeşil", image: "seyahatcantasiyesil.png" },
            { name: "Lacivert", image: "seyahatcantasilacivert.png" }
        ],
        reviews: [
            { name: "Örnek Kullanıcı", text: "Modern ve kullanışlı bir seyahat çantası.", stars: 5 },
            { name: "Örnek Kullanıcı", text: "Renk seçenekleri oldukça güzel.", stars: 4 }
        ]
    },

    {
        id: 7,
        name: "GEZGİN ThermoPro Premium Termos",
        category: "Seyahat Aksesuarları",
        price: 1499,
        stock: 10,
        description: "GEZGİN ThermoPro Premium Termos, sıcak ve soğuk içeceklerin günlük yaşamda ve seyahatlerde taşınabilmesi için tasarlanmıştır. Paslanmaz çelik gövdesi, çift katmanlı yalıtım yapısı ve sızdırmaz kapak tasarımıyla pratik kullanım sunar.",
        features: [
            "Gövde: 304 paslanmaz çelik",
            "İç yapı: Çift katmanlı vakum yalıtımı",
            "Kapasite: 500 ml",
            "Yükseklik: Yaklaşık 24 cm",
            "Çap: Yaklaşık 7 cm",
            "Ağırlık: Yaklaşık 320 g",
            "Sıcak tutma: 12 saate kadar",
            "Soğuk tutma: 18 saate kadar",
            "Kapak: Sızdırmaz vidalı kapak",
            "Kullanım: Seyahat, kamp ve günlük yaşam"
        ],
        warranty: "2 yıl",
        usageInstructions: [
            "İlk kullanımdan önce iç yüzeyi ılık suyla temizleyin.",
            "İçecek doldururken üst bölümde boşluk bırakın.",
            "Kapağı tamamen kapattığınızdan emin olun.",
            "Termosu mikrodalga fırında kullanmayın.",
            "Termos gövdesini ılık su ve bulaşık deterjanıyla elde yıkayın.",
            "İç yüzeyin temizliğinde yumuşak şişe fırçası kullanabilirsiniz.",
            "Kapak ve conta parçalarını ayrı temizleyip tamamen kurutun.",
            "Bulaşık makinesinde yıkamadan önce ürün bakım talimatlarını kontrol edin.",
            "Aşındırıcı tel, çamaşır suyu ve sert kimyasallar kullanmayın."
        ],
        boxContents: [
            "1 adet ThermoPro Premium termos",
            "1 adet sızdırmaz kapak",
            "Kullanım ve temizlik kılavuzu"
        ],
        colors: [
            { name: "Siyah", image: "termossiyah.png" },
            { name: "Yeşil", image: "termosyesil.png" },
            { name: "Lacivert", image: "termoslacivert.png" }
        ],
        reviews: [
            { name: "Örnek Kullanıcı", text: "Şık ve modern termos tasarımı.", stars: 5 },
            { name: "Örnek Kullanıcı", text: "Seyahatlerde kullanışlı bir ürün.", stars: 4 }
        ]
    },

    {
        id: 8,
        name: "GEZGİN NightBeam Kamp Lambası",
        category: "Kamp Ekipmanları",
        price: 1290,
        stock: 2,
        description: "GEZGİN NightBeam Kamp Lambası, kamp alanlarında ve açık hava etkinliklerinde pratik aydınlatma sağlamak amacıyla tasarlanmıştır. LED aydınlatma sistemi, taşınabilir gövdesi ve farklı ışık seviyeleriyle kullanım kolaylığı sunar.",
        features: [
            "Aydınlatma: LED ışık sistemi",
            "Işık gücü: 300 lümen",
            "Aydınlatma modu: 3 farklı ışık seviyesi",
            "Batarya: Şarj edilebilir batarya",
            "Çalışma süresi: Kullanıma bağlı 4-10 saat",
            "Şarj bağlantısı: USB",
            "Gövde: Dayanıklı ABS malzeme",
            "Ağırlık: Yaklaşık 280 g",
            "Taşıma: Askı ve taşıma aparatı",
            "Kullanım: Kamp ve açık hava etkinlikleri"
        ],
        warranty: "2 yıl",
        usageInstructions: [
            "İlk kullanımdan önce bataryayı uygun USB bağlantısıyla şarj edin.",
            "Işık seviyesini ortamın ihtiyacına göre ayarlayın.",
            "Ürünü doğrudan suya maruz bırakmayın.",
            "Şarj sırasında uygun güç çıkışına sahip adaptör kullanın.",
            "Temizlik öncesinde lambayı kapatın ve şarj kablosunu çıkarın.",
            "Gövdeyi kuru veya hafif nemli yumuşak bir bezle silin.",
            "Ürünü suya batırmayın ve akan su altında yıkamayın.",
            "Temizlik sonrasında tamamen kuruduğundan emin olun.",
            "Uzun süre kullanılmayacaksa kuru ortamda saklayın."
        ],
        boxContents: [
            "1 adet NightBeam kamp lambası",
            "1 adet USB şarj kablosu",
            "Kullanım kılavuzu"
        ],
        colors: [
            { name: "Standart", image: "kamplambasi.png" }
        ],
        reviews: [
            { name: "Örnek Kullanıcı", text: "Kamp ekipmanları için güzel bir tamamlayıcı.", stars: 5 },
            { name: "Örnek Kullanıcı", text: "Kompakt yapısını beğendim.", stars: 4 }
        ]
    },

    {
        id: 9,
        name: "GEZGİN SleepComfort Uyku Göz Bandı",
        category: "Seyahat Konforu",
        price: 699,
        stock: 12,
        description: "GEZGİN SleepComfort Uyku Göz Bandı, yolculuk ve dinlenme sırasında ışığı azaltmaya yardımcı olmak amacıyla tasarlanmıştır. Yumuşak kumaş yüzeyi ve ayarlanabilir bant yapısıyla farklı kullanıcıların rahat kullanımına uygun bir tasarım sunar.",
        features: [
            "Dış yüzey: Yumuşak polyester kumaş",
            "İç yüzey: Yumuşak astar",
            "Ölçüler: 20 × 9 cm",
            "Ağırlık: Yaklaşık 30 g",
            "Bant: Ayarlanabilir elastik yapı",
            "Tasarım: Burun çevresine uyumlu form",
            "Kullanım: Uçak, otobüs ve dinlenme",
            "Taşıma: Hafif ve kompakt yapı"
        ],
        warranty: "1 yıl",
        usageInstructions: [
            "Bandı gözlerinizi sıkıştırmayacak şekilde yerleştirin.",
            "Elastik bandı baş ölçünüze göre ayarlayın.",
            "Her kullanımdan sonra temiz ve kuru ortamda saklayın.",
            "Ürünü soğuk veya ılık suyla elde, hassas sabun kullanarak yıkayın.",
            "Bakım etiketi izin veriyorsa hassas makine programı kullanılabilir.",
            "Yıkama sırasında çamaşır suyu ve ağır kimyasallar kullanmayın.",
            "Kumaşı sıkıp burmayın; doğal şekilde kurumaya bırakın.",
            "Elastik bandı yüksek sıcaklığa ve ütüye maruz bırakmayın."
        ],
        boxContents: [
            "1 adet SleepComfort uyku göz bandı",
            "Kullanım ve bakım bilgilendirmesi"
        ],
        colors: [
            { name: "Siyah", image: "uykugozbandisiyah.png" },
            { name: "Lacivert", image: "uykugozbandilacivert.png" },
            { name: "Yeşil", image: "uykugozbandiyesil.png" }
        ],
        reviews: [
            { name: "Örnek Kullanıcı", text: "Seyahat konforu için sade ve şık bir ürün.", stars: 5 },
            { name: "Örnek Kullanıcı", text: "Hafif yapısını beğendim.", stars: 4 }
        ]
    },

    {
        id: 10,
        name: "GEZGİN AdventurePro Sırt Çantası",
        category: "Seyahat Çantaları",
        price: 2499,
        oldPrice: 2940,
        discount: 15,
        stock: 3,
        description: "GEZGİN AdventurePro Sırt Çantası, doğa yürüyüşleri, seyahatler ve günlük kullanım için geliştirilmiş çok bölmeli bir taşıma çözümüdür. Ergonomik omuz askıları, geniş ana bölmesi ve dayanıklı kumaş yapısıyla eşyaların düzenli taşınmasına yardımcı olur.",
        features: [
            "Malzeme: 600D polyester kumaş",
            "Kapasite: 35 litre",
            "Ölçüler: 52 × 32 × 22 cm",
            "Ağırlık: Yaklaşık 850 g",
            "Ana bölme: Geniş fermuarlı ana hacim",
            "Ek bölmeler: 3 adet yardımcı cep",
            "Laptop bölmesi: 15,6 inç uyumlu",
            "Askılar: Ayarlanabilir ve destekli omuz askıları",
            "Sırt paneli: Destekli ergonomik yapı",
            "Kullanım: Seyahat, kamp ve günlük yaşam"
        ],
        warranty: "2 yıl",
        usageInstructions: [
            "Ağır eşyaları sırtınıza yakın bölümlere yerleştirin.",
            "Omuz askılarını vücut ölçünüze göre ayarlayın.",
            "Çantayı taşıma kapasitesinin üzerinde doldurmayın.",
            "Fermuar ve dikiş bölgelerini aşırı zorlamayın.",
            "Temizlik öncesinde tüm cepleri boşaltın.",
            "Yüzeydeki toz ve kirleri yumuşak fırçayla temizleyin.",
            "Lekeleri nemli bez ve az miktarda hassas sabunla silin.",
            "Bakım etiketi izin vermedikçe çamaşır makinesinde yıkamayın.",
            "Güneş altında veya yüksek sıcaklıkta kurutmayın.",
            "Saklamadan önce tamamen kuruduğundan emin olun."
        ],
        boxContents: [
            "1 adet AdventurePro sırt çantası",
            "Kullanım ve bakım bilgilendirmesi"
        ],
        colors: [
            { name: "Yeşil", image: "sirtcantasiyesil.png" },
            { name: "Lacivert", image: "sirtcantasilacivert.png" },
            { name: "Siyah", image: "sirtcantasisiyah.png" }
        ],
        reviews: [
            { name: "Örnek Kullanıcı", text: "Günlük kullanım ve seyahat için güzel bir çanta.", stars: 5 },
            { name: "Örnek Kullanıcı", text: "Bölmeli yapısı oldukça kullanışlı.", stars: 4 }
        ]
    },

    {
        id: 11,
        name: "GEZGİN StormShield Premium Yağmurluk",
        category: "Outdoor Giyim",
        price: 2299,
        stock: 7,
        description: "GEZGİN StormShield Premium Yağmurluk, doğa yürüyüşleri ve açık hava etkinliklerinde yağmur ve rüzgâra karşı koruma sağlamak amacıyla tasarlanmıştır. Hafif yapısı, ayarlanabilir kapüşonu ve fonksiyonel cep detaylarıyla outdoor kullanımına uygundur.",
        features: [
            "Dış kumaş: Polyester",
            "Kaplama: Suya dayanıklı PU kaplama",
            "Su dayanımı: 5000 mm su sütunu",
            "Dikişler: Bantlanmış dikiş yapısı",
            "Kapüşon: Ayarlanabilir kapüşon",
            "Fermuar: Ön korumalı fermuar sistemi",
            "Cepler: 2 adet fermuarlı dış cep",
            "Bedenler: S, M, L, XL",
            "Kesim: Rahat outdoor kalıp",
            "Ağırlık: Yaklaşık 450 g",
            "Kullanım: Yağmurlu hava ve doğa yürüyüşleri"
        ],
        warranty: "2 yıl",
        usageInstructions: [
            "Satın almadan önce beden ölçülerinizi kontrol edin.",
            "Yağmurlu havalarda kapüşon ve fermuar kapaklarını doğru şekilde kullanın.",
            "Kullanım sonrasında yağmurluğu havalandırarak kurutun.",
            "Yıkamadan önce ürünün bakım etiketini kontrol edin.",
            "Etiket izin veriyorsa düşük sıcaklıkta hassas programda yıkayın.",
            "Teknik kumaşlar için uygun deterjan kullanın.",
            "Çamaşır suyu ve yumuşatıcı kullanmayın.",
            "İyice duruladıktan sonra askıda doğal şekilde kurutun.",
            "Su itici kaplamanın bakımında üretici talimatlarını izleyin."
        ],
        boxContents: [
            "1 adet StormShield Premium yağmurluk",
            "Kullanım ve bakım bilgilendirmesi"
        ],
        colors: [
            { name: "Lacivert", image: "yagmurluklacivert.png" },
            { name: "Yeşil", image: "yagmurlukyesil.png" }
        ],
        reviews: [
            { name: "Örnek Kullanıcı", text: "Outdoor kullanımına uygun bir tasarım.", stars: 5 },
            { name: "Örnek Kullanıcı", text: "Renk seçeneklerini beğendim.", stars: 4 }
        ]
    },

    {
        id: 12,
        name: "GEZGİN PowerGo Taşınabilir Şarj Cihazı",
        category: "Teknoloji ve Seyahat",
        price: 1999,
        stock: 5,
        description: "GEZGİN PowerGo Taşınabilir Şarj Cihazı, seyahatlerde ve günlük kullanımda mobil cihazların şarj ihtiyacını karşılamak amacıyla tasarlanmıştır. Yüksek kapasiteli bataryası, birden fazla bağlantı seçeneği ve kompakt gövdesiyle pratik bir enerji çözümü sunar.",
        features: [
            "Batarya kapasitesi: 20.000 mAh",
            "Batarya türü: Lityum polimer",
            "USB-C çıkış: 20 W",
            "USB-A çıkış: 18 W",
            "Bağlantı: USB-A ve USB-C",
            "Giriş: USB-C",
            "Gösterge: LED şarj seviyesi göstergesi",
            "Gövde: Dayanıklı ABS malzeme",
            "Ağırlık: Yaklaşık 400 g",
            "Ölçüler: 15 × 7 × 2,5 cm",
            "Kullanım: Telefon ve uyumlu taşınabilir cihazlar"
        ],
        warranty: "2 yıl",
        usageInstructions: [
            "İlk kullanımdan önce cihazı uygun USB-C kablosuyla şarj edin.",
            "Şarj edeceğiniz cihazın güç gereksinimlerini kontrol edin.",
            "Ürünü aşırı sıcak ve nemli ortamlardan uzak tutun.",
            "Cihazı açmaya veya bataryasını sökmeye çalışmayın.",
            "Temizlik öncesinde cihazı kapatın ve bağlantı kablolarını çıkarın.",
            "Gövdeyi kuru ve yumuşak bir bezle silin.",
            "Ürünü kesinlikle suya batırmayın veya yıkamayın.",
            "Bağlantı girişlerini kuru tutun.",
            "Temizlikte sıvı kimyasal ve çözücü kullanmayın.",
            "Uzun süre kullanılmayacaksa serin ve kuru ortamda saklayın.",
            "Uçak yolculuklarında batarya kapasitesi ve taşıma kurallarını havayolundan kontrol edin."
        ],
        boxContents: [
            "1 adet PowerGo taşınabilir şarj cihazı",
            "1 adet USB-C şarj kablosu",
            "Kullanım kılavuzu"
        ],
        colors: [
            { name: "Beyaz", image: "tasarilebilirsarjcihazibeyaz.png" },
            { name: "Siyah", image: "tasarilebilirsarjcihazisiyah.png" }
        ],
        reviews: [
            { name: "Örnek Kullanıcı", text: "Seyahatlerde kullanışlı olabilecek bir ürün.", stars: 5 },
            { name: "Örnek Kullanıcı", text: "Kompakt görünümünü beğendim.", stars: 4 }
        ]
    }
];


// ==========================================
// GENEL FONKSİYONLAR
// ==========================================

function formatPrice(price) {
    return Number(price).toLocaleString("tr-TR") + " TL";
}

function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, character => {
        const entities = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        };

        return entities[character];
    });
}


// ==========================================
// ÜRÜN FİYATI VE İNDİRİM GÖRÜNÜMÜ
// ==========================================

function renderProductPrice(product) {
    if (product.discount && product.oldPrice) {
        return `
            <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap; margin:8px 0;">
                <span class="home-old-price" style="
                    color:#888;
                    text-decoration:line-through;
                    font-size:14px;
                    font-weight:500;
                ">
                    ${formatPrice(product.oldPrice)}
                </span>

                <span class="home-current-price" style="
                    color:#183d32;
                    font-size:20px;
                    font-weight:800;
                ">
                    ${formatPrice(product.price)}
                </span>
            </div>
        `;
    }

    return `
        <div style="margin:8px 0;">
            <span class="home-current-price" style="
                color:#183d32;
                font-size:20px;
                font-weight:800;
            ">
                ${formatPrice(product.price)}
            </span>
        </div>
    `;
}

function renderDiscountBadge(product) {
    if (!product.discount || !product.oldPrice) return "";

    return `
        <span class="discount-badge" style="
            display:inline-block;
            background:#d62828;
            color:#ffffff;
            padding:7px 12px;
            border-radius:5px;
            font-size:12px;
            font-weight:800;
            letter-spacing:0.4px;
            line-height:1;
        ">
            %${product.discount} İNDİRİM
        </span>
    `;
}


// ==========================================
// SEPET VE FAVORİ VERİLERİ
// ==========================================

let cart = JSON.parse(localStorage.getItem("gezginCart")) || [];
let favorites = JSON.parse(localStorage.getItem("gezginFavorites")) || [];


// ==========================================
// YORUM VERİLERİ
// ==========================================

let productReviews =
    JSON.parse(localStorage.getItem("gezginProductReviews")) || {};

function saveProductReviews() {
    localStorage.setItem(
        "gezginProductReviews",
        JSON.stringify(productReviews)
    );
}

function getProductReviews(productId) {
    return productReviews[productId] || [];
}

function createReviewId() {
    if (window.crypto && typeof window.crypto.randomUUID === "function") {
        return window.crypto.randomUUID();
    }

    return Date.now().toString(36) + Math.random().toString(36).substring(2);
}

function calculateProductRating(productId) {
    const reviews = getProductReviews(productId);

    if (reviews.length === 0) return null;

    const total = reviews.reduce(
        (sum, review) => sum + Number(review.stars),
        0
    );

    return total / reviews.length;
}

function renderRatingStars(rating) {
    const roundedRating = Math.round(rating);

    return `
        <span class="review-stars" aria-label="${rating} üzerinden 5 yıldız">
            ${"★".repeat(roundedRating)}${"☆".repeat(5 - roundedRating)}
        </span>
    `;
}

function updateDetailRating(productId) {
    const ratingText = document.getElementById("detail-rating-text");
    const ratingStars = document.getElementById("detail-rating-stars");

    if (!ratingText || !ratingStars) return;

    const reviews = getProductReviews(productId);
    const average = calculateProductRating(productId);

    if (average === null) {
        ratingStars.textContent = "☆☆☆☆☆";
        ratingText.textContent = "Henüz değerlendirme yapılmadı";
        return;
    }

    ratingStars.textContent =
        "★".repeat(Math.round(average)) +
        "☆".repeat(5 - Math.round(average));

    ratingText.textContent =
        average.toFixed(1).replace(".", ",") +
        " / 5 (" + reviews.length + " değerlendirme)";
}


// ==========================================
// ÜRÜN YORUMLARINI GÖSTERME
// ==========================================

function renderProductReviews(product) {
    const reviewsContainer = document.getElementById("detail-reviews");

    if (!reviewsContainer) return;

    const userReviews = getProductReviews(product.id);

    const sampleReviews = (product.reviews || []).map(review => `
        <div class="review-card">
            <div class="review-stars">
                ${"★".repeat(review.stars)}${"☆".repeat(5 - review.stars)}
            </div>

            <p>${escapeHTML(review.text)}</p>
            <strong>${escapeHTML(review.name)}</strong>

            <small style="display:block;color:#999;margin-top:6px;">
                Örnek değerlendirme
            </small>
        </div>
    `).join("");

    const savedReviews = userReviews.map(review => `
        <div class="review-card">
            <div class="review-stars">
                ${"★".repeat(review.stars)}${"☆".repeat(5 - review.stars)}
            </div>

            <p>${escapeHTML(review.text)}</p>
            <strong>${escapeHTML(review.name)}</strong>

            <small style="display:block;color:#999;margin-top:6px;">
                Kullanıcı değerlendirmesi
            </small>

            <button
                type="button"
                onclick="deleteProductReview(${product.id}, '${review.id}')"
                style="
                    margin-top:12px;
                    padding:7px 12px;
                    background:#fff;
                    color:#b83232;
                    border:1px solid #e5bcbc;
                    border-radius:5px;
                    cursor:pointer;
                    font-size:12px;
                "
            >
                🗑️ Yorumu Sil
            </button>
        </div>
    `).join("");

    reviewsContainer.innerHTML = sampleReviews + savedReviews;

    updateDetailRating(product.id);
}


// ==========================================
// YILDIZ SEÇİMİ
// ==========================================

function setupStarRating() {
    const starContainer = document.getElementById("star-rating");
    const ratingInput = document.getElementById("review-rating");
    const ratingMessage = document.getElementById("rating-message");

    if (!starContainer || !ratingInput) return;

    const stars = starContainer.querySelectorAll("button");

    stars.forEach(star => {
        star.addEventListener("click", function() {
            const selectedRating = Number(this.dataset.rating);

            ratingInput.value = selectedRating;

            stars.forEach(item => {
                const itemRating = Number(item.dataset.rating);

                item.style.color =
                    itemRating <= selectedRating ? "#c5a66b" : "#ccc";
            });

            if (ratingMessage) {
                ratingMessage.textContent =
                    selectedRating + " yıldız seçtiniz.";
            }
        });

        star.addEventListener("mouseenter", function() {
            const hoverRating = Number(this.dataset.rating);

            stars.forEach(item => {
                const itemRating = Number(item.dataset.rating);

                item.style.color =
                    itemRating <= hoverRating ? "#c5a66b" : "#ccc";
            });
        });
    });

    starContainer.addEventListener("mouseleave", function() {
        const selectedRating = Number(ratingInput.value);

        stars.forEach(item => {
            const itemRating = Number(item.dataset.rating);

            item.style.color =
                itemRating <= selectedRating ? "#c5a66b" : "#ccc";
        });
    });
}


// ==========================================
// YENİ YORUM EKLEME
// ==========================================

function setupProductReviewForm() {
    const form = document.getElementById("product-review-form");

    if (!form) return;

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const params = new URLSearchParams(window.location.search);
        const productId = Number(params.get("id"));

        const product = products.find(item => item.id === productId);

        if (!product) {
            alert("Ürün bulunamadı.");
            return;
        }

        const nameInput = document.getElementById("review-name");
        const commentInput = document.getElementById("review-comment");
        const ratingInput = document.getElementById("review-rating");
        const message = document.getElementById("review-form-message");

        const name = nameInput.value.trim();
        const comment = commentInput.value.trim();
        const stars = Number(ratingInput.value);

        if (name.length < 2) {
            message.textContent = "Lütfen adınızı en az 2 karakter olacak şekilde girin.";
            message.style.color = "#c0392b";
            return;
        }

        if (stars < 1 || stars > 5) {
            message.textContent = "Lütfen yıldız seçerek puan verin.";
            message.style.color = "#c0392b";
            return;
        }

        if (comment.length < 5) {
            message.textContent = "Yorumunuz en az 5 karakter olmalıdır.";
            message.style.color = "#c0392b";
            return;
        }

        if (comment.length > 500) {
            message.textContent = "Yorumunuz en fazla 500 karakter olabilir.";
            message.style.color = "#c0392b";
            return;
        }

        if (!productReviews[productId]) {
            productReviews[productId] = [];
        }

        productReviews[productId].push({
            id: createReviewId(),
            name: name,
            text: comment,
            stars: stars,
            date: new Date().toISOString()
        });

        saveProductReviews();
        renderProductReviews(product);

        form.reset();
        ratingInput.value = "0";

        document.querySelectorAll("#star-rating button").forEach(star => {
            star.style.color = "#ccc";
        });

        const ratingMessage = document.getElementById("rating-message");

        if (ratingMessage) {
            ratingMessage.textContent =
                "Puan vermek için yıldızlara tıklayın.";
        }

        message.textContent = "Yorumunuz başarıyla kaydedildi. Teşekkür ederiz!";
        message.style.color = "#27834b";
    });
}


// ==========================================
// KULLANICI YORUMUNU SİLME
// ==========================================

function deleteProductReview(productId, reviewId) {
    const reviews = getProductReviews(productId);

    if (!reviews.some(review => review.id === reviewId)) return;

    const approval = confirm("Bu yorumu silmek istediğinizden emin misiniz?");

    if (!approval) return;

    productReviews[productId] = reviews.filter(
        review => review.id !== reviewId
    );

    saveProductReviews();

    const product = products.find(item => item.id === productId);

    if (product) {
        renderProductReviews(product);
    }
}


// ==========================================
// STOK VE STOK BİLDİRİM VERİLERİ
// ==========================================

let stockData = JSON.parse(localStorage.getItem("gezginStock")) || {};

let stockNotifications =
    JSON.parse(localStorage.getItem("gezginStockNotifications")) || [];

products.forEach(product => {
    if (stockData[product.id] === undefined) {
        stockData[product.id] = product.stock;
    }
});

function saveStock() {
    localStorage.setItem("gezginStock", JSON.stringify(stockData));
}

function getStock(productId) {
    return Number(stockData[productId] || 0);
}

function saveStockNotifications() {
    localStorage.setItem(
        "gezginStockNotifications",
        JSON.stringify(stockNotifications)
    );
}


// ==========================================
// STOK BİLDİRİMİ TALEBİ
// ==========================================

function notifyWhenRestocked(productId) {
    const product = products.find(item => item.id === productId);

    if (!product) return;

    if (getStock(productId) > 0) {
        alert("Bu ürün yeniden stokta! Hemen inceleyebilirsiniz.");
        return;
    }

    const email = prompt(
        `"${product.name}" yeniden stoklara geldiğinde haberdar olmak için e-posta adresinizi girin:`
    );

    if (email === null) return;

    const trimmedEmail = email.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(trimmedEmail)) {
        alert("Lütfen geçerli bir e-posta adresi girin.");
        return;
    }

    const alreadyRegistered = stockNotifications.some(notification =>
        notification.productId === productId &&
        notification.email.toLowerCase() === trimmedEmail.toLowerCase()
    );

    if (alreadyRegistered) {
        alert("Bu ürün için daha önce bildirim talebi oluşturmuşsunuz.");
        return;
    }

    stockNotifications.push({
        productId: productId,
        productName: product.name,
        email: trimmedEmail,
        date: new Date().toISOString()
    });

    saveStockNotifications();

    alert(
        "Bildirim talebiniz demo sistemine kaydedildi!\n\n" +
        "Bu örnek sistem gerçek e-posta göndermez. " +
        "Ürün yeniden stoklandığında site içerisinde bildirim gösterilir."
    );
}


// ==========================================
// STOK YENİDEN GELDİĞİNDE BİLDİRİM
// ==========================================

function checkRestockNotifications() {
    const readyNotifications = stockNotifications.filter(notification =>
        getStock(notification.productId) > 0
    );

    if (readyNotifications.length === 0) return;

    const notificationMessages = readyNotifications.map(notification =>
        `${notification.productName}\nBildirim talebi: ${notification.email}`
    );

    alert(
        "🔔 GEZGİN STOK BİLDİRİMİ\n\n" +
        "Aşağıdaki ürünler yeniden stoklara geldi:\n\n" +
        notificationMessages.join("\n\n") +
        "\n\nBu, demo amaçlı site içi bildirimdir. " +
        "Gerçek e-posta gönderimi yapılmamıştır."
    );

    stockNotifications = stockNotifications.filter(notification =>
        getStock(notification.productId) <= 0
    );

    saveStockNotifications();
}


// ==========================================
// STOK DURUMU GÖRÜNÜMÜ
// ==========================================

function renderStockStatus(product) {
    const stock = getStock(product.id);

    if (stock === 0) {
        return `
            <span class="stock-status stock-out" style="
                display:block;
                color:#c0392b;
                font-size:13px;
                font-weight:700;
                margin:8px 0;
            ">
                ● Tükendi
            </span>

            <button
                type="button"
                onclick="notifyWhenRestocked(${product.id})"
                style="
                    display:block;
                    width:100%;
                    padding:10px 12px;
                    margin:8px 0 12px;
                    background:#fff;
                    color:#183d32;
                    border:1px solid #c5a66b;
                    border-radius:6px;
                    font-size:13px;
                    font-weight:700;
                    cursor:pointer;
                "
            >
                🔔 Stoğa Geldiğinde Haber Ver
            </button>
        `;
    }

    if (stock <= 3) {
        return `
            <span class="stock-status stock-low" style="
                display:block;
                color:#d98218;
                font-size:13px;
                font-weight:700;
                margin:8px 0;
            ">
                ● Son ${stock} Ürün
            </span>
        `;
    }

    return `
        <span class="stock-status stock-available" style="
            display:block;
            color:#27834b;
            font-size:13px;
            font-weight:700;
            margin:8px 0;
        ">
            ● Stokta
        </span>
    `;
}


// ==========================================
// ANA SAYFA - ÖNE ÇIKAN ÜRÜNLER
// ==========================================

function renderHomeStockStatus(product) {
    const stock = getStock(product.id);

    if (stock === 0) {
        return `
            <span class="home-stock-status home-stock-out">
                ● Tükendi
            </span>

            <button
                type="button"
                class="home-restock-button"
                onclick="notifyWhenRestocked(${product.id})"
            >
                🔔 Stoğa Geldiğinde Haber Ver
            </button>
        `;
    }

    if (stock <= 3) {
        return `
            <span class="home-stock-status home-stock-low">
                ● Son ${stock} Ürün
            </span>
        `;
    }

    return `
        <span class="home-stock-status home-stock-available">
            ● Stokta
        </span>
    `;
}


function renderHomeFeaturedProducts() {
    const featuredContainer =
        document.getElementById("featured-products-list");

    if (!featuredContainer) return;

    const featuredProductIds = [1, 2, 3, 4, 5, 6, 7, 10];

    const featuredProducts = featuredProductIds
        .map(id => products.find(product => product.id === id))
        .filter(Boolean);

    featuredContainer.innerHTML = featuredProducts.map(product => {
        const isFavorite = favorites.includes(product.id);
        const image = product.colors[0].image;
        const stock = getStock(product.id);

        return `
            <div class="product-card">

                ${renderDiscountBadge(product)}

                <a
                    href="urun-detay.html?id=${product.id}"
                    class="product-image-link"
                >
                    <img
                        src="images/${image}"
                        alt="${escapeHTML(product.name)}"
                        loading="lazy"
                    >
                </a>

                <div class="product-info">

                    <span class="product-category">
                        ${escapeHTML(product.category)}
                    </span>

                    <button
                        type="button"
                        class="favorite-button ${isFavorite ? "active" : ""}"
                        onclick="toggleFavorite(${product.id})"
                        aria-label="Favorilere ekle veya çıkar"
                        title="Favorilere ekle veya çıkar"
                    >
                        ${isFavorite ? "♥" : "♡"}
                    </button>

                    <h3>${escapeHTML(product.name)}</h3>

                    ${renderHomeStockStatus(product)}

                    <p class="product-price">
                        ${renderProductPrice(product)}
                    </p>

                    <div class="home-product-actions" style="
                        display:flex;
                        flex-direction:column;
                        align-items:stretch;
                        gap:10px;
                        margin-top:14px;
                    ">

                        <button
                            type="button"
                            class="product-button home-add-to-cart"
                            onclick="addToCart(${product.id})"
                            ${stock === 0 ? "disabled" : ""}
                            style="
                                width:100%;
                                min-height:44px;
                                ${stock === 0
                                    ? "opacity:0.5;cursor:not-allowed;"
                                    : ""}
                            "
                        >
                            ${stock === 0 ? "Stokta Yok" : "🛒 Sepete Ekle"}
                        </button>

                        <a
                            href="urun-detay.html?id=${product.id}"
                            class="detail-button"
                            style="
                                display:flex;
                                width:100%;
                                min-height:44px;
                                align-items:center;
                                justify-content:center;
                                text-align:center;
                            "
                        >
                            Ürünü İncele
                        </a>

                    </div>

                </div>
            </div>
        `;
    }).join("");
}


// ==========================================
// TÜM STOK GÖRÜNÜMLERİNİ GÜNCELLEME
// ==========================================

function updateStockDisplays() {
    renderProducts();
    renderFavorites();
    renderHomeFeaturedProducts();
    renderProductStockDetail();
    checkRestockNotifications();
}


// ==========================================
// ÜRÜN DETAYINDA STOK GÖRÜNÜMÜ
// ==========================================

function renderProductStockDetail() {
    const detailName = document.getElementById("detail-name");

    if (!detailName) return;

    const params = new URLSearchParams(window.location.search);
    const productId = Number(params.get("id"));
    const product = products.find(item => item.id === productId);

    if (!product) return;

    let stockElement = document.getElementById("detail-stock");

    if (!stockElement) {
        stockElement = document.createElement("div");
        stockElement.id = "detail-stock";

        const priceElement = document.getElementById("detail-price");

        if (priceElement) {
            priceElement.insertAdjacentElement("afterend", stockElement);
        }
    }

    stockElement.innerHTML = renderStockStatus(product);

    const addButton = document.getElementById("detail-add-button");

    if (addButton) {
        const stock = getStock(product.id);

        addButton.disabled = stock === 0;

        addButton.textContent = stock === 0
            ? "Stokta Yok"
            : "Sepete Ekle";

        addButton.style.opacity = stock === 0 ? "0.5" : "1";
        addButton.style.cursor = stock === 0 ? "not-allowed" : "pointer";
    }
}


// ==========================================
// SEPET KAYDETME VE SEPET SAYACI
// ==========================================

function saveCart() {
    localStorage.setItem("gezginCart", JSON.stringify(cart));
    updateCartCount();
}

function updateCartCount() {
    const countElement = document.getElementById("cart-count");

    if (countElement) {
        const totalCount = cart.reduce(
            (total, item) => total + item.quantity,
            0
        );

        countElement.textContent = totalCount;
    }
}


// ==========================================
// FAVORİLER SİSTEMİ
// ==========================================

function saveFavorites() {
    localStorage.setItem("gezginFavorites", JSON.stringify(favorites));
}

function toggleFavorite(productId) {
    if (favorites.includes(productId)) {
        favorites = favorites.filter(id => id !== productId);
    } else {
        favorites.push(productId);
    }

    saveFavorites();

    renderProducts();
    renderFavorites();
    renderHomeFeaturedProducts();
}

function renderFavorites() {
    const favoritesList = document.getElementById("favorites-list");
    const emptyFavorites = document.getElementById("empty-favorites");

    if (!favoritesList) return;

    const favoriteProducts = products.filter(product =>
        favorites.includes(product.id)
    );

    if (favoriteProducts.length === 0) {
        favoritesList.innerHTML = "";

        if (emptyFavorites) {
            emptyFavorites.style.display = "block";
        }

        return;
    }

    if (emptyFavorites) {
        emptyFavorites.style.display = "none";
    }

    favoritesList.innerHTML = favoriteProducts.map(product => `
        <div class="product-card">

            ${renderDiscountBadge(product)}

            <a href="urun-detay.html?id=${product.id}">
                <img
                    src="images/${product.colors[0].image}"
                    alt="${escapeHTML(product.name)}"
                >
            </a>

            <div class="product-info">

                <span class="product-category">
                    ${escapeHTML(product.category)}
                </span>

                <h3>${escapeHTML(product.name)}</h3>

                ${renderStockStatus(product)}

                <p class="product-price">
                    ${renderProductPrice(product)}
                </p>

                <a
                    href="urun-detay.html?id=${product.id}"
                    class="detail-button"
                >
                    Ürünü İncele
                </a>

                <button
                    class="product-button"
                    onclick="toggleFavorite(${product.id})"
                >
                    ♡ Favorilerden Çıkar
                </button>

            </div>
        </div>
    `).join("");
}


// ==========================================
// ÜRÜNLER SAYFASI - ARAMA VE FİLTRELEME
// ==========================================

function renderProducts() {
    const productList = document.getElementById("product-list");

    if (!productList) return;

    const searchInput = document.getElementById("product-search");
    const categoryFilter = document.getElementById("category-filter");
    const sortFilter = document.getElementById("sort-filter");

    const searchText = searchInput
        ? searchInput.value.toLocaleLowerCase("tr-TR").trim()
        : "";

    const selectedCategory = categoryFilter
        ? categoryFilter.value
        : "all";

    const selectedSort = sortFilter
        ? sortFilter.value
        : "default";

    let filteredProducts = products.filter(product => {
        const searchableText = (
            product.name + " " + product.category + " " + product.description
        ).toLocaleLowerCase("tr-TR");

        const matchesSearch = searchableText.includes(searchText);

        let matchesCategory = true;

        if (selectedCategory === "kamp") {
            matchesCategory = product.category === "Kamp Ekipmanları";
        }

        if (selectedCategory === "seyahat") {
            matchesCategory = [
                "Seyahat Konforu",
                "Seyahat Düzenleyicileri",
                "Seyahat Çantaları"
            ].includes(product.category);
        }

        if (selectedCategory === "outdoor") {
            matchesCategory = [
                "Outdoor Yaşam",
                "Outdoor Giyim",
                "Kamp Ekipmanları"
            ].includes(product.category);
        }

        if (selectedCategory === "aksesuar") {
            matchesCategory = [
                "Seyahat Aksesuarları",
                "Teknoloji ve Seyahat"
            ].includes(product.category);
        }

        return matchesSearch && matchesCategory;
    });

    if (selectedSort === "low-high") {
        filteredProducts.sort((a, b) => a.price - b.price);
    }

    if (selectedSort === "high-low") {
        filteredProducts.sort((a, b) => b.price - a.price);
    }

    if (selectedSort === "az") {
        filteredProducts.sort((a, b) =>
            a.name.localeCompare(b.name, "tr")
        );
    }

    if (selectedSort === "za") {
        filteredProducts.sort((a, b) =>
            b.name.localeCompare(a.name, "tr")
        );
    }

    productList.innerHTML = filteredProducts.map(product => {
        const stock = getStock(product.id);
        const isFavorite = favorites.includes(product.id);

        return `
            <div class="product-card">

                ${renderDiscountBadge(product)}

                <a href="urun-detay.html?id=${product.id}">
                    <img
                        id="product-image-${product.id}"
                        src="images/${product.colors[0].image}"
                        alt="${escapeHTML(product.name)}"
                    >
                </a>

                <div class="product-info">

                    <span class="product-category">
                        ${escapeHTML(product.category)}
                    </span>

                    <button
                        class="favorite-button ${isFavorite ? "active" : ""}"
                        onclick="toggleFavorite(${product.id})"
                        aria-label="Favorilere ekle veya çıkar"
                        title="Favorilere ekle veya çıkar"
                    >
                        ${isFavorite ? "♥" : "♡"}
                    </button>

                    <h3>${escapeHTML(product.name)}</h3>

                    ${renderStockStatus(product)}

                    <p class="product-price">
                        ${renderProductPrice(product)}
                    </p>

                    <label for="color-${product.id}">
                        Renk seçeneği:
                    </label>

                    <select
                        id="color-${product.id}"
                        onchange="changeProductColor(${product.id}, this.value)"
                    >
                        ${product.colors.map((color, index) => `
                            <option value="${index}">
                                ${escapeHTML(color.name)}
                            </option>
                        `).join("")}
                    </select>

                    <button
                        class="product-button"
                        onclick="addToCart(${product.id})"
                        ${stock === 0 ? "disabled" : ""}
                        style="${stock === 0 ? "opacity:0.5;cursor:not-allowed;" : ""}"
                    >
                        ${stock === 0 ? "Stokta Yok" : "Sepete Ekle"}
                    </button>

                    <a
                        href="urun-detay.html?id=${product.id}"
                        class="detail-button"
                    >
                        Detayları İncele
                    </a>

                </div>
            </div>
        `;
    }).join("");

    const resultCount = document.getElementById("product-result-count");

    if (resultCount) {
        resultCount.textContent =
            filteredProducts.length + " ürün listeleniyor.";
    }

    const noProducts = document.getElementById("no-products");

    if (noProducts) {
        noProducts.style.display =
            filteredProducts.length === 0 ? "block" : "none";
    }
}

function setupProductFilters() {
    const searchInput = document.getElementById("product-search");
    const categoryFilter = document.getElementById("category-filter");
    const sortFilter = document.getElementById("sort-filter");

    if (searchInput) {
        searchInput.addEventListener("input", renderProducts);
    }

    if (categoryFilter) {
        categoryFilter.addEventListener("change", renderProducts);
    }

    if (sortFilter) {
        sortFilter.addEventListener("change", renderProducts);
    }
}

function changeProductColor(productId, colorIndex) {
    const product = products.find(item => item.id === productId);

    if (!product) return;

    const selectedColor = product.colors[Number(colorIndex)];

    const image = document.getElementById(`product-image-${productId}`);

    if (image && selectedColor) {
        image.src = "images/" + selectedColor.image;
    }
}


// ==========================================
// ÜRÜN DETAYI - TEKNİK BİLGİLERİ GÖSTERME
// ==========================================

function renderProductInformation(product) {

    const features = document.getElementById("detail-features");
    const warranty = document.getElementById("detail-warranty");
    const usage = document.getElementById("detail-usage");
    const boxContents = document.getElementById("detail-box-content");

    if (features) {
        features.innerHTML = product.features.map(feature => {
            const parts = feature.split(":");

            const title = parts.length > 1 ? parts[0] : "Özellik";
            const value = parts.length > 1
                ? parts.slice(1).join(":").trim()
                : feature;

            return `
                <div class="feature-row">
                    <strong>${escapeHTML(title)}</strong>
                    <span>${escapeHTML(value)}</span>
                </div>
            `;
        }).join("");
    }

    if (warranty) {
        warranty.innerHTML = `
            <div class="warranty-card">
                <h3>Garanti Bilgisi</h3>
                <p>${escapeHTML(product.warranty)} garanti süresi.</p>
                <small>
                    Garanti süreleri ve teknik bilgiler GEZGİN eğitim projesi
                    kapsamında belirlenmiştir.
                </small>
            </div>
        `;
    }

    if (usage) {
        usage.innerHTML = `
            <ul class="detail-information-list">
                ${product.usageInstructions.map(item => `
                    <li>${escapeHTML(item)}</li>
                `).join("")}
            </ul>
        `;
    }

    if (boxContents) {
        boxContents.innerHTML = `
            <ul class="detail-information-list">
                ${product.boxContents.map(item => `
                    <li>${escapeHTML(item)}</li>
                `).join("")}
            </ul>
        `;
    }
}


// ==========================================
// ÜRÜN DETAY SAYFASI
// ==========================================

function renderProductDetail() {
    const detailName = document.getElementById("detail-name");

    if (!detailName) return;

    const params = new URLSearchParams(window.location.search);
    const productId = Number(params.get("id"));

    const product = products.find(item => item.id === productId);

    if (!product) {
        const detailArea = document.querySelector(".product-detail");

        if (detailArea) {
            detailArea.innerHTML = `
                <h2>Ürün bulunamadı.</h2>
                <a href="urunler.html">Ürünlere geri dön</a>
            `;
        }

        return;
    }

    document.title = product.name + " | GEZGİN";

    document.getElementById("detail-category").textContent = product.category;
    document.getElementById("detail-name").textContent = product.name;

    document.getElementById("detail-price").innerHTML =
        renderProductPrice(product);

    document.getElementById("detail-description").textContent =
        product.description;

    const colorSelect = document.getElementById("detail-color");

    if (colorSelect) {
        colorSelect.innerHTML = product.colors.map((color, index) => `
            <option value="${index}">
                ${escapeHTML(color.name)}
            </option>
        `).join("");
    }

    // BEDEN SEÇENEKLERİ
    const sizeArea = document.getElementById("detail-size-area");
    const sizeSelect = document.getElementById("detail-size");

    let sizes = [];

    if (product.id === 11) {
        sizes = ["S", "M", "L", "XL"];
    } else if (product.id === 3) {
        sizes = ["Regular", "Large", "XL"];
    }

    if (sizeArea && sizeSelect) {
        if (sizes.length > 0) {
            sizeArea.style.display = "block";

            sizeSelect.innerHTML = sizes.map(size => `
                <option value="${size}">${size}</option>
            `).join("");
        } else {
            sizeArea.style.display = "none";
            sizeSelect.innerHTML = "";
        }
    }

    const mainImage = document.getElementById("detail-image");

    if (mainImage) {
        mainImage.src = "images/" + product.colors[0].image;
        mainImage.alt = product.name;
    }

    renderThumbnails(product);
    renderProductStockDetail();
    renderProductInformation(product);
    renderProductReviews(product);

    if (colorSelect && mainImage) {
        colorSelect.onchange = function() {
            const selectedIndex = Number(this.value);

            mainImage.src = "images/" + product.colors[selectedIndex].image;

            renderThumbnails(product, selectedIndex);
        };
    }

    const addButton = document.getElementById("detail-add-button");

    if (addButton) {
        addButton.onclick = function() {
            const selectedIndex = colorSelect
                ? Number(colorSelect.value)
                : 0;

            const selectedSize = sizes.length > 0 && sizeSelect
                ? sizeSelect.value
                : "";

            addProductToCart(product, selectedIndex, selectedSize);
        };
    }

    setupImageZoom();
}

function selectDetailImage(imageName, element) {
    const mainImage = document.getElementById("detail-image");

    if (mainImage) {
        mainImage.src = "images/" + imageName;
    }

    document.querySelectorAll(".product-thumbnail").forEach(image => {
        image.classList.remove("active");
    });

    if (element) {
        element.classList.add("active");
    }
}


// ==========================================
// GÖRSEL BÜYÜTME
// ==========================================

function setupImageZoom() {
    const container = document.getElementById("zoom-container");
    const image = document.getElementById("detail-image");

    if (!container || !image) return;

    container.addEventListener("mousemove", function(event) {
        const rect = container.getBoundingClientRect();

        const x = ((event.clientX - rect.left) / rect.width) * 100;
        const y = ((event.clientY - rect.top) / rect.height) * 100;

        image.style.transformOrigin = `${x}% ${y}%`;
        image.style.transform = "scale(2)";
    });

    container.addEventListener("mouseleave", function() {
        image.style.transform = "scale(1)";
    });
}


// ==========================================
// SEPETE EKLEME
// ==========================================

function addToCart(productId) {
    const product = products.find(item => item.id === productId);

    if (!product) return;

    // Beden seçilmesi gereken ürünler detay sayfasından eklenmeli.
    if (product.id === 3 || product.id === 11) {
        alert("Lütfen ürün detay sayfasına girerek beden seçimi yapınız.");
        window.location.href = `urun-detay.html?id=${product.id}`;
        return;
    }

    const colorSelect = document.getElementById(`color-${productId}`);
    const colorIndex = colorSelect ? Number(colorSelect.value) : 0;

    addProductToCart(product, colorIndex, "");
}

function addProductToCart(product, colorIndex, selectedSize = "") {
    const selectedColor = product.colors[colorIndex];

    if (!selectedColor) return;

    // Beden kontrolü
    if ((product.id === 3 || product.id === 11) && !selectedSize) {
        alert("Lütfen ürün için bir beden seçiniz.");
        return;
    }

    const currentStock = getStock(product.id);

    if (currentStock <= 0) {
        alert("Üzgünüz, bu ürün şu anda stokta bulunmuyor.");
        updateStockDisplays();
        return;
    }

    // Aynı ürün, aynı renk ve aynı beden kontrolü
    const existingItem = cart.find(item =>
        item.productId === product.id &&
        item.color === selectedColor.name &&
        (item.size || "") === selectedSize
    );

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            productId: product.id,
            name: product.name,
            price: product.price,
            color: selectedColor.name,
            size: selectedSize,
            image: selectedColor.image,
            quantity: 1
        });
    }

    stockData[product.id]--;

    saveStock();
    saveCart();
    renderCart();
    updateStockDisplays();

    alert("Ürün sepetinize eklendi!");
}


// ==========================================
// SEPET SAYFASI
// ==========================================

function renderCart() {
    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");

    if (!cartItems || !cartTotal) return;

    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <h3>Sepetiniz henüz boş.</h3>
                <p>Beğendiğiniz ürünleri keşfetmeye başlayın.</p>
                <a href="urunler.html" class="product-button">
                    Alışverişe Başla
                </a>
            </div>
        `;
    } else {
        cartItems.innerHTML = cart.map((item, index) => `
            <div class="cart-item">

                <img
                    src="images/${item.image}"
                    alt="${escapeHTML(item.name)}"
                    class="cart-product-image"
                >

                <div class="cart-product-info">
                    <h3>${escapeHTML(item.name)}</h3>

                    <p>Renk: ${escapeHTML(item.color)}</p>

                    ${item.size ? `
                        <p>Beden: ${escapeHTML(item.size)}</p>
                    ` : ""}

                    <p>Birim fiyat: ${formatPrice(item.price)}</p>
                </div>

                <div class="quantity-controls">
                    <button onclick="changeQuantity(${index}, -1)">−</button>
                    <span>${item.quantity}</span>
                    <button onclick="changeQuantity(${index}, 1)">+</button>
                </div>

                <strong>
                    ${formatPrice(item.price * item.quantity)}
                </strong>

                <button
                    class="remove-button"
                    onclick="removeFromCart(${index})"
                >
                    Kaldır
                </button>

            </div>
        `).join("");
    }

    const total = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    cartTotal.textContent = formatPrice(total);

    const subtotal = document.getElementById("cart-subtotal");

    if (subtotal) {
        subtotal.textContent = formatPrice(total);
    }
}

// ==========================================
// ADET DEĞİŞTİRME VE ÜRÜN SİLME
// ==========================================

function changeQuantity(index, amount) {
    if (!cart[index]) return;

    const item = cart[index];
    const product = products.find(product => product.id === item.productId);

    if (!product) return;

    if (amount > 0) {
        const currentStock = getStock(product.id);

        if (currentStock <= 0) {
            alert("Bu ürünün stoğu tükenmiştir.");
            return;
        }

        item.quantity++;
        stockData[product.id]--;
    } else {
        item.quantity--;
        stockData[product.id]++;

        if (item.quantity <= 0) {
            cart.splice(index, 1);
        }
    }

    saveStock();
    saveCart();
    renderCart();
    updateStockDisplays();
}

function removeFromCart(index) {
    if (!cart[index]) return;

    const item = cart[index];

    stockData[item.productId] =
        getStock(item.productId) + item.quantity;

    cart.splice(index, 1);

    saveStock();
    saveCart();
    renderCart();
    updateStockDisplays();
}


// ==========================================
// KAMPANYA SLIDER
// ==========================================

function setupCampaignSlider() {
    const slides = document.querySelectorAll(".campaign-slide");

    if (slides.length === 0) return;

    let currentSlide = 0;

    setInterval(function() {
        slides[currentSlide].classList.remove("active");

        currentSlide = (currentSlide + 1) % slides.length;

        slides[currentSlide].classList.add("active");
    }, 4000);
}


// ==========================================
// SAYFA YÜKLENDİĞİNDE
// ==========================================

document.addEventListener("DOMContentLoaded", function() {

    saveStock();
    saveStockNotifications();

    setupProductFilters();

    renderProducts();
    renderHomeFeaturedProducts();

    renderProductDetail();
    renderCart();
    renderFavorites();

    updateCartCount();

    setupCampaignSlider();

    setupStarRating();
    setupProductReviewForm();

    checkRestockNotifications();

});