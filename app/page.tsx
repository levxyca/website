import { BlogPosts } from 'app/components/posts';
import ConvertKitForm from './components/convertkitform';
import { getTimelineStats } from './components/timelineStats';

const stats = getTimelineStats();

const Description = () => (
  <>
    <p className="mb-4">
      <span className="highlight">
        Conecto devs à tecnologia através de educação técnica, conteúdo estratégico e comunidades autênticas.
      </span>
    </p>
    <ul className="mb-4 ml-8 list-disc text-base font-semibold text-[var(--text-color)] custom-bullets">
      <li>+{stats.talks} palestras e workshops</li>
      <li>+{stats.articles} artigos publicados</li>
      <li>+{stats.events} eventos organizados/participados</li>
      <li>+{stats.openSource} projetos open source</li>
      <li>+{stats.podcasts} podcasts e entrevistas</li>
    </ul>
  </>
);

const Page = () => {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Leticia @levxyca
      </h1>
      <Description />
      <div className="mb-6">
        <a href="/about" className="inline-block px-4 py-2 rounded border border-[var(--highlight-color)] text-[var(--highlight-color)] font-bold hover:bg-[var(--highlight-color)] hover:text-[var(--text-color)] transition">
          Conheça minha jornada completa
        </a>
      </div>
      <div className="my-8">
        <BlogPosts />
      </div>
      <ConvertKitForm />
    </section>
  );
};

export default Page;
