/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useRef, useState} from 'react';
import {ScrollView, View, Text} from 'react-native';

import {ICharecters, Result} from '../interfaces/character.interface';
import CharacterCard from '../components/cards/CharacterCard';
import ButtonPagination from '../components/ButtonPagination';
import SearchInput from '../components/SearchInput';
import styles from '../constants/styles';

const CharacterScreen = () => {
  const initialState = 'http://rickandmortyapi.com/api/character';

  const ref = useRef<NodeJS.Timeout>();
  const [page, setPage] = useState<string>(initialState);
  const [characters, setCharacters] = useState<ICharecters>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [search, setSearch] = useState<string>('');

  /* PETICION GET DE PERSONAJES */
  const getCharacters = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(page);
      const data = await response.json();
      setCharacters(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  /*  PETICION GET DE BUSQUEDA DE PERSONAJE */
  const getSearchResult = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/?name=${search}`,
      );
      const data = await response.json();
      setCharacters(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getCharacters();
  }, [page]);

  useEffect(() => {
    ref.current && clearTimeout(ref.current);
    ref.current = setTimeout(() => {
      if (search.length > 0) {
        getSearchResult();
      } else {
        setPage(initialState);
        getCharacters();
      }
    }, 1000);
  }, [search]);

  return (
    <View style={{flex: 1, marginHorizontal: 20}}>
      {/*  BOTONES DE PAGINACION */}
      <View style={styles.rowContainer}>
        {/*  BOTON DE PAGINA ATRAS */}
        <ButtonPagination
          icon={'chevron-back-outline'}
          initialState={initialState}
          url={characters?.info?.prev}
          setPage={setPage}
        />

        {/*  BOTON DE PAGINA SIGUIENTE */}
        <ButtonPagination
          icon={'chevron-forward-outline'}
          initialState={initialState}
          url={characters?.info?.next}
          setPage={setPage}
        />
      </View>

      {/* COPONENTE DE BUSQUEDA DE PERSONAJE */}
      <SearchInput placeholder={'Buscar Por Nombre'} setSearch={setSearch} />

      {/* LISTA DE PERSONAJES */}
      <ScrollView>
        {characters?.results ? (
          characters.results.map((character: Result, index) => (
            <CharacterCard key={index} {...character} />
          ))
        ) : (
          <Text>{isLoading ? 'Cargando...' : 'No hay resultados'}</Text>
        )}
      </ScrollView>
    </View>
  );
};

export default CharacterScreen;
