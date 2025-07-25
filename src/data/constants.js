import React from "react";
import { Code, Palette, Database, Globe } from "lucide-react";

export const skillsData = [
  { icon: "Code", name: "Frontend", techs: ["React", "Jetpack Compose", "Razor"] },
  { icon: "Database", name: "Backend", techs: ["Node.js", "Golang", "Express", ".Net", "PostgreSQL"] },
  { icon: "Palette", name: "Desain UI/UX", techs: ["Figma", "Tailwind CSS", "UI/UX", "Bootstrap"] },
  { icon: "Globe", name: "Language", techs: ["C#", "Javascript", "HTML", "Golang", "Kotlin"] },
];

export const projectsData = [
  {
    title: "SoulSupport",
    description: "SoulSupport is an innovative digital solution addressing the global mental health crisis and the accessibility gap in support services.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
    tags: ["Kotlin", "Android Studio"],
    liveUrl: "",
    githubUrl: "#",
    apiDoc: {
      baseUrl: "https://api.ecommerce.com/v1",
      endpoints: [
        {
          name: "Login Pengguna",
          method: "POST",
          path: "/auth/login",
          description: "Mengautentikasi pengguna dan mengembalikan token akses.",
          requestBody: `{
  "email": "user@example.com",
  "password": "password123"
}`,
          response: `{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "userId": "user123",
  "message": "Login berhasil"
}`,
        },
        {
          name: "Daftar Produk",
          method: "GET",
          path: "/products",
          description: "Mengambil daftar semua produk.",
          response: `[
  {
    "id": "prod001",
    "name": "Laptop Gaming",
    "price": 12000000,
    "stock": 50
  },
  {
    "id": "prod002",
    "name": "Mouse Nirkabel",
    "price": 350000,
    "stock": 200
  }
]`,
        },
      ],
    },
  },
  {
    title: "blog-api",
    description: "RESTful API sederhana berbasis Golang untuk manajemen postingan blog menggunakan arsitektur modular (handler, repository, model).",
    image: "/assets/blogapi.png",
    tags: ["Golang", "MySql"],
    liveUrl: "#",
    githubUrl: "https://github.com/DediMurphy/blog-api",
    apiDoc: {
      baseUrl: "https://api.taskapp.com/v1",
      endpoints: [
        {
          name: "Login",
          method: "POST",
          path: "/memberships/login",
          description: "Masuk",
          requestBody: `
  {
    "email": "dev@gmail.com",
    "password": "12345" 
  }`,
          response: `
  {
    "accessToken": "eJ1c2VybmFtZ1ijidjwiw02302i3902392i0932093i092i",
    "refreshToken": "1jiqjwiqj"
  }`,
        },
        {
          name: "Post Blog",
          method: "POST",
          path: "/posts/create",
          description: "Membuat Blog",
          requestBody: `
  {
    "postTitle": "Ini adalah post title",
    "postContent": "Ini adalah post content",
    "postHashtags": ["Golang", "latihan"]
  }`,
          response: `{
            "id": "task001",
            "title": "Selesaikan laporan bulanan",
            "status": "pending" }`,
        },
        {
          name: "Post By ID",
          method: "GET",
          path: "posts/:postID",
          description: "Get post by id",
          requestBody: `{}`,
          response: `
  {
    "id": "task001",
    "title": "Selesaikan laporan bulanan",
    "status": "pending" 
  }`,
        },
        {
          name: "Create commnet",
          method: "POST",
          path: "posts/comment/:postID",
          description: "Create commnet",
          requestBody: `{}`,
          response: `{"commentContent": "Ini comment pertama"}`,
        },
        {
          name: "Update User Activity on Post",
          method: "PUT",
          path: "/posts/user_activity/:postID",
          description: "Memperbarui aktivitas user pada post tertentu (misalnya edit, like, atau view)",
          requestBody: `
  {
    "isLiked": true
  }`,
          response: `
  {
    "message": "User activity updated successfully",
    "postID": "post123",
    "userID": "user123",
    "activityType": "like"
  }`,
        },
        {
          name: "Get All Posts (Pagination)",
          method: "GET",
          path: "/posts?pageIndex=2&pageSize=1",
          description: "Mengambil daftar post dengan fitur paginasi. Gunakan query parameter untuk mengatur halaman dan jumlah data per halaman.",
          requestBody: "Tidak diperlukan",
          response: `
  {
    "data": [
      {
        "id": "post002",
        "postTitle": "Post halaman 2",
        "postContent": "Ini konten post ke-2",
        "postHashtags": ["Golang", "Tips"],
        "createdAt": "2025-07-11T10:00:00Z"
      }
    ],
    "pagination": {
      "pageIndex": 2,
      "pageSize": 1,
      "totalPages": 5,
      "totalItems": 5
    }
  }`,
        },
      ],
    },
  },
  {
    title: "Situs Web Portofolio Pribadi",
    description: "Situs web portofolio modern dengan desain responsif dan animasi halus.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    liveUrl: "#",
    githubUrl: "#",
    // Proyek ini tidak memiliki apiDoc, sehingga tombol dokumentasi tidak akan muncul
  },
   {
    title: "Situs Web Portofolio Pribadi",
    description: "Situs web portofolio modern dengan desain responsif dan animasi halus.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    liveUrl: "#",
    githubUrl: "#",
    // Proyek ini tidak memiliki apiDoc, sehingga tombol dokumentasi tidak akan muncul
  },
   {
    title: "Situs Web Portofolio Pribadi",
    description: "Situs web portofolio modern dengan desain responsif dan animasi halus.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    liveUrl: "#",
    githubUrl: "#",
    // Proyek ini tidak memiliki apiDoc, sehingga tombol dokumentasi tidak akan muncul
  },
];

export const contactData = {
  email: "john.doe@email.com",
  phone: "+62 123 456 789",
  location: "Jakarta, Indonesia",
};
