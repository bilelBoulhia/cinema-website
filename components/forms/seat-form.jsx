import React, { useState } from 'react';
import clsx from 'clsx';

const movies = [
    {
        name: 'Avenger',
        price: 10,
        occupied: [20, 21, 30, 1, 2, 8],
    },
    {
        name: 'Joker',
        price: 12,
        occupied: [9, 41, 35, 11, 65, 26],
    },
    {
        name: 'Toy story',
        price: 8,
        occupied: [37, 25, 44, 13, 2, 3],
    },
    {
        name: 'The Lion King',
        price: 9,
        occupied: [10, 12, 50, 33, 28, 47],
    },
];

const seats = Array.from({ length: 8 * 8 }, (_, i) => i);

const SeatForm = () => {
    const [selectedMovie, setSelectedMovie] = useState(movies[0]);
    const [selectedSeats, setSelectedSeats] = useState([]);





    const ShowCase = () => (
        <ul className="flex justify-center bg-black p-3 rounded-md text-gray-400 mb-12">
            <li className="mx-3">
                <span className="seat bg-gray-600 inline-block w-4 h-3 rounded mr-2" /> <small>available</small>
            </li>
            <li className="mx-3">
                <span className="seat bg-green-500 inline-block w-4 h-3 rounded mr-2" /> <small>Selected</small>
            </li>
            <li className="mx-3">
                <span className="seat bg-red-400 inline-block w-4 h-3 rounded mr-2" /> <small>Occupied</small>
            </li>
        </ul>
    );


    const Cinema = ({ movie, selectedSeats, onSelectedSeatsChange }) => {
        const handleSelectedState = (seat) => {
            const isSelected = selectedSeats.includes(seat);
            if (isSelected) {
                onSelectedSeatsChange(selectedSeats.filter((s) => s !== seat));
            } else {
                onSelectedSeatsChange([...selectedSeats, seat]);
            }
        };

        const renderSeat = (seat) => {
            const isSelected = selectedSeats.includes(seat);
            const isOccupied = movie.occupied.includes(seat);

            return (
                <span
                    tabIndex="0"
                    key={seat}

                    className={clsx(
                        'rounded   transition-transform duration-300 text-center p-[1px] table justify-center items-center ease-in-out relative top-px ',
                        'w-5 h-5 ',
                        isSelected ? 'bg-green-500' : 'bg-gray-600',
                        isOccupied && 'bg-red-400',
                        !isOccupied && 'hover:bg-green-300 hover:scale-110 focus:bg-green-200 focus:scale-110 cursor-pointer'
                    )}
                    onClick={isOccupied ? null : () => handleSelectedState(seat)}
                    onKeyPress={
                        isOccupied
                            ? null
                            : (e) => {
                                if (e.key === 'Enter') {
                                    handleSelectedState(seat);
                                }
                            }
                    }
                >




                {seat + 1}

            </span>
            );
        };

        const renderSection = (startSeat, endSeat) => {
            return seats.slice(startSeat, endSeat).map(renderSeat);
        };

        return (
            <div className="mb-6 perspective-400">
                <div className="screen h-16 shadow-[0_20px_50px_rgba(255,_255,_255,_0.7)] bg-white w-full transform -rotate-x-30 scale-100  mb-6" />
                <div className="seats flex justify-center">
                    <div className="section left grid gap-1.5 grid-cols-2 place-items-center mr-4">
                        {renderSection(0, 16)}
                    </div>
                    <div className="section middle grid gap-1.5 grid-cols-4 place-items-center mx-4">
                        {renderSection(16, 48)}
                    </div>
                    <div className="section right grid gap-1.5 grid-cols-2 place-items-center ml-4">
                        {renderSection(48, 64)}
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="text-center  flex flex-col items-center  text-white  rounded-lg shadow-xl">

            <ShowCase />
            <Cinema
                movie={selectedMovie}
                selectedSeats={selectedSeats}
                onSelectedSeatsChange={(seats) => setSelectedSeats(seats)}
            />

        </div>
    );
};

export default SeatForm;
/*
*
* <p className="text-sm">
                You have selected <span className="text-green-500">{selectedSeats.length}</span>{' '}
                seats for the price of{' '}
                <span className="text-green-500">
          ${selectedSeats.length * selectedMovie.price}
        </span>
            </p>*/