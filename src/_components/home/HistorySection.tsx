import { SearchHistory } from '@/_classes/SearchHistory';
import HistoryGrid from '@/_components/home/HistoryGrid';

export default function HistorySection({
  searchHistories,
}: {
  searchHistories: SearchHistory[];
}) {
  return (
    <div className="history-section">
      <h2 className="history-title">検索履歴</h2>
      <HistoryGrid searchHistories={searchHistories} />
    </div>
  );
}
