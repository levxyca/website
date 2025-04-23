import { BlogPosts } from 'app/components/posts';
import ConvertKitForm from './components/convertkitform';

const Description = () => (
  <>
    <p className="mb-4">
      <span className="highlight">Conecto pessoas a tecnologias por meio de educação e comunidades guiadas por autenticidade e estratégia</span>, traduzindo complexidade técnica em experiências acessíveis e relações com propósito. Tenho experiência em desenvolvimento de software, conteúdo técnico, estratégias de engajamento e construção de comunidades tech alinhadas a negócios.
    </p>
    <p className="mb-4">
      🎯 Acredito no poder das conexões genuínas e em transformar conhecimento técnico em algo tangível — criando impacto real para pessoas, empresas e ecossistemas.
    </p>
  </>
);

const Page = () => {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Leticia @levxyca
      </h1>
      <Description />
      <div className="my-8">
        <BlogPosts />
      </div>
      <ConvertKitForm />
    </section>
  );
};

export default Page;
