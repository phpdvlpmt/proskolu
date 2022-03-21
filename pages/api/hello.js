// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json([
    {
      link: "/files/diplom_1.pdf",
      img: "/images/diplom_1.png",
    },
    {
      link: "/files/diplom_2.pdf",
      img: "/images/diplom_2.png",
    },
    {
      link: "/files/diplom_3.pdf",
      img: "/images/diplom_3.png",
    },
    {
      link: "/files/sudoku.pdf",
      img: "/images/sudoku.png",
    },
    {
      link: "/files/recept.pdf",
      img: "/images/recept.png",
    },
    {
      link: "/files/jidelni_listek.pdf",
      img: "/images/jidelni_listek.png",
    },
  ]);
}
