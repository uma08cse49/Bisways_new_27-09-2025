
import Layout from "@/components/layout/Layout"
import BookKeepingAndCreditControl from "@/components/pages/BookKeepingAndCreditControl"
export default function Home() {

	return (
		<>
			<Layout breadcrumbTitle="Book Keeping And Credit Control" mainCls="tf-spacing-10">
				<BookKeepingAndCreditControl />
			</Layout>
		</>
	)
}