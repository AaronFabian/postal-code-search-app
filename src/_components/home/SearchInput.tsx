'use client';
import { MouseEvent, useRef, useState } from 'react';

import { Address } from '@/_classes/Address';
import { SearchHistory } from '@/_classes/SearchHistory';
import SearchResultSection from '@/_components/home/SearchResultSection';
import { zipCloudApi } from '@/_services/zipCloudApi';

export default function SearchInput({
  handleAddHistory,
}: {
  handleAddHistory: (s: SearchHistory) => void;
}) {
  const postalInpRef = useRef<HTMLInputElement | null>(null);
  const [isFetching, setIsFetching] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [searchResults, setSearchResults] = useState<Address[]>([]);

  async function onClickSearchBtn(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    if (isFetching) return;
    if (postalInpRef.current === null) throw new Error('Application crashed');

    // Get user zip input
    const userInput = postalInpRef.current.value;

    // Invalid characters
    if (!/^[0-9-]+$/.test(userInput)) {
      setErrorMessage(
        '郵便番号は半角数字のみまたは半角数字とハイフンのみで入力してください。'
      );
      setIsFetching(false);
      setSearchResults([]);
      return;
    }

    // Not Postal code
    if (!/^(\d{7}|\d{3}-\d{4})$/.test(userInput)) {
      setErrorMessage(
        '郵便番号は半角数字でハイフンありの8桁かハイフンなしの7桁で入力してください。'
      );
      setIsFetching(false);
      setSearchResults([]);
      return;
    }

    try {
      setIsFetching(true);
      const result = await zipCloudApi.search(userInput);
      if (result.message !== null) {
        setErrorMessage(result.message);
        setSearchResults([]);
      } else {
        setErrorMessage('');
        setSearchResults(result.results!);

        // Add new history
        handleAddHistory(new SearchHistory(userInput, result.results!));
      }
    } catch (e) {
      const error = e as Error;
      setErrorMessage(error.message);
    } finally {
      setIsFetching(false);
    }
  }

  return (
    <>
      <section className="search-section">
        <input
          type="text"
          className="search-input"
          placeholder="111-1111"
          ref={postalInpRef}
        />
        <button
          type="button"
          className="search-button"
          onClick={onClickSearchBtn}
          disabled={isFetching}
        >
          検索
        </button>
      </section>
      <p className="error-message">{errorMessage}</p>

      <SearchResultSection addresses={searchResults} />
    </>
  );
}
