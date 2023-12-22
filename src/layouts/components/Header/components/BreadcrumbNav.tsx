import { Breadcrumb } from "antd";
import { useLocation } from "react-router-dom";
import { HOME_URL } from "@/config/config";
import { RootState, useSelector } from "@/redux";

const BreadcrumbNav = () => {
	const { pathname } = useLocation();
	const breadcrumbState = useSelector((state: RootState) => state.breadcrumb);
	const breadcrumbList = breadcrumbState.breadcrumbList[pathname] || [];
	const items = [];
	items.push({
		title: "首页",
		href: `#${HOME_URL}`
	});
	breadcrumbList.forEach((element: string) => {
		items.push({
			title: element !== "首页" ? element : null
		});
	});
	return <Breadcrumb items={items}></Breadcrumb>;
};

export default BreadcrumbNav;
