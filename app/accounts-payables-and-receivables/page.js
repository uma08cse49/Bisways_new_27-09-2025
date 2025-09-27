
import Layout from "@/components/layout/Layout"
import AccountsPayablesandReceivables from "@/components/pages/AccountsPayablesandReceivables"
export default function Home() {

	return (
		<>
			<Layout breadcrumbTitle="Accounts Payables and Receivables" mainCls="tf-spacing-10">
				<AccountsPayablesandReceivables />
			</Layout>
		</>
	)
}