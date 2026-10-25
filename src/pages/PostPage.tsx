import { useParams, Link } from 'react-router-dom';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { getPostById } from '@/data/posts';

const PostPage = () => {
  const { id } = useParams();
  const post = getPostById(id || '');

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="font-sans text-muted-foreground">Post not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation breadcrumb={{ label: post.title, href: `/writing/${post.id}` }} />
      <main className="pt-24 pb-16">
        <div className="section-container">
          <div className="max-w-2xl mx-auto">
            <Link
              to="/#writing"
              className="font-sans text-muted-foreground hover:text-foreground transition-colors mb-10 inline-flex items-center gap-2"
              style={{ fontSize: '13px', letterSpacing: '0.05em' }}
            >
              ← Back to writing
            </Link>

            <div className="mt-8 mb-12">
              <p className="eyebrow mb-4">{post.category}</p>
              <h1
                className="font-serif text-foreground leading-tight mb-4"
                style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 500 }}
              >
                {post.title}
              </h1>
              <p
                className="font-sans text-muted-foreground"
                style={{ fontSize: '13px', letterSpacing: '0.05em' }}
              >
                By Yashvi Panchal · {post.date}
              </p>
            </div>

            <hr style={{ height: '0.5px', background: 'rgba(0,0,0,0.08)', border: 'none', marginBottom: '3rem' }} />

            <div
              className="font-sans text-foreground/80 leading-relaxed"
              style={{ fontSize: '17px', lineHeight: 2 }}
            >
              {post.content.split('\n\n').map((paragraph, i) => (
                <p key={i} style={{ marginBottom: '1.8rem' }}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PostPage;
