// src/types.ts
export type Project = {
  id: string;
  title: string;
  image: string;         // used for cards / fallback
  gallery?: string[];    // NEW: full set of images for the detail page
  skills: string[];
  shortDescription: string;
  processText: string;
};
