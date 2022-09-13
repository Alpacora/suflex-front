import { format } from 'date-fns';
import ptBr from 'date-fns/locale/pt-BR';
import { Heart } from 'phosphor-react';
import { ICharacter } from '../../interfaces';

export function Character({ onClick, data }: { onClick: () => void, data: ICharacter }) {

  return (
    <div className="flex flex-col items-center w-60 h-60 hover:sale-125 cursor-pointer mx-8 my-8 group" onClick={onClick}>
      <img className={`w-auto rounded-full hover:blur-sm ${data.isFavorite ? 'border-[5px] border-[#ed3bb4]' : 'border-[#1af0ff]'}  hover:border-[5px] `} src={data.image} onDragStart={(e) => e.preventDefault()} />
      <div className="flex flex-col invisible rounded-full group-hover:visible group-hover:bg-[rgba(0,0,0,0.4)] absolute justify-center items-center pointer-events-none w-60 h-60">
        <ul>
          <li>• Status: {data.status}</li>
          <li>• Episodes: {data.episode?.length}</li>
          <li>• Gender: {data.species}</li>
          <li>• Created: {format(new Date(data.created), 'dd/MMM/yy', { locale: ptBr })}</li>
        </ul>
        <div className='flex flex-col w-full justify-center items-center'>
          <Heart color="#ed3bb4" weight={data.isFavorite ? 'fill' : 'regular'} size={32} />
        </div>
      </div>
      <span key={data.id}>{data.name}</span>
    </div>
  );
}