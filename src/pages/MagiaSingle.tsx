import { useParams, Navigate } from 'react-router-dom';
import { getDescritorName, strCapitalize } from '../helpers/functions';
import { Spellbook } from '../helpers/Spellbook';

const MagiaSingle = () => {
    const id: any = useParams().id;
    const targetMagia: any = Spellbook.getAllSpells().find(
        (spell: any) => spell.id == id
    );
    if (targetMagia == undefined) {
        return <Navigate to="/"></Navigate>;
    }
    return (
        <section
            aria-labelledby="curreentMagia__title"
            className="max-w-xl mb-44 mt-2 mx-auto pt-2 pb-8 px-1 bg-brand-gray-dark rounded-lg"
        >
            <div className="mt-4 pl-12">
                <h2
                    id="currentMagia__title"
                    className="text-white text-3xl font-bold "
                >
                    {targetMagia.nome}
                </h2>
                <ul className="text-white mt-2">
                    <li>
                        <span className="font-bold">Nível: </span>
                        {(targetMagia.origem == 'arcana'
                            ? 'Arcana'
                            : 'Divina') + ' '}
                        {(targetMagia.origem == 'arcana'
                            ? targetMagia.nivel_arcana
                            : targetMagia.nivel_divina) + ' '}
                        ({' '}
                        {targetMagia.descritores.map(
                            (desc: { slug: string }) => (
                                <span key={Math.random()}>
                                    {getDescritorName(desc.slug)}{' '}
                                </span>
                            )
                        )}
                        )
                    </li>
                    <li>
                        <span className="font-bold">Tempo de execução: </span>
                        {strCapitalize(targetMagia.execucao)}
                    </li>
                    <li>
                        <span className="font-bold">Alcance: </span>
                        {targetMagia.alcance}
                    </li>
                    {targetMagia.area ? (
                        <li>
                            <span className="font-bold">Área: </span>
                            {targetMagia.area}
                        </li>
                    ) : null}
                    {targetMagia.alvo ? (
                        <li>
                            <span className="font-bold">Alvo: </span>
                            {targetMagia.alvo}
                        </li>
                    ) : null}

                    <li>
                        <span className="font-bold">Duração: </span>
                        {strCapitalize(targetMagia.duracao)}
                    </li>
                    <li>
                        <span className="font-bold">
                            Teste de resistência:{' '}
                        </span>
                        {targetMagia.resistencia}
                    </li>
                    <li
                        className="mt-2"
                        dangerouslySetInnerHTML={{
                            __html: targetMagia.descricao
                                .replace(
                                    /[Cc][Oo][Mm][Pp][Oo][Nn][Ee][Nn][Tt][Ee] [Mm][Aa][Tt][Ee][Rr][Ii][Aa][Ll]:/,
                                    "<br><br><span class='font-bold'>Componente Material:</span>"
                                )
                                .replace(/[0-9][)]/),
                        }}
                    />
                </ul>
            </div>
        </section>
    );
};

export default MagiaSingle;
