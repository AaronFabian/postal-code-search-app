import { SearchHistory } from '@/_classes/SearchHistory';
import HistoryGrid from '@/_components/home/HistoryGrid';
import { dummy_history } from '@/_services/dummy_data';

export default function HistorySection({ searchHistories }: { searchHistories: SearchHistory[] }) {
	return (
		<div className="history-section">
			<h2 className="history-title">検索履歴</h2>
			<HistoryGrid searchHistories={dummy_history} />
		</div>
	);
}
