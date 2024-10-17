import { highlight } from "sugar-high";

export const metadata = {
    title: 'Projects',
    description: 'Check my projects and open source contributions.',
}

const projects = [
    { name: 'diciotech', description: 'Um dicionário tech colaborativo e open source, desenvolvido com HTML, SASS e JavaScript. Nossa missão é simplificar termos e conceitos tecnológicos, tornando a tecnologia acessível a todos.', url: 'https://diciotech.netlify.app/' },
    { name: 'links', description: 'Crie uma página personalizada com todos os links importantes e redes sociais em um só lugar.', url: 'https://github.com/levxyca/links' },
    { name: 'principais TAGS HTML5', description: 'Facilite o uso de tags essenciais do HTML5 para estruturar projetos de forma eficiente.', url: 'https://levxyca.github.io/tags-estruturais-html5/' },
    { name: 'background-size', description: 'Um guia simples e prático para entender e utilizar a propriedade background-size no CSS.', url: 'https://levxyca.github.io/background-size/' },
    { name: 'pandadomalbot', description: 'Criado para as lives da @levxyca, esse bot entretém o chat, faz piadas e auxilia a streamer durante as transmissões ao vivo.', url: 'https://github.com/levxyca/pandadomalbot' }
];

export default function Page() {
    const introText = "Check my projects and open source contributions:";

    return (
        <>
            <section className="m-5">
                <h1 className="font-semibold text-2xl mb-8 tracking-tighter">projects</h1>
                <p className="mb-5">{introText}</p>
                <ul className="list-none pl-0">
                    {projects.map((project, index) => (
                        <li key={index} className="mb-3">
                            <a
                                href={project.url}
                                className="font-bold no-underline hover:underline focus:underline"
                                style={{ color: 'var(--highlight-color)' }} /* Cor de destaque do CSS */
                                aria-label={`Link to ${project.name}`}
                            >
                                {project.name}
                            </a>
                            {" "}{project.description}
                        </li>
                    ))}
                </ul>
                <p className="mt-5">
                    You can check all my projects and my dev projects on{' '}
                    <a href='https://github.com/levxyca' style={{ color: 'var(--highlight-color)' }}>GitHub</a>.
                </p>
            </section>
        </>
    );
}
