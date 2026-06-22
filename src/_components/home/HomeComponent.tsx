'use client';
import { useState } from 'react';

import { SearchHistory } from '@/_classes/SearchHistory';
import HistorySection from '@/_components/home/HistorySection';
import SearchInput from '@/_components/home/SearchInput';

export default function HomeComponent() {
  const [searchHistories, setSearchHistory] = useState<SearchHistory[]>([]);

  function handleAddHistory(newHistory: SearchHistory) {
    setSearchHistory((v) => [newHistory, ...v]);
  }

  return (
    <>
      <SearchInput handleAddHistory={handleAddHistory} />
      <HistorySection searchHistories={searchHistories} />
    </>
  );
}
