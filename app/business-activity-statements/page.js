
import Layout from "@/components/layout/Layout"
import BusinessActivityStatements from "@/components/pages/BusinessActivityStatements"
export default function Home() {

	return (
		<>
			<Layout breadcrumbTitle="Business Activity Statements" mainCls="tf-spacing-10">
				<BusinessActivityStatements />
			</Layout>
		</>
	)
}