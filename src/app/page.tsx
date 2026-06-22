import '@/app/page.scss';
import HomeComponent from '@/_components/home/HomeComponent';

export default function Home() {
  return (
    <main className="container">
      <h1 className="title">住所検索</h1>
      <section className="description-section">
        <p className="description">郵便番号を入力して住所を検索できます。</p>
        <p className="description">
          郵便番号は八イフン「-」有無どちらでも検索可能です。
        </p>
        <p className="description">
          ( 000-0000 , 0000000 の形式で入力してください。)
        </p>
      </section>

      <HomeComponent />
    </main>
  );
}
