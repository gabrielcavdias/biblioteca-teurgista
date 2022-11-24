export type Spell = {
    id: number;
    nivel_arcana?: number | null;
    nivel_divina?: number | null;
    nome: string;
    origem: string;
    descritores: any[];
    execucao: string;
    alcance: string;
    area?: string | null;
    alvo?: string | null;
    alvo_ou_area?: string | null;
    duracao: string;
    efeito?: string | null;
    resistencia: string;
    componente?: string | null;
    descricao: string;
};

export type State = {
    currentMagiaID: number;
    setCurrentMagiaID: Function;
};
