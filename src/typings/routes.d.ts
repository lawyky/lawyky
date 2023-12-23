import "react-router-dom";
declare module "react-router-dom" {
	interface MetaProps {
		keepAlive?: boolean;
		requiresAuth?: boolean;
		title: string;
		key?: string;
	}
	interface IndexRouteObject {
		meta?: MetaProps;
	}
	interface NonIndexRouteObject {
		meta?: MetaProps;
	}
}
