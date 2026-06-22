import { AddressDef } from '@/_interfaces/AddressDef';
import { HTTPResult } from '@/_interfaces/HTTPResult';

const zipCloudApiBaseURL = 'https://zipcloud.ibsnet.co.jp/api/search';

export const zipCloudApi = {
  async search(zipcode: string): Promise<HTTPResult<AddressDef[]>> {
    try {
      const url = new URL(zipCloudApiBaseURL);
      url.searchParams.set('zipcode', zipcode);

      const response = await fetch(url.toString());
      if (!response.ok) {
        let message: string = '';
        try {
          const errResponse: HTTPResult<null> = await response.json();
          if (errResponse.message !== null) {
            message = errResponse.message;
          }
        } catch {
          message = await response.text();
        }

        return { results: null, status: response.status, message };
      }

      // 400も200でもステータスコードは200
      const data: HTTPResult<AddressDef[]> = await response.json();
      if (data.status !== 200) {
        return { results: null, status: data.status, message: data.message };
      }

      // 例:111-1111  の郵便番号は存在していないでもケースはエラーではない
      if (data.results === null) {
        return { results: [], status: data.status, message: null };
      }

      return { results: data.results, status: data.status, message: null };
    } catch (e) {
      const error = e as Error;
      return { results: null, status: 200, message: error.message };
    }
  },
};
