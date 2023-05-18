import { getCollection } from "astro:content";

type Poem = {
  number: number;
  title: string;
  slug: string;
};

type PoemsByChapter = {
  chapter: string;
  poems: Poem[];
}[];

const bookData = await getCollection("poems");

export const summary = bookData.reduce((summary: PoemsByChapter, { slug, data }) => {
  const exists = summary.find((poem) => poem.chapter === data.chapter);

  if (!exists) {
    const { chapter, ...poem } = data;
    summary.push({
      chapter,
      poems: [
        {
          slug,
          ...poem,
        },
      ],
    });
  } else {
    const { title, number } = data;
    exists.poems.push({ number, title, slug });
  }
  return summary;
}, []);
