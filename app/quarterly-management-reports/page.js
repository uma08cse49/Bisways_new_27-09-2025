
import Layout from "@/components/layout/Layout"
import QuarterlyManagementReports from "@/components/pages/QuarterlyManagementReports"
export default function Home() {

	return (
		<>
			<Layout breadcrumbTitle="Quarterly Management Reports" mainCls="tf-spacing-10">
				<QuarterlyManagementReports />
			</Layout>
		</>
	)
}