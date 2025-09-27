
import Layout from "@/components/layout/Layout"
import AboutUs from "@/components/pages/aboutUs"
export default function Home() {

	return (
		<>
			<Layout breadcrumbTitle="About Company" mainCls="padding-0">
				<AboutUs />
			</Layout>
		</>
	)
}