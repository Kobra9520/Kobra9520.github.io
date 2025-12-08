const translations = {
    en: {
        hero_title: "Etihad EWA Trading",
        hero_subtitle: "Quality materials. Smart solutions. Trusted partnerships.",
        btn_learn_more: "Learn More",

        about_title: "About Etihad EWA",
        about_text:
            "Etihad EWA Trading is a leading supplier of high-quality modular flat pack cabins, solar energy systems, premium furniture, aluminum door and window solutions, concrete hollow blocks, colored interlock tiles, and toilet accessories. We proudly serve residential, commercial, and industrial sectors, delivering reliable products and exceptional service that consistently meet customer expectations.",

        services_title: "Our Services & Products",

        contact_title: "Get in Touch",
        contact_text: "We are ready to support your next project. Contact us anytime.",
        contact_email: "Email",
        contact_whatsapp: "WhatsApp",
        contact_call: "Call",
        contact_instagram: "Instagram"
    },

    ar: {
        hero_title: "اتحاد إيواء للتجارة",
        hero_subtitle: "مواد عالية الجودة. حلول ذكية. شراكات موثوقة.",
        btn_learn_more: "اعرف المزيد",

        about_title: "نبذة عن اتحاد إيواء",
        about_text:
            "اتحاد إيواء للتجارة هو المورد الرائد للوحدات السكنية الجاهزة، وأنظمة الطاقة الشمسية، والأثاث عالي الجودة، وأبواب ونوافذ الألمنيوم، والبلوكات الخرسانية، وبلاط الإنترلوك الملون، وإكسسوارات الحمامات. نخدم القطاعات السكنية والتجارية والصناعية ونوفر منتجات موثوقة وخدمة مميزة تلبي توقعات العملاء.",

        services_title: "خدماتنا ومنتجاتنا",

        contact_title: "تواصل معنا",
        contact_text: "نحن مستعدون لدعم مشروعك القادم. تواصل معنا في أي وقت.",
        contact_email: "البريد الإلكتروني",
        contact_whatsapp: "واتساب",
        contact_call: "اتصال",
        contact_instagram: "إنستغرام"
    }
};

// Change text when selecting language
document.getElementById("languageSwitcher").addEventListener("change", function () {
    const lang = this.value;

    for (const id in translations[lang]) {
        const el = document.getElementById(id);
        if (el) el.textContent = translations[lang][id];
    }

    // RTL mode for Arabic
    if (lang === "ar") {
        document.body.style.direction = "rtl";
        document.body.style.textAlign = "right";
    } else {
        document.body.style.direction = "ltr";
        document.body.style.textAlign = "left";
    }
});
