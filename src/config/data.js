import axios from "axios";
import { useEffect } from "react";

export const blogList = [
  {
    id: 1,
    title: "7 CSS tools you should be using ",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    authorName: "John Doe",
    authorAvatar: "/assets/images/author.jpg",
    createdAt: "June 03, 2021",
    cover: "/assets/images/designer-1.jpg",
  },
  {
    id: 2,
    title: "Milan Places That Highlight The City",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    authorName: "John Doe",
    authorAvatar: "/assets/images/author.jpg",
    createdAt: "June 03, 2021",
    cover: "/assets/images/f67396fc3cfce63a28e07ebb35d974ac.jpg",
  },
  {
    id: 3,
    title: "Online Shopping – An Alternative to Shopping in the Mall",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    authorName: "John Doe",
    authorAvatar: "/assets/images/author.jpg",
    createdAt: "June 03, 2021",
    cover: "/assets/images/fQwuyKJ9qxjSbr6REcgtmW-1200-80.jpg",
  },
  {
    id: 4,
    title: "ADVENTURE IN YOU",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    authorName: "John Doe",
    authorAvatar: "/assets/images/author.jpg",
    createdAt: "June 03, 2021",
    cover: "/assets/images/graphic-design-trends.png",
  },
  {
    id: 5,
    title: "Loaded BBQ Baked Potatoes",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    authorName: "John Doe",
    authorAvatar: "/assets/images/author.jpg",
    createdAt: "June 03, 2021",
    cover: "/assets/images/make-it-personal.jpg",
  },
  {
    id: 6,
    title: "Beyond the Beach",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    authorName: "John Doe",
    authorAvatar: "/assets/images/author.jpg",
    createdAt: "June 03, 2021",
    cover:
      "/assets/images/Purple-Combination-colors-graphic-design-predictions-1024x576-1024x576.jpg",
  },
  {
    id: 7,
    title: "Art & Perception",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    authorName: "John Doe",
    authorAvatar: "/assets/images/author.jpg",
    createdAt: "June 03, 2021",
    cover: "/assets/images/Synthwave-Postmodern.jpg",
  },
];


