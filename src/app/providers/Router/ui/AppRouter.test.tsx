import { renderWithProviders } from "@/shared/lib/tests";
import { AppRouter } from "./AppRouter";
import { getRoute } from "@/shared/constants";
import { UserRole } from "@/entities/User";

describe("app/router/AppRouter", () => {
	test("should render a page", async () => {
		const { findByTestId } = renderWithProviders(<AppRouter />, { route: getRoute.about() });

		// for lazy loading components we need to wait for the component to be rendered
		setTimeout(async () => {
			const page = await findByTestId("AboutPage");
			expect(page).toBeInTheDocument();
		}, 0);
	});

	test("should render the 404 page", async () => {
		const { findByTestId } = renderWithProviders(<AppRouter />, { route: "/unexpected-route" });

		setTimeout(async () => {
			const page = await findByTestId("NotFoundPage");
			expect(page).toBeInTheDocument();
		}, 0);
	});

	test("should redirect to main page if user is not authorized", async () => {
		const { findByTestId } = renderWithProviders(<AppRouter />, { route: getRoute.profile("1") });

		setTimeout(async () => {
			const page = await findByTestId("MainPage");
			expect(page).toBeInTheDocument();
		}, 0);
	});

	test("should render private page if user is authorized", async () => {
		const { findByTestId } = renderWithProviders(<AppRouter />, {
			route: getRoute.profile("1"),
			initialState: { user: { _mounted: true, authData: { id: "1" } } },
		});

		setTimeout(async () => {
			const page = await findByTestId("ProfilePage");
			expect(page).toBeInTheDocument();
		}, 0);
	});

	test("should render forbidden page if user has no role", async () => {
		const { findByTestId } = renderWithProviders(<AppRouter />, {
			route: getRoute.adminPanel(),
			initialState: { user: { _mounted: true, authData: { id: "1" } } },
		});

		setTimeout(async () => {
			const page = await findByTestId("ForbiddenPage");
			expect(page).toBeInTheDocument();
		}, 0);
	});

	test("should render admin page if user has admin role", async () => {
		const { findByTestId } = renderWithProviders(<AppRouter />, {
			route: getRoute.adminPanel(),
			initialState: { user: { _mounted: true, authData: { roles: [UserRole.ADMIN] } } },
		});

		setTimeout(async () => {
			const page = await findByTestId("AdminPanelPage");
			expect(page).toBeInTheDocument();
		}, 0);
	});
});
