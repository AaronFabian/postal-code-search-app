import React from 'react';

import { Address } from '@/_classes/Address';

export default function SearchResultSection({
  addresses,
}: {
  addresses: Address[];
}) {
  if (addresses.length <= 0) return null;

  const zipcode = addresses.at(0)!.zipcode;

  return (
    <section className="result-section">
      <div className="result-card">
        <div className="postal-row">
          <span className="label">郵便番号:</span>
          <span className="value">{zipcode}</span>
        </div>
        <hr className="divider" />
        {addresses.map((address, index) => (
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
            {index !== addresses.length - 1 && <hr className="divider" />}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
