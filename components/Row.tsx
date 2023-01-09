import React, { useRef, useState } from 'react';
import { Movie } from '../typings';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';
import Thumbnail from './Thumbnail';
import { DocumentData } from 'firebase/firestore';

interface IProps {
  title: string;
  movies: Movie[] | DocumentData[];
}

const Row = ({ title, movies }: IProps) => {
  const rowRef = useRef<HTMLDivElement | null>(null);
  const [isMoved, setIsMoved] = useState(false);

  const handleClick = (direction: string) => {
    setIsMoved(true);
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;
      const scrollTo =
        direction === 'left'
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
      rowRef.current.scrollTo({
        left: scrollTo,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="h-40 space-y-0.5 md:space-y-2">
      <h2 className="w-56 cursor-pointer text-sm font-semibold text-[#e5e5e5] transition duration-200 hover:text-white md:text-2xl">
        {title}
      </h2>
      <div className="group relative md:-ml-2">
        <ChevronLeftIcon
          className={`absolute top-0 left-2 bottom-0 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition group-hover:opacity-100 hover:scale-125 ${
            !isMoved && 'hidden'
          }`}
          onClick={() => handleClick('left')}
        />

        <div
          ref={rowRef}
          className="flex items-center space-x-0.5 overflow-x-auto scrollbar-hide md:space-x-2.5 md:p-2"
        >
          {movies?.map((movie) => (
            <Thumbnail key={movie.id} movie={movie} />
          ))}
        </div>

        <ChevronRightIcon
          className={`absolute top-0 right-2 bottom-0 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition group-hover:opacity-100 hover:scale-125`}
          onClick={() => handleClick('right')}
        />
      </div>
    </div>
  );
};

export default Row;
