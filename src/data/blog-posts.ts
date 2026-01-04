export interface BlogPost {
    id: number;
    title: string;
    excerpt: string;
    content: string; // HTML content
    author: string;
    date: string;
    image: string;
    tags: string[];
    slug: string;
}

export const blogPosts: BlogPost[] = [
    {
        id: 1,
        title: "Sun'iy Intellekt: Kelajak Kasblari va Ta'lim",
        excerpt: "Sun'iy intellekt (AI) dunyosiga kirib kelayotgan o'zgarishlar va kelajakdagi eng talabgir kasblar haqida batafsil.",
        content: `
      <h2>Sun'iy Intellekt va Kelajak</h2>
      <p>Sun'iy intellekt texnologiyalari bugungi kunda har bir sohada o'z o'rniga ega bo'lib bormoqda. Tibbiyotdan tortib ta'limgacha, AIning ta'siri beqiyosdir.</p>
      <h3>Yangi Kasblar</h3>
      <p>AI rivojlanishi bilan yangi kasblar paydo bo'lmoqda:</p>
      <ul>
        <li><strong>Prompt Muhandisi:</strong> AI bilan samarali muloqot qilish san'ati.</li>
        <li><strong>AI Etika Mutaxassisi:</strong> AIning insoniyatga zararsiz ishlashini nazorat qilish.</li>
        <li><strong>Ma'lumotlar Olimi (Data Scientist):</strong> Katta hajmdagi ma'lumotlarni tahlil qilish.</li>
      </ul>
      <p>EdulabAI platformasida biz aynan ushbu yo'nalishlar bo'yicha chuqurlashtirilgan kurslarni taklif etamiz.</p>
    `,
        author: "EdulabAI Team",
        date: "2024-01-04",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
        tags: ["AI", "Kelajak", "Ta'lim"],
        slug: "suniy-intellekt-kelajak-kasblari"
    },
    {
        id: 2,
        title: "Prompt Engineering Nima? 5 daqiqada tushunib oling",
        excerpt: "Prompt Engineering - bu zamonaviy dasturlash tili. ChatGPT va boshqa modellardan to'g'ri foydalanish sirlari.",
        content: `
      <h2>Prompt Engineering Asoslari</h2>
      <p>Ko'pchilik AI-dan shunchaki savol so'rash uchun foydalanadi. Lekin haqiqiy mutaxassislar undan murakkab vazifalarni bajarishni talab qila oladilar.</p>
      <p>Prompt Engineering - bu modelga aniq, tushunarli va kontekstga boy buyruqlar berish mahoratidir.</p>
      <blockquote>"AI sizning o'rningizni egallamaydi, lekin AIni ishlatishni biladigan inson sizning o'rningizni egallaydi."</blockquote>
    `,
        author: "Aziz Rakhimov",
        date: "2023-12-28",
        image: "https://images.unsplash.com/photo-1684369175836-586b5952e60e?auto=format&fit=crop&q=80&w=800",
        tags: ["Prompt Engineering", "ChatGPT", "Tutorial"],
        slug: "prompt-engineering-nima"
    },
    {
        id: 3,
        title: "O'zbekistonda IT Ta'lim: Muammolar va Yechimlar",
        excerpt: "Mahalliy IT bozoridagi holat, kadrlar yetishmovchiligi va EdulabAI ning bunga munosabati.",
        content: `
      <h2>IT Bozor Tahlili</h2>
      <p>O'zbekistonda IT sohasi jadal rivojlanmoqda. Prezidentimiz tomonidan belgilangan IT eksportini oshirish rejasi yoshlar uchun katta imkoniyatlar eshigini ochdi.</p>
      <p>Lekin sifatli ta'lim qayerda? EdulabAI aynan sifat va amaliyotga urg'u beradi.</p>
    `,
        author: "Madina Aliyeva",
        date: "2023-12-15",
        image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800",
        tags: ["IT", "O'zbekiston", "Startap"],
        slug: "ozbekistonda-it-talim"
    }
];
