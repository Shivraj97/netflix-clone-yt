import React from 'react';
import { Movie } from '../typings';
import Image from 'next/image';
import { modalState, movieState } from '../atoms/modalAtom';
import { useRecoilState } from 'recoil';
import { DocumentData } from 'firebase/firestore';

interface IProps {
  movie: Movie | DocumentData;
}
const Thumbnail = ({ movie }: IProps) => {
  const [showModal, setShowModal] = useRecoilState(modalState);
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState);

  return (
    <div className="relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105">
      <Image
        onClick={() => {
          setShowModal(true);
          setCurrentMovie(movie);
        }}
        src={`https://image.tmdb.org/t/p/w500${
          movie?.backdrop_path || movie?.poster_path
        }`}
        layout="fill"
        className="rounded-sm object-cover md:rounded"
      />
    </div>
  );
};

export default Thumbnail;
