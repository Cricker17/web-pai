// AOS Init
AOS.init({
    duration: 1000,
    once: true
});

// GSAP Hero Animation - Improved Version
const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

tl.to("#hero-title", {
    opacity: 1,
    y: 0,
    duration: 1.2
})

    .to("#hero-subtitle", {
        opacity: 1,
        y: 0,
        duration: 1.2
    }, "-=0.6")    // overlap 60% with previous for smooth transition

    .to("#hero-button", {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "back.out(1.7)"  // efek mantul halus
    }, "-=0.6");


// Modal Content Database (Timeline diperbaiki)
const profiles = {
    iqbal: {
        title: "Muhammad Iqbal — Sang Arsitek Spiritual",
        image: "assets/iqbal.jpg",
        bio: `
        <p class="leading-relaxed mb-4">
            Muhammad Iqbal (1877–1938) adalah seorang pemikir dan penyair yang 
            menghidupkan kembali semangat intelektualitas dalam dunia Islam. 
            Melalui karya-karyanya, ia mendorong umat untuk kembali mengenali 
            potensi diri dan membangun masa depan dengan keberanian serta kesadaran spiritual.
        </p>
        <p class="leading-relaxed mb-4">
            Gagasannya tentang <strong>Khudi</strong> bukan sekadar konsep filosofi, 
            tetapi seruan untuk membentuk pribadi yang kuat, kreatif, dan sadar akan 
            perannya dalam peradaban. Bagi Iqbal, perubahan hanya lahir dari jiwa yang bangkit.
        </p>
    `,
        timeline: `
        <ul class="list-disc pl-5 leading-relaxed">
            <li>1877 — Lahir di Sialkot, India</li>
            <li>1905 — Melanjutkan studi ke Eropa (Inggris & Jerman)</li>
            <li>1915 — Menerbitkan <em>Asrar-e-Khudi</em>, karya penting tentang konsep diri</li>
            <li>1930 — Pidato Allahabad yang menginspirasi kebangkitan politik umat</li>
            <li>1938 — Wafat di Lahore, meninggalkan warisan pemikiran besar</li>
        </ul>
    `
    },

    amin: {
        title: "Qasim Amin — Bapak Pembaruan Sosial Mesir",
        image: "assets/qasim-amin.jpg",
        bio: `
        <p class="leading-relaxed mb-4">
            Qasim Amin (1863–1908) adalah tokoh pembaru yang menegaskan  
            tentang pentingnya pendidikan dan peran perempuan dalam kemajuan masyarakat. 
            Pemikirannya menekankan bahwa perubahan sosial tidak mungkin terwujud jika 
            perempuan tidak diberi ruang untuk berkembang.
        </p>
        <p class="leading-relaxed mb-4">
            Melalui tulisan-tulisannya, ia mengajak masyarakat kembali melihat ajaran Islam 
            sebagai dasar keadilan dan kemanusiaan. Baginya, reformasi bukan melawan tradisi, 
            tetapi menghidupkan kembali nilai-nilai luhur yang telah lama diabaikan.
        </p>
    `,
        timeline: `
        <ul class="list-disc pl-5 leading-relaxed">
            <li>1863 — Lahir di Alexandria, Mesir</li>
            <li>1899 — Menerbitkan <em>Tahrir al-Mar’a</em>, membahas pendidikan dan hak perempuan</li>
            <li>1901 — Menerbitkan <em>Al-Mar’a al-Jadida</em>, memperkuat gagasan reformasi sosial</li>
            <li>1908 — Wafat di Kairo, meninggalkan pengaruh besar pada modernisasi dunia Islam</li>
        </ul>
    `
    }
};



// Open Modal
function openModal(key) {
    const data = profiles[key];

    document.getElementById("modal-body").innerHTML = `
        <img src="${data.image}" class="rounded-lg shadow mb-4">
        <h2 class="text-3xl font-bold mb-4">${data.title}</h2>
        ${data.bio}
        <h3 class="text-xl font-semibold mt-6 mb-2">Timeline</h3>
        ${data.timeline}
    `;

    const modal = document.getElementById("modal");
    modal.classList.remove("hidden");
    modal.classList.add("show");
}

// Close Modal
function closeModal() {
    const modal = document.getElementById("modal");
    modal.classList.remove("show");
    setTimeout(() => modal.classList.add("hidden"), 200);
}

function toggleExpand(event, id) {
    event.stopPropagation(); // mencegah card lain ikut kebuka

    const el = document.getElementById(id);

    if (el.classList.contains('open')) {
        el.classList.remove('open');
        setTimeout(() => el.classList.add('hidden'), 300);
    } else {
        el.classList.remove('hidden');
        setTimeout(() => el.classList.add('open'), 10);
    }
}

function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}
