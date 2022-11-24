import CurrentMagia from '../components/CurrentMagia';
import MagiasList from '../components/MagiasList';
import MagiaFilters from '../components/MagiaFilters';

const Magias = () => {
    return (
        <div className="container mt-7 pb-8">
            <MagiaFilters />
            <div className="grid gap-4 grid-cols-2">
                <MagiasList />
                <CurrentMagia />
            </div>
        </div>
    );
};

export default Magias;
