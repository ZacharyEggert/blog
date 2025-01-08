import { readdirSync } from "fs";

export default async function Page({
  params,
}: {
  params: Promise<{ post: string }>;
}) {
  const post = (await params).post;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { default: Post } = await import(`~/markdown/${post}.mdx`);

  return (
    <div className="blog-post">
      <Post />
    </div>
  );
}

export function generateStaticParams() {
  return readdirSync("src/markdown")
    .filter((file) => !file.startsWith(".") && file.endsWith(".mdx"))
    .map((file) => ({
      post: file.replace(/\.mdx$/, ""),
    }));
}

export const dynamicParams = false;
