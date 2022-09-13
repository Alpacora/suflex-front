import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import Switch from 'react-switch';
import { ICharacter, ICharacterResponse } from "../../interfaces";
import { GET_ALL } from "../../service/apolloQuerys";
import logo from '../../assets/logo.svg';

import { Header } from "../../components/header";
import { Loading } from "../../components/loading";
import { Character } from "../../components/character";
import { DefaultInput } from "../../components/defaultInput";
import { Heart } from "phosphor-react";
import { useModal } from "../../contexts/modalContext";
import { useAuth } from "../../contexts/authContext";
import { LoginModal } from "../../components/loginModal";

export function Home() {
  const [searchKey, setSearchKey] = useState<string>('');
  const [favorites, setFavorites] = useState<boolean>(false);
  const [species, setSpecies] = useState<boolean>(false);
  const [characters, setCharacters] = useState<ICharacter[]>([]);

  const { handleSetModal } = useModal();
  const { user } = useAuth();

  const { data, loading } = useQuery<ICharacterResponse>(GET_ALL,
    {
      variables: {
        page: 0,
        filter: {
          name: searchKey,
          species: species ? 'Alien' : 'Human'
        }
      },
      context: { clientName: 'rickAndMorty' }
    },
  );

  // const { data: dataBaseEndpoint, loading: loadingBaseEndpoint } = useQuery<ICharacterResponse>(GET_ALL, { context: { clientName: 'baseEndpoint' } });

  const filteredCharacters = characters.filter(element => favorites ? element.isFavorite : element);

  function handleFavorite(character: ICharacter) {
    if (!user?.id) {
      return handleSetModal({
        title: 'Login',
        design: <LoginModal />
      });
    }
    setCharacters((previous) => previous.map(item => item.id === character.id ? { ...character, isFavorite: !character.isFavorite } : item))
  }

  useEffect(() => {
    if (!favorites && !loading && data) {
      setCharacters(data.characters.results.map(item => ({ ...item, isFavorite: false })).sort(() => Math.random() - 0.5) as ICharacter[]);
    }
  }, [loading, searchKey, species]);

  // useEffect(() => {
  //   if (favorites) {
  //     setCharacters([]);
  //   }
  // }, [favorites]);

  return (
    <div className="flex flex-col w-screen min-h-screen justify-start items-center">
      <Header />
      <div className="flex flex-row w-full justify-center items-center">
        <Switch
          checked={favorites}
          onChange={setFavorites}
          checkedHandleIcon={<div className="flex h-full justify-center items-center"><Heart color="#ed3bb4" weight='fill' size={40} /></div>}
          uncheckedHandleIcon={<div className="flex h-full justify-center items-center"><Heart color="#ed3bb4" weight='regular' size={40} /></div>}
          onColor="#ed3bb4"
          offColor="#ed3bb4"
          checkedIcon={<span className="flex w-full h-full justify-center items-center font-bold text-gray-900">Favorites</span>}
          uncheckedIcon={<span className="flex w-full h-full justify-center items-center font-bold text-gray-900">All</span>}
          height={64}
          width={160}
        />
        <DefaultInput
          placeholder="Encontre seu personagem..."
          onChange={({ currentTarget }) => setSearchKey(currentTarget.value)}
        />
        <Switch
          checked={species}
          onChange={setSpecies}
          checkedHandleIcon={<img src={logo} className="h-full" />}
          uncheckedHandleIcon={<img src={logo} className="h-full" />}
          onColor="#f9f9f9"
          offColor="#f9f9f9"
          checkedIcon={<span className="flex w-full h-full justify-between items-center px-4 font-bold text-gray-900">Aliens</span>}
          uncheckedIcon={<span className="flex w-full h-full justify-between items-center px-4 font-bold text-gray-900">Humans</span>}
          height={64}
          width={160}
        />
      </div>
      <div className="flex flex-wrap justify-center h-auto items-center">
        {loading ?
          <Loading />
          :
          filteredCharacters?.length === 0 ?
            <h1>{`${favorites ? 'Você não favoritou nenhum personagem.' : 'Não há nenhum personagem com esse nome.'}`}</h1>
            :
            filteredCharacters?.map((item) => (
              <Character
                key={item.id}
                onClick={() => handleFavorite(item)}
                data={item}
              />
            ))
        }
      </div>
    </div >
  );
}
