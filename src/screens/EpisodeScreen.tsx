/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useRef, useState} from 'react';
import {ScrollView, View, Text} from 'react-native';

import {IEpisode, Result} from '../interfaces/episode.interface';
import ButtonPagination from '../components/ButtonPagination';
import EpisodeCard from '../components/cards/EpisodeCard';
import SearchInput from '../components/SearchInput';
import styles from '../constants/styles';

const EpisodeScreen = () => {
  const initialState = 'http://rickandmortyapi.com/api/episode';

  const ref = useRef<NodeJS.Timeout>();
  const [page, setPage] = useState<string>(initialState);
  const [episodes, setEpisodes] = useState<IEpisode>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [search, setSearch] = useState<string>('');

  /* PETICION GET DE EPISODIOS */
  const getEpisodes = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(page);
      const data = await response.json();
      setEpisodes(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  /*  PETICION GET DE BUSQUEDA DE EPISODIO */
  const getSearchResult = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/episode/?episode=${search}`,
      );
      const data = await response.json();
      setEpisodes(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getEpisodes();
  }, [page]);

  useEffect(() => {
    ref.current && clearTimeout(ref.current);
    ref.current = setTimeout(() => {
      if (search.length > 0) {
        getSearchResult();
      } else {
        setPage(initialState);
        getEpisodes();
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
          url={episodes?.info?.prev}
          setPage={setPage}
        />

        {/*  BOTON DE PAGINA SIGUIENTE */}
        <ButtonPagination
          icon={'chevron-forward-outline'}
          initialState={initialState}
          url={episodes?.info?.next}
          setPage={setPage}
        />
      </View>

      {/* COPONENTE DE BUSQUEDA DE EPISODIO */}
      <SearchInput placeholder={'Buscar Por Episodio'} setSearch={setSearch} />

      {/* LISTA DE EPISODIOS */}
      <ScrollView>
        {episodes?.results ? (
          episodes.results.map((episode: Result, index: number) => (
            <EpisodeCard key={index} {...episode} />
          ))
        ) : (
          <Text>{isLoading ? 'Cargando...' : 'No hay resultados'}</Text>
        )}
      </ScrollView>
    </View>
  );
};

export default EpisodeScreen;
