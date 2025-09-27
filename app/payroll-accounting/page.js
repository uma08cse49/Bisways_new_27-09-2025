
import Layout from "@/components/layout/Layout"
import PayrollAccounting from "@/components/pages/PayrollAccounting"
export default function Home() {

	return (
		<>
			<Layout breadcrumbTitle="Payroll Accounting" mainCls="tf-spacing-10">
				<PayrollAccounting />
			</Layout>
		</>
	)
}