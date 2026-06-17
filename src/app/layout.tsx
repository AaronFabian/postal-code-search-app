import type { Metadata } from 'next';
import { Noto_Sans_JP } from 'next/font/google';
import '@/_styles/globals.scss';

const notoSansJP = Noto_Sans_JP({
	variable: '--font-noto-sans',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: '住所検索',
	description: '住所検索のWEBアプリケーション',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ja" className={`${notoSansJP.variable} ${notoSansJP.className}`}>
			<body>{children}</body>
		</html>
	);
}
