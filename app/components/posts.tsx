import Link from 'next/link';
import { formatDate, getBlogPosts } from 'app/blog/utils';

// Função para obter todos os posts do blog
function getAllBlogPosts() {
  const allBlogs = getBlogPosts();

  return allBlogs.sort((a, b) => {
    const dateA = a.metadata.publishedAt ? new Date(a.metadata.publishedAt) : new Date(0);
    const dateB = b.metadata.publishedAt ? new Date(b.metadata.publishedAt) : new Date(0);

    return dateB.getTime() - dateA.getTime(); // Ordena do mais recente para o mais antigo
  });
}

// Função para obter os três últimos posts
function getLatestBlogPosts() {
  return getAllBlogPosts().slice(0, 3); // Pega apenas os três primeiros posts
}

export function BlogPosts({ showAllPosts = false }) {
  const posts = showAllPosts ? getAllBlogPosts() : getLatestBlogPosts();

  return (
    <div>
      {posts.map((post) => (
        <Link
          key={post.slug}
          className="flex flex-col space-y-1 mb-4"
          href={`/blog/${post.slug}`}
        >
          <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
            <p className="text-neutral-600 dark:text-neutral-400 md:w-[100px] tabular-nums">
              {formatDate(post.metadata.publishedAt, false)}
            </p>
            <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
              {post.metadata.title}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
