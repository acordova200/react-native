/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useRef, useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {ILocation, Result} from '../interfaces/location.interface';
import ButtonPagination from '../components/ButtonPagination';
import SearchInput from '../components/SearchInput';
import styles from '../constants/styles';
import LocationCard from '../components/cards/LocationCard';

const LocationScreen = () => {
  const initialState = 'http://rickandmortyapi.com/api/location';

  const ref = useRef<NodeJS.Timeout>();
  const [page, setPage] = useState<string>(initialState);
  const [locations, setLocations] = useState<ILocation>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [search, setSearch] = useState<string>('');

  /* PETICION GET DE UBICACIONES */
  const getLocations = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(page);
      const data = await response.json();
      setLocations(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  /*  PETICION GET DE BUSQUEDA DE UBICACION */
  const getSearchResult = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/location/?name=${search}`,
      );
      const data = await response.json();
      setLocations(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getLocations();
  }, [page]);

  useEffect(() => {
    ref.current && clearTimeout(ref.current);
    ref.current = setTimeout(() => {
      if (search.length > 0) {
        getSearchResult();
      } else {
        setPage(initialState);
        getLocations();
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
          url={locations?.info?.prev}
          setPage={setPage}
        />

        {/*  BOTON DE PAGINA SIGUIENTE */}
        <ButtonPagination
          icon={'chevron-forward-outline'}
          initialState={initialState}
          url={locations?.info?.next}
          setPage={setPage}
        />
      </View>

      {/* COPONENTE DE BUSQUEDA DE UBICACION */}
      <SearchInput placeholder={'Buscar Por Nombre'} setSearch={setSearch} />

      {/* LISTA DE UBICACIONES */}
      <ScrollView>
        {locations?.results ? (
          locations.results.map((location: Result, index) => (
            <LocationCard key={index} {...location} />
          ))
        ) : (
          <Text>{isLoading ? 'Cargando...' : 'No hay resultados'}</Text>
        )}
      </ScrollView>
    </View>
  );
};

export default LocationScreen;
