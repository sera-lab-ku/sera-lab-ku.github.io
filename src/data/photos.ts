import type { ImageMetadata } from "astro";
import labGroupTigerStatue from "../../photo/2026/lab-group-tiger-statue-2026.jpg";
import collaborationWorkshop01 from "../../photo/2026/icnl-sera-workshop-2026.webp";
import collaborationWorkshop02 from "../../photo/2026/icnl-sera-workshop-2026-02.webp";
import collaborationWorkshop03 from "../../photo/2026/icnl-sera-workshop-2026-03.webp";
import collaborationWorkshop04 from "../../photo/2026/icnl-sera-workshop-2026-04.webp";
import labLife from "../../photo/2026/photo_0.jpg";
import teamNight from "../../photo/2026/photo_1.jpg";
import campusPicnic from "../../photo/2026/photo_2.jpg";
import celebration from "../../photo/2026/photo_3.jpg";

export type Photo = {
  image: ImageMetadata;
  alt: string;
};

export type PhotoPost = {
  title: string;
  photos: Photo[];
};

export type PhotoYear = {
  year: number;
  posts: PhotoPost[];
};

/** Single source for the Photos page feed and the home hero slideshow. */
export const photoYears: PhotoYear[] = [{
  year: 2026,
  posts: [
    {
      title: "연구실 단체 사진 (feat. 호랑이 동상)",
      photos: [{
        image: labGroupTigerStatue,
        alt: "SERA Lab members posing together by the tiger statue"
      }]
    },
    {
      title: "ICNL × SERA Lab 협력 워크숍",
      photos: [
        {
          image: collaborationWorkshop01,
          alt: "ICNL and SERA Lab members posing together after their collaborative workshop"
        },
        {
          image: collaborationWorkshop02,
          alt: "ICNL and SERA Lab members playing soccer together during their collaborative workshop"
        },
        {
          image: collaborationWorkshop03,
          alt: "ICNL and SERA Lab members playing a group game during their collaborative workshop"
        },
        {
          image: collaborationWorkshop04,
          alt: "ICNL and SERA Lab members sharing a meal together during their collaborative workshop"
        }
      ]
    },
    {
      title: "스승의 날, 감사합니다!",
      photos: [{
        image: celebration,
        alt: "SERA Lab members celebrating together with flowers and a cake"
      }]
    },
    {
      title: "고려대학교 중짜 봄 피크닉",
      photos: [{
        image: campusPicnic,
        alt: "SERA Lab members enjoying a picnic together on the Korea University campus"
      }]
    },
    {
      title: "랩장 일상",
      photos: [{
        image: labLife,
        alt: "A SERA Lab member holding a laptop during a gathering in the lab"
      }]
    },
    {
      title: "저녁 회식",
      photos: [{
        image: teamNight,
        alt: "SERA Lab members taking a group selfie during an evening out"
      }]
    }
  ]
}].sort((a, b) => b.year - a.year);

export type PhotoSlide = Photo & {
  year: number;
  title: string;
};

/** Every photo across all years, flattened in feed order for the hero slideshow. */
export const allPhotos: PhotoSlide[] = photoYears.flatMap((photoYear) =>
  photoYear.posts.flatMap((post) =>
    post.photos.map((photo) => ({ ...photo, year: photoYear.year, title: post.title }))
  )
);
