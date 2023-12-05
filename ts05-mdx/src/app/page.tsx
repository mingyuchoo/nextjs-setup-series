import { promises as fs } from 'fs';
import { serialize } from 'next-mdx-remote/serialize';
import { MdxRemoteContents } from './mdx/mdx-remote-contents';

async function getContents(filePath) {
  const raw = await fs.readFile(filePath, 'utf-8');
  const serialized = await serialize(raw, {
    parseFrontmatter: true,
  });

  const frontmatter = serialized.frontmatter;
  return {
    frontmatter,
    serialized,
  };
}

export default async function Home() {
  const { serialized, frontmatter } = await getContents('remote-contents/post.mdx');

  return (
    <div style={{ maxWidth: 600, margin: 'auto' }}>
      <h1>{frontmatter.title}</h1>
      <p>Published {frontmatter.date}</p>
      <hr />
      <MdxRemoteContents source={serialized} />
    </div>
  );
}