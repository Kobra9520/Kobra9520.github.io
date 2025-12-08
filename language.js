const translations = {
    en: {
        nav_home: "Home",
        nav_about: "About",
        nav_services: "Services",
        nav_contact: "Contact",

        hero_title: "Etihad EWA Trading",
        hero_subtitle: "Quality materials. Smart solutions. Trusted partnerships.",
        btn_learn_more: "Learn More",

        about_title: "About Etihad EWA",
        about_text: "Etihad EWA Trading is a leading supplier of high-quality modular flat pack cabins, solar energy systems, premium furniture, aluminum door and window solutions, concrete hollow blocks, colored interlock tiles, and toilet accessories. We proudly serve residential, commercial, and industrial sectors, delivering reliable products and exceptional service that consistently meet customer expectations.",

        services_title: "Our Services & Products",

        srv_cabin: "Modular Flat Pack Cabin Units",
        srv_cabin_txt: "Durable modular flat pack cabin units suitable for housing, offices, and site operations.",

        srv_solar: "Solar Systems",
        srv_solar_txt: "Complete solar kits, inverters, batteries & off-grid solutions.",

        srv_furniture: "Furniture",
        srv_furniture_txt: "High-quality office, home, hotels, schools, and modern workspace furniture.",

        srv_aluminum: "Aluminum Doors and Windows Glass",
        srv_aluminum_txt: "Durable and elegant Aluminum Doors and Windows Glass.",

        srv_concrete: "Concrete Blocks and Pavers",
        srv_concrete_txt: "Concrete Hollow Blocks and Colored Inter-Lock Tiles. Premium concrete products.",

        srv_toilet: "Toilet Accessories",
        srv_toilet_txt: "Durable toilet accessories designed for modern bathroom needs.",

        contact_title: "Get in Touch",
        contact_text: "We are ready to support your next project. Contact us anytime.",
        contact_email: "Email",
        contact_whatsapp: "WhatsApp",
        contact_call: "Call",
        contact_instagram: "Instagram"
    },

    ar: {
        nav_home: "الرئيسية",
        nav_about: "معلومات عنا",
        nav_services: "خدماتنا",
        nav_contact: "تواصل",

        hero_title: "اتحاد إيواء للتجارة",
        hero_subtitle: "مواد عالية الجودة. حلول ذكية. شراكات موثوقة.",
        btn_learn_more: "اعرف المزيد",

        about_title: "نبذة عن اتحاد إيواء",
        about_text: "اتحاد إيواء للتجارة هو المورد الرائد للوحدات السكنية الجاهزة، وأنظمة الطاقة الشمسية، والأثاث عالي الجودة، وأبواب ونوافذ الألمنيوم، والبلوكات الخرسانية، وبلاط الإنترلوك الملون، وإكسسوارات الحمامات. نخدم القطاعات السكنية والتجارية والصناعية ونوفر منتجات موثوقة وخدمة مميزة تلبي توقعات العملاء.",

        services_title: "خدماتنا ومنتجاتنا",

        srv_cabin: "وحدات الكابينات الجاهزة",
        srv_cabin_txt: "وحدات كابينات جاهزة ومتنقلة مناسبة للسكن والمكاتب والمواقع التشغيلية.",

        srv_solar: "أنظمة الطاقة الشمسية",
        srv_solar_txt: "أطقم شمسية كاملة، محولات، بطاريات، وحلول خارج الشبكة.",

        srv_furniture: "الأثاث",
        srv_furniture_txt: "أثاث عالي الجودة للمكاتب والمنازل والفنادق والمدارس ومساحات العمل الحديثة.",

        srv_aluminum: "أبواب ونوافذ الألمنيوم",
        srv_aluminum_txt: "أبواب ونوافذ من الألمنيوم بتصاميم متينة وأنيقة.",

        srv_concrete: "البلوكات الخرسانية والبلاط",
        srv_concrete_txt: "بلوكات خرسانية وبلاط إنترلوك ملون بجودة عالية.",

        srv_toilet: "إكسسوارات الحمامات",
        srv_toilet_txt: "إكسسوارات حمامات متينة ومناسبة للاستخدامات الحديثة.",

        contact_title: "تواصل معنا",
        contact_text: "نحن مستعدون لدعم مشروعك القادم. تواصل معنا في أي وقت.",
        contact_email: "البريد الإلكتروني",
        contact_whatsapp: "واتساب",
        contact_call: "اتصال",
        contact_instagram: "إنستغرام"
    }
};


document.getElementById("languageSwitcher").addEventListener("change", function () {
    const lang = this.value;

    // Update all elements with matching IDs
    for (const id in translations[lang]) {
        const el = document.getElementById(id);
        if (el) el.textContent = translations[lang][id];
    }

    // RTL / LTR layout
    if (lang === "ar") {
        document.body.style.direction = "rtl";
        document.body.style.textAlign = "right";
    } else {
        document.body.style.direction = "ltr";
        document.body.style.textAlign = "left";
    }
});
