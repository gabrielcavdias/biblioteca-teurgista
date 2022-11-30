import React from 'react';
type ModalProps = {
    isModalOpen: boolean;
    setModalOpen: Function;
    handleCharacterCreation: Function;
};

const PersonagensModal = ({
    isModalOpen,
    setModalOpen,
    handleCharacterCreation,
}: ModalProps) => {
    const [charName, setCharName] = React.useState('');
    const handleClick = () => {
        handleCharacterCreation(charName);
        setModalOpen(false);
        setCharName('');
    };
    return (
        <dialog
            open={isModalOpen}
            className="absolute top-1/2 bg-brand-gray-light-2 rounded"
            onKeyDown={(e) => {
                if (e.key == 'Escape') setModalOpen(false);
            }}
        >
            <label
                htmlFor="charName"
                className="block text-white font-bold mb-1"
            >
                Nome do personagem:
            </label>
            <input
                type="text"
                name="charName"
                id="charName"
                max={5}
                value={charName}
                onChange={(e) => setCharName(e.target.value)}
                className="outline outline-1 outline-brand-purple-light bg-brand-gray-dark text-white p-2 rounded"
            />
            <button
                onClick={() => handleClick()}
                className="bg-brand-purple-dark text-white rounded p-2 my-4 ml-auto hover:bg-violet-700 block"
            >
                Criar personagem
            </button>
        </dialog>
    );
};

export default PersonagensModal;
