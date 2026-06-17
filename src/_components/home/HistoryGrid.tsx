import { SearchHistory } from '@/_classes/SearchHistory';
import React from 'react';

export default function HistoryGrid({ searchHistories }: { searchHistories: SearchHistory[] }) {
	return (
		<div className="history-grid">
			{searchHistories.map(history => (
				<div className="history-card" key={crypto.randomUUID()}>
					<div className="postal-row">郵便番号: {history.zipcode}</div>
					<hr className="divider" />
					{history.addresses.map((address, index) => (
						<React.Fragment key={index}>
							<div className="info-row">
								<span className="label">住所:</span>
								<span className="value">
									{address.address1} {address.address2} {address.address3}
								</span>
							</div>
							<div className="info-row">
								<span className="label">カナ:</span>
								<span className="value">
									{address.kana1} {address.kana2} {address.kana3}
								</span>
							</div>
							{index !== history.addresses.length - 1 && <hr className="divider" />}
						</React.Fragment>
					))}
				</div>
			))}
		</div>
	);
}
