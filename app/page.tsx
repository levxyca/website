import { BlogPosts } from 'app/components/posts'
import ConvertKitForm from './components/convertkitform'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Leticia @levxyca
      </h1>
      <p className="mb-4">
        <span className="highlight">Developer Relations</span>{`, desenvolvedora de software, criadora de conteúdo, e cofundadora da @feminis_tech ✨. Apaixonada por comunicação, busca aprender, compartilhar e ensinar tecnologia através de lives, palestras, eventos, vídeos, artigos, podcasts e mídias sociais.`}<span className="highlight">Criando conexões genuínas, capacitando pessoas e promovendo comunidades tecnológicas diversas e inclusivas.</span>
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
      <ConvertKitForm />
    </section>
  )
}
