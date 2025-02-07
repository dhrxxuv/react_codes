import {fireEvent, render ,screen} from "@testing-library/react"
import React, { act } from "react"
import { MemoryRouter } from "react-router"
import { ThemeProvider } from "../../utils/useContextTheme"
import RestaurantMenu from "../RestaurantMenu"
import appStore from "../../Redux/appStore";
import Mock_data from "../mock/mockresMenu.json"
import { Provider } from "react-redux"
global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json: () => Promise.resolve(Mock_data),
    })
})

it("should load restaurant menu component", async()=>{
    await act(async()=>render(
    <MemoryRouter>
        <Provider store={appStore}>
            <ThemeProvider>
                <RestaurantMenu/>
            </ThemeProvider>
        </Provider>
    </MemoryRouter>))

    const accordianHeader = screen.getByText("Recommended (20)")
    fireEvent.click(accordianHeader)

    expect(screen.getAllByTestId("itemsID").length).toBe(20)

    const button = screen.getByRole('button', { name: /Add Margherita to cart/i });
expect(button).toBeInTheDocument();

})