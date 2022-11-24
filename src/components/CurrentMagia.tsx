import React from 'react';
import MyContext from '../context/MyContext';
import { Spell } from '../helpers/types';
import { strCapitalize } from '../helpers/functions';
import { Spellbook } from '../helpers/Spellbook';

const CurrentMagia = () => {
    const { currentMagiaID }: any = React.useContext(MyContext);
    const currentMagia: any = Spellbook.getAllSpells().find(
        (spell: Spell) => spell.id == currentMagiaID
    );
    return (
        <section
            aria-labelledby="curreentMagia__title"
            className="max-w-2xl min-h-screen mt-2 pt-2 pb-8 px-3 bg-brand-gray-dark rounded-lg"
        >
            <div className="mt-4 pl-12">
                <h2
                    id="currentMagia__title"
                    className="text-white text-3xl font-bold "
                >
                    {currentMagia.nome}
                </h2>
                <ul className="text-white mt-2">
                    <li>
                        <span className="font-bold">Nível: </span>
                        {(currentMagia.origem == 'arcana'
                            ? 'Arcana'
                            : 'Divina') + ' '}
                        {(currentMagia.origem == 'arcana'
                            ? currentMagia.nivel_arcana
                            : currentMagia.nivel_divina) + ' '}
                        (
                        {currentMagia.descritores.map(
                            (desc: { slug: string }) => (
                                <span key={Math.random()}>{desc.slug}</span>
                            )
                        )}
                        )
                    </li>
                    <li>
                        <span className="font-bold">Tempo de execução: </span>
                        {strCapitalize(currentMagia.execucao)}
                    </li>
                    <li>
                        <span className="font-bold">Alcance: </span>
                        {currentMagia.alcance}
                    </li>
                    {currentMagia.area ? (
                        <li>
                            <span className="font-bold">Área: </span>
                            {currentMagia.area}
                        </li>
                    ) : null}
                    {currentMagia.alvo ? (
                        <li>
                            <span className="font-bold">Alvo: </span>
                            {currentMagia.alvo}
                        </li>
                    ) : null}

                    <li>
                        <span className="font-bold">Duração: </span>
                        {strCapitalize(currentMagia.duracao)}
                    </li>
                    <li>
                        <span className="font-bold">
                            Teste de resistência:{' '}
                        </span>
                        {currentMagia.resistencia}
                    </li>
                    <li
                        className="mt-2"
                        dangerouslySetInnerHTML={{
                            __html: currentMagia.descricao.replace(
                                /[Cc][Oo][Mm][Pp][Oo][Nn][Ee][Nn][Tt][Ee] [Mm][Aa][Tt][Ee][Rr][Ii][Aa][Ll]:/,
                                "<br><br><span class='font-bold'>Componente Material:</span>"
                            ),
                        }}
                    />
                </ul>
            </div>
        </section>
    );
};

export default CurrentMagia;